import React, { useState } from "react";

const OnChange_02 = () => {
    const [input, setInput] = useState("");

    return (
        <>
            <input type="text" placeholder="enter input" value={input} onChange={(e) => setInput(e.target.value)} />

            <br />

            <h1>you have typed {input}</h1>
        </>
    );
};

export default OnChange_02;
