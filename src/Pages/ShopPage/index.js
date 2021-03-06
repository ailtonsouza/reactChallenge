import React, { useState } from "react";
import Product from "../../Components/Products";
import style from "./shopPage.module.css";
import games from "./products.json";
import FilterBar from "../../Components/FilterBar";
import Filter from "../../Components/Filter";
import customFilter from "../../hooks/customFilter";
import customSelectors from "../../hooks/customSelectors";
import Selector from "../../Components/Selector";

const ShopPage = () => {
  const [data, setDate] = useState(games);
  const [filterData, setFilterData] = useState([...games]);
  const [filters, setFilters] = useState([]);

  const { mathSimbols, stringSimbols } = customSelectors();

  function filter() {
    let d = data;

    for (let i = 0; i < filters.length; i++) {
      if (filters[i].inputValue.length > 0) {
        d = customFilter(filters[i], d);
      }
    }

    setFilterData(d);
  }

  return (
    <div className={style.main}>
      <FilterBar filter={() => filter()}>
        <Filter type={"number"} label="price" setFilters={setFilters}>
          <Selector selectors={mathSimbols} />
        </Filter>
        <Filter type={"number"} label="score" setFilters={setFilters}>
          <Selector selectors={mathSimbols} />
        </Filter>
      </FilterBar>
      <div className={style.screenItems}>
        <div className={style.items}>
          {filterData.map((x) => (
            <Product product={x} key={x.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
