import { NextResponse, NextRequest } from "next/server";
import { databaseConnect } from "@/utils/db";
import Bike from "@/models/Bike";

export async function GET() {
    try {
        databaseConnect()
        const bikes = await Bike.find()
        const bikesList = await bikes
        if (bikesList) {
            return NextResponse.json(bikesList, { status: 200 })
        } else {
            return NextResponse.json({ "Warning": "No bikes on database" }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ "ERROR": error })
    }
}