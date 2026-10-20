import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()

app.get("/",(req,res)=>{
    res.json({
        message: "Hello Auth Service"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDb();
})