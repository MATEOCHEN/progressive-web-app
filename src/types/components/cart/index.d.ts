import { Cart, CartOrder, CartOrderItem } from "src/types/apis/cart/cartItem"
import { CartInfo } from "src/types/apis/cart/cartInfo"

type CartProperties = {
    cartItems: Cart
    cartInfo?: CartInfo
}

type CartInfoProperties = {
    cartInfo?: CartInfo
}

type CartItemsProperties = {
    cartItems: Cart
}

type CartItemProperties = {
    cartItem: CartOrderItem
}

type CartGroupProperties = {
    temperatureType: string
    order: CartOrder[]
}

type CartOrderProperties = {
    order: CartOrder
}

type SameDayPriceProperties = {
    type: string
    cartOrders: CartOrder[]
}

type SameDayScopeGroupProperties = {
    shipmentType: string
    cartOrders: CartOrder[]
}

type CartOrderGrouped = { [key: number]: CartOrder[] }

export {
    CartProperties,
    CartInfoProperties,
    CartItemsProperties,
    CartItemProperties,
    CartGroupProperties,
    CartOrderProperties,
    SameDayPriceProperties,
    SameDayScopeGroupProperties,
    CartOrderGrouped
}