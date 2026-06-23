import React, { useRef } from "react";

const UseRef_07 = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // inputRef.current.focus;

    inputRef.current.value;

    console.log("input value", inputRef);
  };

  console.log("this is will rendered");

  return (
    <>
      <input type="text" ref={inputRef} placeholder="enter your name" />

      <br />
      <br />

      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default UseRef_07;
