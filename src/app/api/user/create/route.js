import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { databaseConnect } from "@/utils/db";
import bcrypt from "bcryptjs"

export async function POST(request, { params }) {
  try {
    databaseConnect();
    const user = await request.json();
    // const hashedPassword = bcrypt.hash(password, 10)
    const newUser = new User(user);
    const savedUser = await newUser.save();
    console.log(savedUser)
    return NextResponse.json(savedUser, { status: 203 });
  } catch (error) {
    // console.log(error)
    return NextResponse.json(
      { Error: error.message },
      { status: error.status }
    );
  }
}
