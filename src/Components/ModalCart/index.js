import React from "react";
import style from "./ModalCart.module.css";
import CartItem from "../CartItem";
import CartEmpty from "../../assets/cartempty.png";

const ModalCart = (props) => {
  const x = props.getBoughtItems;
  const nItems = x.reduce((x, y) => (x += y.quantity), 0);
  const totalProducts = x.reduce((x, y) => (x += y.price * y.quantity), 0);

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
                  key={x.id}
                  item={x}
                  setLocalStorage={(x) => props.setLocalStorage(x)}
                  decreaseLocalStorage={(x) => props.decreaseLocalStorage(x)}
                  removeLocalStorage={(x) => props.removeLocalStorage(x)}
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
        <div className={style.Window}>
          <h1>Shopping Cart</h1>
          <div className={style.body}>
            <img src={CartEmpty} />
            <h1>Cart is empty</h1>
            <p>Looks like you have no items in your shopping cart.</p>
            <p>Click to continue shopping.</p>
          </div>
        </div>
      </div>
    )
  ) : null;
};

export default ModalCart;
