import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const Authcontext=createContext()
const Authprovider = ({children}) => {
    const [user,setuser]=useState([])
    const [loader,setloader]=useState(true)
  const createRegister=(email,password)=>{
    setloader(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const createLogin=(email,password)=>{
    setloader(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
 useEffect(()=>{
   const unSubcribe= onAuthStateChanged(auth,currentuser=>{
       
        const userEmail={currentuserEmail:currentuser?.email}
        console.log(userEmail)
        setloader(false)
        if(currentuser?.email){
          setuser(currentuser)
          
          axios.post(`${import.meta.env.VITE_localhostUrl}/jwt`,userEmail,{
            withCredentials:true
          })
          .then(res=>{
            // setloader(false)
            console.log(res.data)
          })
        }
        else{
          axios.post(`${import.meta.env.VITE_localhostUrl}/logout`,{},{
            withCredentials:true
          }).then(res=>{
            // setloader(false)
            console.log('logout',res.data)
          })
        }
       
    })
    return ()=>{
       unSubcribe()
    }
 },[])
    const authinfo={
       createRegister,
       createLogin,
       user,
       loader
    }
    return (
        <Authcontext.Provider value={authinfo}>
          {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;