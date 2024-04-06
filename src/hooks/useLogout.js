import { setLoading } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/authContext.jsx";
const useLogout = () => {
  const dispatch = useDispatch();
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios.post("/api/v1/users/logout");
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat");
      setAuthUser(null);
      toast.success(data.message);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return { logout };
};

export default useLogout;
