import mongoose from "mongoose"

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDb successfully!");
    }catch(error){
        console.log("Error connecting to mongodb atlas ",error.message);
        process.exit(1);
    }
}

export default connectDb;