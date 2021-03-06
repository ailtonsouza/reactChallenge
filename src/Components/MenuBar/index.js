import React from "react";
import style from "./MenuBar.module.css";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";

const MenuBar = (props) => {
  return (
    <div className={style.main}>
      <button className={style.btn} onClick={() => props.setmodalCart()}>
        <Cart className={style.cart} />
      </button>
    </div>
  );
};

export default MenuBar;
