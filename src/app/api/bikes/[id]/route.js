import { NextResponse, NextRequest } from "next/server";
import { databaseConnect } from "@/utils/db";
import Bike from "@/models/Bike";

export async function GET(response, { params }) {
  try {
    databaseConnect();
    const id = params.id;
    const bike = await Bike.findById(id);
    if (!bike) {
      return NextResponse.json({ message: "Bike not found" }, { status: 404 });
    }
    return NextResponse.json(bike, { status: 200 });
  } catch (error) {
    return NextResponse.json({ Error: error.message }, { status: 400 });
  }
}
