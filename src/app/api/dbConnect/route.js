import mongoose from "mongoose";

const mongourl = process.env.MONGO_URL;

export default async function connectDb(){
    try {
        await mongoose.connect(mongourl);
          console.log("Database Connected");
    } catch (error) {
      return  console.log("not connected")
    }
}

