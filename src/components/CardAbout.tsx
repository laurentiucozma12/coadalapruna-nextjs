import Image from 'next/image'
import React from 'react'

export const CardAbout = () => {
    return (
        <div className="mb-2 h-fit w-full overflow-hidden rounded bg-black text-white shadow-lg">
            <div className="m-3">
                <div className="mb-1 text-xl font-bold">Despre mine 👨</div>
                <p className="text-base font-semibold">
                    Mă numesc Nelu Bulea și creez confecțiuni personalizate în
                    sticle de țuică.
                </p>
            </div>
            <Image
                className="h-auto w-full object-cover"
                src="/sticla4.webp"
                alt="About me"
                width={480}
                height={300}
                loading="lazy"
            />
        </div>
    )
}
