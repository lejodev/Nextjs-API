import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { databaseConnect } from "@/utils/db";
import bcrypt from "bcryptjs"

export async function POST(request, { params }) {
  try {
    databaseConnect();
    const { name, password } = await request.json();
    const hashedPassword = bcrypt.hash(password, 10)
    const newUser = new User({ name, password: hashedPassword });
    const savedUser = await newUser.save();
    return NextResponse.json(savedUser, { status: 203 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { Error: error.message },
      { status: error.status }
    );
  }
}
