import React from "react";
import "./Button1.css";

function Button({ size }) {
  if (size === "big") {
    return <button className="button big">Big Button</button>;
  } else {
    return <button className="button small">Small Button</button>;
  }
}

export default Button;
