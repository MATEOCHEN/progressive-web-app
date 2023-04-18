import React from "react"
import { ProductTypeMap } from "src/constants/web/productType"
import { CartOrderProperties } from "src/types/components/cart"
import SameDayCartItemMemo from "./cartItem"

const SameDayCartOrder = ({ ...props }: CartOrderProperties) => {

    return (
        <div className="cart-order">
            <div className="flex justify-center">
                <h4 className="border-4 px-4 py-[.1em] border-solid mb-0 rounded-md mt-2">{ProductTypeMap[props.order.Type]}</h4>
            </div>
            <div>
                {
                    props.order.CartItems.map((item, index) => {
                        return (
                            <SameDayCartItemMemo
                                cartItem={item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const SameDayCartOrderMemo = React.memo(SameDayCartOrder)

export default SameDayCartOrderMemo