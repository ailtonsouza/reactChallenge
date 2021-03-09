import React, { useState, useEffect } from "react";

import style from "./input.module.css";

const Filter = ({ label, type, children, setFilters }) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    Simbolo: "=",
    valor: "Igual a",
  });

  const Component = (props) => {
    return (
      <div onClick={props.config}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            setSelectedOption: (e) => setSelectedOption(e),
          });
        })}
      </div>
    );
  };

  useEffect(() => {
    setFilters((f) => {
      if (f.find((x) => x.label === label)) {
        return [
          ...f.map((x) =>
            x.label === label
              ? {
                  label: label,
                  inputValue: inputValue,
                  valor: selectedOption.valor,
                }
              : x
          ),
        ];
      } else {
        return [
          ...f,
          {
            label: label,
            inputValue: inputValue,
            valor: selectedOption.valor,
          },
        ];
      }
    });
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
  });

  const config = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={style.InputBody}>
        <input
          className={style.Input}
          type={type}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={type === "alphabeticall"}
        />

        {inputValue ? (
          <span id={style.Filled}>{label}</span>
        ) : (
          <span>{label}</span>
        )}
        <button onClick={() => config()}>{selectedOption.Simbolo}</button>
      </div>
      {open && <Component config={config} />}
    </>
  );
};

export default Filter;
