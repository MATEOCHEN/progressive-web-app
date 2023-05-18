import { CartProperties } from "src/types/components/cart";
import ArrowMemo from "src/components/icons/arrow";
import { useContext, useMemo } from "react";
import { mappingByProductType } from "src/libs/cart";
import { currencyFormat } from "src/libs/format";
import SameDayPriceMemo from "./price";
import SameDayCartItems from "./items";
import { CartContext } from "src/contexts/cartContext";
import { sendNotification } from "src/libs/notifications/sendNotification";

const SameDayShoppingCart = ({ ...props }: CartProperties) => {
  const groupedByProductType = useMemo(
    () => mappingByProductType(props.cartItems),
    [props.cartItems]
  );

  return (
    <>
      <div className="bg-gb-green-light pt-4">
        <div className="cart-info flex flex-col items-center px-4 mb-2">
          <button
            className="default-anchor w-full my-4"
            onClick={() =>
              sendNotification(
                "結帳成功! 您一共消費了3886元，我們會盡快宅配到府"
              )
            }
          >
            <div className="text-[#fff] w-full h-10 flex justify-center items-center bg-gb-green rounded-md">
              結帳
            </div>
          </button>
          <div className="w-full flex justify-between text-gb-green font-bold mb-1">
            <span>總額</span>
            <span>
              NT{currencyFormat(props.cartInfo?.OrderTotalWithFreight || 0)}
            </span>
          </div>
          {Object.entries(groupedByProductType).map((item, index) => {
            return (
              <SameDayPriceMemo
                key={index}
                type={item[0]}
                cartOrders={item[1]}
              />
            );
          })}
        </div>
      </div>
      <SameDayCartItems cartItems={props.cartItems} />
    </>
  );
};

export default SameDayShoppingCart;
