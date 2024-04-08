import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../store/chat-slice.jsx";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessage = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { selectConversation } = useSelector((store) => store.chat);

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/api/v1/message/${selectConversation._id}`
        );
        // const data = response.data;
        if (data.error) throw new Error(data.error);
        // console.log(data);
        dispatch(setMessage(data));
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectConversation?._id) {
      getMessage();
    }
  }, [selectConversation?._id, dispatch]);

  return { isLoading };
};

export default useGetMessage;
