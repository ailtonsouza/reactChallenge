import React from "react";
import style from "./Products.module.css";
const images = require.context("../../assets", true);

const Products = ({ item, setLocalStorage, removeLocalStorage }) => {
  const dynamicImage = images(`./${item.image}`);
  return (
    <div className={style.main}>
      <img className={style.imgProd} src={dynamicImage.default} />

      <div className={style.body}>
        <div className={style.price}>
          <p>
            {item.id} - {item.name}
          </p>
          <p>
            <b>${item.price.toFixed(2)}</b>
          </p>
        </div>
        <div className={style.data}>
          <p>
            Score:
            {item.score}
          </p>
        </div>
        <div className={style.quantityButtons}>
          <p>QTY: {item.quantity}</p>
          <button className={style.add} onClick={() => setLocalStorage(item)}>
            Add
          </button>
          <button
            className={style.decrease}
            onClick={() => removeLocalStorage(item)}
          >
            Decrease
          </button>
          <button className={style.remove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
