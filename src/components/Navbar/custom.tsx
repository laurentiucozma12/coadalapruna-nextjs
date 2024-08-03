import { useState } from 'react'

const useResponsiveMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const getMenuClasses = () => {
        let menuClasses = []

        if (isOpen) {
            menuClasses = [
                'flex',
                'flex-col',
                'absolute',
                'justify-center',
                'h-[140px]',
                'top-[67px]', // top-67px, height of navbar is 67px
                'p-2',
                'bg-black',
                'w-full',
                'gap-4',
                'left-0',
            ]
        } else {
            menuClasses = ['hidden', 'md:flex']
        }

        return menuClasses.join(' ')
    }

    return { isOpen, setIsOpen, getMenuClasses }
}

export default useResponsiveMenu
