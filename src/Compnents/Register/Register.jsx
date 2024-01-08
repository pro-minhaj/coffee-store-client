import React, { useContext } from 'react';
import logo from '../../assets/Logo/logo1 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/Auth_Context';
import toast from 'react-hot-toast';

const Register = () => {
    const { createAccount } = useContext(userContext);
    const navigate = useNavigate();

    // Toast 
    const success = success => toast.success(success);
    const error = error => toast.error(error);

    // Handle Register
    const handleRegister = event => {
        const loading = toast.loading('loading...');
        () => loading;
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // Auth Create Account 
        createAccount(email, password)
            .then(() => {
                toast.dismiss(loading)
                success('Register SuccessFul!')
                navigate('/')
            })
            .catch(e => {
                toast.dismiss(loading)
                error(e.message.substr(10))
            })
    }

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign Up to continue</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset sm:text-md sm:leading-6 px-2" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset sm:text-md sm:leading-6 px-2" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset sm:text-md sm:leading-6 px-2" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign Up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        Already a member?
                        <Link to="/login" className="font-semibold leading-6 text-red-500 hover:text-red-400"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;