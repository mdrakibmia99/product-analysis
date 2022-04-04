import React from 'react';
import map from './map.svg';

const Footer = () => {
    return (
        <div className='mt-4'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 border-t-2 border-t-black pt-4 lg:px-0 px-4">
               
                <div className="footer-about px-16">
                    <h4 className='border-b-2 border-b-[#ffd13c] w-16 mb-4 text-xl text-center'>About</h4>
                    <p>Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments.</p>
                </div>
                <div className="footer-QNA">
                    <h4 className='className= border-b-2 border-b-[#ffd13c] w-20 mb-4 text-xl text-center'>QNA</h4>
                    <p>Kashimpur , Gazipur</p>
                    <a href="tel:+8801913547448" className='block font-bold'>+8801913547448</a>
                    <a href="mailto:rkrakibhasan680@gmail.com" className='block font-bold'>rkrakibhasan680@gmail.com</a>
                </div>
                <div className="footer-map">
                    <h4 className='className= border-b-2 border-b-[#ffd13c] w-12 mb-4 text-xl '>Map</h4>
                    <img src={map} alt="" className='max-w-full w-2/4 ' />
                </div>
            </div>
        </div>
    );
};

export default Footer;