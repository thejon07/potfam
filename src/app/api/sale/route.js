import { NextResponse } from "next/server";
import { Product } from "../../../model/post.model"
import { dbConnect } from "../../../lib/dbconnect"
export async function GET(){
   try {
     await dbConnect()
     const data = await Product.find()
     console.log(data)
     return NextResponse.json({message:"response from dale",data},{status:200})
   } catch (error) {
    console.log(error)
   }
}