import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <div className="h-[15vw] w-[15vw] flex justify-center items-center  rounded-full bg-zinc-100">
        <div className="h-2/3 w-2/3  flex justify-center items-center rounded-full bg-zinc-900">
        <div className="h-1/4 w-1/4  rounded-full bg-zinc-100">
        </div>
        </div>
        </div>
        <div className="h-[15vw] w-[15vw]  flex justify-center items-center  rounded-full bg-zinc-100"><div className="h-2/3 w-2/3  flex justify-center items-center rounded-full bg-zinc-900">
        <div className="h-1/4 w-1/4  rounded-full bg-zinc-100">
        </div>
        </div></div>
        </div>
        </div>
    </div>
  )
}

export default Eyes