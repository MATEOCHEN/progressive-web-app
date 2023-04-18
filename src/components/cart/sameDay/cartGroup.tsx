import React from "react";
import { temperatureColors } from "src/constants/style/temperatureColors";
import { TemperatureType, TemperatureTypeMap } from "src/constants/web/temperatureType";
import { stringToEnumType } from "src/libs/transform";
import { CartGroupProperties } from "src/types/components/cart";
import SameDayCartOrderMemo from "./cartOrder";

const SameDayCartGroup = ({ ...props }: CartGroupProperties) => {
    const temperatureTypeEnum = stringToEnumType<TemperatureType>(props.temperatureType)

    return (
        <div
            className={`cart-item-container w-full p-2 ${temperatureColors[temperatureTypeEnum]}`}
        >
            <div className="flex justify-center">
                <h4 className={`text-xl border-0 border-b-4 border-solid px-4 pt-2 pb-1 my-2 ${temperatureColors[temperatureTypeEnum]}`}>
                    {TemperatureTypeMap[temperatureTypeEnum]}
                </h4>
            </div>
            <div>
                {
                    props.order?.map((item, index) => {
                        return (
                            <SameDayCartOrderMemo
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

const SameDayCartGroupMemo = React.memo(SameDayCartGroup)

export default SameDayCartGroupMemo
