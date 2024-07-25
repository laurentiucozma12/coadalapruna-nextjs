import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className="text-pur bg-green-400 py-2">
            <ul className="flex justify-end">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
