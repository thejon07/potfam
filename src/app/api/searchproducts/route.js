import { NextResponse } from "next/server";
import { dbConnect } from "../../../lib/dbconnect";
import { Product } from "../../../model/post.model";

export const POST = async (req) => {
  try {
    const body = await req.json();    
    const data = body.data;
    console.log(data)

    if (!data) {
      return NextResponse.json({ message: "No search query provided" }, { status: 400 });
    }

    await dbConnect(); 
    const productdata = await Product.find({
      title:{ $regex: `^${data}`, $options: "i" }
    });
    console.log(productdata)

    return NextResponse.json(
      { message: "successfull", productdata },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
};