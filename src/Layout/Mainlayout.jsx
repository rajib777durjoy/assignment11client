import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



const Mainlayout = () => {
 
    return (
        <div className={`w-[100%]  min-h-screen bg-slate-700`}>
            <header>
            <Navbar></Navbar>
            </header>
           <main>
           <Outlet></Outlet>
           </main>
           
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;