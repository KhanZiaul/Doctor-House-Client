import { useEffect, useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

const OurExpertDoctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/doctors')
            .then(res => res.json())
            .then(datas => setDoctors(datas))
    }, [])

    return (
        <div className="my-16 w-[90%] mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4">Our Expert Doctors</h2>
            <p className="mb-6 text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    doctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>

        </div>
    );
};

export default OurExpertDoctors;