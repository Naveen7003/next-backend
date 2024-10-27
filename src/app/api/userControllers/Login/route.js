import { NextResponse } from "next/server";
import connectDb from "../../dbConnect/route";
import { userModel } from "../../Models/userModel/route";

export async function POST(req){
    await connectDb()
    try{
    const body = await req.json();
    const user = await userModel.findOne({email: body.email}).exec();
    if(user){
        return NextResponse.json({message:"user found"})
    }
    }catch(error){
        console.log("User not found")
    }
}
