import { CartItemsProperties, CartOrderGrouped } from "src/types/components/cart"
import { useMemo } from "react"
import OriginCartGroupMemo from "./cartGroup"

const OriginalCartItems = ({ ...props }: CartItemsProperties) => {
    const groupByTemperatureType = useMemo(() => {
        return props.cartItems?.reduce((acc, cur) => {
            if(!cur.CartItems || cur.CartItems.length === 0) return acc

            const temperature = cur.CartItems[0].TemperatureType
            if (!acc[temperature]) {
                acc[temperature] = [cur]
            } else {
                acc[temperature].push(cur)
            }

            return acc
        }, {} as CartOrderGrouped)
    }, [props.cartItems])

    return (
        <div>
            {
                Object.entries(groupByTemperatureType).map((item, index) => {
                    return (
                        <OriginCartGroupMemo
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

export default OriginalCartItems