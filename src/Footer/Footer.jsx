import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer w-[100%] bg-neutral text-neutral-content p-10 ">
            <nav>
                <div className='text-2xl font-medium'>Chapter<span className='text-blue-400'>Vault</span></div>
                <div className=''>
                    <ul className='flex gap-4 '>
                        <Link to='https://www.facebook.com/' target='_blank'><li className='text-xl'><FaFacebookSquare /></li></Link>
                        <Link to='https://github.com/' target='_blank'><li className='text-xl'><FaGithub /></li></Link>
                        <Link to='https://www.linkedin.com/' target='_blank'><li className='text-xl'><BiLogoLinkedinSquare /></li></Link>
                        <Link to='https://www.google.com/' target='_blank'><li className='text-xl'><BiLogoGoogle /></li></Link>
                    </ul>
                </div>
                <div className='w-[90%] mx-auto text-xl font-extrabold'>Give Your Favourite Book Information</div>
                <input className='w-[200px] md:w-[350px] bg-transparent border-2 border-r-zinc-200 rounded-md text-center h-[35px]' type="text" placeholder='Enter Book Name' />
                <input className='w-[200px] md:w-[350px] bg-transparent border-2 border-r-zinc-200 rounded-md text-center h-[35px]' type="text" placeholder='Enter Authors Name' />
                <input className='w-[200px] md:w-[350px] bg-transparent border-2 border-r-zinc-200 rounded-md text-center h-[35px]' type="text" placeholder='Enter Book Category' />
            </nav>
            <nav>
                <h6 className="footer-title">Discover</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Book</a>
                <a className="link link-hover">Authors</a>
                <a className="link link-hover">Subject</a>
            </nav>
            <nav>
                <h6 className="footer-title">Help</h6>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Report A Problem</a>
                <a className="link link-hover">Suggestign Book</a>
            </nav>
        </footer>
    );
};

export default Footer;