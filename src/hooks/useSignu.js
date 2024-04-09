import { useDispatch } from "react-redux";
import { setLoading } from "../store/ui-slice.jsx";
import toast from "react-hot-toast";
import axios from "axios";
// import { useAuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
const useSignup = () => {
  const dispatch = useDispatch();
  // const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const signup = async ({
    fullName,
    userName,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    dispatch(setLoading(true));
    try {
      const { data } = await axios.post("/api/v1/users/signup", {
        fullName,
        userName,
        email,
        password,
        confirmPassword,
        gender,
      });
      if (data.error) {
        throw new Error(data.error);
      }
      // localStorage.setItem("chat", JSON.stringify(data));
      // setAuthUser(data);
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return { signup };
};

export default useSignup;
function handleInputErrors({
  fullName,
  email,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (
    !fullName ||
    !userName ||
    !password ||
    !confirmPassword ||
    !gender ||
    !email
  ) {
    toast.error("Please fill in all fields ");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match ❌");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
