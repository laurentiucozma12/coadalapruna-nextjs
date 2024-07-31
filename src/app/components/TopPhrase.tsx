'use client'
import React from 'react'
import { useState } from 'react'
import { Alert } from 'antd'

export const TopPhrase = () => {
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
            <div className="mx-2 mb-2 mt-[75px] cursor-pointer">
                {/*     
                margin top is 75px (67px + 8px),
                67px, because height of navbar is 67px 
                8px because the rest of  the elements have a m-4 which is 16px
                */}
                <h1
                    className="text-md rounded bg-[#7429d6] p-4 text-center font-extrabold text-white shadow-sm sm:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    Ai nevoie de sticle personalizate? <br /> Contactează-mă!
                </h1>
            </div>
        </>
    )
}
