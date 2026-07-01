import React, { useState } from "react";
import AddTodo from "./components/AddTodo";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      task: "learn react",
      description: "you have to learn react daily",
    },
    {
      id: 2,
      task: "practice react concept code",
      description: "you have to understand react concept and practice",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleAdd = (input) => {
    setTodos((prev) => [...prev, input]);
  };

  console.log("todos", todos);

  return <AddTodo handleAdd={handleAdd} />;
};

export default App;
