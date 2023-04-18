import React, { useContext } from "react"
import DeleteIconMemo from "src/components/icons/delete"
import { CDN_DOMAIN } from "src/constants/environment"
import { CartContext } from "src/contexts/cartContext"
import { currencyFormat } from "src/libs/format"
import { CartItemProperties } from "src/types/components/cart"

const OriginalCartItem = ({ ...props }: CartItemProperties) => {
    const cartContext = useContext(CartContext)

    const deleteCartItem = () => {
        cartContext.deleteCartItem(props.cartItem.ProductId, props.cartItem.Id)
    }

    return (
        <div className="cart-item py-4 w-full">
            <div className="flex">
                <button
                    className="default-btn w-2/12 flex justify-center items-center"
                    onClick={deleteCartItem}
                >
                    <DeleteIconMemo
                        className="w-6 h-6"
                        color="#fff"
                    />
                </button>
                <div className="w-5/12 p-2 flex items-center">
                    <img
                        src={CDN_DOMAIN + props.cartItem.Pic}
                        alt={props.cartItem.ProductName}
                        className="w-full"
                    />
                </div>
                <div className="w-5/12 py-2 flex flex-col justify-between">
                    <p className="font-bold text-sm">{props.cartItem.ProductName}</p>
                    <div className="flex justify-between mt-2 font-bold">
                        <span className="">X {props.cartItem.Quantity}</span>
                        <span>{currencyFormat(props.cartItem.Price)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OriginalCartItemMemo = React.memo(OriginalCartItem)

export default OriginalCartItemMemo