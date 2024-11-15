import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex gap-5 px-16 py-20 bg-black font-["Neue Monstreal"]'>
        <div className='w-1/2 h-full flex justify-between flex-col'>
        <div className='headingtext'>
            <h1 className='text-[4vw] -mb-2 font-semibold uppercase leading-none '>Eye</h1>
            <h1 className='text-[4vw] -mb-2 font-semibold uppercase leading-none '>Opening</h1>
        </div>
        <div className='headingbottom font-medium text-[16px]'>ochi.</div>
        </div>

        <div className='w-1/2 h-full'>
           <h1 className='text-[4vw] -mb-2 font-medium uppercase leading-none px-[16px] py-[8px]'>Presentations</h1>
           <div className='linksdet font-["Poppins"] flex flex-col px-[16px] py-[8px] mt-[60px]'>
              <a href="#" className='border-b-[1px] mb-4 pb-4 px-[2px] border-zinc-700'>Discord</a>
              <a href="#" className='border-b-[1px] mb-4 pb-4 px-[2px] border-zinc-700'>Github</a>
              <a href="#" className='border-b-[1px] mb-4 pb-4 px-[2px] border-zinc-700'>Linkdin</a>
              <a href="#" className='border-b-[1px] mb-4 pb-4 px-[2px] border-zinc-700'>Facebook</a>
              <a href="#" className='border-b-[1px] mb-4 pb-4 px-[2px] border-zinc-700'>Instagram</a>
          </div>
        </div>
    </div>
  )
}

export default Footer