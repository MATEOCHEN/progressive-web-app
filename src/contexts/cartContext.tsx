import { createContext } from "react";
import { CartContextType } from "src/types/contexts/cart";

const CartContext = createContext<CartContextType>({
    deleteCartItem: () => { },
    setCartOpen: () => { },
})

const CartContextProvider = CartContext.Provider

export {
    CartContext,
    CartContextProvider
}