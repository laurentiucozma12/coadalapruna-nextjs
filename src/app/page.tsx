// pages/index.tsx
import { Card } from './components/Card'
import { ImgCarousel } from './components/ImgCarousel'

export default function Home() {
    const bottleImg = '/bottles.png'
    const aboutTitle = 'Despre noi'
    const aboutDescription = 'Descriere'

    const memeImg = '/meme.png'
    const memeTitle = 'Meme 😂'
    const memeDescription = 'O glumă pentru cei cu haz de năcaz.'

    return (
        <>
            <div className="mx-0 columns-1 sm:mx-4">
                <ImgCarousel />
            </div>
            <div className="m-4 columns-1 md:columns-3">
                <Card
                    src={bottleImg}
                    title={aboutTitle}
                    description={aboutDescription}
                />
                <Card
                    src={bottleImg}
                    title={aboutTitle}
                    description={aboutDescription}
                />
                <Card
                    src={bottleImg}
                    title={aboutTitle}
                    description={aboutDescription}
                />
                <Card
                    src={bottleImg}
                    title={aboutTitle}
                    description={aboutDescription}
                />
                <Card
                    src={memeImg}
                    title={memeTitle}
                    description={memeDescription}
                />
                <Card
                    src={bottleImg}
                    title={aboutTitle}
                    description={aboutDescription}
                />
            </div>
        </>
    )
}
