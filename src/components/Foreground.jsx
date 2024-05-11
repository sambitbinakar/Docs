import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null)
    const data = [
        {desc:"Lorem ipsum dolor sit amet consectetur adipisicing." ,filesize:"1mb",close:true,tag:{ isopen:true, tagTitle:"Download Now" , tagColor:"green",}},
        {desc:"Lorem ipsum dolor sit amet consectetur adipisicing." ,filesize:"1mb",close:true,tag:{ isopen:true, tagTitle:"click Now" , tagColor:"green",}},
        {desc:"Lorem ipsum dolor sit amet consectetur adipisicing." ,filesize:"1mb",close:true,tag:{ isopen:true, tagTitle:"Download Now" , tagColor:"blue",}}
    ]
  return (
    <div className=" fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap">
        
        {data.map((item,index)=>(<Card data={item} reference={ref}/>))}
    </div>
  )
}

export default Foreground