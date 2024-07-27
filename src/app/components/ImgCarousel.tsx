'use client'
import React from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'

export const ImgCarousel: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }

    return (
        <Carousel afterChange={onChange} autoplay className="h-fit">
            <div>
                <Image
                    className="h-96 object-cover"
                    src="/plum1.jpg"
                    alt="Image of a plum"
                    width={1536}
                    height={340}
                />
            </div>
            <div>
                <Image
                    className="h-96 object-cover"
                    src="/plum2.jpg"
                    alt="Image of a plum"
                    width={1536}
                    height={340}
                />
            </div>
            <div>
                <Image
                    className="h-96 object-cover"
                    src="/plum3.jpg"
                    alt="Image of a plum"
                    width={1536}
                    height={340}
                />
            </div>
        </Carousel>
    )
}
