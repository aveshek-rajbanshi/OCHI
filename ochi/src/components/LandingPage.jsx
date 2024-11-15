import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='relative w-full h-screen bg-black pt-1'>
        <div className='textstructure mt-[230px] px-16'>
          {["We Created","Eye Opening","Presentations"].map((item,index)=>{
            return <div className='masker font-["Poppins"]'>
                    <div className='w-fit flex items-end overflow-hidden'>
                       {index === 1 &&
                        (<motion.div initial={{width: 0}}
                         animate={{width: "6vw"}}
                         transition={{ease: [0.76, 0, 0.24, 1]}}
                         className='w-[6vw] h-[3.1vw] bg-red-500 rounded-xl mr-[4px]'>
                          <img className='bg-cover bg-center bg-certain' src="./mac.jpg" alt="macbook"></img>
                         </motion.div>
                        )}
                      <h1 className='uppercase text-[4vw] leading-[3.5vw] tracking-tighter font-semibold'>{item}</h1>
                    </div>
                   </div>
          })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center px-16 py-8'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-10'>
              <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase'>start the project</div>
              <div className='w-10 h-10 rounded-full border-[1px] border-zinc-400 flex justify-center items-center'>
                 <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                 </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage