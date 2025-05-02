'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { CiMenuBurger } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
 
   setNavOpen(!navOpen);
  };
 

return (
   <div className={`left-0 top-0 w-full z-10 ease-in-out duration-300 ${navOpen ? 'h-screen overflow-hidden' : ''}`}>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 ease-in-out duration-300'>
          <Link href= '/'>
          <h1 className='text-2xl text-gray-400 ease-in-out duration-300 sm:text-4xl'>Nero Oghenekome</h1>
          </Link>
          <ul className='hidden sm:flex ease-in-out duration-300'>
               <li>
                   <Link href='/'>
                   <h1 className='font-mono text-amber-50 text-2xl p-4 hover:text-purple-400 cursor-grab ease-in-out duration-300'>Home</h1>
                   </Link>
               </li>
               <li>
                   <Link href='/#about'>
                   <h1 className=' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab ease-in-out duration-300'>About</h1>
                   </Link>
               </li>
               <li>
                   <Link href='/#skills'>
                   <h1 className=' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab ease-in-out duration-300'>Skills</h1>
                   </Link>
               </li>
               <li>
                   <Link href='/#projects'>
                   <h1 className= ' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab ease-in-out duration-300'>Projects</h1>
                   </Link>
               </li>
          <li>
               <Link href='/#contact'>
               <h1 className=' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab ease-in-out duration-300'>Contact</h1>
               </Link>
          </li>
      </ul>
      <div className='block sm:hidden z-10 ease-in-out duration-300' onClick={toggleNav}>
      <CiMenuBurger size={20} color='white' />
      </div>
      {navOpen && (
         <div
            className='absolute top-0 left-0 right-0 bottom-0 flex justify-center
            items-center w-full h-screen bg-black text-center ease-in-out duration-300 sm:hidden'
         >
            <ul>
               <li>
                  <Link href='/'>
                  <h1 className='font-mono text-amber-50 p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>Home</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#about'>
                  <h1 className=' font-mono text-amber-50 p-4 text-4xl
                   hover:text-gray-500 ease-in-out duration-300'>About</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#skills'>
                  <h1 className=' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>Skills</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#projects'>
                  <h1 className= ' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>Projects</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#contact'>
                  <h1 className= ' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>Contact</h1>
                  </Link>
                  
               </li>
               <li>
                  <Link href='https://drive.google.com/file/d/1ou7ISlZG4gFGjjEOVpTr7V5KQkCoFM7x/view?usp=sharing'>
                  <h1 className= ' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>CV</h1>
                  </Link>
                  
               </li>
            </ul>
         </div>
      )}
      <a
                href="https://drive.google.com/file/d/1ou7ISlZG4gFGjjEOVpTr7V5KQkCoFM7x/view?usp=sharing"
                className="hidden sm:flex items-center border bg-green-300 text-white
                  px-4 py-2 mr-2.5 rounded-lg hover:bg-blue-300 
                  transition-colors duration-200 font-medium text-center ease-in-out"
                  
              >
               <h1 className='text-center'>Download CV </h1>
               <FaDownload size={20} />
              </a>
      </div>
   </div>
)
}

export default Navbar
