'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    FacebookOutlined,
    MenuOutlined,
    TikTokOutlined,
} from '@ant-design/icons'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    function getMenuClasses() {
        let menuClasses = []

        if (isOpen) {
            menuClasses = [
                'flex',
                'flex-col',
                'absolute',
                'top-[60px]',
                'bg-[#29D674]',
                'w-full',
                'p-4',
                'gap-4',
                'left-0',
            ]
        } else {
            menuClasses = ['hidden', 'md:flex']
        }

        return menuClasses.join(' ')
    }

    return (
        <nav className="fixed z-50 w-full bg-[#29D674] p-4 font-bold text-white sm:bg-scroll md:flex md:justify-between">
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center text-xl duration-500 hover:text-[#7429d6] sm:text-2xl"
                >
                    <Image
                        className="me-2"
                        src="/plum40x40.svg"
                        width={35}
                        height={35}
                        alt="Picture of the author"
                    />
                    Coada la prună
                </Link>
                <div className={getMenuClasses()}>
                    <Link
                        href="/"
                        className="mx-2 duration-500 hover:text-[#7429d6]"
                    >
                        <FacebookOutlined /> Facebook
                    </Link>
                    <Link
                        href="/"
                        className="mx-2 duration-500 hover:text-[#7429d6]"
                    >
                        <TikTokOutlined /> TikTok
                    </Link>
                </div>

                <div className="flex items-center text-xl duration-500 hover:text-[#7429d6] sm:text-2xl md:hidden">
                    <MenuOutlined
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    />
                </div>
            </div>
        </nav>
    )
}
