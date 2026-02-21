import React from 'react'
import {ThemeToggle} from "@/app/_components/ThemeToggle";
import Link from "next/link";

const Nav = () => {
    return (
        <header className={"sticky top-0 z-50 bg-secondary border-b border-bord shadow-light"}>
            <div className={"max-w-7xl mx-auto flex items-center justify-between h-16"}>
                <div>
                    <div>
                        Icon
                    </div>
                    <div
                        className={'font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent'}>
                        BlockScan
                    </div>
                </div>
                <nav className={'gap-2 flex items-center text-sm font-medium text-prim-text font-semibold'}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Blockchain</Link>
                    <Link href={'/'}>Tokens</Link>
                </nav>
                <ThemeToggle/>
            </div>
        </header>
    )
}
export default Nav
