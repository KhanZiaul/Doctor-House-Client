import { Link } from "react-router-dom";
import logo from '../../../assets/Images/Home/logo.png'

const Navigation = () => {

    const liList = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Appointment</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>

    return (
        <div className="w-full lg:w-[83%] mx-auto relative">
            <div className="navbar text-white z-20 opacity-75 absolute top-0 lg:top-5">
                <div className="navbar-start">

                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                liList
                            }
                        </ul>
                    </div>
                    <Link className="w-40 lg:w-60 btn btn-ghost normal-case  text-2xl text-white"> <img src={logo} alt="" /> </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            liList
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;