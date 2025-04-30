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
   <div className={`left-0 top-0 w-full z-10 ease-in duration-300 ${navOpen ? 'h-screen overflow-hidden' : ''}`}>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
          <Link href= '/'>
          <h1 className='text-4xl text-gray-400'>Nero Oghenekome</h1>
          </Link>
          <ul className='hidden sm:flex'>
               <li>
                   <Link href='/'>
                   <h1 className='font-mono text-amber-50 text-2xl p-4 hover:text-purple-400 cursor-grab'>Home</h1>
                   </Link>
               </li>
               <li>
                   <Link href='/#about'>
                   <h1 className=' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab'>About</h1>
                   </Link>
               </li>
               <li>
                   <Link href='/#skills'>
                   <h1 className=' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab'>Skills</h1>
                   </Link>
               </li>
               <li>
                   <Link href='/#projects'>
                   <h1 className= ' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab'>Projects</h1>
                   </Link>
               </li>
          <li>
               <Link href='/#contact'>
               <h1 className=' font-mono text-amber-50 text-2xl p-4  hover:text-purple-400 cursor-grab'>Contact</h1>
               </Link>
          </li>
      </ul>
      <div className='block sm:hidden z-10' onClick={toggleNav}>
      <CiMenuBurger size={20} color='white' />
      </div>
      {navOpen && (
         <div
            className='absolute top-0 left-0 right-0 bottom-0 flex justify-center
            items-center w-full h-screen bg-black text-center ease-in duration-300 sm:hidden'
         >
            <ul>
               <li>
                  <Link href='/'>
                  <h1 className='font-mono text-amber-50 p-4 text-4xl hover:text-gray-500'>Home</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#about'>
                  <h1 className=' font-mono text-amber-50 p-4 text-4xl
                   hover:text-gray-500 '>About</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#contact'>
                  <h1 className=' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500'>Skills</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#projects'>
                  <h1 className= ' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500'>Projects</h1>
                  </Link>
               </li>
               <li>
                  <Link href='/#contact'>
                  <h1 className= ' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500'>Contact</h1>
                  </Link>
                  
               </li>
               <li>
                  <Link href='https://drive.google.com/file/d/1ou7ISlZG4gFGjjEOVpTr7V5KQkCoFM7x/view?usp=sharing'>
                  <h1 className= ' font-mono text-amber-50 p-4 text-4xl hover:text-gray-500'>CV</h1>
                  </Link>
                  
               </li>
            </ul>
         </div>
      )}
      <a
                href="https://drive.google.com/file/d/1ou7ISlZG4gFGjjEOVpTr7V5KQkCoFM7x/view?usp=sharing"
                className="hidden sm:flex items-center border bg-green-300 text-white
                  px-4 py-2 mr-2.5 rounded-lg hover:bg-blue-300 
                  transition-colors duration-200 font-medium text-center "
                  
              >
               <h1 className='text-center'>Download CV </h1>
               <FaDownload size={20} />
              </a>
      </div>
   </div>
)
}

export default Navbar
