import banner from '../../../assets/Images/Home/Banner.png'

const OurServices = () => {
    return (
        <div className='my-16'>
            <div className='flex flex-col lg:flex-row justify-center gap-10 w-[90%] lg:w-full mx-auto'>
                <div>
                    <img className='lg:h-[900px]' src={banner} alt="" />
                </div>
                <div className='space-y-4 w-full lg:w-[50%]'>
                    <h2 className='text-3xl font-bold'>Our Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;