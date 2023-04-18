import { CartProperties } from "src/types/components/cart"
import OriginalCartInfo from "./info"
import OriginalCartItems from "./items"

const OriginalShoppingCart = ({ ...props }: CartProperties) => {
    return (
        <>
            <OriginalCartInfo
                cartInfo={props.cartInfo}
            />
            <OriginalCartItems
                cartItems={props.cartItems}
            />
        </>
    )
}

export default OriginalShoppingCart