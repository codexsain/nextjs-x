import { connectToDatabase } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

connectToDatabase()


export async function POST(request: NextRequest) {


    try {

        const reqBody = await request.json()
        const { username, email, password } = await reqBody
        // console.log(reqBody)

        if (
            [username, email, password].some((field) => field?.trim() === "")
        ) {
            return NextResponse.json({ error: "all feilds are required" }, { status: 400 })

        }




        // cheack if user already exists
        const userA = await User.findOne({ email })
        
        if (userA) {
            console.log("userA", userA)
            return NextResponse.json({ error: "user already exist" }, { status: 400 })
        }



        // const saltRounds = bcrypt.genSalt(10);
        const saltRounds = 10;
        var hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password:', hashedPassword);




        const newUser = await new User({
            password: hashedPassword,
            email,
            username
        })

        const saveUser = await newUser.save()



        return NextResponse.json({
            message: "user created successfully",
            success: true,
            saveUser,

        })




    } catch (error: any) {

        return NextResponse.json({ error: error.message },
            { status: 500 })




    }



}