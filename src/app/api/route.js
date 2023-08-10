import { NextRequest } from "next/server";

export async function GET() {
  return new Response("RESP");
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  return new Response("POST SUCCEEDED");
}
