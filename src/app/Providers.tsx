// This code makes every route inside SessionProvider a protected route
"use client"

import {SessionProvider} from "next-auth/react";

interface Props {
    children: React.ReactNode
}

function Providers({children}: Props){
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers;