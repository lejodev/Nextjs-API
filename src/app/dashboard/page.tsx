"use client"

import { useSession } from "next-auth/react"

const DashboardPage = () => {
    const { data, status } = useSession()
    console.log(data, status)
    console.log("SDFGDDDDDDDDDDDDDDDDDDDDDDDDDD")
    return (
        <div>Dashboard page</div>
    )
}

export default DashboardPage