import React from "react";
import style from "./Products.module.css";
const images = require.context("../../assets", true);

const Products = ({ item }) => {
  return (
    <div className={style.main}>
      <p>{item.name}</p>
      <div className={style.body}>
        <div className={style.data}>
          <p>
            <b>Product ID:</b>
          </p>
          <p>{item.id}</p>

          <p>
            <b>Price:</b>
          </p>
          <p>${item.price}</p>
          <p>
            <b>Score:</b>
          </p>
          <p>{item.score}</p>
        </div>
      </div>
      <p>Cart Quantity: {item.quantity}</p>
    </div>
  );
};

export default Products;
