import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { set } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from 'react-router-dom';


// {
//     "_id": "6769799ff9536e1e5d121e00",
//     "image": "https://i.ibb.co.com/PGz6rtb/jsbook.jpg",
//     "name": "JavaScript",
//     "quantity": "2",
//     "authorName": "Jhankar Mahabub",
//     "category": "Computer Science",
//     "description": "this book for web development flatform students",
//     "rating": "5",
//     "bookcontent": "I love this book . JavaScript learn too easy."
// }
const Allbook = () => {
    const [books, setbook] = useState([])
    const updatepage=useNavigate()
    const { _id, name, image, quantity, authorName, category, description, rating, bookcontent } = books
  
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_localhostUrl}/books`)
        .then(res => {
            setbook(res.data)
        })
    },[])
        
   const handelFilter=()=>{
    axios.get(`${import.meta.env.VITE_localhostUrl}/books/filter`)
    .then(res=>{
        // console.log(res.data)
        setbook(res.data)
    })
   }

  
  console.log(books)
    return (
        <div className='w-[90%] mx-auto min-h-screen'>
            <div className='w-[100%] bg-slate-300  mx-auto text-white mt-3'>
                <button onClick={handelFilter} className='w-[100%]  btn'>filter</button>
            </div>
        <div className='w-[100%] my-2  gap-2  grid md:grid-cols-3 lg:grid-cols-4'>
            {
                books.map(book => <div key={book?._id} className="card h-[400px] card-compact bg-base-100 shadow-xl">
                    <figure className='my-2'>
                        <img
                            src={book?.image}
                            alt="Shoes" className='w-[270px] h-[200px] rounded-lg' />
                    </figure>
                    <div className="w-[90%] mx-auto">
                        <h2 className="card-title">{book?.name}</h2>
                        <p>{book?.authorName}</p>
                        <h2>{book?.category}</h2>
                        <h2><ReactStars
                            count={book?.rating}
                            size={24}
                            color="#ffd700"
                            edit={false}
                        /></h2>
                        <div className="card-actions justify-center mt-4">
                          <Link to={`/updatepage/${book?._id}`}><button className="btn btn-primary w-[100%]">Update</button></Link> 
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>  
    );
};

export default Allbook;