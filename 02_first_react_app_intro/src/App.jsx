import { useState } from "react";
import ClassComponent from "./components/Class_02";
import Fragments from "./components/Fragments_03";
import Functional from "./components/Functional_01";
import Props from "./components/Props_05";
import State from "./components/State_04";
import JSX from "./JSX";
import State_06 from "./components/State_06";

const App = () => {
  return (
    <>
      <h1>hello</h1>

      <JSX />

      <Functional />

      <ClassComponent />

      <Fragments />

      <Props msg={"good morning"} />

      <Props msg={"good after noon"} />

      <Props msg={"good night"} greeting={"hlw"} />


      <State />

      <State_06/>
    </>
  );
};

export default App;
