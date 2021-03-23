import React, { useState, useEffect } from "react";

import style from "./input.module.css";

import customSelectors from "../../hooks/customSelectors";

const Filter = ({ label, type, children, setFilters, filters}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    Simbolo: "=",
    valor: "Equal to",
  });

  const Component = (props) => {
    return (
      <div data-testid="painel" onClick={props.config}>
    {React.cloneElement(children, {
        setSelectedOption
      })}  
      </div>
    );
  };

  useEffect(() => {

    if(filters === undefined){
      return;
    }
       

    if (filters.find((x) => x.label === label)) {
      setFilters([
        ...filters.map((x) =>
          x.label === label
            ? {
                label: label,
                inputValue: inputValue,
                valor: selectedOption.valor,
              }
            : x
        ),
      ]);
    } else {
      setFilters([
        ...filters,
        {
          label: label,
          inputValue: inputValue,
          valor: selectedOption.valor,
        },
      ]);
    }
  }, [selectedOption, inputValue]);

  useEffect(() => {
    if (type === "alphabeticall") {
      setSelectedOption({
        Simbolo: "x",
        valor: "Doesnt Filter",
      });
    } else {
      setSelectedOption({
        Simbolo: "=",
        valor: "Equal to",
      });
    }
  }, []);

  const config = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={style.InputBody}>
        <input
          id={style.Input}
          type={type}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={type === "alphabeticall"}
        />

        {inputValue ? (
          <label htmlFor={style.Input} id={style.Filled}>
            {label}
          </label>
        ) : (
          <label htmlFor={style.Input} >{label}</label>
        )}
        <button data-testid="button" onClick={() => config()}>
          {selectedOption.Simbolo}
        </button>
       
      </div>
      {open ? <Component config={config} /> : null}
    </>
  );
};

export default Filter;
