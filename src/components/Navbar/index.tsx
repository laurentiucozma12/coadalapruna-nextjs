'use client'
import Image from 'next/image'
import Link from 'next/link'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import {
    FacebookOutlined,
    MenuOutlined,
    PhoneOutlined,
    TikTokOutlined,
} from '@ant-design/icons'
import {
    LoadingIconWrapper,
    useResponsiveMenu,
    useLoadingStates,
} from './custom'

export const Navbar = () => {
    const { copyToClipboard, AlertComponent } = useCopyToClipboard()
    const { isOpen, setIsOpen, getMenuClasses } = useResponsiveMenu()
    const loadingStates = useLoadingStates()

    return (
        <>
            <AlertComponent />
            <nav className="fixed z-40 w-full bg-[#2159a1] p-4 font-bold text-white shadow shadow-[#00cba7] sm:bg-scroll md:flex md:justify-between">
                <div className="container mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center text-xl duration-500 hover:text-[#00cba7] sm:text-2xl"
                    >
                        <Image
                            className="me-2"
                            src="/plum40x40.svg"
                            width={35}
                            height={35}
                            alt="Picture of the author"
                        />
                        Coada la prună
                    </Link>
                    <div className={getMenuClasses()}>
                        <span
                            className="mx-2 flex rounded px-1 caret-transparent duration-500 hover:cursor-pointer hover:text-[#00cba7] hover:text-[00cba7]"
                            onClick={() => copyToClipboard('0764237914')}
                        >
                            <LoadingIconWrapper
                                isLoading={loadingStates.phone}
                                Icon={PhoneOutlined}
                                label="0764237914"
                            />
                        </span>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100084996129874"
                            className="mx-2 flex rounded px-1 duration-500 hover:text-[#00cba7] hover:underline"
                            target="_blank"
                        >
                            <LoadingIconWrapper
                                isLoading={loadingStates.facebook}
                                Icon={FacebookOutlined}
                                label="Facebook"
                            />
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@nelubulea"
                            className="ms-2 flex rounded px-1 duration-500 hover:text-[#00cba7] hover:underline"
                            target="_blank"
                        >
                            <LoadingIconWrapper
                                isLoading={loadingStates.tikTok}
                                Icon={TikTokOutlined}
                                label="TikTok"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center text-xl duration-500 hover:text-[#00cba7] sm:text-2xl md:hidden">
                        <MenuOutlined onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </nav>
        </>
    )
}
