import React, { useState } from "react";
import Product from "../../Components/Products";
import style from "./shopPage.module.css";
import games from "./products.json";

const ShopPage = () => {
  const [data, setDate] = useState(games);

  return (
    <div className={style.main}>
      {data.map((x) => (
        <Product product={x} key={x.id} />
      ))}
    </div>
  );
};

export default ShopPage;
