import React from 'react';
import { Link } from 'react-router-dom';

const Bookcategories = () => {
    return (
        <div className='grid grid-cols-4 gap-4 mx-2 h-[200px] items-center'>
           <Link to='/bookDisplay/Computer Science'>
            <div className=" h-[150px] border-2">
                <h1 className='text-white text-xl text-center mt-4'>Category</h1>
                 <h2 className='text-white text-center'>Computer Science</h2>
                 
             </div>
             </Link>
           
             <Link to='/bookDisplay/Medicine'>
            <div className=" h-[150px] border-2">
                <h1 className='text-white text-xl text-center mt-4'>Category</h1>
                <h2 className='text-white text-center'>Medicine</h2>
               
             </div>
            </Link>

            <Link to='/bookDisplay/Business & Finance'>
            <div className=" h-[150px] border-2">
                <h1 className='text-white text-xl text-center mt-4'>Category</h1>
                <h2 className='text-white text-center'>Business & Finance</h2>
               
             </div>
             </Link>

            <Link to='/bookDisplay/Travel & Adventure'>
            <div className=" h-[150px] border-2">
                <h1 className='text-white text-xl text-center mt-4'>Category</h1>
                <h2 className='text-white text-center'>Travel & Adventure</h2>
               
             </div>
             </Link>
               
            </div>
            );
};

            export default Bookcategories;