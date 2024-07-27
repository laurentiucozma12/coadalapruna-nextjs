import { Card } from './components/Card'
import { CardMeme } from './components/CardMeme'
import { ImgCarousel } from './components/ImgCarousel'

export default function Home() {
    return (
        <>
            <div className="columns-1">
                <ImgCarousel />
            </div>
            <div className="me-4 ms-4 mt-4 columns-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <CardMeme />
            </div>
        </>
    )
}
