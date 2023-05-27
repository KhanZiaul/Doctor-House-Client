import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/Home/logo.png'

const Footer = () => {
    return (
        <div className='mt-24 mb-2'>
            <footer className="footer p-10 bg-base-300 text-base-content font-semibold">
                <div>
                    <img src={logo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.</p>
                    <button className='btn btn-error text-white'>Appointment</button>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link className="link link-hover">About Us</Link>
                    <Link className="link link-hover">Service</Link>
                    <Link className="link link-hover">Doctors</Link>
                    <Link className="link link-hover">Departments</Link>
                    <Link className="link link-hover">Online Payment</Link>
                    <Link className="link link-hover">Contact Us</Link>
                    <Link className="link link-hover">My Account</Link>
                </div>
                <div>
                    <span className="footer-title">Doc House Services</span>
                    <Link className="link link-hover">Pediatric Clinic</Link>
                    <Link className="link link-hover">Diagnosis Clinic</Link>
                    <Link className="link link-hover">Cardiac Clinic</Link>
                    <Link className="link link-hover">Laboratory Analysis</Link>
                    <Link className="link link-hover">Gynecological Clinic</Link>
                    <Link className="link link-hover">Personal Counseling</Link>
                    <Link className="link link-hover">Dental Clinic</Link>
                </div>
                <div>
                    <span className="footer-title">Working Hours</span>
                    <Link className="link link-hover">Monday - 10 am to 7 pm</Link>
                    <Link className="link link-hover">Tuesday - 10 am to 7 pm</Link>
                    <Link className="link link-hover">Wednesday - 10 am to 7 pm</Link>
                    <Link className="link link-hover">Thursday - 10 am to 7 pm</Link>
                    <Link className="link link-hover">Friday - 10 am to 7 pm</Link>
                    <Link className="link link-hover">Saturday - 10 am to 7 pm</Link>
                    <Link className="link link-hover">Sunday - 10 am to 7 pm</Link>
                </div>
            </footer>
            <div>
                <footer className="footer justify-center items-center p-4  text-neutral-content">
                    <div className="items-center grid-flow-col">
                        <p className='text-slate-600'>Copyright © 2023 - All right reserved by Doc House Ltd</p>
                    </div>
                </footer>
            </div>
        </div>

    );
};

export default Footer;