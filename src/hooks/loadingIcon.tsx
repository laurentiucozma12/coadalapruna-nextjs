import React, { useEffect, useState } from 'react'

interface LoadingIconProps {
    Icon: React.FC
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ Icon }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return loading ? <></> : <Icon />
}

export default LoadingIcon
