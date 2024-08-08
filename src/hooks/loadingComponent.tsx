import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
        <SkeletonTheme baseColor="#00cba7" highlightColor="#2159a1">
            <Skeleton width={width} height={height} />
        </SkeletonTheme>
    ) : (
        <>{component}</>
    )
}

export default useLoadingComponent
