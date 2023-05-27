import vector from '../../../assets/Images/Home/Vector.png'
import set from '../../../assets/Images/Home/set.png'
import './SharedBanner.css'

const SharedBanner = ({title,subTitle}) => {
    return (
        <div className="bg-image-two relative text-white">
            <div className='flex flex-col lg:flex-row items-center gap-10 w-[80%] mx-auto h-full'>
                <div className='space-y-5 absolute top-[45%]'>
                    <p className='text-center lg:text-left'>Home/{subTitle} Profile</p>
                    <h2 className='text-2xl lg:text-4xl text-center lg:text-left font-semibold'>
                        {title}
                    </h2>
                </div>
                <div>
                    <img className='w-40 absolute bottom-0 rotate-180 left-28' src={vector} alt="" />
                    <img className=' absolute top-[35%] w-48 right-10' src={set} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SharedBanner;