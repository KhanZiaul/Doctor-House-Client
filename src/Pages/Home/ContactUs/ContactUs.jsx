import cellPhone from '../../../assets/Images/Home/phone.png'
import location from '../../../assets/Images/Home/location.png'

const ContactUs = () => {
    return (

        <div className=" p-5 bg-[#07332F] text-white w-[90%] mx-auto rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center space-y-4 w-full lg:w-[50%] lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Contact With Us</h1>
                    <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-6 h-6' src={cellPhone} alt="" />
                        <p>+88 01750 14 14 14</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img className='w-6 h-6' src={location} alt="" />
                        <p>Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="">
                    <div className="card-body">
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  type="text" placeholder="Name" className="input text-black input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input text-black input-bordered" />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number" placeholder="Mobile Number" className="input text-black input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Doctor Name</span>
                                </label>
                                <input type="text" placeholder="Doctor Name" className="input text-black input-bordered" />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="Date" className="input text-black input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="time" placeholder="Time" className="input text-black input-bordered" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <button className="btn btn-error text-white w-full">BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;