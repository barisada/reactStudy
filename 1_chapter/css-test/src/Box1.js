import React from "react";
import "./Box1.css";

function Box({ size }) {
  if (size === "big") {
    return <div className="box big">Big Box</div>;
  } else {
    return <div className="box small">Small Box</div>;
  }
}

export default Box;
