import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
  const singoutfun=()=>{
    setloader(true)
   return signOut(auth)
  }


 useEffect(()=>{
   const unSubcribe= onAuthStateChanged(auth,currentuser=>{
        setuser(currentuser)
       
        if(currentuser?.email){
          const userEmail={email:currentuser?.email}
          axios.post(`${import.meta.env.VITE_localhostUrl}/jwt`,userEmail,{
            withCredentials:true
          })
          .then(res=>{
            console.log(res.data)
            setloader(false)
          })
        }
        else{
          axios.post(`${import.meta.env.VITE_localhostUrl}/logout`,{},{
            withCredentials:true
          }).then(res=>{
            console.log('logout',res.data)
            setloader(false)
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
       loader,
       singoutfun
    }
    return (
        <Authcontext.Provider value={authinfo}>
          {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;