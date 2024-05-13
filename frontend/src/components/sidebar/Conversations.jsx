import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
 const {loading, conversations} =  useGetConversation()
 console.log("conversations", conversations)
  return (
    <div className='flex py-2 flex-col overflow-auto'>

      {conversations.map((conversation,idx)=>(
        <Conversation key={conversation._id}
        conversation={conversation}
        emoji = {getRandomEmoji()}
        lastIdx = {idx === conversations.length - 1 }
        
        
        />
      ))}

       {loading ? <span className='loading loading-spinner'></span>: null}
    </div>
  )
}

export default Conversations


// starter code


// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='flex py-2 flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations