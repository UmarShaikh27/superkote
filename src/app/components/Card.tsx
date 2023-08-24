"use client";
import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

interface Cardprops {
  title: string;
  desc: string;
  fig: string; //
}

export default function Card(props : Cardprops) {

  const ref = useRef(null)
  const {scrollYProgress} =  useScroll({
    target :ref,
    offset :["0 1","1 1"]
  })

  return (

      <motion.div 
        className="lg:m-4 m-6 bg-gray-100" data-aos="fade-up"
        ref = {ref}
        style={{
          scale : scrollYProgress,
          opacity : scrollYProgress,
        }}
        // animate={{ x: [null, 100, 0] }}
      >
      {/* <div className="lg:w-1/3 md:w-1/2 p-4 w-full"> */}
      <div className='margin-6 bg-slate-50'>
        <a className="block relative h-48 overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.fig}/>
        </a>
        <div className="my-4 p-5">
          <h2 className="text-gray-900 title-font text-4xl font-medium py-2">{props.title}</h2>
          <p className="mt-1">{props.desc}</p>
        </div>
      </div>
      </motion.div>
  )
}
