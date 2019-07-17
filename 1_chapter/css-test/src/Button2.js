import React from "react";
import style from "./Button2.module.css";

function Button2(props) {
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

export default Button2;

console.log("style : ", style);
