import React from "react";
import style from "./Box3.module.scss";
import cn from "classnames";

export default function Box2({ size }) {
  const isBig = size === "big";
  const label = isBig ? "Big Box" : "Small Box";

  return (
    <div
      className={cn(style.box, { [style.big]: isBig, [style.small]: !isBig })}
    >
      {label}
    </div>
  );
}
