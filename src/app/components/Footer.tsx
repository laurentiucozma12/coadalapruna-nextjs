import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="bg-[#29D674] p-4 text-center text-sm font-bold text-white">
            <Link
                href={'https://www.linkedin.com/in/laurentiu-cozma/'}
                target="_blank"
                className="duration-500 hover:text-[#7429d6] hover:underline"
            >
                <span className="block sm:inline">© 2024 - Present </span>
                <span className="hidden sm:inline"> | </span>
                <span className="block sm:inline">Copyright by</span>
                <span className="block sm:inline"> Laurențiu Cozma</span>
            </Link>
        </footer>
    )
}
