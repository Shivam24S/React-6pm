import React, { useState } from "react";

const ObjectUseState_04 = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [person, setPerson] = useState([]);

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleAdd = () => {
    setPerson((prev) => [...prev, input]);

    setInput({ name: "", email: "", address: "" });
  };

  console.log("person", person);

  return (
    <>
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
      <br />
      <input
        type="text"
        placeholder="enter your address"
        value={input.address}
        onChange={(e) => handleChange("address", e)}
      />

      <br />
      <br />
      <button onClick={handleAdd}>add</button>

      <br />
      <br />


      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {person.map((p,index) => {
            return (
              <tr key={index}>
                
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ObjectUseState_04;
