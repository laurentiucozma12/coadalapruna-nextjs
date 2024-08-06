'use client'
import React from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

export const TopPhrase = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()

    return (
        <>
            <AlertComponent />
            <div className="mx-2 mb-2 mt-[76px] cursor-pointer">
                <h1
                    className="rounded bg-black p-2 text-center text-lg font-bold text-white shadow-sm duration-500 sm:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    Text text text text text text text text text text text text
                    text text text text text text text text text text text text
                    text text text text text text text text text text text text
                    text text text text text
                    {/* Ai nevoie de un cadou pentru un bărbat adevarat sau de un
                    cadou pentru o nuntă sau un eveniment special? <br /> Aici
                    poți găsi cea mai bună soluție. Sticlele de țuică cu
                    ornamente personalizate pot fi cadoul ideal! */}
                </h1>
            </div>
        </>
    )
}
