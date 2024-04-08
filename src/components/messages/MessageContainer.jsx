import MessageInput from "./MessageInput";
import Messages from "./Messages.jsx";
import { useSelector,useDispatch } from 'react-redux';
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../context/authContext.jsx'
import { setSelectConversation } from "../../store/chat-slice.jsx";
import { useEffect } from "react";
const MessageContainer = () => {
	const { selectConversation } = useSelector(store => store.chat);
	const dispatch = useDispatch();
	useEffect(() => {
		//This is used to unmount it like cleaner function
		return () => dispatch(setSelectConversation(null));
	}, []);
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 pl-4 py-2 mb-2'>
						<span className='label-text text-white'>To:</span>{" "}
						<span className='text-white font-bold'>{selectConversation?.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;
const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full '>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p className="text-white">Welcome 👋 {authUser.fullName} ❄</p>
				<p className="text-white">Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};