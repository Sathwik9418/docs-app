import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

const card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.1}} dragElastic={1} className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] px-8 py-10 text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm m-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0 '>
            <div className='flex items-center justify-between py-5 px-8 mb-3'> 
                <h1>{data.filesize}</h1>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosCloseCircleOutline size=".8em" color='white'/> : <IoDownloadOutline size=".8em" color='white'/>}
                
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
                      <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                  )
            }
            
        </div>
    </motion.div>
  )
}

export default card
