import Image from 'next/image'

interface CardProps {
    title: string
    description: string
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <>
            <div className="mb-4 h-fit w-full overflow-hidden rounded bg-[#D7C8BD] p-3 shadow-lg">
                <div className="mb-3">
                    <div className="mb-1 text-xl font-bold">{title}</div>
                    <p className="text-base font-semibold text-gray-800">
                        {description}
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
