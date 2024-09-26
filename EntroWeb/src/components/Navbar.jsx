import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../assets/Icon.png'

// react icons
import {FaXmark,FaBars} from "react-icons/fa6";

function Navbar() {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const[isSticky,setIsSticky]=useState(false);
    //set toggle menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handelScroll=()=>{
            if(window.scrollY>100){
                setIsSticky(true);
            }else
            setIsSticky(false);
        };
        window.addEventListener('scroll',handelScroll);
        return () =>{
               window.addEventListener('scroll',handelScroll);

        }
    });
    //nav items array
            const navItems=[
            {link:"Home", path:"home"},
            {link:"Service", path:"service"},
            {link:"About", path:"about"},
            {link:"Product", path:"product"},
            {link:"Testimonial", path:"testimonial"},
            {link:"FAQ", path:"faq"},

        ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
         <div>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} className='w-10 inline-block items-center' /><span className='text-[#263238]'>Entropix</span></a>

        {/* nav items for large devices */}

        <ul className='md:flex space-x-12 hidden'>
            {
                navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">{link}</Link>)
            }
        </ul>


        {/* btn for large devices */}
        <div className='space-x-12 hidden lg:flex items-center'>
            <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
            <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>SignUp</button>
        </div>
        
        {/* menu btn for only mobile */}

        <div className='md:hidden'>
            <button className='focus:outline-none focus:text-gray-500 text-neutralDGrey'>
                {
                    isMenuOpen?(<FaXmark className='h-6 w-6 text-neutralDGrey'/>):(<FaBars className='h-6 w-6 '/>)
                }
            </button>
        </div>
         </div>

        </nav>
    </header>  
);
};

export default Navbar;