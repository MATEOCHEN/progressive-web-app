import { useCallback, useRef } from "react"

const useAnimation = ({ ...props }: UseAnimationType) => {
    const animations = useRef(props.animation())

    const begin = useCallback(() => {
        if (!props.ref.current) return

        animations.current.begin(props.ref.current)
    }, [])

    const reverse = useCallback(() => {
        if (!props.ref.current) return

        animations.current.reverse(props.ref.current)
    }, [])

    return {
        begin,
        reverse
    }
}

type UseAnimationType = {
    ref: React.RefObject<HTMLElement>
    animation: () => AnimationMethods
}

export default useAnimation;