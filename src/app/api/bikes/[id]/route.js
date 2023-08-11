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

export async function PUT(request, { params }) {
  try {
    const newBike = await request.json();
    const bikeId = params.id;
    const updateBike = await Bike.findByIdAndUpdate(bikeId, newBike, {
      new: true,
    });
    return NextResponse.json(updateBike, {
      status: 203,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ "=Error=": error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const deletedBike = await Bike.findByIdAndDelete(id);
    if (!deletedBike) {
      return NextResponse.json({ error: "Bike not found" }, { status: 400 });
    }
    return NextResponse.json(deletedBike, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
