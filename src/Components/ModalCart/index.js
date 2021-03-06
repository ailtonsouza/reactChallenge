import React from "react";
import style from "./ModalCart.module.css";
import CartItem from "../CartItem";

const ModalCart = (props) => {
  const x = props.getBoughtItems;

  console.log("x", x);
  return props.isOpen ? (
    <>
      <div className={style.Modal} onClick={() => props.closeModal()}></div>
      <div className={style.Window}>
        <h1>Shopping Cart</h1>
        {x.map((x) => (
          <CartItem item={x} />
        ))}
      </div>
    </>
  ) : null;
};

export default ModalCart;
