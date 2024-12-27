import React from 'react';

const AuthorList = () => {
    return (
        <div className='w-[100%]  min-h-[500px] grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card card-side  w-[90%] mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="/ThomasImage.jpg"
                        alt="Movie" className='w-[90%] mx-auto h-[200px]' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Thomas H. Cormen</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="card card-side w-[90%] mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="/susanMedicine.jpg"
                        alt="Movie" className='w-[100%] h-[200px]'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Susan Standring</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="card card-side border-2  w-[90%] mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="/paulo.jpg"
                        alt="Movie" className='w-[100%] h-[200px] ' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Benjemin Graham</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
            <div className="card card-side w-[90%] mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="/banjamin.jpg"
                        alt="Movie" className='w-[100%] h-[200px]' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Paulo Coelho</h2>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorList;