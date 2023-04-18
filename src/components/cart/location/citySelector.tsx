import { useEffect, useMemo } from "react"
import Selector from "src/components/global/selector"
import { getCitySelectorItem } from "src/libs/location"
import { CitySelectorProperties } from "src/types/components/cart/location"

const CitySelector = ({ ...props }: CitySelectorProperties) => {
    const cities = useMemo(() => {
        return getCitySelectorItem()
    }, [])

    const onChange = (data: string) => {
        props.onSelected(data)
    }

    useEffect(() => {
        if (cities.length > 0) {
            props.onSelected(cities[0].value)
        }
    }, [])

    return (
        <div className="w-6/12 px-1">
            <Selector
                onSelected={onChange}
                items={cities}
            />
        </div>
    )
}

export default CitySelector