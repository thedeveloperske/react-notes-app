import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return (
    <div className='note'>
        <span>Hello, this is our first note! Eureka!!</span>
        <div className='note-footer'>
            <small>07/02/2023</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note