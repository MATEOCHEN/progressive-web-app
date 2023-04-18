import { temperatureColors } from "src/constants/style/temperatureColors"
import { TemperatureType, TemperatureTypeMap } from "src/constants/web/temperatureType"
import { stringToEnumType } from "src/libs/transform"
import { CartGroupProperties } from "src/types/components/cart"
import React from "react"
import OriginalCartOrderMemo from "./cartOrder"

const OriginalCartGroup = ({ ...props }: CartGroupProperties) => {
    const temperatureTypeEnum = stringToEnumType<TemperatureType>(props.temperatureType)

    return (
        <div
            className={`cart-item-container w-full p-2 ${temperatureColors[temperatureTypeEnum]}`}
        >
            <div className="flex justify-center">
                <h4 className={`text-xl border-0 border-b-4 border-solid px-4 py-2 ${temperatureColors[temperatureTypeEnum]}`}>
                    {TemperatureTypeMap[temperatureTypeEnum]}
                </h4>
            </div>
            <div>
                {
                    props.order?.map((item, index) => {
                        return (
                            <OriginalCartOrderMemo
                                order={item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const OriginCartGroupMemo = React.memo(OriginalCartGroup)

export default OriginCartGroupMemo