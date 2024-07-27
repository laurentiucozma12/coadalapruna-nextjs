import Image from 'next/image'

export const CardMeme = () => {
    return (
        <>
            <div className="mb-4 h-fit w-full overflow-hidden rounded bg-[#D7C8BD] p-3 shadow-lg">
                <div className="mb-3">
                    <div className="mb-1 text-xl font-bold">Meme 😂</div>
                    <p className="text-base font-semibold text-gray-800">
                        O glumă pentru cei cu haz de năcaz
                    </p>
                </div>
                <Image
                    className="w-full rounded"
                    src="/meme.jpg"
                    alt="Sunset in the mountains"
                    width={500}
                    height={495}
                />
            </div>
        </>
    )
}
