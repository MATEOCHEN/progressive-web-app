import { ProductType } from "./productType";

const LogisticsPriceThreshold = 999
const LogisticsPriceDefault = 150

const FreeShippingProductTypes = [
    ProductType.DirectlySale,
    ProductType.Box
]

export {
    LogisticsPriceThreshold,
    FreeShippingProductTypes,
    LogisticsPriceDefault
}