enum TemperatureType {
    Normal = 1,
    Refrigerated = 2,
    Frozen = 3
}

const TemperatureTypeMap: Record<TemperatureType, string> = {
    [TemperatureType.Normal]: "常溫",
    [TemperatureType.Refrigerated]: "冷藏",
    [TemperatureType.Frozen]: "冷凍"
}

export {
    TemperatureType,
    TemperatureTypeMap
}