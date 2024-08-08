import React from 'react'

interface ContentProps {
    children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <main className="flex-1 bg-gray-800 md:flex md:justify-between">
            {/* Padding top is 67px, because navbar is 67px in height */}
            <div className="container mx-auto pt-[67px]">{children}</div>
        </main>
    )
}
