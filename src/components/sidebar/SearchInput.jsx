import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useUsers from "../../hooks/useGetUsers";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSelectConversation } from "../../store/chat-slice.jsx";
import ThemeModel from "../skeletons/ThemeModel";

const SearchInput = () => {
	const [searchIn, setSearchIn] = useState('');
	const { conversation } = useUsers();
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (!searchIn) return;
		if (searchIn.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}
		const inputMatchUser = conversation.find((user) => user.fullName.toLowerCase().includes(searchIn.toLowerCase()));
		if (inputMatchUser) {
			dispatch(setSelectConversation(inputMatchUser));
			setSearchIn('');
		} else {
			toast.error("No Such User Exist!")
		}
	}
	return (
		<form className='flex items-center gap-2' onSubmit={submitHandler}>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full bg-black text-white dark:bg-slate-300 dark:text-black'
			value={searchIn}
			onChange={(e)=>setSearchIn(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
			<ThemeModel/>
		</form>
	);
};
export default SearchInput;
