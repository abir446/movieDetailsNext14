"use client"
import Image from "next/image"

// import { AspectRatio } from "@/components/ui/aspect-ratio"

import React from 'react'

const Movie = ({title,released,img, director,country,rating,awards}) => {
  return (
    <div className="mt-5 bg-gradient-to-r from-purple-500 to-pink-200  border w-full md:w-1/2 rounded-lg p-4 flex flex-col items-center justify-center md:flex-row md:gap-4">

      <Image
      src={img}
      alt={title}
      height={120}
      width={180}
      priority
      className="rounded-md object-fit"
    />  
    
    <div className="flex flex-col">
        <div className=""><span className="font-bold">Name: </span>{title}</div>
        <div className=""><span className="font-bold">Release:</span>{released}</div>
        <div className=""><span className="font-bold">Directed by: </span>{director}</div>
        <div className=""><span className="font-bold">Rating: </span>{rating}, IMBD</div>
        <div className=""><span className="font-bold">Awards: </span>{awards}</div>
        <div className=""><span className="font-bold">Country: </span>{country}</div>
    </div>
    </div>
  )
}

export default Movie
