import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue Monstreal"] text-[2.4vw] leading-[3.5vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech business that need
            to raise funds, sell products, explain complex ideas and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-bg-zinc-900'>
            <div className='w-1/2'>
                <h1 className='text-4xl text-black'>Our approach:</h1>
                <button className='px-10 mt-10 py-4 uppercase bg-zinc-900 rounded-full text-white flex justify-center items-center gap-8'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
        </div>
    </div>
  )
}

export default About