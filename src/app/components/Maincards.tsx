import React from 'react'
import Card from './Card'
import { Oswald} from '@next/font/google'


const oswald = Oswald({
  subsets : ['latin'],
  weight : '400'
})
export default function Maincards() {
  return (
    <div className={oswald.className}>
        <div className="container sm:px-12 px-2 py-20 mx-auto">
            <h1 className='text-4xl lg:mb-6 mb-3 text-black'>Super Duper Products</h1>
            <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 -m-4 text-gray-600">
            {/* <div className="flex flex-wrap -m-4"> */}
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/mountain.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/mountain.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/mountain.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/mountain.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/mountain.jfif" />
                <Card title ="My Title" desc= "Lorem psum neque potentinostra at fringilla, arcu varius tincidunt molestie congue vulputate curabitur, turpis ante convallis mollis integer sociosqu." fig="/mountain.jfif" />
            </div>
        </div>
        <div className='w-full h-96 bg-cover bg-center relative flex justify-start items-center' data-aos="fade-up">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 "></div>
            <img className='w-full h-full object-cover' src="/mountain.jfif"/>
            <div className='absolute text-white p-10 flex flex-col justify-start gap-8 max-w-3xl px-8 md:pl-40 sm:w-3/4'>
                <h1 className='md:text-4xl text-2xl font-bold '>SuperKote Products</h1>
                <p className='md:text-lg text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eius inventore deleniti nam iure, nihil ducimus tempora quasi laudantium odit, fugiat cumque delectus, natus est optio asperiores exercitationem sint quos.</p>
            </div>
        </div>
    </div>
  )
}
