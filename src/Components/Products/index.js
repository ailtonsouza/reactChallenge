import React from "react";
import style from "./Products.module.css";
const images = require.context("../../assets", true);

const Products = (game) => {
  const dynamicImage = images(`./${game.product.image}`);
  let disable = game.getCartQuantity(game) === 0;
  return (
    <div className={style.main}>
      <p>{game.product.name}</p>
      <div className={style.body}>
        <div className={style.data}>
          <p>
            <b>Product ID:</b>
          </p>
          <p>{game.product.id}</p>

          <p>
            <b>Price:</b>
          </p>
          <p>${game.product.price}</p>
          <p>
            <b>Score:</b>
          </p>
          <p>{game.product.score}</p>
        </div>

        <img className={style.imgProd} src={dynamicImage.default} />

        <div className={style.buttons}>
          <p>Add to cart </p>

          <button
            disabled={disable}
            className={disable ? style.buttonDisabled : style.button}
            onClick={() => game.removeLocalStorage(game)}
          >
            -
          </button>
          <p>Remove to cart</p>
          <button
            className={style.button}
            onClick={() => game.setLocalStorage(game)}
          >
            +
          </button>
        </div>
      </div>
      <p>Cart Quantity: {game.getCartQuantity(game)}</p>
    </div>
  );
};

export default Products;
