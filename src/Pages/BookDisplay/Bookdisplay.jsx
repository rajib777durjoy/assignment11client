import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Bookdisplay = () => {
    const [books, setbooks] = useState([])
    const { category } = useParams()
    // console.log(category)
    axios.get(`${import.meta.env.VITE_localhostUrl}/categorys/${category}`)
        .then(res => {
            setbooks(res.data)
        })
    return (
        <div className='text-white'>
            {
                books.map(book => <div className="card card-compact text-black bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={book?.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">{book?.name}</h2>
                        <p className='text-black'>{book?.authorName}</p>
                        <p>{book?.category}</p>
                        <p>{book?.quantity}</p>
                        <p>{book?.rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Bookdisplay;