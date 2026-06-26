import React, { useState } from "react";

const Controlled_02 = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  console.log("name", input.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.name === "") {
      setError("name is required");
    }

    console.log("input data", input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={input.name}
          onChange={(e) => handleChange("name", e)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          value={input.email}
          onChange={(e) => handleChange("email", e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="enter your password"
          value={input.password}
          onChange={(e) => handleChange("password", e)}
        />
        <br />
        <br />
        <input
          type="address"
          placeholder="enter your address"
          value={input.address}
          onChange={(e) => handleChange("address", e)}
        />

        <br />
        <br />
        <button type="submit">submit</button>

        <br />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
};

export default Controlled_02;
