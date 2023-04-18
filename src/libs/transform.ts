const stringToEnumType = <T>(str: string): T => {
    const typeNum = parseInt(str)

    return typeNum as unknown as T
}

const numberToEnumType = <T>(num: number): T => {
    return num as unknown as T
}

export {
    stringToEnumType,
    numberToEnumType
}