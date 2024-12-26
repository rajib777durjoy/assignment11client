import axios from 'axios';
import React from 'react';


const instanceAxios = axios.create({
    baseURL:`${import.meta.env.VITE_localhostUrl}`,
    withCredentials:true
   
  });
const UseAxios = () => {

    return instanceAxios
       
};

export default UseAxios;