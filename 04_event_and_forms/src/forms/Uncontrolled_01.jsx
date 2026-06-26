import React, { useRef, useState } from "react";

const Uncontrolled_01 = () => {
    const inputRef = useRef("");

    const handleSubmit = (e) => {

        e.preventDefault()

        const name = inputRef.current.value;

        console.log("name", name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your name" ref={inputRef} />

            <button type="submit">submit</button>
        </form>
    );
};

export default Uncontrolled_01;
