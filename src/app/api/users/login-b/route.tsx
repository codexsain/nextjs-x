import { connectToDatabase } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"


connectToDatabase()

export async function POST(request: NextRequest) {
    try {
    
        const reqBody = await request.json()
        const { email, password } = await reqBody
        console.log(reqBody + "from login route")
        console.log(email + " from login route")
        // cheack if user exists 
        const user = await User.findOne({ email })
        console.log(user )
        if (!user) {
            return NextResponse.json({ error: "user not found please sign up first" }, { status: 400 })
        }

        // cheack if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        console.log(validPassword + " from login route")
        if (!validPassword) {
            return NextResponse.json({ error: "invalid password" }, { status: 400 })
        }

        // create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        console.log("token from login route", token)
  
        const response = NextResponse.json({
            message: "user logged in successfully",
            success: true,
        })

       response.cookies.set ("token", token, 
        { httpOnly: true}
       )
       
       return response



    }catch (error : any) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
}