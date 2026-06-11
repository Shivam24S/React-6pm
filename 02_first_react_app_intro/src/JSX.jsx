import React from "react";

function JSX() {
  // without jsx
  let element = React.createElement("h1", null, "without jsx text");

  element = <h1>this is text with jsx</h1>;

  return <>{element}</>;
}

export default JSX;
