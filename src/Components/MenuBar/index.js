import React from "react";
import style from "./MenuBar.module.css";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";
import Supera from "../../assets/supera.png";

const MenuBar = (props) => {
  return (
    <div className={style.main}>
      <img src={Supera} className={style.supera} />
      <button className={style.btn} onClick={() => props.setmodalCart()}>
        <Cart className={style.cart} />
      </button>
    </div>
  );
};

export default MenuBar;
