import React from 'react'
import { Link } from 'react-scroll'

const TopArrow = () => {
  return (
    <Link to="home" spy={true} smooth={true} offset={-55} duration={500}>

    <div className='bg-[#ea4227] w-14 h-14 rounded-full flex justify-center items-center bottom-10 right-10 fixed animate-bounce cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
        </svg>
    </div>
    </Link>
  )
}

export default TopArrow