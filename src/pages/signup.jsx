import { useState } from "react";
import useSignup from "../hooks/useSignu.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUp = () => {
    const [input, setInput] = useState({ fullName: '', email: '', userName: '', password: '', confirmPassword: '', gender: '' });
    const { isLoading } = useSelector(store => store.ui);

    const checkboxHandler = (gender) => {
        setInput({ ...input, gender });
    }
    const { signup } = useSignup();
    const submitHandler = async(e) => {
        e.preventDefault();
        await signup(input);
        // console.log(input);
        setInput({ fullName: '', email: '', userName: '', password: '', confirmPassword: '', gender: '' })
    }
    return (
        <div className="flex items-center justify-center  overflow-auto">
            <div className='w-1/3 flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-10'>
                    <h1 className='text-3xl font-semibold text-center text-white'>
                        Sign Up <span className='text-blue-500'> ChatApp</span>
                    </h1>

                    <form className="p-3 my-4" onSubmit={submitHandler}>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Full Name</span>
                            </label>
                            <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered  h-10'
                            value={input.fullName}
                            onChange={(e)=>setInput({...input,fullName:e.target.value})}
                            />
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>email</span>
                            </label>
                            <input type='text' placeholder='Enter your email' className='w-full input input-bordered  h-10'
                            value={input.email}
                            onChange={(e)=>setInput({...input,email:e.target.value})}/>
                        </div>

                        <div>
                            <label className='label p-2 '>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type='text' placeholder='Enter User Name' className='w-full input input-bordered h-10'
                            value={input.userName}
                            onChange={(e)=>setInput({...input,userName:e.target.value})}
                            />
                        </div>

                        <div>
                            <label className='label'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='w-full input input-bordered h-10'
                                value={input.password}
                            onChange={(e)=>setInput({...input,password:e.target.value})}
                            />
                        </div>

                        <div>
                            <label className='label'>
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='w-full input input-bordered h-10'
                                value={input.confirmPassword}
                                onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
                            />
                        </div>

                        <GenderCheckbox onCheckboxChange={checkboxHandler} selectedGender={input.gender}/>

                        <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
                            Already have an account?
                        </Link>

                        <div className="flex justify-center items-center">
                            {
                                isLoading ? <span className="loading loading-spinner"/> :<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={isLoading}>Sign Up</button>
                            }
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default SignUp;

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};