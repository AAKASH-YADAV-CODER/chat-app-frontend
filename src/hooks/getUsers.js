import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const useUsers = () => {
  const [isLoading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/v1/getuser");
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { isLoading, conversation };
};

export default useUsers;
