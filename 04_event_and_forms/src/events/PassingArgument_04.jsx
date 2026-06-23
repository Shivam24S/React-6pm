import React from "react";

const PassingArgument = ({ name }) => {
  const handleClick = (name) => {
    alert(`hi there ${name} !`);
  };

  return <button onClick={() => handleClick(name)}>click</button>;
};

export default PassingArgument;
