import Conversation from "./Conversation";
import useUsers from "../../hooks/useGetUsers.js";
import { getRandomEmoji } from "../../utilities/randomEmoji.jsx";
const Conversations = () => {
	const { isLoading, conversation } = useUsers();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{
				isLoading?<div className="flex justify-center items-center"><span className="loading loading-spinner"/> </div> :
				conversation.map((conversa,i) => (
					<Conversation key={conversa._id}
						conversation={conversa}
						emoji={getRandomEmoji()}
						lastIdx={i===conversation.length-1}
					/>
				))
			}
		</div>
	);
};
export default Conversations;