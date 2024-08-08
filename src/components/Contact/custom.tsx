import { useEffect, useState } from 'react'
import useLoadingIcon from '@/hooks/loadingComponent'
import { PhoneOutlined } from '@ant-design/icons'

export const useContactLoading = () => {
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
        component: <PhoneOutlined />,
    })
<<<<<<< HEAD
=======
    // test
>>>>>>> my-optimized-branch

    return { loading, loadingIcon }
}
