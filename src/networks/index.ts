const greenboxHost = "/"

const fetchGreenbox = async (path: string, options?: RequestInit) => {
    const response = await fetch(`${greenboxHost}${path}`, {
        ...options,
        headers: {
            ...options?.headers,
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response
}

const fetchExceptionCatcher = <T>(promise: Promise<Response>): Promise<FetchResponse<T>> => {
    let response: FetchResponse<T> = {
        status: 500
    }

    return promise.then(resp => {
        response.status = resp.status

        return resp.json() as any
    }).then(json => {
        response.data = json

        return response
    }).catch(e => {
        response.exception = e

        return response
    })
}

export {
    greenboxHost,
    fetchGreenbox,
    fetchExceptionCatcher
}