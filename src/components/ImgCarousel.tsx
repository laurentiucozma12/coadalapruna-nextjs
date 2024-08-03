'use client'
import React from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'

export const ImgCarousel: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }

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
        <Carousel
            afterChange={onChange}
            autoplay
            // top-67px because the navbar has 67px
            className="top-[67px] mx-0 mb-2"
        >
            {imgCarousel.map((image) => (
                <div key={image.id} className="relative h-[300px]">
                    <Image
                        className="object-cover"
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
    )
}
