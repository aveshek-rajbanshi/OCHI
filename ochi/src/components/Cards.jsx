import React from 'react'

function cards() {
  return (
    <div className='w-full h-screen bg-black px-32 flex items-center gap-5'>
        <div className='cardContainer h-[50vh] w-1/2'>
            <div className='card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]'>
                <h1 className=' text-5xl font-semibold text-[#CDEA68]'>Ochi</h1>
                <button className='absolute left-[16px] px-6 py-1 rounded-full border-2 bottom-6'>&copy; 2024 july</button>
            </div>
        </div>

        <div className='cardContainer flex gap-5 h-[50vh] w-1/2'>
            <div className='card relative w-1/2 h-full rounded-xl bg-[#4C9A2A] flex items-center justify-center'>
               <h1 className=' text-5xl font-semibold text-zinc-100 '>Clutch</h1>
               <button className='absolute left-[16px] px-6 py-1 rounded-full border-2 bottom-6'>&copy; 2024 july</button>
            </div>
            <div className='card relative w-1/2 h-full rounded-xl bg-[#A4DE02] flex items-center justify-center'>
            <h1 className=' text-5xl font-semibold text-zinc-100 '>Break</h1>
            <button className='absolute left-[16px] px-6 py-1 rounded-full border-2 bottom-6'>&copy; 2024 july</button>
            </div>
        </div>
    </div>
  )
}

export default cards