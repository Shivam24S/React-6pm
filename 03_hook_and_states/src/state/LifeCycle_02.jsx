import { useEffect, useState } from "react";

const LifeCycle_02 = () => {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  // useEffect(() => {

  //     console.log("mount")

  // }, [count])

  // life cycle method

  // mount
  // useEffect(() => {

  //     console.log("component mounted")

  // }, [])

  // update

  // useEffect(() => {

  //     console.log("component updated")
  // }, [count])

  // unmount

  useEffect(() => {
    console.log("this will mount");

    return () => {
      console.log("this will unmount");
    };
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <h1>you have typed {name}</h1>

      <br />
      <br />

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
};

export default LifeCycle_02;
