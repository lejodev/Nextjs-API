import { NextResponse, NextRequest } from "next/server";
import { databaseConnect } from "@/utils/db";
import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";
import Bike from "@/models/Bike";

export async function GET() {
  try {
    databaseConnect();
    const bikes = await Bike.find();
    console.log(bikes);
    return bikes
      ? NextResponse.json(bikes)
      : Response({ Error: "SFSAGRGDF" }).status(400);
  } catch (error) {
    console.log("======================ERROR=======================", error);
    return new Response("ERRORRRRRRR", error);
  }

  //   return new Response("BIKE");
}

export async function POST(request, response) {
  try {
    const session = await getServerSession(authOptions);
    if (session) {
      console.log("Session", JSON.stringify(session, null, 2));
      return new Response({ Message: "Signed in" }).status(200);
    } else {
      console.log("Not signed in");
      return NextResponse.json({ Error: "Not signed in" }, { status: 403 });
    }
    // databaseConnect();
    // const bike = await request.json();
    // const newBike = new Bike(bike);
    // const savedBike = await newBike.save();
    // console.log(savedBike);
    // console.log(bike);
    // return new Response("Bike created successfully", { status: 203 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ ERROR: error.message });
  }
}
