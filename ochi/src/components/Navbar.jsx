import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-16 py-6 font-["Neue Montreal"] flex justify-between items-center'>
        <div className='logo'>
            <h1 className='text-white text-[28px] font-medium'>Ochi</h1>
        </div>
        <div className='links flex gap-10'>
            {["Services","Our Work","About Us","Insights","Contact"].map((item,index)=>(
                <a key="index" className={`text-lg capitalize font-md text-white ${index === 4 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar