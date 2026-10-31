import {getDataFromToken} from "@/helpers/getDataFromToken"
import {connectToDatabase} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";



connectToDatabase();



export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error:  error.response.data.error }, {status: 400});
    }

}