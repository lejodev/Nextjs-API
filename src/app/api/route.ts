import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    return new Response("RESP")
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body)
    return new Response("POST SUCCEDED")
}