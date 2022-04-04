import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hook/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,setReviews] =useReviews();
    return (
        <div>
            <div className='text-center bg-[#fd627a] mb-3 py-2 text-white text-2xl'>
                <h2>
                    Review
                </h2>
            </div>
             <div className='grid grid-cols-3 gap-5'>
             {reviews.slice(0,3).map(reviewItem=> <Review
             
             key={reviewItem.id}
             reviewItem={reviewItem}
             ></Review>
         
              ) }
        </div>
       
        <div className='text-center mt-3'>
                <Link to={'/reviews'}>
                    <button className='bg-[#fd627a] px-4 py-2 text-white rounded-md hover:bg-[#ffd13c] hover:text-black transition-all duration-200'>See More</button>
                </Link>
           

        </div>
        </div>
       
    );
};

export default Home;