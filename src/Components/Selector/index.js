import React from "react";
import Backdrop from "../Backdrop";

import style from "./selector.module.css";

const Selector = (props) => {
  return (
    <>
      <div className={style.options}>
        {props.selectors.map((x) => (

          <div
            key={x.valor}
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
      <Backdrop isOpen={true} />
    </>
  );
};

export default Selector;
