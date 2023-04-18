type UseCustomEventListenerProperties<T> = {
    eventName: string
    onEventTriggered: (event: CustomEvent<T>) => void
}

type CartItemsCountChangedEvent = {
    count: number
    timestamp: number
}

export {
    UseCustomEventListenerProperties,
    CartItemsCountChangedEvent
}