import React from 'react'
import Heading from './Heading'

const Contact = () => {
return (
    <div id='contact' className='mb-50'>
            <section className='flex items-center justify-center'>
            <Heading title="Contact" />
    </section>
    <div className='px-10 py-10'>
            <a href="https://github.com/nerokome" target="_blank" rel="noopener noreferrer">
                    <img className='w-[50px] h-[50px] 
                            rounded-full -mt-20
                             sm: flex justify-center items-center' src="/download.png" alt="Download" />
            </a>
            <a href="https://x.com/nerokome?s=21&t=9eD6yL3-XMpKGdHtbYi4TA" target="_blank" rel="noopener noreferrer">
                    <img className='w-[50px] h-[50px] 
                            rounded-full mt-20
                             sm: flex justify-center items-center' src="/X.png" alt="X" />
            </a>
            <a href="https://www.linkedin.com/in/oghenero-oghenekome-997360259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <img className='w-[50px] h-[50px] 
                            rounded-full mt-20
                             sm: flex justify-center items-center' src="/Li.png" alt="LinkedIn" />
            </a>
            <a href="mailto:nerooghenekome@gmail.com">
                    <img className='w-[50px] h-[50px] 
                            rounded-full mt-20
                             sm: flex justify-center items-center' src="/email.png" alt="Email" />
            </a>
    </div>
    </div>
)
}

export default Contact
