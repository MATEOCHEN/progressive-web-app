import { useEffect, useMemo } from "react";
import Selector from "src/components/global/selector";
import { getAreasSelectorItem } from "src/libs/location";
import { AreaSelectorItem, AreaSelectorProperties } from "src/types/components/cart/location";

const AreaSelector = ({ ...props }: AreaSelectorProperties) => {
    const onItemClicked = (result: AreaSelectorItem) => {
        props.onSelected(result.areaName, result.zipCode)
    }

    const areaItems = useMemo(() => {
        if (!props.cityName) {
            return []
        }

        return getAreasSelectorItem(props.cityName)
    }, [props.cityName])

    useEffect(() => {
        if (areaItems.length > 0) {
            props.onSelected(areaItems[0].value.areaName, areaItems[0].value.zipCode)
        }
    }, [areaItems])

    return (
        <div className="w-6/12 px-1">
            <Selector
                onSelected={onItemClicked}
                items={areaItems}
            />
        </div>
    )
}

export default AreaSelector