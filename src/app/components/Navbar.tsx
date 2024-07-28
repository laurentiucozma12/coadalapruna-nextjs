'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    FacebookOutlined,
    MenuOutlined,
    PhoneOutlined,
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
        <>
            <nav className="fixed z-40 w-full bg-[#29D674] p-4 font-bold text-white sm:bg-scroll md:flex md:justify-between">
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
                        <span className="mx-2 flex duration-500 hover:cursor-pointer hover:text-[#7429d6]">
                            <PhoneOutlined />
                            <span className="ms-1">0764237914</span>
                        </span>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100084996129874"
                            className="mx-2 flex duration-500 hover:text-[#0866FF] hover:underline"
                            target="_blank"
                        >
                            <FacebookOutlined />
                            <span className="ms-1">Facebook</span>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@nelubulea"
                            className="ms-2 flex duration-500 hover:text-[#000000] hover:underline"
                            target="_blank"
                        >
                            <TikTokOutlined />
                            <span className="ms-1">TikTok</span>
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
        </>
    )
}
