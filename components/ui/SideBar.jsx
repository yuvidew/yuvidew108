import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from "lucide-react"

import React from 'react'
import { NavBar } from "./NavBar"

export const SideBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <AlignRight />
            </SheetTrigger>
            <SheetContent className = "bg-stone-900 border-none">
                <NavBar/>
            </SheetContent>
        </Sheet>
    )
}

