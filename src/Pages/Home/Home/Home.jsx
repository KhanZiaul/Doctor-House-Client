import './Home.css'
import group from '../../../assets/Images/Home/Group.png'
import vector from '../../../assets/Images/Home/Vector.png'
import set from '../../../assets/Images/Home/set.png'
import set2 from '../../../assets/Images/Home/set-2.png'

const Home = () => {
    return (
        <div className="bg-image relative text-white">
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 w-[80%] mx-auto h-full'>
                <div className='space-y-5'>
                    <h2 className='text-2xl lg:text-5xl text-center lg:text-left font-semibold'>
                        Your Best Medical <br />
                        Help Center
                    </h2>
                    <p className='text-center lg:text-left'>Your Path to Optimal Health: Expert Care, Personalized  <br /> Solutions, and a Lifetime of Wellness</p>
                    <button className='btn btn-error text-white mx-auto block lg:mx-0'>All Services</button>
                </div>
                <div>
                    <img className='w-[80%]' src={group} alt="" />
                    <img className='w-40 absolute top-0 left-0' src={vector} alt="" />
                    <img className=' absolute top-[20%] w-48 left-[35%]' src={set} alt="" />
                    <img className=' absolute top-[60%] left-[35%]' src={set2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;