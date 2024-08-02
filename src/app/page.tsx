import { CardAbout } from '../components/CardAbout'
import { Contact } from '../components/Contact'
import { CardMeme } from '../components/CardMeme'
import { ImgCarousel } from '../components/ImgCarousel'
import { TopPhrase } from '../components/TopPhrase'
import { CardAd } from '../components/CardAd'

export default function Home() {
    return (
        <>
            <ImgCarousel />
            <TopPhrase />
            <Contact />
            <div className="m-2 columns-1 sm:columns-2 lg:columns-3">
                <CardAbout />
                <CardAd />
                <CardMeme />
            </div>
        </>
    )
}
