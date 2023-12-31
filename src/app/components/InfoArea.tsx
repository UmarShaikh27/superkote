import React from 'react'

export default function InfoArea() {
  return (
    <div className='py-24'>
        <div className="text-gray-600 body-font">
            <div className=" px-2 sm:px-12 grid grid-flow-row grid-cols-1 md:grid-cols-2 items-center bg-gray-200">
                <div className="mb-10 md:mb-0">
                    <img className="object-cover object-center w-full" alt="hero" src="/mountain.jfif"/>
                </div>
                
                <div className="">
                    <div className='lg:flex-grow  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out</h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-gray-600 body-font">
            <div className=" my-12  px-2 sm:px-12 flex md:flex-row flex-col-reverse items-center bg-gray-200">              
                <div className="md:w-1/2">
                    <div className='lg:flex-grow  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out</h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    </div>
                </div>

                <div className="mb-10 md:mb-0 md:w-1/2">
                    <img className="object-cover object-center w-full" alt="hero" src="/mountain.jfif"/>
                </div>
            </div>
        </div>
    </div>
  )
}
