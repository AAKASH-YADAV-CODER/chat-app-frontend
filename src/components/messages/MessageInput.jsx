import { useState,useEffect } from "react";
import { BsSend } from "react-icons/bs";
// import { useSelector} from "react-redux";

import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
	const [message, setMsg] = useState('');
	const { isLoading, sendMessage } = useSendMessage();
	// const { messages } = useSelector((store) => store.chat);
	
// 	useEffect(() => {
//     console.log(messages);
//   }, [messages]);

	const submitHandler = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMsg('');
		
	}
	return (
		<form className='px-4 my-3' onSubmit={submitHandler}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=>setMsg(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{isLoading?<span className="loading loading-spinner"/>: <BsSend />}
					{/* <BsSend /> */}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;
