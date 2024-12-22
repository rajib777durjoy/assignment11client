import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const Navbar = () => {
  const {user}=useContext(Authcontext)
  const navigatelogin=useNavigate()
    const Items=<>
     <li className='mx-2 font-medium text-lg'><NavLink to='/'>Home</NavLink></li>      
     <li className='mx-2 font-medium text-lg'><NavLink to='/allbook'>All Book</NavLink></li>      
     <li className='mx-2 font-medium text-lg'><NavLink to='/addbook'>Add Book</NavLink></li>      
     <li className='mx-2 font-medium text-lg'><NavLink to='/borrowed'>Borrowed</NavLink></li>      
    </>
    const signout=()=>{
      signOut(auth).then(()=>{
          console.log('successfull')
          navigatelogin('/login')
      })
    }
    return (
        <div className="navbar bg-slate-500 text-blue-400 ">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content justify-center bg-base-100 rounded-box z-50  mt-3 w-52 p-2 shadow">
              {Items}
              {
                user?'':<div className='flex flex-col gap-2 ms-4'>
                <NavLink to='/login'><button className='btn bg-blue-950  text-white  border-0'>Login</button></NavLink>
                <NavLink to='register'><button className='btn bg-blue-950 text-white  border-0'>Register</button></NavLink>
                </div>
              
              }
              
            </ul>
          </div>
          <a className=" btn-ghost text-2xl text-white font-extrabold">{user?<div className='flex gap-2 items-center'>
            <img src="/librarylogo.jpg" alt="" className='w-[50px] h-[50px] rounded-full' />
            <div className='uppercase'>{user?.displayName}</div>
          </div>:<div>Chapter<span className='text-blue-400'>Vault</span></div>}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {Items}
          
           
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user?<div className='flex gap-2 items-center'><span>{(user.photoURL)?.slice(0,30)}</span><button onClick={signout} className='btn'>SignOut</button></div>:<div className='flex gap-2'>
               <NavLink to='/login'><button className='btn bg-blue-950 text-white  border-0'>Login</button></NavLink>
               <NavLink to='register'><button className='btn bg-blue-950 text-white  border-0'>Register</button></NavLink>
            </div>
          }
        </div>
      </div>
    );
};

export default Navbar;