import { ProductType } from "src/constants/web/productType"

type Cart = CartOrder[]

type CartOrder = {
    Type: ProductType
    Type2: number
    CartItems: CartOrderItem[]
    OrderTotalAmount: number
    OrderFreight: number
    IsSpecialTransfer: boolean
    DisplayFreightString?: string
    SpecialRulesOfActivityTitle?: any[]
    TemperatureType: number
    ItemCount: number
}

type CartOrderItem = {
    Id: number
    ProductId: number
    ProductDetailId: number
    ProductName: string
    ProductUnit: number
    IsSubscritpion: boolean
    ProductModule: string
    Pic: string
    Price: number
    Quantity: number
    HasTax: boolean
    HasAfterPay: boolean
    isWeekly: boolean
    SubTotalWithSpecialRules: number
    SpecialRulesOfActivityTitle: string
    TestProductId: number
    SubTotal: number
    AdditionalById: number
    IsHide: boolean
    ProductStock: number
    SoldAmount: number
    ProductExportTime: string
    ProductFinalExportTime?: string
    Type: ProductType
    Type2: number
    TemperatureType: number
    TemperatureTypeName: string
    Detail?: any
    IsSuperKill: boolean
    IsShipping: boolean
    MinimumPrice: number
    BoxWeeklyType: number
    SubWeek: number
    BoxSize: number
    BoxPeriodDay: number
    Fee: number
    FreightPrice: number
    DisplayFreightString?: string
    ProductIcon?: string
    Mark: number
}

export {
    Cart,
    CartOrder,
    CartOrderItem
}