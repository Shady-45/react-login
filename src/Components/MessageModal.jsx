import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const MessageModal = ({message,setOnSuccess} ) => {
  return (
    <div className='message-modal'
    >
    
    <p>{message}</p>
    <AiOutlineCloseCircle className='close-action' onClick={()=>setOnSuccess(false)}/>
    </div>
  )
}

export default MessageModal