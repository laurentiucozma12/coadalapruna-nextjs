'use client'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'

const CarouselPlaceholder: React.FC = () => {
    return (
        <div className="relative h-[300px] animate-pulse bg-gray-200">
            {/* You can add a skeleton loader or any other placeholder content here */}
        </div>
    )
}

export const ImgCarousel: React.FC = () => {
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

    return (
        <div className="relative top-[67px] mx-0 mb-2">
            {!initialized && <CarouselPlaceholder />}
            <Carousel
                afterChange={onChange}
                autoplay
                className={`transition-opacity duration-500 ${initialized ? 'opacity-100' : 'opacity-0'}`}
            >
                {imgCarousel.map((image) => (
                    <div key={image.id} className="relative h-[300px]">
                        <Image
                            src={image.uri}
                            alt={`Sticla cu ornament ${image.id}`}
                            fill
                            sizes="100vw"
                            priority={image.id === 1} // Use priority for the first image
                            loading={image.id === 1 ? 'eager' : 'lazy'} // Use lazy loading for other images
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
