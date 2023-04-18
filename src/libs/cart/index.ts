import { ProductType } from "src/constants/web/productType"
import { FreeShippingProductTypes, LogisticsPriceThreshold } from "src/constants/web/properties";
import { CartOrder } from "src/types/apis/cart/cartItem"
import { CartOrderGrouped } from "../../types/components/cart"

const mappingByProductType = (orders: CartOrder[]): { [key: string]: CartOrder[] } => {
    return orders.reduce((acc, order) => {
        let { Type } = order

        // LOGIC: FrozenFood -> DriedFood, Operating Team wants to combine price of these two types
        if (Type === ProductType.FrozenFood) {
            Type = ProductType.DriedFood
        }

        if (acc[Type]) {
            acc[Type].push(order)

            return acc
        } else {
            return {
                ...acc,
                [Type]: [order]
            }
        }
    }, {} as { [key: string]: CartOrder[] })
}

const mappingByTemperatureType = (orders: CartOrder[]): CartOrderGrouped => {
    return orders.reduce((acc, cur) => {
        if (!cur.CartItems || cur.CartItems.length === 0) return acc

        const temperature = cur.CartItems[0].TemperatureType
        if (!acc[temperature]) {
            acc[temperature] = [cur]
        } else {
            acc[temperature].push(cur)
        }

        return acc
    }, {} as CartOrderGrouped)
}

const calculateFreightThreshold = (totalPrice: number, productType: ProductType) => {
    if (LogisticsPriceThreshold - totalPrice <= 0 || FreeShippingProductTypes.includes(productType)) {
        return 0
    }

    return LogisticsPriceThreshold - totalPrice
}


export {
    mappingByProductType,
    mappingByTemperatureType,
    calculateFreightThreshold
}