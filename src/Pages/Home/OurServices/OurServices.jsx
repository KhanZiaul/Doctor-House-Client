import { useEffect, useState } from 'react';
import banner from '../../../assets/Images/Home/Banner.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(datas => setServices(datas))
    }, [])

    return (
        <div className='my-16'>
            <div className='flex flex-col lg:flex-row justify-center gap-10 w-[90%] lg:w-full mx-auto'>
                <div>
                    <img className='lg:h-[950px]' src={banner} alt="" />
                </div>
                <div className='space-y-4 w-full lg:w-[50%]'>
                    <h2 className='text-3xl font-bold'>Our Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <div>

                        <Tabs>
                            <TabList className='mb-10 flex flex-col lg:flex-row gap-10'>
                                {
                                    services?.map((service, index) => {
                                        return (
                                            <>
                                                <Tab key={index} className='btn btn-error text-white'>{service.name}</Tab>
                                            </>
                                        )
                                    })
                                }
                            </TabList>
                            {
                                services?.map((service, index) => {
                                    return (
                                        <>
                                            <TabPanel key={index}>
                                                <img className='h-[330px] w-[560px] rounded-md' src={service.image} alt="" />
                                                <h2 className='my-3 font-bold text-3xl text-justify'>{service.name}</h2>
                                                <h2>{service.description.slice(0,900)}.......</h2>
                                                <button className='border-2 border-red-400 font-semibold px-5 py-2 rounded-lg hover:text-white hover:bg-red-500 my-4'>More Details</button>
                                            </TabPanel>
                                        </>
                                    )
                                })
                            }

                        </Tabs>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;