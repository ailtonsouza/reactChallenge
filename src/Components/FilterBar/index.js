import React from "react";
import style from "./filterBar.module.css";
import { ReactComponent as FindIcon } from "../../assets/find.svg";

const FilterBar = (props) => {
  return (
    <div className={style.RightNav}>
      <div className={style.rightNavHeader}>
        <h2 className={style.title}> Filters</h2>
      </div>

      <div className={style.buttonSearch}>
        <button className={style.findMenu} onClick={() => props.filter()}>
          <FindIcon />
        </button>
      </div>

      <div className={style.rightNavBody}>{props.children}</div>
    </div>
  );
};

export default FilterBar;
