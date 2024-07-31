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
            className="mx-0 mt-2 h-fit columns-1"
        >
            <div>
                <Image
                    className="h-[140px] w-[640px] object-cover sm:h-96 sm:w-[1536px]"
                    src="/plum1.jpg"
                    alt="Image of a plum"
                    width={640}
                    height={140}
                />
            </div>
            <div>
                <Image
                    className="h-[140px] w-[640px] object-cover sm:h-96 sm:w-[1536px]"
                    src="/plum2.jpg"
                    alt="Image of a plum"
                    width={640}
                    height={140}
                />
            </div>
            <div>
                <Image
                    className="h-[140px] w-[640px] object-cover sm:h-96 sm:w-[1536px]"
                    src="/plum3.jpg"
                    alt="Image of a plum"
                    width={640}
                    height={140}
                />
            </div>
        </Carousel>
    )
}
