import { Card } from './components/Card'
import { CardMeme } from './components/CardMeme'
import { ImgCarousel } from './components/ImgCarousel'

export default function Home() {
    const aboutTitle = 'Despre noi'
    const aboutDescription = 'Descriere'

    return (
        <>
            <div className="columns-1">
                <ImgCarousel />
            </div>
            <div className="me-4 ms-4 mt-4 columns-1 md:columns-3">
                <Card title={aboutTitle} description={aboutDescription} />
                <Card title={aboutTitle} description={aboutDescription} />
                <Card title={aboutTitle} description={aboutDescription} />
                <Card title={aboutTitle} description={aboutDescription} />
                <CardMeme />
            </div>
        </>
    )
}
