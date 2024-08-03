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
            className="mx-0 mb-2 mt-[67px] h-fit"
        >
            <div className="relative h-[140px] w-[640px]">
                <Image
                    src="/plum1.webp"
                    alt="Image of a bottle"
                    fill
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="relative h-[140px] w-[640px]">
                <Image
                    src="/plum2.webp"
                    alt="Image of a plum"
                    fill
                    objectFit="cover"
                    loading="lazy"
                />
            </div>
            <div className="relative h-[140px] w-[640px]">
                <Image
                    src="/plum3.webp"
                    alt="Image of a plum"
                    fill
                    objectFit="cover"
                    loading="lazy"
                />
            </div>
        </Carousel>
    )
}
