import React from "react";
import style from "./Products.module.css";
const images = require.context("../../assets", true);

const Products = (game) => {
  const dynamicImage = images(`./${game.product.image}`);

  return (
    <div className={style.main}>
      <p>{game.product.id}</p>
      <p>{game.product.name}</p>
      <p>{game.product.price}</p>
      <p>{game.product.score}</p>
      <img src={dynamicImage.default} />
      <p>------------------------</p>
    </div>
  );
};

export default Products;
