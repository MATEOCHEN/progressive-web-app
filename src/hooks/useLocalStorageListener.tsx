import { useEffect, useState } from "react"

const useLocalStorageListener = (key: string) => {
    const [value, setValue] = useState<string | null>()

    useEffect(() => {
        const listener = (event: StorageEvent) => {
            console.log(event.newValue)

            if (event.key === key) {    
                setValue(event.newValue)
            }
        }

        window.addEventListener("storage", listener)

        return () => {
            window.removeEventListener("storage", listener)
        }
    }, [key])

    return value
}

export default useLocalStorageListener