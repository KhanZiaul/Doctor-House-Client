import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const DoctorProfile = () => {
    const doctor = useLoaderData()
    const { doctor_name, image, about_me, specialist_in, ratings, location, fee, business_hour, education, works_and_experience, awards, specializations, services, reviews } = doctor
    return (
        <div className="my-16 border-2 p-20 w-[90%] mx-auto rounded-xl">
            <Tabs>
                <TabList className='mb-10 flex flex-col lg:flex-row gap-10 justify-between'>
                    <Tab className='btn btn-error text-white'>Overview</Tab>
                    <Tab className='btn btn-error text-white'>Locations</Tab>
                    <Tab className='btn btn-error text-white'>Reviews</Tab>
                    <Tab className='btn btn-error text-white'>Business Hours</Tab>
                </TabList>

                <TabPanel>
                    <p>{about_me}</p>
                    <div>
                        <div className="space-y-4">
                            <h2 className="mt-3 mb-6 font-bold text-xl">Education</h2>
                            <div>
                                {
                                    education.map((e, index) => {
                                        return (
                                            <div key={index}>
                                                <h2 className="font-bold">. {e.institute}</h2>
                                                <p>{e.subject}</p>
                                                <p>{e.year}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <h2 className="mt-3 mb-6 font-bold text-xl">Work & Experience</h2>
                            <div>
                                {
                                    works_and_experience.map((e, index) => {
                                        return (
                                            <div key={index}>
                                                <h2 className="font-bold">. {e.workplace}</h2>
                                                <p>{e.year}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <h2 className="mt-3 mb-6 font-bold text-xl">Services</h2>
                            <div>
                                {
                                    services.map((e, index) => {
                                        return (
                                            <div key={index}>
                                                <h2>. {e}</h2>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DoctorProfile;