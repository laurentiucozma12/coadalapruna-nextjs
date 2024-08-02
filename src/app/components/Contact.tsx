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
                {/*     
                margin top is 75px (67px + 8px),
                67px, because height of navbar is 67px 
                8px because the rest of  the elements have a m-4 which is 16px
                */}
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
