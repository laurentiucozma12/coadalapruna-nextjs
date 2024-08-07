import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface UseLoadingIconProps {
    isLoading: boolean
    width: number
    text: React.ReactNode
}

const useLoadingIcon = ({ isLoading, width, text }: UseLoadingIconProps) => {
    return isLoading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={width} />
        </SkeletonTheme>
    ) : (
        <>{text}</>
    )
}

export default useLoadingIcon
