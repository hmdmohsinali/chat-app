import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMesage= async(req, res)=>{
    try {
        const {message} = req.body
        const {id: receiverId} = req.params;
        const senderId = req.user._id;


        let conversation = await Conversation.findOne({
            participants:{
                $all: [senderId, receiverId]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        })

        if (newMessage){
            conversation.messages.push(newMessage._id)
        }
        //socket.io functionality will be here




        //this will take longer
        // await conversation.save(),
        //await newMessage.save()
        //this will run in parallel 
        await Promise.all([conversation.save(),
            newMessage.save()])
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMesage : ", error.message)
        res.status(500).json({error:" internal server error"})
    }
}

export const getMesages = async (req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatId]}
        }).populate("messages");// not refrence but actual messages

        if(!conversation){

            return res.status(200).json([])
        }
        const messages= conversation.messages

        res.status(200).json(messages)


    } catch (error) {
        console.log("Error in sendMesage : ", error.message)
        res.status(500).json({error:" internal server error"})
    }
}