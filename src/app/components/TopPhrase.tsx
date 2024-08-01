'use client'
import React from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

export const TopPhrase = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()

    return (
        <>
            <AlertComponent />
            <div className="mx-2 mb-2 mt-[75px] cursor-pointer">
                <h1
                    className="text-md rounded bg-black p-4 text-center font-extrabold text-white shadow-sm duration-500 sm:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    Ai nevoie de sticle personalizate? <br /> Contactează-mă!
                </h1>
            </div>
        </>
    )
}
