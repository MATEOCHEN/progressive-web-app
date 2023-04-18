type FetchResponse<T> = {
    status: number
    data?: T
    exception?: string
}

type AnimationMethods = {
    begin: (element: HTMLElement) => void
    reverse: (element: HTMLElement) => void
}

type IDictionary<T, R> = { [key: T]: R }

type TwZipCode = Record<string, Record<string, string>>