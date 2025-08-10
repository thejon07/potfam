import { dbConnect } from "../../../../lib/dbconnect";
import {User} from "../../../../model/user.model"; // make sure your model exports default
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }
    const saltrounds = 10;
    const hashedpassword = await bcrypt.hash(password,saltrounds)

    const newUser = await User.create({ username, email, password:hashedpassword })
    const newuserdata = {
        username:newUser.username,
        email:newUser.email,
    }
    return NextResponse.json(
      { message: "User created successfully", user: newuserdata },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
};
