import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ClientReview from "../ClientReview/ClientReview";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { GoLocation } from 'react-icons/go';
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";

const DoctorProfile = () => {
    const doctor = useLoaderData()
    const { doctor_name, image, about_me, specialist_in, ratings, location, business_hour, education, works_and_experience, awards, specializations, services, reviews } = doctor
    return (
        <div className="bg-[#F3F3F3]">
            <SharedBanner title={'Doctor Profile'} subTitle={'Doctor'}></SharedBanner>

            <div className="w-[90%] h-[300px] flex flex-col lg:flex-row p-5 mx-auto gap-10 bg-white rounded-lg">
                <img className="rounded-lg" src={image} alt="" />
                <div className="space-y-4">
                    <p className="text-2xl font-bold">{doctor_name}</p>
                    <p className="text-xl">{specialist_in}</p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings}
                        readOnly />
                         <div className="flex gap-4 items-center">
                        <GoLocation />
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 p-7 lg:p-20 w-[90%] mx-auto rounded-xl bg-white">
                <Tabs>
                    <TabList className='mb-10 flex flex-col lg:flex-row gap-10 justify-between'>
                        <Tab className='btn btn-error text-white'>Overview</Tab>
                        <Tab className='btn btn-error text-white'>Locations</Tab>
                        <Tab className='btn btn-error text-white'>Reviews</Tab>
                        <Tab className='btn btn-error text-white'>Business Hours</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className="mt-3 mb-6 font-bold text-xl">About Me</h2>
                        <p>{about_me}</p>
                        <div className="flex justify-between">
                            <div className="space-y-4 w-[50%]">
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
                            <div>
                                <div>
                                    <h2 className="mt-3 mb-6 font-bold text-xl">Awards</h2>

                                    {
                                        awards.map((e, index) => {
                                            return (
                                                <div key={index}>
                                                    <h2 className="">. {e}</h2>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <h2 className="mt-3 mb-6 font-bold text-xl">Specializations</h2>

                                    {
                                        specializations.map((e, index) => {
                                            return (
                                                <div key={index}>
                                                    <h2 className="">. {e}</h2>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h2 className="text-3xl mt-8 font-semibold">{location}</h2>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                reviews?.map((review, index) => <ClientReview key={index} review={review}></ClientReview>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-3xl mt-8 font-semibold">{business_hour}</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default DoctorProfile;