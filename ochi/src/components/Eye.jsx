import React, { useEffect,useRef, useState } from 'react'

function Eye() {

  const [rotate,setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      console.log(e.clientX,e.clientX);

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      
      setRotate(angle-180);
    })
  })

  return (
    <div className='eye w-full h-screen overflow-hidden'>
       <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
            <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
               <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                 <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9'>
                 <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                 </div>
               </div>
            </div>

            <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
              <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                 <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9'>
                    <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                 </div>
              </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Eye