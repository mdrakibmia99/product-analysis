import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hook/useReviews';
import Review from '../Review/Review';
import homeImg from './header.png'

const Home = () => {
    const [reviews] =useReviews();
    return (
        <div>
             <section className='flex lg:flex-row md:flex-row flex-col items-center justify-center my-8 bg-[#ffd13c] p-4 rounded-lg'>
                <article className='lg:w-2/4 md:w-2/4'>
                    <h1 className='text-5xl text-white pl-12'>Learn Anything <p>Anytime</p>  <p>Anywhere</p></h1>
                
                </article>
                <div className='lg:w-2/4 md:w-2/4 lg:pt-0 md:pt-0 pt-4'>
                    <img src={homeImg} alt="learning_mg" />
                </div>
            </section>

            <div className='text-center bg-[#fd627a] mb-3 py-2 text-white text-2xl'>
                <h2>
                    Review
                </h2>
            </div>
             <div className='grid md:grid-cols-3 gap-5 sm:grid-cols-1'>
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