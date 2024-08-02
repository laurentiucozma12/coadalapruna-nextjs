'use client'
import { PhoneOutlined } from '@ant-design/icons'
import React from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

export const Contact = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()

    return (
        <>
            <AlertComponent />
            <div className="m-2 cursor-pointer text-white">
                <h2
                    className="text-md rounded bg-black p-4 text-center font-extrabold shadow-sm duration-500 sm:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    Click pentru a copia numărul <br />
                    <PhoneOutlined /> 0764237914 <PhoneOutlined />
                </h2>
            </div>
        </>
    )
}
