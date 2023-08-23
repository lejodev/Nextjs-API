import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { databaseConnect } from "@/utils/db";

export async function POST(request, { params }) {
  try {
    databaseConnect();
    const user = await request.json();
    const newUser = new User(user);
    const savedUser = await newUser.save();
    console.log(savedUser);
    console.log(user);
    return NextResponse.json(savedUser, { status: 203 });
  } catch (error) {
    return NextResponse.json(
      { Error: error.message },
      { status: error.status }
    );
  }
}
