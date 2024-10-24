import { NextResponse } from "next/server";

export function GET(res){
    return NextResponse.json({message:"homepage"})
}