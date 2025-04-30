import React from 'react'
import Heading from './Heading'

const Projects = () => {
  return (
    <div id= 'projects' className=''>
      <section className='flex items-center justify-center py-10 sm:py-5'>
        <Heading title="Projects" />
      </section>
      <div>
        <h4 className='text-2xl text-white px-15 py-2'>
          <span className='text-sky-300'>CHATAPP</span>: Firebase authentication for signup,
          Login and logout with email, cloud firestore for storing and
          organizing document-based structures and also secures messages
          while enabling real-time interactions. Provided
          users identification and provider for state management of UI of the apps
        </h4>
        <div className='flex items-center justify-center sm:h-auto w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-row gap-4 px-20 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[300px] h-[350px] rounded-2xl' src="/home.jpg" alt="" />
              <img className='w-[300px] h-[350px] rounded-2xl' src="/chat.jpg" alt="" />
            </div>
            <div className='flex items-center justify-center'>
              <a
                href="https://nerochat-ovvk.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-4 py-2 mr-2.5 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/nerochat.git"
                className="flex items-center border bg-purple-300 text-white
                  px-4 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-2xl text-white px-15 py-2'>
          <span className='text-sky-300'>EXPENSE TRACKER</span>: A expense tracker with firebase database
           as storage , so as to input your daily expenses which is recorded,
           calculated and stored in the database.
        </h4>
        <div className='flex items-center justify-center sm:h-auto w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-row gap-4 px-20 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[300px] h-[350px] rounded-2xl' src="/expen.jpg" alt="" />
              <img className='w-[300px] h-[350px] rounded-2xl' src="/expense.jpg" alt="" />
            </div>
            <div className='flex items-center justify-center'>
              <a
                href="https://expense-sooty-nine.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-4 py-2 mr-2.5 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/Expense.git"
                className="flex items-center border bg-purple-300 text-white
                  px-4 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-2xl text-white px-15 py-2'>
          <span className='text-sky-300'>CARTIER WATCHES</span>: Cartier customized e-commerce watch app with an outstanding UI which managed with provider state management, 
          it includes basic functionalities like adding and removing items from the carts
        </h4>
        <div className='flex items-center justify-center sm:h-auto w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-row gap-4 px-20 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[300px] h-[350px] rounded-2xl' src="/cart.jpg" alt="" />
              <img className='w-[300px] h-[350px] rounded-2xl' src="/shop.jpg" alt="" />
            </div>
            <div className='flex items-center justify-center'>
              <a
                href="https://nerogit.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-4 py-2 mr-2.5 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/nerogit.git"
                className="flex items-center border bg-purple-300 text-white
                  px-4 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-2xl text-white px-15 py-2'>
          <span className='text-sky-300'>MODERN HOME UI</span>: A home app with properties used for access basic features of a home,
           The buttons made are used to regulate the state of the smart devices
        </h4>
        <div className='flex items-center justify-center sm:h-auto w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-row gap-4 px-20 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[300px] h-[350px] rounded-2xl' src="/modern.jpg" alt="" />
              
            </div>
            <div className='flex items-center justify-center'>
              <a
                href="https://nerohome.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-4 py-2 mr-2.5 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/modern.git"
                className="flex items-center border bg-purple-300 text-white
                  px-4 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat the above structure for other projects */}
    </div>
  )
}

export default Projects
