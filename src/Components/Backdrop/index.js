import React from "react";
import style from "./Backdrop.module.css";

const backdrop = (props) =>
  props.isOpen ? (
    <div
      className={style.Backdrop}
      onClick={props.handleOpen && props.handleOpen}
    ></div>
  ) : null;
export default backdrop;
