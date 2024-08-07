'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import {
    FacebookOutlined,
    MenuOutlined,
    PhoneOutlined,
    TikTokOutlined,
} from '@ant-design/icons'
import useResponsiveMenu from './custom'
import LoadingIcon from '@/hooks/loadingIcon'

export const Navbar = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()
    const { isOpen, setIsOpen, getMenuClasses } = useResponsiveMenu()

    return (
        <>
            <AlertComponent />
            <nav className="fixed z-40 w-full bg-black p-4 font-bold text-white shadow shadow-black sm:bg-scroll md:flex md:justify-between">
                <div className="container mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center text-xl duration-500 sm:text-2xl"
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
                        <span
                            className="mx-2 flex rounded px-1 duration-500 hover:cursor-pointer hover:bg-white hover:text-black"
                            onClick={() => copyToClipboard('0764237914')}
                        >
                            <LoadingIcon Icon={PhoneOutlined} />
                            <span className="ms-1">0764237914</span>
                        </span>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100084996129874"
                            className="mx-2 flex rounded px-1 duration-500 hover:bg-white hover:text-[#0866FF] hover:underline"
                            target="_blank"
                        >
                            <LoadingIcon Icon={FacebookOutlined} />
                            <span className="ms-1">Facebook</span>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@nelubulea"
                            className="ms-2 flex rounded px-1 duration-500 hover:bg-white hover:text-black hover:underline"
                            target="_blank"
                        >
                            <LoadingIcon Icon={TikTokOutlined} />
                            <span className="ms-1">TikTok</span>
                        </Link>
                    </div>
                    <div className="flex items-center text-xl duration-500 sm:text-2xl md:hidden">
                        <MenuOutlined onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </nav>
        </>
    )
}
