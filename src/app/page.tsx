import { CardAbout } from './components/CardAbout'
import { CardContact } from './components/CardContact'
import { CardMeme } from './components/CardMeme'
import { ImgCarousel } from './components/ImgCarousel'

export default function Home() {
    return (
        <>
            <div className="mx-0 columns-1 sm:mx-4">
                <ImgCarousel />
            </div>
            <div className="m-4 columns-1 md:columns-3">
                <CardAbout />
                <CardContact />
                <CardMeme />
            </div>
        </>
    )
}
