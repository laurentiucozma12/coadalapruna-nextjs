import Image from 'next/image'
import React from 'react'

export const CardMeme = () => {
    const src = '/meme.png'
    const title = 'Meme 😂'
    const description = 'O glumă pentru cei cu haz de năcaz.'
    return (
        <div className="mb-4 h-fit w-full overflow-hidden rounded bg-[#29D674] shadow-lg">
            <div className="m-3">
                <div className="mb-1 text-xl font-bold">{title}</div>
                <p className="text-base font-semibold text-gray-800">
                    {description}
                </p>
            </div>
            <Image
                className="h-[500px] w-full object-cover"
                src={src}
                alt="Meme"
                width={500}
                height={500}
            />
        </div>
    )
}
