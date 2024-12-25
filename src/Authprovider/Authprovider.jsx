import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase';
import { useSearchParams } from 'react-router-dom';

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
        console.log('currentuser id',currentuser)
        setuser(currentuser)
        setloader(false)
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