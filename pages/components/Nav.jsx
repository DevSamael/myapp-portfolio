import React from 'react'
import { useState } from 'react'

const Nav = () => {
  let [open,setOpen]=useState(false);
  return (
    <div id='nav' className='w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between py-4 md:px-24 lg:px-52 px-10 bg-black'>
        <div className='cursor-pointer flex items-center'>
            <img className='h-7 md:h-14 lg:h-16 mt-3.5' src="/SMLogo.svg" alt="" />
        </div>
        <div onClick={()=>setOpen(!open)} className='text-4xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in font-mono bg-black ${open ? 'top-15 opacity-100 shadow-xl shadow-black':'top-[-350px]'}`}>
          <li className='md:ml-8 text-md sm:text-sm lg:text-xl md:my-0 my-7 font-bold'>
          <a href="https://www.linkedin.com/in/samael-musgrove-47957a207/"><i class="fa-brands fa-linkedin-in text-black rounded-full shadow-lg bg-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300"></i> </a> 
          </li>
          <li className='md:ml-8 text-md sm:text-sm lg:text-xl md:my-0 my-7 font-bold'>
          <a href="https://github.com/DevSamael"><i class="fa-brands fa-github text-black rounded-full shadow-lg bg-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300"></i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav