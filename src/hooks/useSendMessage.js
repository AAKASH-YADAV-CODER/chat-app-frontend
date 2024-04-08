import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../store/chat-slice.jsx";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const dispatch = useDispatch();
  const { selectConversation } = useSelector((store) => store.chat);
  const { messages } = useSelector((store) => store.chat);
  const [isLoading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/v1/message/send/${selectConversation._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.error) throw new Error(res.data.error);
      console.log(res.data);
      dispatch(setMessage([...messages, res.data]));
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, sendMessage };
};

export default useSendMessage;
