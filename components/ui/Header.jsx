import React from 'react'
import { Button } from './button'
import { SideBar } from './SideBar'

export const Header = () => {
    return (
        <header>
            <div className = " w-[95%] m-auto">
                <main className = "flex items-center justify-between">
                    <div className = " h-[4rem]  flex items-center justify-start gap-2">
                        <span className=' block h-[1rem] w-[1rem] rounded-full bg-green-500'></span>
                        <span className=' block h-[1rem] w-[1rem] rounded-full bg-yellow-500'></span>
                        <span className=' block h-[1rem] w-[1rem] rounded-full bg-orange-500'></span>
                    </div>
                    <div className = "h-[4rem] flex items-center justify-end gap-3">
                        <Button variant = "green" size = "sm" >
                            Contact me
                        </Button>
                        <div className = "lg:hidden h-full flex items-center justify-center">
                            <SideBar/>
                        </div>
                    </div>
                </main>
            </div>
        </header>
    )
}
