import React, { useState } from "react";

const OnClick_01 = () => {
    const handleClick = () => {

        alert("button clicked")
    };

    return (
        <>
         

            <button onClick={handleClick}>click</button>
        </>
    );
};

export default OnClick_01;
