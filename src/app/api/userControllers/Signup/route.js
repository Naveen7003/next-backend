import { NextResponse } from "next/server";
import { userModel } from "../../Models/userModel/route";
import connectDb from "../../dbConnect/route";
export  async function POST(req){
    await connectDb();
    try{
        const body = await req.json();
        const user = await new userModel(body).save();
        return NextResponse.json({message:"user created"})
    }catch(error){
        return NextResponse.json({message:"something went wrong"})
    }

}