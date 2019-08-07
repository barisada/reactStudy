import React from "react";

function Title(props) {
  console.log("state Exmaple loading...");
  return <p>{props.title}</p>;
}

export default React.memo(Title);
