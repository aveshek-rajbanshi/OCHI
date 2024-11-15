import React from 'react'
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[12vw] pr-10 leading-none font-[Neue Monstreal] font-bold uppercase pt-2 mb-4'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[12vw] pr-10 leading-none font-[Neue Monstreal] font-bold uppercase pt-2 mb-4'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[12vw] pr-10 leading-none font-[Neue Monstreal] font-bold uppercase pt-2 mb-4'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee