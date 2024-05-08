import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try {

        const loggeedInUserId = req.user._id;

        const filteredUsers = await User.find({_id:{$ne:loggeedInUserId}}).select("-password")
        
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("error in getuserforsidebar ", error.message)
        res.status(500).json({error:"internal server error"})
    }
}