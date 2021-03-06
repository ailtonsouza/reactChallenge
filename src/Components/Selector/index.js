import React from "react";


import style from "./selector.module.css";

const Selector = (props) => {
  return (
    <>
      <div className={style.options}>
        {props.selectors.map((x) => (
          <div
            className={style.option}
            onClick={() =>
              props.setSelectedOption({
                Simbolo: x.Simbolo,
                valor: x.valor,
              })
            }
          >
            {x.Simbolo} - {x.valor}
          </div>
        ))}
      </div>
    
    </>
  );
};

export default Selector;
