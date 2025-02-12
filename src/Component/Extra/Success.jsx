import React from 'react';
import CountUp from 'react-countup';
const Success = () => {
    return (
        <div>
            <h1 className='text-center text-white text-2xl'>Success Section</h1>
            <div className=' my-2 grid md:grid-cols-3 w-[90%] mx-auto gap-4 '>
                <div className='text-center flex flex-col items-center bg-slate-200 justify-center h-[150px] border-2 rounded-lg'>
                    <h1 className='text-2xl'>Total Add Books</h1>
                    <CountUp className='text-2xl'
                        start={0}
                        end={50}
                        duration={3}

                    > </CountUp>
                </div>
                <div className='text-center flex flex-col items-center bg-slate-200 justify-center h-[150px] border-2 rounded-lg'>
                    <h2 className='text-2xl'>Per book pages</h2>
                    <CountUp className='text-2xl'
                        start={0}
                        end={400}
                        duration={3}

                    > </CountUp>
                </div>
                <div className='text-center flex flex-col items-center bg-slate-200 justify-center h-[150px] border-2 rounded-lg'>
                    <h2 className='text-2xl'>Book Lesson</h2>
                    <CountUp className='text-2xl'
                        start={0}
                        end={20}
                        duration={3}

                    > </CountUp>
                </div>
            </div>
        </div>

    );
};

export default Success;