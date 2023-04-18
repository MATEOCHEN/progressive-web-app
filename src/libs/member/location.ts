import { LocationSelectItem } from "src/types/components/cart/location";
import { twZipcode } from "src/constants/web/zipcode";

const cityAreaToLocation = (cityName: string, areaName: string): LocationSelectItem => {
    const locationItem: LocationSelectItem = {
        zipCode: "",
        cityName: cityName,
        areaName: areaName
    }

    const city = Object.entries(twZipcode).find(([key, value]) => {
        return key === cityName
    })?.[1]

    if(city) {
        const area = Object.entries(city).find(([key, value]) => {
            return key === areaName
        })?.[1]

        if(area) {
            locationItem.zipCode = area
        }
    }

    return locationItem
}

export {
    cityAreaToLocation
}