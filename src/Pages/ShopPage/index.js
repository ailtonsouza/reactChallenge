import React, { useState, useEffect } from "react";
import Product from "../../Components/Products";
import style from "./shopPage.module.css";
import games from "./products.json";
import FilterBar from "../../Components/FilterBar";
import Filter from "../../Components/Filter";
import customFilter from "../../hooks/customFilter";
import customSelectors from "../../hooks/customSelectors";
import Selector from "../../Components/Selector";
import ModalCart from "../../Components/ModalCart";
import MenuBar from "../../Components/MenuBar";

const ShopPage = () => {
  const [datax, setDate] = useState(games);
  const [filterData, setFilterData] = useState(games);
  const [filters, setFilters] = useState([]);
  const [modalCart, setmodalCart] = useState(false);
  const [, setLocalStorageData] = useState();

  const { mathSimbols, alphabeticallySimbols } = customSelectors();

  function filter() {
    let d = datax;

    for (let i = 0; i < filters.length; i++) {
      if (
        filters[i].inputValue.length > 0 ||
        filters[i].label === "Sort alphabetically?"
      ) {
        d = customFilter(filters[i], d);
      }
    }
    console.log(d);
    setFilterData(d);
  }

  function setLocalStorage(e) {
    let boughtItems = getBoughtItems();

    const element = e.product === undefined ? e : e.product;

    const found = boughtItems.find((x) => x.id === element.id);
    if (found) {
      boughtItems = boughtItems.map((x) =>
        x.id === element.id
          ? {
              id: element.id,
              name: element.name,
              price: element.price,
              score: element.score,
              image: element.image,
              quantity: x.quantity + 1,
            }
          : x
      );
    } else {
      boughtItems.push({
        id: element.id,
        name: element.name,
        price: element.price,
        score: element.score,
        image: element.image,
        quantity: 1,
      });
    }
    localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
    setLocalStorageData(boughtItems);
  }

  function decreaseLocalStorage(e) {
    let boughtItems = getBoughtItems();
    const element = e.product === undefined ? e : e.product;
    const found = boughtItems.find((x) => x.id === element.id);

    if (found) {
      if (found.quantity === 1) {
        const filteredBoughtItems = boughtItems.filter(
          (x) => x.id !== element.id
        );
        localStorage.setItem(
          "boughtItems",
          JSON.stringify(filteredBoughtItems)
        );
        setLocalStorageData(filteredBoughtItems);
      } else {
        boughtItems = boughtItems.map((x) =>
          x.id === element.id
            ? {
                id: element.id,
                name: element.name,
                price: element.price,
                score: element.score,
                image: element.image,
                quantity: x.quantity - 1,
              }
            : x
        );
        localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
        setLocalStorageData(boughtItems);
      }
    }
  }

  function removeLocalStorage(e) {
    let boughtItems = getBoughtItems();
    const element = e.product === undefined ? e : e.product;

    const filteredBoughtItems = boughtItems.filter((x) => x.id !== element.id);

    localStorage.setItem("boughtItems", JSON.stringify(filteredBoughtItems));
    setLocalStorageData(boughtItems);
  }

  function getBoughtItems() {
    let boughtItems;

    if (localStorage.getItem("boughtItems") === null) {
      boughtItems = [];
    } else {
      boughtItems = JSON.parse(localStorage.getItem("boughtItems"));
    }

    return boughtItems;
  }

  function getCartQuantity(e) {
    let boughtItems;
    let size;
    if (localStorage.getItem("boughtItems") === null) {
      boughtItems = [];
    } else {
      boughtItems = JSON.parse(localStorage.getItem("boughtItems"));
      size = boughtItems.find((x) => x.id === e.product.id);
      if (size) {
        return size.quantity;
      }
    }

    return 0;
  }

  return (
    <>
      <MenuBar
        getBoughtItems={() => getBoughtItems()}
        setmodalCart={() => setmodalCart(true)}
      />

      <div className={style.main}>
        <FilterBar filter={() => filter()}>
          <Filter type={"number"} label="price" setFilters={setFilters}>
            <Selector selectors={mathSimbols} />
          </Filter>
          <Filter type={"number"} label="score" setFilters={setFilters}>
            <Selector selectors={mathSimbols} />
          </Filter>

          <Filter
            type={"alphabeticall"}
            label={"Sort alphabetically?"}
            setFilters={setFilters}
          >
            <Selector selectors={alphabeticallySimbols} />
          </Filter>
        </FilterBar>
        <div className={style.screenItems}>
          <h1>Available Games</h1>
          <div className={style.items}>
            {filterData.map((x) => (
              <Product
                setLocalStorage={(e) => setLocalStorage(e)}
                decreaseLocalStorage={(e) => decreaseLocalStorage(e)}
                getCartQuantity={(e) => getCartQuantity(e)}
                product={x}
                key={x.id}
              />
            ))}
          </div>
        </div>
      </div>
      <ModalCart
        getBoughtItems={getBoughtItems()}
        setLocalStorage={(e) => setLocalStorage(e)}
        decreaseLocalStorage={(e) => decreaseLocalStorage(e)}
        removeLocalStorage={(e) => removeLocalStorage(e)}
        isOpen={modalCart}
        closeModal={() => setmodalCart(false)}
      />
    </>
  );
};

export default ShopPage;
