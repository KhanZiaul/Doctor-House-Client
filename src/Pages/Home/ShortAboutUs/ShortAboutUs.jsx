import clock from '../../../assets/Images/Home/clock.png'
import location from '../../../assets/Images/Home/location.png'
import phone from '../../../assets/Images/Home/phone.png'

const ShortAboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between w-[90%] mx-auto my-16 gap-5 text-white'>
            <div className='flex gap-3 justify-center py-3 rounded-lg items-center px-6 bg-[#07332F]'>
                <img src={clock} alt="" />
                <div>
                    <h2 className='font-bold text-xl mb-2'>Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className='flex gap-3 justify-center py-3 rounded-lg items-center px-6 bg-[#ffa27a]'>
                <img src={location} alt="" />
                <div>
                    <h2 className='font-bold text-xl mb-2'>Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh <br /> Everyday</p>
                </div>
            </div>
            <div className='flex gap-3 justify-center py-3 rounded-lg items-center px-6 bg-[#07332F]'>
                <img src={phone} alt="" />
                <div>
                    <h2 className='font-bold text-xl mb-2'>Contact Us</h2>
                    <p>+88 01750 00 00 00
                        <br />+88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default ShortAboutUs;