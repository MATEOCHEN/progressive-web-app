import React from "react"
import { temperatureColorsReverse } from "src/constants/style/temperatureColors"
import { ProductType, ProductTypeMap } from "src/constants/web/productType"
import { LogisticsPriceThreshold } from "src/constants/web/properties"
import { TemperatureType } from "src/constants/web/temperatureType"
import { calculateFreightThreshold } from "src/libs/cart"
import { currencyFormat } from "src/libs/format"
import { numberToEnumType } from "src/libs/transform"
import { CartOrderProperties } from "src/types/components/cart"
import OriginalCartItemMemo from "./cartItem"

const OriginalCartOrder = ({ ...props }: CartOrderProperties) => {
    const temperatureType = numberToEnumType<TemperatureType>(props.order.CartItems[0].TemperatureType)
    const freightThreshold = calculateFreightThreshold(props.order.OrderTotalAmount, props.order.Type)

    return (
        <div className="cart-order w-full">
            <div>
                {
                    props.order.CartItems.map((item, index) => {
                        return (
                            <OriginalCartItemMemo
                                cartItem={item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
            <div className={`border-t border-[#fff] py-2`}>
                <div className={`${temperatureColorsReverse[temperatureType]}`}>
                    <div className="flex justify-between font-bold text-sm px-2 py-1">
                        <span>{ProductTypeMap[props.order.Type]}小計
                            <span className="text-xs">{`(含運費 ${currencyFormat(props.order.OrderFreight)})`}</span>
                        </span>
                        <span>{currencyFormat(props.order.OrderTotalAmount + props.order.OrderFreight)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm px-2 py-1 mt-2">
                        <span>離免運門檻尚差</span>
                        <span>{currencyFormat(freightThreshold)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OriginalCartOrderMemo = React.memo(OriginalCartOrder)

export default OriginalCartOrderMemo