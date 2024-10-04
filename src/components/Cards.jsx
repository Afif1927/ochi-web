import React from 'react'

function Cards() {
  return (
   <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">
    <div className="cardcontainer h-[50vh] w-1/2">
    <div className="card relative w-full rounded-xl h-full flex items-center justify-center bg-[#004D43]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-22</button>
    </div>
    </div>
    <div className="cardcontainer  flex gap-5 w-1/2 h-[50vh] ">
    <div className="card relative w-1/2  flex items-center justify-center  rounded-xl  h-full bg-[#17413b]">
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-22</button></div>
    <div className="card relative w-1/2   flex items-center justify-center rounded-xl h-full bg-[#17413b]">
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-22</button></div>
    </div>
   </div>
  )
}

export default Cards