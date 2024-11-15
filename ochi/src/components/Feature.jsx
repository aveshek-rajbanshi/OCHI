import { motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=>{
      cards[index].start({y: "0"});
  }

  const handleHoverEnd = (index)=>{
    cards[index].start({y: "100%"});
}


  return (
    <div className='w-full py-[40px] bg-black'>
        <div className='w-full px-16 border-b-[1px] border-zinc-500 pb-[40px]'>
            <h1 className='text-4xl leading-none tracking-tight font-["Poppins"]'>Featured projects</h1>
        </div>
        <div className='mt-10 px-16'>
          <div className='cards w-full flex gap-10'>
            <motion.div
             onHoverStart={()=>handleHover(0)}
             onHoverEnd={()=> handleHoverEnd(0)}
             className='cardcontainer relative w-1/2 h-[70vh]'>
                    <h1 className='absolute flex overflow-hidden uppercase left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tight text-5xl font-semibold font-["Neue Monstreal"]'>
                    {"Friday.".split("").map((item, index)=>(
                    <motion.span
                     initial={{y: "100%"}}
                     animate={cards[0]}
                     transition={{ease:[0.22,1,0.36,1],delay: index*.01}} 
                       className='inline-block'>{item}</motion.span>
                ))}
                    </h1>
                <div className='w-full h-full rounded-xl overflow-hidden'>
                   <img className='w-full h-full bg-cover bg-center bg-auto bg-contain' src="./cola.jpg" alt="Coca-Cola"></img>
                </div>
            </motion.div>
            <motion.div
               onHoverStart={()=>handleHover(1)}
               onHoverEnd={()=> handleHoverEnd(1)}
            
             className='cardcontainer relative w-1/2 h-[70vh]'>
            <h1 className='absolute flex overflow-hidden uppercase right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tight text-5xl font-semibold font-["Neue Monstreal"]'>
                {"Sunday.".split("").map((item, index)=>(
                  <motion.span
                     initial={{y: "100%"}}
                     animate={cards[1]}
                     transition={{ease:[0.22,1,0.36,1],delay: index*.01}} 
                       className='inline-block'>{item}</motion.span>
                ))}
            </h1>
                <div className='w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover bg-center bg-auto' src="./stra.jpg" alt="Strawberry"></img>
                </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Feature