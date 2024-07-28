'use client'
import { PhoneOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { Alert } from 'antd'

export const CardContact = () => {
    const [showAlert, setShowAlert] = useState(false)

    const src = '/bottles.png'
    const title = 'Contact'
    const description = (
        <>
            <span onClick={() => copyToClipboard('0764237914')}>
                <PhoneOutlined /> Telefon: 0764237914
            </span>
        </>
    )

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 3000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
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
                    className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transform rounded"
                />
            )}
            <div className="mb-4 h-fit w-full overflow-hidden rounded bg-[#29D674] shadow-lg">
                <div className="m-3">
                    <div className="mb-1 text-xl font-bold">{title}</div>
                    <p className="text-base font-semibold text-gray-800 duration-500 hover:cursor-pointer hover:text-[#7429d6]">
                        {description}
                    </p>
                </div>
                <Image
                    className="h-[500px] w-full object-cover"
                    src={src}
                    alt="Meme"
                    width={500}
                    height={500}
                />
            </div>
        </>
    )
}
