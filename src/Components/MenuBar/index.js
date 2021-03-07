import React from "react";
import style from "./MenuBar.module.css";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";
import Supera from "../../assets/supera.png";

const MenuBar = (props) => {
  const x = props.getBoughtItems();
  const nItems = x.reduce((x, y) => (x += y.quantity), 0);

  return (
    <div className={style.main}>
      <img src={Supera} className={style.supera} />
      <button className={style.btn} onClick={() => props.setmodalCart()}>
        <Cart className={style.cart} />
        <h1>{nItems}</h1>
      </button>
    </div>
  );
};

export default MenuBar;
