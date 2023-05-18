import { currencyFormat } from "src/libs/format";
import { sendNotification } from "src/libs/notifications/sendNotification";
import { CartInfoProperties } from "src/types/components/cart";

const OriginalCartInfo = ({ ...props }: CartInfoProperties) => {
  return (
    <div className="cart-info flex flex-col items-center px-4 h-[100px] mb-4">
      <button
        className="default-anchor w-full my-4"
        onClick={() => sendNotification("結帳成功! 您一共消費了3886元，我們會盡快送貨到府")}
      >
        <div className="text-[#fff] w-full h-10 flex justify-center items-center bg-gb-green rounded-md">
          結帳
        </div>
      </button>
      <div className="w-full flex justify-between text-gb-green font-bold">
        <span>總額</span>
        <span>
          NT$ {currencyFormat(props.cartInfo?.OrderTotalWithFreight || 0)}
        </span>
      </div>
    </div>
  );
};

export default OriginalCartInfo;
