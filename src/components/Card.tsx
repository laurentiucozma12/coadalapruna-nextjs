import Image from 'next/image'
import React from 'react'

type CardProps = {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
}) => {
    return (
        <div className="mb-2 h-fit w-full overflow-hidden rounded bg-black text-white shadow-lg">
            <div className="m-3">
                <div className="mb-1 text-xl font-bold">{title}</div>
                <p className="text-base font-semibold">{description}</p>
            </div>
            <Image
                className="h-auto w-full object-cover"
                src={imageSrc}
                alt={imageAlt}
                width={480}
                height={300}
                loading="lazy"
            />
        </div>
    )
}

export default Card
