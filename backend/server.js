
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMOngoDB.js'
import cookieParser from 'cookie-parser'


const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()
app.use(express.json()) // from req.body to parse incoming req from json payload
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get('/', (req, res)=>{
//     res.send("hello mohsin to the backend")
// })




app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log(`server is running on ${PORT}`)
});
