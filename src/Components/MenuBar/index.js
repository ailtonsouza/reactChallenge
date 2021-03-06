import React from "react";
import style from "./MenuBar.module.css";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";

const MenuBar = () => {
  return (
    <div className={style.main}>
      <Cart className={style.cart} />
    </div>
  );
};

export default MenuBar;
