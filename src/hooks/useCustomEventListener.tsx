import { useEffect } from "react"
import { UseCustomEventListenerProperties } from "src/types/hooks/customEvent"

const useCustomEventListener = <T,>({ ...props }: UseCustomEventListenerProperties<T>) => {
    useEffect(() => {
        const listener = (event: Event) => {
            props.onEventTriggered(event as CustomEvent<T>)
        }

        window.addEventListener(props.eventName, listener)

        return () => {
            window.removeEventListener(props.eventName, listener)
        }
    }, [])
}

export default useCustomEventListener