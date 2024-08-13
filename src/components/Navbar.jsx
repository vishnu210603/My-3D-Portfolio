import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import { navLinks } from '../constants';
import {  menu, close } from '../assets';
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const[active, setActive]= useState('')
    const[toggle, setToggle]= useState(`false`);
    return (
        <nav
        className={`${styles.paddingX} w-full flex  item-center py-5 fixed top-0 z-20 bg-primary `}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
           <Link to='/' className='flex items-center gap-2'
           onClick={()=>{
            setActive(" ");
            window.scrollTo(0,0);
           }}
           >
            <img className="w-11 h-11 " src={Logo} alt='logo'   />
            <p className="text-white text-[18px] font-bold cursor-pointer">Vishnu Yadav <span className='sm:block-hidden flex justify-between '>| Portfolio</span></p>
           </Link>
           <ul className='list-none hidden sm:flex flex-row gap-10 '>
            {navLinks.map((link) =>(
                <li 
                key={link.id} className='{`${
                active===link.title
                ? "text-white"
                : "text-secondary"}
                hover:text-purple-500 text-[18px] font-medium cursor-pointer`}
                onClick()={()=> setActive(link.title)}'>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
           </ul>
           <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close: menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=> setToggle(!toggle)}
            ></img>
           </div>
           </div>
        </nav>
    );
};

export default Navbar;