import Cookies from 'universal-cookie'

const cookies = new Cookies()

const getValueFromCookie = (name: string) => {
    return cookies.get<string>(name)
}

const getBooleanFromCookie = (name: string, onValueUndefined?: () => void) => {
    const value = getValueFromCookie(name)

    if (value) {
        return value.toLowerCase() === 'true'
    }

    if (onValueUndefined) onValueUndefined()

    return false
}

export {
    getValueFromCookie,
    getBooleanFromCookie
}