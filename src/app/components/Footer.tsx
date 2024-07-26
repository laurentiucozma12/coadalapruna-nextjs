import Link from 'next/link'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#29D674] p-4 text-center text-sm font-bold text-white">
            <div className="container"></div>
            <Link
                href={'https://www.linkedin.com/in/laurentiu-cozma/'}
                target="_blank"
                className="duration-500 hover:text-[#7429d6] hover:underline"
            >
                <span className="block sm:inline">© 2024 - Present </span>
                <span className="block sm:inline">Copyright</span>
                <span className="block sm:inline">by Laurențiu Cozma</span>
            </Link>
        </footer>
    )
}
