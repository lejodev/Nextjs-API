import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { databaseConnect } from "@/utils/db";

export async function POST(request, { params }) {
  try {
    databaseConnect();
    const { userName, password } = await request.json();
    return User.find({ name: userName, password: password })
      .then(
        (doc) => NextResponse.json(doc, { status: 200 })
      )
      .catch((error) =>
        NextResponse.json({ "Error message": error }, { status: 400 })
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ "Error message": error }, { status: 400 });
  }
}
