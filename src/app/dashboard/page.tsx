"use client"

import { useSession } from "next-auth/react"

const DashboardPage = () => {
    const { data, status } = useSession()
    console.log(data, status)
    console.log("SDFGDDDDDDDDDDDDDDDDDDDDDDDDDD")
    return (
        <div>DashboardPage</div>
    )
}

export default DashboardPage