import { NextRequest, NextResponse } from "next/server";
import { databaseConnect } from "@/utils/db";
import Cart from "@/models/Cart";

export async function GET(request, { params }) {
  try {
    databaseConnect();
    const userId = params.id;
    const userCart = await Cart.find({ userId: userId });
    return NextResponse.json({ userCart });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Error: error.message });
  }
}

// Delete cart related to a specific user
export async function DELETE(request, { params }) {
  try {
    const userId = params.id;
    const bikeId = request.nextUrl.searchParams.get("bikeId");
    if (!userId) {
      throw new Error("No user id provided");
    }
    const deletedBike = await Cart.deleteMany({ userId: userId });
    if (!deletedBike) {
      return new Response("Problem deleting bike", { status: 400 });
    }
    return NextResponse.json({ deletedBike });
  } catch (error) {
    console.log(error);
    return new Response(error);
  }
}
