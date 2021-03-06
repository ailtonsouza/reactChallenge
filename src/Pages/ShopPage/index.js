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
  const [data, setDate] = useState(games);
  const [filterData, setFilterData] = useState([...games]);
  const [filters, setFilters] = useState([]);
  const [modalCart, setmodalCart] = useState(false);
  const [, setLocalStorageData] = useState();

  const { mathSimbols, alphabeticallySimbols } = customSelectors();

  function filter() {
    let d = data;

    for (let i = 0; i < filters.length; i++) {
      if (filters[i].inputValue.length > 0) {
        d = customFilter(filters[i], d);
      }
    }

    setFilterData(d);
  }

  function setLocalStorage(e) {
    const boughtItems = getBoughtItems();
    const found = boughtItems.find((x) => x.id === e.product.id);
    if (found) {
      const filteredBoughtItems = boughtItems.filter(
        (x) => x.id !== e.product.id
      );
      found.quantity += 1;
      filteredBoughtItems.push(found);
      localStorage.setItem("boughtItems", JSON.stringify(filteredBoughtItems));
      setLocalStorageData(filteredBoughtItems);
    } else {
      boughtItems.push({
        id: e.product.id,
        name: e.product.name,
        price: e.product.price,
        score: e.product.score,
        quantity: 1,
      });
      localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
      setLocalStorageData(boughtItems);
    }
    //window.location.reload();
  }

  function removeLocalStorage(e) {
    const boughtItems = getBoughtItems();

    const found = boughtItems.find((x) => x.id === e.product.id);

    if (found) {
      if (found.quantity === 1) {
        const filteredBoughtItems = boughtItems.filter(
          (x) => x.id !== e.product.id
        );
        localStorage.setItem(
          "boughtItems",
          JSON.stringify(filteredBoughtItems)
        );
        setLocalStorageData(filteredBoughtItems);
      } else {
        found.quantity -= 1;
        const filteredBoughtItems = boughtItems.filter(
          (x) => x.id !== e.product.id
        );
        filteredBoughtItems.push(found);
        localStorage.setItem(
          "boughtItems",
          JSON.stringify(filteredBoughtItems)
        );
        setLocalStorageData(filteredBoughtItems);
      }
    }
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
      <MenuBar setmodalCart={() => setmodalCart(true)} />

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
            label="sort alphabetically"
            setFilters={setFilters}
          >
            <Selector selectors={alphabeticallySimbols} />
          </Filter>
        </FilterBar>
        <div className={style.screenItems}>
          <div className={style.items}>
            {filterData.map((x) => (
              <Product
                setLocalStorage={(e) => setLocalStorage(e)}
                removeLocalStorage={(e) => removeLocalStorage(e)}
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
        isOpen={modalCart}
        closeModal={() => setmodalCart(false)}
      />
    </>
  );
};

export default ShopPage;
