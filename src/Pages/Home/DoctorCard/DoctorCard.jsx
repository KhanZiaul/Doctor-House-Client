import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { GoLocation } from 'react-icons/go';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';

const DoctorCard = ({doctor}) => {

    return (
        <div>
            <div className="card w-full lg:w-96 lg:h-[600px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={doctor.image} alt="doctor" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{doctor.doctor_name}</h2>
                    <p>BTP - {doctor.specialist_in}</p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={doctor.ratings}
                        readOnly />
                    <div className="flex gap-4 items-center">
                        <GoLocation />
                        <p>{doctor.location}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <MdOutlineEventAvailable />
                        <p>{doctor.business_hour}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <AiOutlineDollar />
                        <p>{doctor.fee}</p>
                    </div>
                    <div className="w-full mt-4">
                        <button className="btn btn-error w-full text-white">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;