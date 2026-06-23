import React, { useState } from "react";

const OnSubmit_03 = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
    });

    const [person, setPerson] = useState([]);

    const handleInput = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setPerson((prev) => [...prev, input]);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter name"
                    value={input.name}
                    onChange={(e) => handleInput("name", e)}
                />

                <br />
                <br />

                <input
                    type="email"
                    placeholder="enter email"
                    value={input.email}
                    onChange={(e) => handleInput("email", e)}
                />

                <br />
                <br />

                <button type="submit">add</button>

                {person.map((p) => {
                    return (
                        <>
                            <li>{p.name}</li>
                            <li>{p.email}</li>
                        </>
                    );
                })}
            </form>
        </>
    );
};

export default OnSubmit_03;
