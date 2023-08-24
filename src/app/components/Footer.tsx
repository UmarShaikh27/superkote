import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-between">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto flex justify-start items-center flex-col text-center md:text-left md:w-1/2">
      <a className="flex title-font font-medium items-center md:justify-start justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">SuperKote</span>
      </a>
      <p className="mt-2 text-sm ">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-gray-200">First Link</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Second Link</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Third Link</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-gray-200">First Link</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Second Link</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Third Link</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Fourth Link</a>
          </li>
        </nav>
      </div>
     
    </div>
  </div>
  
</footer>
  )
}
