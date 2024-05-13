import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton'


const Messages = () => {
  const{loading, messages} = useGetMessages();
  const lastMessaageRef = React.useRef(null);
  useEffect(()=>{
    setTimeout(()=>{
      lastMessaageRef.current?.scrollIntoView({behavior:'smooth'})
    },50)
  },[messages])



  return (
    <div className='px-4 flex-1 overflow-auto'>
    {!loading &&  
    messages.length > 0 &&
    messages.map((message) => (
        <div key={message._id} ref = {lastMessaageRef}>
          <Message  message={message} />
        </div>
    ))}
    {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
    
    {!loading && messages.length === 0 && (<p className='text-center text-gray-900'>Send a message to start a conversation</p>)}

    </div>
  )
}

export default Messages