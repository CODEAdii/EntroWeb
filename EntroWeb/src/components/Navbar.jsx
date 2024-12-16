import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/Logo.svg'

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
{link:"Contact US", path:"contact"},
// {link:"Testimonial", path:"testimonial"},
// {link:"FAQ", path:"faq"},

]
return (
<header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
    <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" :""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={Logo}
                    className='w-10 inline-block items-center' /><span className='text-[#263238]'>Entropix</span></a>

            {/* nav items for large devices */}

            <ul className='md:flex space-x-12 hidden'>
                {
                navItems.map(({link,path})=>
                <Link to={path} spy={true} smooth={true} offset={-100} key={path}
                    className="block text-base text-gray900 hover:text-[#F2AA3D] first:font-medium">{link}</Link>)
                }
            </ul>


            {/* btn for large devices */}
            <div className='space-x-12 hidden lg:flex items-center'>
                <a href="/" className='hidden lg:flex items-center text-[#F2AA3D] hover:text-gray900'>Login</a>
                <button
                    className='bg-[#F2AA3D] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>SignUp</button>
            </div>

            {/* menu btn for only mobile */}

            <div className='md:hidden'>
                <button 
                onClick={toggleMenu}
                className='focus:outline-none focus:text-gray-500 text-neutralDGrey'>
                    {
                    isMenuOpen?(
                    <FaXmark className='h-6 w-6 text-neutralDGrey' />):(
                    <FaBars className='h-6 w-6 ' />)
                    }
                </button>
            </div>
        </div>
        {/* nav items for mobile devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-[#F2AA3D] ${isMenuOpen ? "block fixed top-0 right-0 left-0" :"hidden"}`}>
        {
                navItems.map(({link,path})=>
                <Link to={path} spy={true} smooth={true} offset={-100} key={path}
                    className="block text-base text-white hover:text-brandPrimary first:font-medium">{link}</Link>)
                }

        </div>

    </nav>
</header>
);
};

export default Navbar;
