'use client'

import React from 'react'

export default function Nav() {
  return (
    <div className="navbar bg-black flex justify-around md:px-20">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg md:text-xl font-bold">SuperKote</a>
      </div> 
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

          </a>
          <div className='lg:flex justify-center items-center gap-4 text-sm hidden'>
          <a href='#'>Products</a>
          <a href='#'>PaintEx</a>
          <a href='#'>Token Story</a>
          <a href='#'>Shade Cards</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact Us</a>
          </div>
          <div tabIndex={0} className="dropdown dropdown-end lg:hidden">
            <label className='btn btn-ghost rounded-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rpba:" data-state="closed"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>            
            </label>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a>Products</a></li> 
              <li><a>PaintEx</a></li>
              <li><a>Token Story</a></li>
              <li><a href='#'>Shade Cards</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  )
}
