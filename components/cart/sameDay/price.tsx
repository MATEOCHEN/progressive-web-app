import React, { useMemo } from "react"
import { ProductType, ProductTypeMap } from "src/constants/web/productType"
import { LogisticsPriceThreshold } from "src/constants/web/properties"
import { currencyFormat } from "src/libs/format"
import { stringToEnumType } from "src/libs/transform"
import { SameDayPriceProperties } from "src/types/components/cart"

const SameDayPrice = ({ ...props }: SameDayPriceProperties) => {
    const productTypeName = stringToEnumType<ProductType>(props.type)
    const totalAmount = useMemo(() => {
        return props.cartOrders.reduce((acc, cur) => {
            return acc + cur.OrderTotalAmount
        }, 0)
    }, [props.cartOrders])

    const totalFreight = useMemo(() => {
        return props.cartOrders.reduce((acc, cur) => {
            if (cur.OrderFreight > acc) {
                acc = cur.OrderFreight
            }

            return acc
        }, 0)
    }, [props.cartOrders])

    const logisticsThreshold = LogisticsPriceThreshold - totalAmount

    return (
        <div className="w-full border border-solid border-gb-green shadow-sm rounded-md my-1 p-1">
            <div className="w-full flex justify-between text-gb-green font-bold mb-0">
                <span>{ProductTypeMap[productTypeName]}
                    <span className="text-xs">{`(含運費${currencyFormat(logisticsThreshold > 0 ? totalFreight : 0)})`}</span>
                </span>
                <span>NT{currencyFormat(totalAmount + totalFreight)}</span>
            </div>
            <>
                {
                    logisticsThreshold > 0
                        ? <div className="w-full flex justify-between text-[#ff0000] mb-0 font-bold">
                            <span>離免運門檻尚差</span>
                            <span>{currencyFormat(logisticsThreshold)}</span>
                        </div>
                        : <></>
                }
            </>
        </div>
    )
}

const SameDayPriceMemo = React.memo(SameDayPrice)

export default SameDayPriceMemo