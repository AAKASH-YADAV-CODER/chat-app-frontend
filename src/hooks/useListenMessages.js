import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useSelector, useDispatch } from "react-redux";
import notificationSound from "../assets/sounds/notification.mp3";
import { setMessage } from "../store/chat-slice";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.chat);
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      // newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      dispatch(setMessage([...messages, newMessage]));
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessage, messages]);
};
export default useListenMessages;
