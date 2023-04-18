import { currencyFormat } from "src/libs/format"
import { CartInfoProperties } from "src/types/components/cart"

const OriginalCartInfo = ({ ...props }: CartInfoProperties) => {
    return (
        <div className="cart-info flex flex-col items-center px-4 h-[100px] mb-4">
            <a
                href="/Orders/ConfirmOrder"
                className="default-anchor w-full my-4"
            >
                <div
                    className="text-[#fff] w-full h-10 flex justify-center items-center bg-gb-green rounded-md"
                >結帳</div>
            </a>
            <div className="w-full flex justify-between text-gb-green font-bold">
                <span>總額</span>
                <span>NT$ {currencyFormat(props.cartInfo?.OrderTotalWithFreight || 0)}</span>
            </div>
        </div>
    )
}

export default OriginalCartInfo