import React from "react";
import style from "./ModalCart.module.css";
import CartItem from "../CartItem";

const ModalCart = (props) => {
  const x = props.getBoughtItems;
  const nItems = x.reduce((x, y) => (x += y.quantity), 0);
  const totalProducts = x.reduce((x, y) => (x += y.price * y.quantity), 0);
  console.log(x.length);
  return props.isOpen ? (
    x.length > 0 ? (
      <>
        <div className={style.Modal} onClick={() => props.closeModal()}></div>
        <div className={style.Window}>
          <h1>Shopping Cart</h1>
          <div className={style.screenItems}>
            <p className={style.price}>Price:</p>
            <div className={style.items}>
              {x.map((x) => (
                <CartItem
                  item={x}
                  setLocalStorage={(x) => props.setLocalStorage(x)}
                  removeLocalStorage={(x) => props.setLocalStorage(x)}
                />
              ))}
            </div>
          </div>
          <div className={style.total}>
            <p>
              Subtotal ( {nItems} items): <b> ${totalProducts.toFixed(2)}</b>
            </p>

            {totalProducts > 250 ? (
              <>
                <p>Free Shipping </p>
                <p className={style.totalItem}>
                  Total: <b>${totalProducts.toFixed(2)}</b>{" "}
                </p>
              </>
            ) : (
              <>
                <p>
                  Shipping: <b>${(nItems * 10).toFixed(2)}</b>{" "}
                </p>
                <p className={style.totalItem}>
                  Total: <b>${(nItems * 10 + totalProducts).toFixed(2)}</b>{" "}
                </p>
              </>
            )}
          </div>
        </div>
      </>
    ) : (
      <div className={style.Modal} onClick={() => props.closeModal()}>
        <div className={style.Window}> Vazio </div>
      </div>
    )
  ) : null;
};

export default ModalCart;
