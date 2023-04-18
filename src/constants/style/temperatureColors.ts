import { TemperatureType } from "../web/temperatureType";

const temperatureColors: Record<TemperatureType, string> = {
    [TemperatureType.Normal]: "c-normal",
    [TemperatureType.Refrigerated]: "c-refrigerated",
    [TemperatureType.Frozen]: "c-frozen"
}

const temperatureColorsReverse: Record<TemperatureType, string> = {
    [TemperatureType.Normal]: "c-normal-reverse",
    [TemperatureType.Refrigerated]: "c-refrigerated-reverse",
    [TemperatureType.Frozen]: "c-frozen-reverse"
}

export {
    temperatureColors,
    temperatureColorsReverse
}