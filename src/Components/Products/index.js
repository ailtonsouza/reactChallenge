import React from "react";
import style from "./Products.module.css";
const images = require.context("../../assets", true);

const Products = (game) => {
  const dynamicImage = images(`./${game.product.image}`);

  return (
    <div className={style.main}>
      <p>{game.product.name}</p>
      <div className={style.body}>
        <div className={style.data}>
          <p>
            <b>ID do produto:</b>
          </p>
          <p>{game.product.id}</p>

          <p>
            <b>Preço:</b>
          </p>
          <p>{game.product.price}</p>
          <p>
            <b>Score:</b>
          </p>
          <p>{game.product.score}</p>
        </div>

        <img className={style.imgProd} src={dynamicImage.default} />

        <div className={style.buttons}>
          <p>Adicionar </p>
          <button className={style.button}>-</button>
          <p>Remover</p>
          <button className={style.button}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
