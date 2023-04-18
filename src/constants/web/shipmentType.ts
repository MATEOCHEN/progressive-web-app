enum ShipmentType {
    SameDay = 0,
    Normal = 1
}

const ShipmentTypeMap: Record<ShipmentType, string> = {
    [ShipmentType.SameDay]: "當日配",
    [ShipmentType.Normal]: "普通宅配"
}

export {
    ShipmentType,
    ShipmentTypeMap
}