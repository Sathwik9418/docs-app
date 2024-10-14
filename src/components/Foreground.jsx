import React, { useRef } from 'react'
import Card from './card'

const Foreground = () => {

    // const data= [
    //     icon,desc,file size, close or download, tagdetails
    // ];

    const ref = useRef(null);

    const data = [
        {
            desc : "This is the background color",
            filesize: ".9mb",
            close : false,
            tag : {isOpen : true , tagTitle  : "Download Now", tagColor : "green"},
        },
        {
            desc : "This is the background color",
            filesize: ".9mb",
            close : true,
            tag : {isOpen : true , tagTitle  : "Download Now", tagColor : "blue"},
        },
        {
            desc : "This is the background color",
            filesize: ".9mb",
            close : false,
            tag : {isOpen : false , tagTitle  : "Download Now", tagColor : "green"},
        }
    ];

  return (
    <div ref={ref} className='fixed z-[3] flex-shrink-0 w-full h-full top-0 left-0 flex gap-5 flex-wrap p-5 '>
        {data.map((item,index)=>(
            <Card  data={item}  reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
