import { useState } from "react";

const Lots_of_useState_03 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [person, setPerson] = useState([]);

  const handleAdd = () => {
    setPerson((prev) => [...prev, { name, email, address }]);
    setName("");
    setEmail("");
    setAddress("");
  };

  console.log("person detail", person);
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAdd}>add </button>
    </>
  );
};

export default Lots_of_useState_03;
