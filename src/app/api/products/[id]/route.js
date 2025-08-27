import { Product } from "../../../../model/post.model"
import { dbConnect } from "../../../../lib/dbconnect"
import { NextResponse } from "next/server";

export const GET = async (req,{ params }) => {
   const {id} =await params
   if(!id) return;
   await dbConnect()
   const singleproduct = await Product.findById(id)
   console.log(singleproduct)
   
   return NextResponse.json({"message":"success", singleproduct},{status:200})
}