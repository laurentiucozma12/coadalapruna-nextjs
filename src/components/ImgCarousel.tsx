'use client'
import React from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'

export const ImgCarousel: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }

    return (
        <Carousel
            afterChange={onChange}
            autoplay
            // top-67px cause navbar has 67px
            className="top-[67px] mx-0 mb-2"
        >
            <div className="relative h-[300px]">
                <Image
                    className="object-cover"
                    src="/sticla1.webp"
                    alt="Image of a ..."
                    fill
                    sizes="100vw"
                    priority
                />
            </div>
            <div className="relative h-[300px]">
                <Image
                    className="object-cover"
                    src="/sticla2.webp"
                    alt="Image of a ..."
                    fill
                    sizes="100vw"
                    loading="lazy"
                />
            </div>
            <div className="relative h-[300px]">
                <Image
                    className="object-cover"
                    src="/sticla3.webp"
                    alt="Image of a ..."
                    fill
                    sizes="100vw"
                    loading="lazy"
                />
            </div>
        </Carousel>
    )
}
