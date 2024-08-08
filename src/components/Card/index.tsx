import Image from 'next/image'
import React from 'react'

type LoadingType = 'eager' | 'lazy' | undefined

type CardProps = {
    title?: string
    description?: React.ReactNode
    imageSrc: string
    imageAlt: string
    imageLoading?: LoadingType
    priority?: boolean
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    imageLoading,
    priority,
}) => {
    return (
        <div className="mb-2 h-fit w-full overflow-hidden rounded bg-gradient-to-br from-[#2159a1] from-30% to-[#00cba7] text-white shadow-lg lg:mb-0">
            {title && description && (
                <div className="p-3">
                    <div className="mb-1 text-xl font-bold">{title}</div>
                    <p className="text-lg font-semibold">{description}</p>
                </div>
            )}
            <Image
                className="h-auto w-full object-cover"
                src={imageSrc}
                alt={imageAlt}
                width={480}
                height={300}
                priority={priority}
                loading={imageLoading} // This will now accept "eager" | "lazy" | undefined
            />
        </div>
    )
}

export default Card
