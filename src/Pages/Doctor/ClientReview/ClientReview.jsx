import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ClientReview = ({ review }) => {
    return (
        <div className="border-2 p-6 rounded-lg">
            <div className="flex justify-between mb-4">
                <div>
                    <p className="text-xl font-semibold">{review.name}</p>
                    <p>{review.profession}</p>
                </div>
            </div>
            <p className='mb-3'>{review.review}</p>
            <Rating
                style={{ maxWidth: 100 }}
                value={review.ratings}
                readOnly />
        </div>
    );
};

export default ClientReview;