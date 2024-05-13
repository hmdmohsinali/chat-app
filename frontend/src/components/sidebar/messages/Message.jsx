import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor  = fromMe ? "bg-blue-500" : "";

  const options = { hour: 'numeric', minute: 'numeric', hour12: true};
const timeStamp = new Date(message.createdAt).toLocaleTimeString([], options);

  return (
    <div className={`chat ${chatClassName} `}>
      <div className="chat-image avatar">
       <div className="w-10 rounded-full">
        <img
          src={profilePic}
          alt="Tailwind CSS chat bubble component"
        />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor}`}>
          {message.message}    </div>
      <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">{timeStamp}</div>
    </div>
  );
};

export default Message;

//starter code
// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//        <div className="w-10 rounded-full">
//         <img
//           src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//           alt="Tailwind CSS chat bubble component"
//         />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-blue-500`}>
//         Hi! whats up
//       </div>
//       <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">12:50</div>
//     </div>
//   );
// };

// export default Message;

