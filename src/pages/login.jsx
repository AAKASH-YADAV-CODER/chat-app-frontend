import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useSelector } from "react-redux";
import ThemeModel from "../components/skeletons/ThemeModel";
const Login = () => {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const { login } = useLogin();
    const { isLoading } = useSelector(store => store.ui);
    const submitHandler = async (e) => {
        e.preventDefault();
        await login(inputs);
    }
    return (
        <div className="flex justify-center items-center overflow-auto">
            <div className='w-1/3 flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-20'>
                    <div className="flex justify-center items-center gap-5">
                        <h1 className='text-3xl font-bold text-center text-black dark:text-white'>
                            Login
                            <span className='dark:text-cyan-400 text-blue-600'> ChatApp</span>
                        
                        </h1>
                        <div>
                            <ThemeModel />
                        </div>
                    </div>
                    
                    <form className="p-3 my-4 text-black dark:text-white" onSubmit={submitHandler}>
                        <div>
                            <label className='label p-2'>
                                <span className=''>Email</span>
                            </label>
                            <input type='text' placeholder='Enter Email' className='w-full input input-bordered h-10 dark:bg-gray-300 dark:text-black text-white bg-black'
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className='label'>
                                <span className=''>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='w-full input input-bordered h-10 dark:bg-slate-300 dark:text-black  text-white bg-black'
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            />
                        </div>
                        <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                            {"Don't"} have an account?
                        </Link>

                        <div className="flex justify-center items-center">
                            {
                                isLoading ? <span className="loading loading-spinner" /> : <button className={`btn btn-block btn-sm mt-2 dark:bg-slate-300 dark:text-black text-white bg-black`} disabled={isLoading}>Login</button>
                            }
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Login;
