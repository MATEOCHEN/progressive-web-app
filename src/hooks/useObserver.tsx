import { useEffect, useRef, useState } from "react"
import { UseObserverProperties } from "src/types/hooks/observer"

const useObserver = ({ ...props }: UseObserverProperties) => {
    const mutationObserver = useRef<MutationObserver>()
    const target = useRef(document.querySelector(props.listenOn))

    useEffect(() => {
        if (target.current) {
            mutationObserver.current = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.target === target.current) {
                        props.onElementChanges(mutation)
                    }
                })
            })

            mutationObserver.current.observe(document, {
                attributes: true,
                attributeFilter: ['class'],
                subtree: true
            })
        }

        return () => {
            mutationObserver.current?.disconnect()
        }
    }, [])

    return target
}

export default useObserver