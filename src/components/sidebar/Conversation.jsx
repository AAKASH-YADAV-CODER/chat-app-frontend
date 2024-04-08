import { useSelector, useDispatch } from 'react-redux';
import { setSelectConversation } from '../../store/chat-slice';
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, emoji, lastIdx }) => {
	const dispatch = useDispatch();
	const { selectConversation } = useSelector(store => store.chat);
	const isSelected = selectConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div className={`${isSelected?'bg-sky-500':''} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer text-black dark:text-white`}
			onClick={()=>dispatch(setSelectConversation(conversation))}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-black dark:text-white'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;
