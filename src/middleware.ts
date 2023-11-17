import { getServerSession } from "next-auth"
// import { authOptions } from "next-auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

export function middleware(req: NextRequest) {
    if (req.cookies.has("next-auth.session-token") || req.headers.get("next-auth.session-token")) {
        console.log("IT HAS!")
        return NextResponse.next()
    } else {
        return NextResponse.json({ "Message": "You're not authenticated" }, { status: 400 })
    }
}

// export const config = {
//     matcher: [
//         '/api/cart'
//         // "/api/bikes"
//     ]
// }