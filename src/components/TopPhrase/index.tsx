'use client'
import React from 'react'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'

export const TopPhrase = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()

    return (
        <>
            <AlertComponent />
            <div className="my-2 flex h-full cursor-pointer flex-col lg:my-0">
                <h1
                    className="flex flex-grow items-center justify-center rounded bg-black px-3 py-2 text-center text-lg font-bold text-white caret-transparent duration-500 lg:py-0 xl:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    Ai nevoie de un cadou pentru un bărbat adevarat sau de un
                    cadou pentru o nuntă sau un eveniment special? <br /> Aici
                    poți găsi cea mai bună soluție. Sticlele de țuică cu
                    ornamente personalizate pot fi cadoul ideal!
                </h1>
            </div>
        </>
    )
}
