import { useMemo } from "react"
import { mappingByTemperatureType } from "src/libs/cart"
import { CartItemsProperties, CartOrderGrouped } from "src/types/components/cart"
import SameDayCartGroupMemo from "./cartGroup"

const SameDayCartItems = ({ ...props }: CartItemsProperties) => {
    const groupByTemperatureType = useMemo(() => {
        return mappingByTemperatureType(props.cartItems)
    }, [props.cartItems])

    return (
        <div>
            {
                Object.entries(groupByTemperatureType).map((item, index) => {
                    return (
                        <SameDayCartGroupMemo
                            order={item[1]}
                            temperatureType={item[0]}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default SameDayCartItems


