import {
  deleteCartItemApi,
  getCartInfoApi,
  getCartItemsApi,
} from "src/networks/cart";
import { CartInfo } from "src/types/apis/cart/cartInfo";
import { Cart } from "src/types/apis/cart/cartItem";
import { useEffect, useRef, useState } from "react";
import useObserver from "src/hooks/useObserver";
import OriginalShoppingCart from "./original";
import ArrowMemo from "src/components/icons/arrow";
import SameDayShoppingCart from "./sameDay";
import useCustomEventListener from "src/hooks/useCustomEventListener";
import { CartItemsCountChangedEvent } from "src/types/hooks/customEvent";
import { CartContextProvider } from "src/contexts/cartContext";
import LocationSelector from "./location";
import useAnimation from "src/hooks/useAnimation";
import { fadeXAnimation } from "src/libs/animations/fade";

const ShoppingCart = () => {
  const cartCountRef = useRef(document.getElementsByClassName("cart_no"));
  const cartRef = useRef<HTMLDivElement>(null);

  const cartToggleElement = useObserver({
    listenOn: "#cart-toggles",
    onElementChanges: (mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        setCartToggle(
          cartToggleElement.current?.classList.contains("open") || false
        );
      }
    },
  });

  useCustomEventListener<CartItemsCountChangedEvent>({
    eventName: "CartCountChanged",
    onEventTriggered: (event) => {
      cartRefresh();
    },
  });

  const fadeAnimation = useAnimation({
    ref: cartRef,
    animation: fadeXAnimation,
  });

  const [cartToggle, setCartToggle] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<Cart>([]);
  const [cartInfo, setCartInfo] = useState<CartInfo>();
  const [isSameDay, setIsSameDay] = useState<boolean>(false);

  const onLocationSelected = (isSameDay: boolean) => {
    setIsSameDay(isSameDay);
  };

  const closeCart = () => {
    setCartToggle(false);
    cartToggleElement.current?.classList.remove("open");
  };

  const setCartOpen = (isOpen: boolean) => {
    setCartToggle(isOpen);

    if (isOpen) {
      cartToggleElement.current?.classList.add("open");
    } else {
      cartToggleElement.current?.classList.remove("open");
    }
  };

  const deleteCartItem = async (productId: number, cartItemId: number) => {
    const result = await deleteCartItemApi(productId, cartItemId);

    if (result.status === 200) {
      cartRefresh();

      updateCartItemCount(result.data ?? 0);
    }
  };

  const updateCartItemCount = (count: number) => {
    if (cartCountRef.current && cartCountRef.current.length > 0) {
      for (let i = 0; i < cartCountRef.current.length; i++) {
        const cartCount = cartCountRef.current[i] as HTMLElement;

        if (count > 0) {
          cartCount.style.display = "block";
          cartCount.innerText = count.toString();
        } else {
          cartCount.innerText = "";
          cartCount.style.display = "none";
        }
      }
    }
  };

  const cartRefresh = () => {
    getCartItemsApi().then((resp) => {
      setCartItems(resp.data ?? []);
    });

    getCartInfoApi().then((resp) => {
      setCartInfo(resp.data);
    });
  };

  useEffect(() => {
    if (cartToggle) {
      fadeAnimation.begin();
    } else {
      fadeAnimation.reverse();
    }
  }, [cartToggle]);

  useEffect(() => {
    cartRefresh();
  }, []);

  return (
    <CartContextProvider
      value={{
        deleteCartItem: deleteCartItem,
        setCartOpen: setCartOpen,
      }}
    >
      <div
        className={`customScroll no-affected sp-cart exclude-display-none bg-gb-green-light h-screen overflow-y-auto fixed top-0 right-0 w-[290px] z-[10000]`}
        ref={cartRef}
      >
        <div className="top-0 bg-gb-green-light pt-4">
          <div className="flex justify-between px-4">
            <h3 className="text-gb-green text-base font-bold">我的菜籃</h3>
            <button className="default-btn" onClick={() => setCartOpen(false)}>
              <ArrowMemo className="w-5 h-5 fill-gb-green" color="#4ba83b" />
            </button>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <>
            <div className="justify-center h-[calc(100vh-70.5px)] font-bold text-2xl flex items-center text-gb-green">
              <h4>購物車尚無商品</h4>
            </div>
          </>
        ) : (
          <>
            <LocationSelector onSelected={onLocationSelected} />
            <>
              {isSameDay ? (
                <SameDayShoppingCart
                  cartItems={cartItems}
                  cartInfo={cartInfo}
                />
              ) : (
                <OriginalShoppingCart
                  cartItems={cartItems}
                  cartInfo={cartInfo}
                />
              )}
            </>
          </>
        )}
      </div>
      {cartToggle ? (
        <div
          className="top-0 left-0 fixed w-screen h-screen bg-opacity-0 z-[9999]"
          onClick={closeCart}
        ></div>
      ) : (
        <></>
      )}
    </CartContextProvider>
  );
};

export default ShoppingCart;
