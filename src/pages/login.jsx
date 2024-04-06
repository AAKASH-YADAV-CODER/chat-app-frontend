import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useSelector } from "react-redux";
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
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        Login
                        <span className='text-blue-500'> ChatApp</span>
                    </h1>

                    <form className="p-3 my-4" onSubmit={submitHandler}>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Email</span>
                            </label>
                            <input type='text' placeholder='Enter Email' className='w-full input input-bordered h-10'
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            />
                        </div>
                        <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                            {"Don't"} have an account?
                        </Link>

                        <div className="flex justify-center items-center">
                            {
                                isLoading ? <span className="loading loading-spinner" /> : <button className={`btn btn-block btn-sm mt-2`} disabled={isLoading}>Login</button>
                            }
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;
