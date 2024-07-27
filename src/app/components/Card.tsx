import Image from 'next/image'

export const Card = () => {
    return (
        <>
            <div className="mb-4 h-fit w-full overflow-hidden rounded bg-[#D7C8BD] p-3 shadow-lg">
                <div className="mb-3">
                    <div className="mb-1 text-xl font-bold">Template</div>
                    <p className="text-base font-semibold text-gray-800">
                        Template Template Template
                    </p>
                </div>
                <Image
                    className="w-full rounded"
                    src="/meme.jpg"
                    alt="Meme"
                    width={500}
                    height={495}
                />
            </div>
        </>
    )
}
