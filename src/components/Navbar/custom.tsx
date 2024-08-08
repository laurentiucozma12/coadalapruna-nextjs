'use client'
import { useState, useEffect } from 'react'
import useLoadingIcon from '@/hooks/loadingComponent'
import React from 'react'

const useResponsiveMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const getMenuClasses = () => {
        let menuClasses = []

        if (isOpen) {
            menuClasses = [
                'flex',
                'flex-col',
                'absolute',
                'justify-center',
                'h-[140px]',
                'top-[67px]', // top-67px, height of navbar is 67px
                'p-2',
                'bg-black',
                'w-full',
                'gap-4',
                'left-0',
            ]
        } else {
            menuClasses = ['hidden', 'md:flex']
        }

        return menuClasses.join(' ')
    }

    return { isOpen, setIsOpen, getMenuClasses }
}

const useLoadingStates = () => {
    const [loadingStates, setLoadingStates] = useState({
        phone: true,
        facebook: true,
        tikTok: true,
    })

    useEffect(() => {
        const timers = {
            phone: setTimeout(
                () => setLoadingStates((prev) => ({ ...prev, phone: false })),
                1000
            ),
            facebook: setTimeout(
                () =>
                    setLoadingStates((prev) => ({ ...prev, facebook: false })),
                1000
            ),
            tikTok: setTimeout(
                () => setLoadingStates((prev) => ({ ...prev, tikTok: false })),
                1000
            ),
        }

        return () => {
            Object.values(timers).forEach((timer) => clearTimeout(timer))
        }
    }, [])

    return loadingStates
}

interface LoadingIconWrapperProps {
    isLoading: boolean
    Icon: React.FC
    label: string
}

const LoadingIconWrapper: React.FC<LoadingIconWrapperProps> = ({
    isLoading,
    Icon,
    label,
}) => {
    const loadingIcon = useLoadingIcon({
        isLoading,
        width: 16,
        component: <Icon />,
    })

    return (
        <>
            {loadingIcon}
            <span className="ms-1">{label}</span>
        </>
    )
}

export { useResponsiveMenu, LoadingIconWrapper, useLoadingStates }

// test
