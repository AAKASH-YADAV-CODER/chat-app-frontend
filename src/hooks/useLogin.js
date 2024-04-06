import { useDispatch } from "react-redux";
import { setLoading } from "../store/ui-slice";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/authContext";
const useLogin = () => {
  const dispatch = useDispatch();
  const { setAuthUser } = useAuthContext();
  const login = async (inputs) => {
    const success = handleError(inputs);
    if (!success) {
      return;
    }
    dispatch(setLoading(true));
    try {
      const { data } = await axios.post("/api/v1/users/login", inputs);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat", JSON.stringify(data));
      setAuthUser(data);
      toast.success(data.message);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return { login };
};

export default useLogin;

const handleError = (inputs) => {
  if (!inputs) {
    toast.error("Please Enter all Fields");
    return false;
  }
  return true;
};
