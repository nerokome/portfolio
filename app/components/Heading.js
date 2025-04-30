import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='
    text-purple-300 text-[32px]
     font-meduim flex items-center gap-4 py-16 px-6 ' >
      {title}
      <div className=' h-[2px] w-[40px] translate-y-1'></div>
    </div>
  )
}

export default Heading
