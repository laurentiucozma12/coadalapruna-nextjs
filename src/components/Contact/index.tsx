'use client'
import React from 'react'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import LoadingIcon from '@/hooks/loadingIcon'
import { PhoneOutlined } from '@ant-design/icons'

export const Contact = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()

    return (
        <>
            <AlertComponent />
            <div className="m-2 cursor-pointer text-white">
                <h2
                    className="rounded bg-black p-2 text-center text-lg font-bold shadow-sm duration-500 sm:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    Contactează-mă pentru a putea creea un cadou frumos celor
                    dragi ție.
                    <br />
                    <span className="inline-block">
                        <LoadingIcon Icon={PhoneOutlined} /> 0764237914{' '}
                        <LoadingIcon Icon={PhoneOutlined} />
                    </span>
                </h2>
            </div>
        </>
    )
}
