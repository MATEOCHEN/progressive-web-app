import { twZipcode } from "src/constants/web/zipcode"
import { AreaSelectorItem } from "src/types/components/cart/location"
import { SelectorItem } from "src/types/components/global/selector"

const getAreasSelectorItem = (city: string): SelectorItem<AreaSelectorItem>[] => {
    const area = twZipcode[city]

    if (!area) return []

    return Object.entries(area).map((item, index) => {
        return {
            key: item[0],
            name: item[0],
            value: {
                zipCode: item[1],
                areaName: item[0]
            }
        }
    })
}

const getCitySelectorItem = (): SelectorItem<string>[] => {
    return Object.keys(twZipcode).map((item, index) => {
        return {
            key: item,
            name: item,
            value: item
        }
    })
}

export {
    getAreasSelectorItem,
    getCitySelectorItem
}