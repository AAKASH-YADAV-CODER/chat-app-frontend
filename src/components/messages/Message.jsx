import { useSelector } from "react-redux";
import { extractTime } from "../../utilities/formatedTime.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";
const Message = ({message}) => {
	const { authUser } = useAuthContext();
	const { selectConversation }=useSelector(store=>store.chat)
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	// const shakeClass = message.shouldShake ? "shake" : "";
	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>{message.message}</div>
			<div className='chat-footer opacity-70 text-xs flex gap-1 items-center dark:text-white text-black'>{formattedTime}</div>
		</div>
	);
};
export default Message;
