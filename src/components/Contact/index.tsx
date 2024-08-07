'use client'
import { PhoneOutlined, LoadingOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'

export const Contact = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()
    const [loading, setLoading] = useState(false)

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
                    {loading ? <LoadingOutlined /> : <PhoneOutlined />}{' '}
                    0764237914{' '}
                    {loading ? <LoadingOutlined /> : <PhoneOutlined />}
                </h2>
            </div>
        </>
    )
}
