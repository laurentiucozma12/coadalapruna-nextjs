import React from 'react'

interface ContentProps {
    children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
    return <main className="flex-1">{children}</main>
}
