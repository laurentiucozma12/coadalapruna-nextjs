'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    FacebookOutlined,
    MenuOutlined,
    PhoneOutlined,
    TikTokOutlined,
} from '@ant-design/icons'
import { Alert } from 'antd'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 3000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

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
            {showAlert && (
                <Alert
                    message="Numărul de telefon a fost copiat cu success"
                    type="success"
                    showIcon
                    closable
                    onClose={() => setShowAlert(false)}
                    className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2 transform rounded"
                />
            )}
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
                        <span
                            className="mx-2 flex duration-500 hover:cursor-pointer hover:text-[#7429d6]"
                            onClick={() => copyToClipboard('0764237914')}
                        >
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
                            className="ms-2 flex duration-500 hover:text-black hover:underline"
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
