import React from 'react'
import Card from './Card'

export default function Maincards() {
  return (
    <div className="text-gray-600 ">
        <div className="container px-12 py-24 mx-auto">
            <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 -m-4">
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif" />
            </div>
        </div>
        <div className='w-full h-96 bg-cover bg-center relative flex justify-start items-center'>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 "></div>
            <img className='w-full h-full object-cover' src="/Wallpaper 4k Norway Lofoten Mountains Evening Coast 4k Wallpaper.jfif"/>
            <div className='absolute text-white p-10 flex flex-col justify-start gap-8 max-w-3xl px-8 md:pl-40 '>
                <h1 className='md:text-4xl font-bold '>SuperKote Products</h1>
                <p className='md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eius inventore deleniti nam iure, nihil ducimus tempora quasi laudantium odit, fugiat cumque delectus, natus est optio asperiores exercitationem sint quos.</p>
            </div>
        </div>
    </div>
  )
}
