
import { useParams } from 'react-router-dom';
// import React { useState } from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Authcontext } from '../../Authprovider/Authprovider';
import { toast } from 'react-toastify';
// {
//     "_id": "676c281066a434ab69498d19",
//     "image": "https://www.keqoh.cc",
//     "name": "Merritt Carr",
//     "quantity": "26",
//     "authorName": "Madeline Anthony",
//     "category": "Computer Science",
//     "description": "Ex odit quidem solut",
//     "rating": "1",
//     "bookcontent": "Ad numquam pariatur",
//     "userEmail": "durjoy2001chando@gmail.com"
// }
const Bookdetails = () => {
    const { id } = useParams()
    const [bookdetails, setbookdetails] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(Authcontext)
 
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_localhostUrl}/bookdetails/${id}`)
            .then(res => {
                setbookdetails(res.data)
            })

    }, [id])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (event) => {
         // Form data will be logged here
        const data={...event,image:bookdetails?.image,startDate,category:bookdetails?.category,bookId:bookdetails?._id,borrowdate:new Date()}
        axios.post(`${import.meta.env.VITE_localhostUrl}/borrowedbook`,data)
        .then(res=>{
            console.log('submit successfull')
            document.getElementById('my_modal_5').close()
           if(res.data?.insertedId){
            return toast.success('Borrod book Successfull')
           }
        })
       
      };

    // console.log(bookdetails)
    return (
        <div className='w-[90%] mx-auto min-h-[500px] text-black'>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={bookdetails?.image}
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookdetails?.name}</h2>
                    <p>{bookdetails?.quantity}</p>
                    <p>{bookdetails?.authorName}</p>
                    <h1>{bookdetails?.category}</h1>
                    <h2>{bookdetails?.description}</h2>
                    <p>{bookdetails?.rating}</p>
                    <p>{bookdetails?.bookcontent}</p>
                    <div className="card-actions justify-center">
                        <button disabled={bookdetails?.quantity == 0 && true || false} onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[90%] mx-auto btn-primary">Borrow</button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" disabled defaultValue={user?.displayName} {...register("name", { required: "Name is required" })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" disabled defaultValue={user?.email} {...register("email", { required: "Name is required" })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Return Date</span>
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Bookdetails;