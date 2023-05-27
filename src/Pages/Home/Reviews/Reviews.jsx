import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import comma from '../../../assets/Images/Home/comma.png'


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(datas => setReviews(datas))
    }, [])


    return (
        <div className="my-24">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map((review, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="border-2 p-12 rounded-lg w-full lg:w-[50%] mx-auto">
                                    <div className="flex justify-between mb-8">
                                        <div className="flex gap-5">
                                            <img className="w-[50px] h-[50px] rounded-full" src={review.image} alt="" />
                                            <div>
                                                <p className="text-xl font-semibold">{review.name}</p>
                                                <p>{review.profession}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={comma} className="w-12 h-12" alt="" />
                                        </div>
                                    </div>
                                    <p>{review.review}</p>
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Reviews;