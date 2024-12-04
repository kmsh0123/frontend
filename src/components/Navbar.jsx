import React, { useState } from 'react'
import {MdMenu,MdClose} from "react-icons/md"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';
// import {NavLink} from 'react-scroll';

const Navbar = () => {
  const [open,setOpen] = useState(true);
  const menuLinks = [
    {id:1,name : "HOME",link : "home"},
    {id:2,name : "SERVICES",link : "service"},
    {id:3,name : "CONTACT",link : "contact"},
  ]
  return (
       <nav className={`${open ? "bg-[#1c2437]" : "bg-[#1c2437] h-screen"} fixed top-0 left-0 right-0 z-50 cursor-pointer`}>
         <div className="container px-1 py-4 lg:p-4 lg:pt-5 md:mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between font-bold">
           <div className="flex items-center justify-between px-2 lg:px-0">
           <h1 className={`${open ? "text-white" : "text-[#5f5f5f]"}`}>
            <img src="https://duno.asia/static/media/dunoFianlLogo.eb79b0f4eec9bbf3aa3a.png" className='w-28' alt="" />
           </h1>
            <div onClick={()=>setOpen(!open)} className="lg:hidden text-white">
            {
              open ? <MdMenu className='text-4xl text-[#ea4227]'/> : <MdClose className='text-4xl text-[#ea4227]'/>
            }

            </div>
           </div>
            <ul className="text-black lg:text-white mr-0 lg:mr-14 lg:flex lg:py-0 lg:static lg:space-x-9 hidden">
            {
                  menuLinks.map(item => (
                    <Link key={item.id} to={item.link} spy={true} smooth={true} offset={-55} duration={500} className={`lg:text-[15px] py-3 lg:py-0 px-5 lg:px-0 text-md duration-300 transition-all tracking-widest hover:text-[#ea4227]`}>
                      {item.name}
                    </Link>
                  ))
            }
            </ul>
           {/* //mobile Menu */}

           <ul className={`text-black lg:text-white mr-0 lg:mr-14 flex flex-col lg:flex-row absolute top-16 right-4 left-4 bottom-4 py-3 lg:py-0 lg:static lg:space-x-9 transition-all duration-300 ${open ? "hidden" : "block bg-white lg:bg-transparent"}`}>
              {
                menuLinks.map(item => (
                  <Link onClick={()=>setOpen(!open)} key={item.id} to={item.link} spy={true} smooth={true} offset={-55} duration={500} className={`lg:text-[15px] py-3 lg:py-0 px-5 lg:px-0 text-md duration-300 transition-all tracking-widest hover:text-[#ea4227]`}>
                     {item.name}
                  </Link>
              ))
              }              
            </ul>
            
           {/* //mobile Menu */}

        </div>
       </nav>
  )
}

export default Navbar