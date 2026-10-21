import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
const PORT = process.env.PORT || 8000
const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());

app.use("/auth",proxy(process.env.AUTH_SERVICE_URL));

app.get("/",(req,res)=>{
    res.json({
        message: "Hello Gateway Service"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})