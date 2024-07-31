import Image from 'next/image'
import React from 'react'

export const CardAbout = () => {
    const src = '/bottles.png'
    const title = 'Despre mine'
    const description =
        'Mă numesc Nelu Bulea și mă ocup cu confecționarea de sticle.'

    return (
        <div className="mb-2 h-fit w-full overflow-hidden rounded bg-[#29D674] text-white shadow-lg">
            <div className="m-3">
                <div className="mb-1 text-xl font-bold">{title}</div>
                <p className="text-base font-semibold">{description}</p>
            </div>
            <Image
                className="h-auto w-full object-cover"
                src={src}
                alt="About me"
                width={500}
                height={500}
            />
        </div>
    )
}
