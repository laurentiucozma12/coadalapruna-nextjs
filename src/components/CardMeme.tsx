import Image from 'next/image'
import React from 'react'

export const CardMeme = () => {
    return (
        <div className="mb-0 h-fit w-full overflow-hidden rounded bg-black text-white shadow-lg sm:mb-2">
            <div className="m-3">
                <div className="mb-1 text-xl font-bold">Meme 😂</div>
                <p className="text-base font-semibold">
                    O glumă pentru cei cu haz de năcaz.
                </p>
            </div>
            <Image
                className="h-auto w-full object-cover"
                src="/meme.webp"
                alt="Meme"
                width={480}
                height={300}
                loading="lazy"
            />
        </div>
    )
}
