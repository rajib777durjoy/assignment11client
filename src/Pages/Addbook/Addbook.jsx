import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Addbook = () => {
const handeladdbookinfo=(e)=>{
    e.preventDefault()
    const form=e.target;
    const bookdata=new FormData(form);
    const bookInfo=Object.fromEntries(bookdata.entries())
    if(bookInfo?.rating>5){
        return toast.error('rating number maximum 5')
    }
    console.log(bookInfo)
    axios.post(`${import.meta.env.VITE_localhostUrl}/addbook`,bookInfo)
    .then(res=>{
        toast.success("Book Add Successfull")
    })
   
}
    return (
        <div className='w-[90%] mx-auto'>
            <form onSubmit={handeladdbookinfo} className="card-body w-[70%] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="url" name='image' placeholder="Image" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input type="text" name='authorName' placeholder="Author Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' className="select select-ghost  w-[100%] bg-white">
                        <option disabled selected>Pick the best JS framework</option>
                        <option>Computer Science</option>
                        <option>Medicine</option>
                        <option>Business & Finance</option>
                        <option>Travel & Adventure</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea className='ps-4' name="description" placeholder='Enter Short Description' rows={5} cols={5} id=""></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Enter Numeric Input (1-5)" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">BookContext</span>
                    </label>
                   <textarea className='ps-4' rows={5} cols={5} name="bookcontent" id="" placeholder='Enter Information about the book'></textarea>
                </div>

                <div className="form-control mt-6">
                    <button type='submit' className="btn bg-white text-xl font-medium">Add</button>
                </div>
            </form>
        </div>
    );
};

export default Addbook;