'use client'
import React from 'react'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import { useContactLoading } from './custom'

export const Contact = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()
    const { loadingIcon } = useContactLoading()

    return (
        <>
            <AlertComponent />
            <div className="mb-2 flex h-full cursor-pointer flex-col">
                <h2
                    className="flex flex-grow items-center justify-center rounded bg-[#002A65] px-3 pb-2 text-center text-lg font-bold text-white caret-transparent duration-500 lg:py-0 xl:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    <span>
                        Contactează-mă pentru a putea creea un cadou frumos
                        celor dragi ție.
                        <br />
                        <span className="flex justify-center">
                            <span className="mt-1 flex w-fit rounded px-1 duration-500 hover:text-[#00cba7]">
                                {loadingIcon}
                                <span className="mx-1">0764237914</span>
                                {loadingIcon}
                            </span>
                        </span>
                    </span>
                </h2>
            </div>
        </>
    )
}
