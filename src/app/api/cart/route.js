import { NextResponse, NextRequest } from "next/server";
import { databaseConnect } from "@/utils/db";
import Cart from "@/models/Cart";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function GET(request, { params }) {
  const session = await getSession()
  console.log("FGDSBSDV")
  return new Response("sdfgd");
}

export async function POST(request, { params }) {
  try {
    databaseConnect();
    const cartParam = await request.json();
    console.log(cartParam);
    const newCart = new Cart(cartParam);
    const savedParam = await newCart.save();
    console.log(savedParam);
    return Response.json(savedParam);
  } catch (error) {
    console.log(error);
    return Response.json({ Error: error.message }, { status: 500 });
  }
}
