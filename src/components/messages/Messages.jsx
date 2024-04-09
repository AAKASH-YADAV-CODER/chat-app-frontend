import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useListenMessages from "../../hooks/useListenMessages.js";
const Messages = () => {
	const lastMessageRef = useRef();
	const { isLoading } = useGetMessage();
	const { messages } = useSelector((store) => store.chat);
	useListenMessages();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
		}, 100)
	}, [messages]);
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!isLoading && messages.length>0 && messages.map((message) => (
				<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
			{isLoading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!isLoading && messages.length === 0 && (
				<p className='text-center text-black dark:text-white '>There's No Message Start Conversation 😃 </p>
			)}
		</div>
	);
};
export default Messages;