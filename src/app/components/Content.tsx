import React from 'react'

interface ContentProps {
    children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <main className="flex-1 bg-[#bdd7c8] md:flex md:justify-between">
            <div className="container mx-auto">{children}</div>
        </main>
    )
}
