type LocationSelectItem = {
    zipCode: string
    cityName: string
    areaName: string
}

type AreaSelectorItem = {
    areaName: string
    zipCode: string
}

type LocationSelectorProperties = {
    onSelected: (isSameDay: boolean) => void
}

type CitySelectorProperties = {
    onSelected: (attrName: string) => void
}

type AreaSelectorProperties = {
    onSelected: (areaName: string, zipCode: string) => void
    cityName?: string
}

export {
    LocationSelectorProperties,
    CitySelectorProperties,
    AreaSelectorProperties,
    LocationSelectItem,
    AreaSelectorItem
}