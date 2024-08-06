import { useEffect, useState } from 'react'

export const useImgCarousel = () => {
    const [initialized, setInitialized] = useState(false)

    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }

    useEffect(() => {
        // Add a slight delay to ensure the carousel has initialized
        const timer = setTimeout(() => {
            setInitialized(true)
        }, 1000) // Adjust the delay as necessary
        return () => clearTimeout(timer)
    }, [])

    const imgCarousel = [
        {
            id: 1,
            uri: '/480x300/sticla1.webp',
        },
        {
            id: 2,
            uri: '/480x300/sticla2.webp',
        },
        {
            id: 3,
            uri: '/480x300/sticla3.webp',
        },
    ]

    return {
        initialized,
        onChange,
        imgCarousel,
    }
}
