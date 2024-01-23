import React from 'react'
import { IoMdClose } from "react-icons/io";

const Task = (props) => {
  return (
    <div className='flex bg-white'>
        <div className='flex-none mr-4'>
            <input type="checkbox" className='bg-orange-700 text-white' />
        </div>
        <div className='flex-1 mr-2' >
          <p>{props.text}</p>
        </div>
        <div className='flex-none'>
          <IoMdClose />
        </div>
    </div>
  )
}

export default Task