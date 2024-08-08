'use client'
import React, { useEffect, useState } from 'react'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import 'react-loading-skeleton/dist/skeleton.css'
import { PhoneOutlined } from '@ant-design/icons'
import useLoadingIcon from '@/hooks/loadingComponent'

export const Contact = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const loadingIcon = useLoadingIcon({
        isLoading: loading,
        width: 20,
        component: (
            <>
                <PhoneOutlined />
            </>
        ),
    })

    return (
        <>
            <AlertComponent />
            <div className="flex h-full cursor-pointer flex-col">
                <h2
                    className="flex flex-grow items-center justify-center rounded bg-black px-3 py-2 text-center text-lg font-bold text-white caret-transparent duration-500 lg:py-0 xl:text-2xl"
                    onClick={() => copyToClipboard('0764237914')}
                >
                    <span>
                        Contactează-mă pentru a putea creea un cadou frumos
                        celor dragi ție.
                        <br />
                        <span className="flex justify-center">
                            {loadingIcon}
                            <span className="mx-1">0764237914</span>
                            {loadingIcon}
                        </span>
                    </span>
                </h2>
            </div>
        </>
    )
}
