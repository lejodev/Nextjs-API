import { NextRequest, NextResponse } from "next/server";
import { databaseConnect } from "@/utils/db";
import Cart from "@/models/Cart";
import Bike from "@/models/Bike";

// This endpoint emulates as if the purchase was made and the slected bikes are no longer available in stock
export async function POST(request, { params }) {
  try {
    databaseConnect();
    const userId = params.userId;
    // const cart = await Cart.find({ userId: userId });
    const updatedCart = await Cart.findAndModify({ userId: userId }, { purchased: true }, { new: true })
    console.log(updatedCart)
    await deleteBikes(cart);
    return NextResponse.json(updatedCart, { status: 200 });
  } catch (error) {
    return new Response(error);
  }
}

//This function goes inside Utils folder
async function deleteBikes(bikes) {
  try {
    databaseConnect();
    const updatedBikes = await Promise.all(
      bikes.map(async (bike) => {
        const updatedBike = await Bike.findByIdAndUpdate(
          { _id: bike.bikeId },
          { available: false },
          { new: true }
        );
        return updatedBike;
      })
    );
  } catch (error) {
    console.log("Error deleting one or more bikes");
  }
}
