import React, { useContext, useEffect, useState } from 'react';
import UseAxios from '../../Authentication/UseAxios';
import { Authcontext } from '../../Authprovider/Authprovider';
import { toast } from 'react-toastify';
// import axios from 'axios';

const Borrowed = () => {
    const{user}=useContext(Authcontext)
    const [books,setbooks]=useState([])
    const axiosSecure=UseAxios()
    useEffect(()=>{
      axiosSecure.get(`http://localhost:5000/borrowedlist?user=${user?.email}`)
      .then(res=>{
        console.log(res)
         setbooks(res.data)
      }) 
    },[user?.email])
    const handelReturnfun=(id)=>{
        console.log('hello world')
        fetch(`${import.meta.env.VITE_localhostUrl}/borrowedbook/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
          const deletebook=books.filter(book=>book?._id !== id)
          setbooks(deletebook)
            if(data.deletedCount>0){
                toast.success('return successfull')
            }
        })
    }
    console.log(books)
    return (
        <div className=' w-[90%] mx-auto gap-4 grid md:grid-cols-3 min-h-screen my-4'>
            {
                books?.map(book=><div className="card text-black card-compact bg-base-100 h-[400px]  shadow-xl">
                    <figure>
                      <img
                        src={book?.image}
                        alt="Shoes" className='h-[200px] w-[80%] mx-auto my-2 rounded-lg' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Title:{book?.title}</h2>
                      <p className='text-xl'><span className='text-xl font-bold'>Category:</span>{book?.category}</p>
                      <h2>BorrowedDate:{book?.borrowdate}</h2>
                      <h2>ReturnDate:{book?.startDate}</h2>
                      <div className="card-actions justify-end">
                        <button onClick={()=>handelReturnfun(book?._id)} className="btn btn-primary">Return</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default Borrowed;