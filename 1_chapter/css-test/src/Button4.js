import React from "react";
import style from "./Button4.module.scss";

function Button4(props) {
  if (props.size === "big") {
    return (
      <button className={`${style.button} ${style.big}`}>Big Button</button>
    );
  } else {
    return (
      <button className={`${style.button} ${style.small}`}>Small Button</button>
    );
  }
}

export default Button4;

console.log("style : ", style);
