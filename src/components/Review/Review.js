
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Review.css'
const Review = ({ reviewItem }) => {

    const { name, image, ratings, review } = reviewItem;

    return (
        <div className='grid-item'>
            <div className='review-info flex'>
                <img className='w-10 h-10' src={image} alt="review_user" />
                <div>
                    <h3><b>Name:</b> {name}</h3>
                    <p><b>Rating:</b> {ratings} <FontAwesomeIcon className='text-[goldenrod]' icon={faStar}></FontAwesomeIcon>
 </p>
                </div>


            </div>
            <div className='mt-5'>

                <p>{review}</p>
            </div>

        </div>
    );
};

export default Review;