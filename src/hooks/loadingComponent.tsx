import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface UseLoadingComponentProps {
    isLoading: boolean
    width: number
    height?: number
    component: React.ReactNode
}

const useLoadingComponent = ({
    isLoading,
    width,
    height,
    component,
}: UseLoadingComponentProps) => {
    return isLoading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={width} height={height} />
        </SkeletonTheme>
    ) : (
        <>{component}</>
    )
}

export default useLoadingComponent
