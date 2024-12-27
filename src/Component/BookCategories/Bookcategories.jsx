import React from 'react';
import { Link } from 'react-router-dom';

const Bookcategories = () => {
    return (
        <div className='w-[90%] my-2 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4  min-h-[200px] items-center'>
           <Link to='/bookDisplay/Computer Science'>
            <div className=" h-[150px] border-2 rounded-lg bg-white ">
                <h1 className=' text-xl text-center mt-4'>Category</h1>
                 <h2 className=' text-center'>Computer Science</h2>
                 
             </div>
             </Link>
           
             <Link to='/bookDisplay/Medicine'>
            <div className=" h-[150px] border-2 rounded-lg bg-white">
                <h1 className=' text-xl text-center mt-4'>Category</h1>
                <h2 className=' text-center'>Medicine</h2>
               
             </div>
            </Link>

            <Link to='/bookDisplay/Business & Finance'>
            <div className=" h-[150px] border-2 rounded-lg bg-white">
                <h1 className=' text-xl text-center mt-4'>Category</h1>
                <h2 className=' text-center'>Business & Finance</h2>
               
             </div>
             </Link>

            <Link to='/bookDisplay/Travel & Adventure'>
            <div className=" h-[150px] border-2 rounded-lg bg-white">
                <h1 className=' text-xl text-center mt-4'>Category</h1>
                <h2 className=' text-center'>Travel & Adventure</h2>
               
             </div>
             </Link>
               
            </div>
            );
};

            export default Bookcategories;