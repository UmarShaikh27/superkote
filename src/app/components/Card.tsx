import React from 'react'

interface Cardprops {
  title: string;
  desc: string;
  fig: string; //
}

export default function Card(props : Cardprops) {
  return (
      <div className="lg:m-4 m-2 bg-gray-100">
        <a className="block relative h-48 overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.fig}/>
        </a>
        <div className="my-4 p-5">
          <h2 className="text-gray-900 title-font text-4xl font-medium py-2">{props.title}</h2>
          <p className="mt-1">{props.desc}</p>
        </div>
      </div>
  )
}
