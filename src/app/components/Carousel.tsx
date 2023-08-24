import React from 'react'
import { Oswald} from '@next/font/google'


const oswald = Oswald({
  subsets : ['latin'],
  weight : '400'
})

export default function carousel() {
  return (
    <div className={oswald.className}>
    <div className= 'w-full h-96 lg:h-128 bg-cover bg-center relative flex justify-start items-center'>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
        <video className='w-full h-full object-cover' autoPlay loop muted src="/myvid.mp4"/>
        <div className='absolute text-white sm:px-14 px-6 flex flex-col justify-start gap-8 max-w-3xl '>
          <h1 className='md:text-5xl font-bold '>SuperKote Products</h1>
          <p className='md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eius inventore deleniti nam iure, nihil ducimus tempora quasi laudantium odit, fugiat cumque delectus, natus est optio asperiores exercitationem sint quos.</p>
        </div>
    </div>
    </div>
 
  )
}
