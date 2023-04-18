type CartContextType = {
    deleteCartItem: (productId: number, cartItemId: number) => void
    setCartOpen: (isOpen: boolean) => void
}

export {
    CartContextType
}