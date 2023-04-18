enum ProductType {
    DirectlySale = 0,
    AdditionalProduct = 1,
    DriedFood = 2,
    VIP = 4,
    Box = 5,
    Subscription = 6,
    FrozenFood = 7,
    BabyFood = 9,
    NoType = 10
}

const ProductTypeMap: Record<ProductType, string> = {
    [ProductType.DirectlySale]: "產地直送",
    [ProductType.AdditionalProduct]: "加購商品",
    [ProductType.DriedFood]: "快速到貨",
    [ProductType.VIP]: "VIP商品",
    [ProductType.Box]: "箱類",
    [ProductType.Subscription]: "訂閱商品",
    [ProductType.FrozenFood]: "生鮮肉舖",
    [ProductType.BabyFood]: "粥寶寶",
    [ProductType.NoType]: ""
}

export {
    ProductType,
    ProductTypeMap
}