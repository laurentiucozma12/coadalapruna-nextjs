import { CardAbout } from './components/CardAbout'
import { CardContact } from './components/CardContact'
import { CardMeme } from './components/CardMeme'
import { ImgCarousel } from './components/ImgCarousel'
import { TopPhrase } from './components/TopPhrase'

export default function Home() {
    return (
        <>
            <ImgCarousel />
            <TopPhrase />
            <CardContact />
            {/* Vrei să faci un cadou frumos și original cuiva drag? <br />
                Sticlele personalizate pot fi un cadou minunat pentru diverse
                ocazii sau evenimente, precum zile de naștere sau nunți. */}
            <div className="m-2 columns-1 sm:columns-2 lg:columns-3">
                <CardAbout />
                <CardMeme />
            </div>
        </>
    )
}
