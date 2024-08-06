'use client'
import React from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'
import './style.css'
import { useImgCarousel } from './custom'

const CarouselPlaceholder: React.FC = () => {
    return (
        <div className="relative h-[300px] animate-pulse bg-gray-200">
            {/* You can add a skeleton loader or any other placeholder content here */}
        </div>
    )
}

export const ImgCarousel: React.FC = () => {
    const { initialized, onChange, imgCarousel } = useImgCarousel()

    return (
        // top-[67px] because Navbar has height: 67px
        <div className="relative top-[67px] mx-0 mb-2">
            <div className="relative h-[300px]">
                {!initialized && <CarouselPlaceholder />}
                {initialized && (
                    <Carousel
                        afterChange={onChange}
                        autoplay
                        className="opacity-100 transition-opacity duration-500"
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
                )}
            </div>
        </div>
    )
}
