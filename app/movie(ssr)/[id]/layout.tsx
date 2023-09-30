"use client"

import { useEffect, useState } from "react"
import axios from "axios"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-row p-12">
            <section>{children}</section>
        </main>
    )
}

export default layout