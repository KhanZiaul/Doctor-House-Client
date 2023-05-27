import login from '../../../../assets/Images/Home/login.png'

const Login = () => {
    return (
        <div>
            <div className="bg-[#E6E6E6] w-[90%] mx-auto my-12 rounded-lg p-7">
                <div className="flex flex-col items-center lg:flex-row gap-10">
                    <div className="text-center w-[50%] lg:text-left bg-[#07332F] ">
                        <img className='w-full' src={login} alt="login" />
                    </div>
                    <div className="w-[50%] bg-white p-8 rounded-lg">
                        <div className="form-control">
                            <h1 className="text-4xl font-semibold text-center my-5">Sign in to Doc House</h1>
                            <label className="label">
                                <span className="label-text font-bold">Username or Email Address</span>
                            </label>
                            <input type="text" placeholder="Enter your username or email address" className="input input-bordered bg-slate-100" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-red-500">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered bg-slate-100" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;