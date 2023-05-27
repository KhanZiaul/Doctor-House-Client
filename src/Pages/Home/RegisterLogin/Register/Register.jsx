import { Link } from 'react-router-dom';
import login from '../../../../assets/Images/Home/login.png'

const Register = () => {
    return (
        <div>
            <div className="bg-[#E6E6E6] mx-auto rounded-lg p-7">
                <div className="flex flex-col items-center lg:flex-row gap-10">
                    <div className="text-center w-full lg:w-[50%] lg:text-left bg-[#07332F] ">
                        <img className='w-full' src={login} alt="login" />
                    </div>
                    <div className=" w-full lg:w-[50%] bg-white p-8 rounded-lg">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold text-center my-5">Sign Up to Doc House</h1>
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered bg-slate-100" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Username</span>
                            </label>
                            <input type="text" placeholder="Enter your username" className="input input-bordered bg-slate-100" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered bg-slate-100" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered bg-slate-100" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Create Account</button>
                        </div>
                        <div className='my-4 text-center'>Already registered ? Go to <Link to='/login' className='text-red-400 font-semibold underline'>SIGN IN</Link> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;