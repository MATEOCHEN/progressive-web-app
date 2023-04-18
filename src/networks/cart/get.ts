import { DataSource, DATA_SOURCE } from "src/constants/environment"
import { mockCartItems, mockOriginalCartInfo } from "src/constants/mock/cart"
import { CartInfo } from "src/types/apis/cart/cartInfo"
import { Cart } from "src/types/apis/cart/cartItem"
import { fetchExceptionCatcher, fetchGreenbox } from ".."

const getCartItemsApi = async (): Promise<FetchResponse<Cart>> => {
    if (DATA_SOURCE === DataSource.MOCK) {
        return {
            status: 200,
            data: mockCartItems
        }
    }

    return (await fetchExceptionCatcher<Cart>(fetchGreenbox("api/cart/GetCartItems")))
}

const getCartInfoApi = async (): Promise<FetchResponse<CartInfo>> => {
    if (DATA_SOURCE === DataSource.MOCK) {
        return {
            status: 200,
            data: mockOriginalCartInfo
        }
    }

    return (await fetchExceptionCatcher<CartInfo>(fetchGreenbox("api/cart/GetCartInfo")))
}

const checkIsSameDayApi = async (zipCode: string) => {
    if (DATA_SOURCE === DataSource.MOCK) {
        return {
            status: 200,
            data: true
        }
    }

    return await fetchExceptionCatcher<boolean>(fetchGreenbox(`api/orders/CheckSameDayDelivery?zipCode=${zipCode}`))
}

const preCheckIsSameDayApi = async (zipCode: string) => {
    if (DATA_SOURCE === DataSource.MOCK) {
        return {
            status: 200,
            data: true
        }
    }

    return await fetchExceptionCatcher<boolean>(fetchGreenbox(`api/orders/PreCheckSameDayDelivery?zipCode=${zipCode}`))
}

export {
    getCartItemsApi,
    getCartInfoApi,
    checkIsSameDayApi,
    preCheckIsSameDayApi
}