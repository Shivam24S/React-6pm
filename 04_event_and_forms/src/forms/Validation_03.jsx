import React, { useState } from "react";

const Validation_03 = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState([]);

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  console.log("name", input.name);

  const validation = () => {
    const newErrors = {};

    if (input.name === "") {
      newErrors.name = "name is required";
    }

    if (!input.email.includes("@")) {
      newErrors.email = "invalid email";
    }

    if (input.password.length < 6) {
      newErrors.password = "min 6 character is required ";
    }

    if (input.address === "") {
      newErrors.address = "address is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validate = validation();

    console.log("validate", validate);

    if (Object.keys(validate).length > 0) {
      setError(validate);
    } else {
      alert("form submitted");
      console.log("input data", input);
    }
  };

  console.log("error", error);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={input.name}
          onChange={(e) => handleChange("name", e)}
        />

        {error.name ? <p style={{ color: "red" }}>{error.name}</p> : null}

        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          value={input.email}
          onChange={(e) => handleChange("email", e)}
        />

        {error.email ? <p style={{ color: "red" }}>{error.email}</p> : null}
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

        {error.password ? (
          <p style={{ color: "red" }}>{error.password}</p>
        ) : null}
        <input
          type="address"
          placeholder="enter your address"
          value={input.address}
          onChange={(e) => handleChange("address", e)}
        />

        {error.address ? <p style={{ color: "red" }}>{error.address}</p> : null}

        <br />
        <br />
        <button type="submit">submit</button>

        <br />
        <br />
      </form>
    </>
  );
};

export default Validation_03;
