import Link from 'next/link'
import Card from '../components/Card'
import { Contact } from '../components/Contact'
import { TopPhrase } from '@/components/TopPhrase'

export default function Home() {
    return (
        <>
            <div className="m-2 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
                <div className="row-span-2 flex flex-grow items-center justify-center">
                    <Card imageSrc="/480x300/sticla4.webp" imageAlt="Gift" />
                </div>
                <TopPhrase />
                <Contact />
            </div>

            <div className="m-2 columns-1 gap-2 sm:columns-2 lg:columns-3">
                <div>
                    <Card
                        title="Despre mine 👨"
                        description={
                            <>
                                Mă numesc Nelu Bulea și creez ornamente din lemn
                                personalizate pentru sticle de țuică/pălincă.
                                Mai jos poți vedea mai multe imagini cu arta
                                mea, iar dacă dorești să vezi și mai multe, poți
                                să îmi urmărești videoclipurile de pe{' '}
                                <Link
                                    href="https://www.tiktok.com/@nelubulea"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-fit rounded px-1 duration-500 hover:bg-white hover:text-black hover:underline"
                                >
                                    TikTok: nelubulea
                                </Link>
                            </>
                        }
                        imageSrc="/480x300/sticla4.webp"
                        imageAlt="About me"
                    />

                    <Card
                        title="Cadou 🎁"
                        description="Vrei să faci un cadou frumos și original cuiva drag? Sticlele personalizate pot fi un cadou minunat pentru diverse ocazii sau evenimente, precum zile de naștere sau nunți."
                        imageSrc="/480x300/sticla4.webp"
                        imageAlt="Gift"
                    />
                    <Card
                        title="Meme 😂"
                        description="O glumă pentru cei cu haz de năcaz."
                        imageSrc="/meme.webp"
                        imageAlt="Meme"
                    />
                </div>
            </div>
        </>
    )
}
