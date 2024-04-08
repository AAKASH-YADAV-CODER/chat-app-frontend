import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";
import { useSelector } from "react-redux";
const LogoutButton = () => {
	const {logout } = useLogout();
	const { isLoading } = useSelector(store => store.ui);
	return (
			<div className='mt-auto'>
				{!isLoading ? (
					<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
				) : (
					<span className='loading loading-spinner'></span>
				)}
				{/* <BiLogOut className='w-6 h-6 text-white cursor-pointer' /> */}
			</div>
	)
};
export default LogoutButton;
