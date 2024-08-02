import React from 'react'
import Image from 'next/image'

export const CardAd = () => {
    return (
        <div className="mb-2 h-fit w-full overflow-hidden rounded bg-black text-white shadow-lg">
            <div className="m-3">
                <div className="mb-1 text-xl font-bold">Cadou 🎁</div>
                <h3>
                    Vrei să faci un cadou frumos și original cuiva drag? <br />
                    Sticlele personalizate pot fi un cadou minunat pentru
                    diverse ocazii sau evenimente, precum zile de naștere sau
                    nunți.
                </h3>
            </div>
            <Image
                className="h-auto w-full object-cover"
                src="/meme.png"
                alt="Meme"
                width={500}
                height={500}
            />
        </div>
    )
}
