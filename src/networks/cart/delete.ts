import { fetchExceptionCatcher, fetchGreenbox } from ".."

const deleteCartItemApi = async (productId: number, cartItemId: number): Promise<FetchResponse<number>> => {
    return (await fetchExceptionCatcher<number>(fetchGreenbox("api/cart/RemoveItem", {
        method: "POST",
        body: JSON.stringify({
            productId,
            cartItemId
        })
    })))
}

export {
    deleteCartItemApi
}