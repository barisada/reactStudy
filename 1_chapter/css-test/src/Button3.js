import React from "react";
import style from "./Button2.module.css";
import cn from "classnames";

export default function Button3({ size }) {
  if (size === "big") {
    return <button className={cn(style.button, style.big)}>Big Button</button>;
  } else {
    return (
      <button className={cn(style.button, style.small)}>Small Button</button>
    );
  }
}
