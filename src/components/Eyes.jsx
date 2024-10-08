import React, { useEffect, useState } from 'react';

export default function Eyes() { 
  const [rotate, setRotate] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll 
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-5 sm:gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          
       
          <div className="h-[30vw] sm:h-[15vw] w-[30vw] sm:w-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="h-2/3 w-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line w-full h-10 sm:h-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6  w-6  sm:h-8  sm:w-8 md:h-10   md:w-10   rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          
          <div className="h-[30vw] sm:h-[15vw] w-[30vw] sm:w-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="h-2/3 w-2/3 relative flex justify-center items-center rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line w-full h-10 sm:h-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6 w-6  sm:h-8  sm:w-8 md:h-10   md:w-10  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
