type CartInfo = {
    OrderTotalAmount: number
    OrderTotalWithFreight: number
    Freight: number
    SameDayFreightDiscount: number
    IsCartValid: boolean
    IsLogin: boolean
    CityName?: string
    AreaName?: string
    IsSameDay: boolean
    LastArrivalTime: string
}

export {
    CartInfo
}