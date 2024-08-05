import Card from '../components/Card'
import { Contact } from '../components/Contact'
import { ImgCarousel } from '../components/ImgCarousel'
import { TopPhrase } from '../components/TopPhrase'

export default function Home() {
    return (
        <>
            <ImgCarousel />
            <TopPhrase />
            <Contact />
            <div className="m-2 columns-1 sm:columns-2 lg:columns-3">
                <div>
                    <Card
                        title="Despre mine 👨"
                        description="Mă numesc Nelu Bulea și creez confecțiuni personalizate în sticle de țuică."
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
