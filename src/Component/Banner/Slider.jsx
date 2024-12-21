import React from 'react';

const Slider = ({ image, text }) => {
    return (
          <div className='w-full bg-center bg-cover  h-[38rem] flex justify-center items-center' style={{
            backgroundImage: `url(${image})`,
          }}>
          <div>
          <h1 className=' text-center text-white text-2xl mb-4'>{text}</h1>
            <h2 className='w-[50%] text-xl mx-auto text-white text-center font-medium'>Expand Your Knowledge</h2>
            <p className='w-[60%] mx-auto text-white text-center'>
                Books provide a wealth of information on every topic imaginable. Whether you're exploring new cultures, mastering a skill, or diving into history, books can help you grow intellectually and broaden your perspective.
            </p>
          </div>   
        </div>
    );
};

export default Slider;