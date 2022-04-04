import React from 'react';
import useReviews from '../../Hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] =useReviews();
    console.log(reviews);
    return (
        <div className='grid grid-cols-3 gap-5'>
          {reviews.map(reviewItem=> <Review
          key={reviewItem.id}
          reviewItem={reviewItem}
          ></Review>)}
        </div>
    );
};

export default Reviews;