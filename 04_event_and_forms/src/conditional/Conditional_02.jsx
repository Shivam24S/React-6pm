


import React, { useState } from 'react'

const Conditional_02 = () => {

    const [color, setColor] = useState("purple");

    let content

    if (color === "blue") {

        content = <h1 style={{ color: "blue" }} >you have selected blue color</h1>
    } else if (color === "red") {

        content = <h1 style={{ color: "red" }} >  you have selected red color</h1>
    } else if (color === "green") {

        content = <h1 style={{ color: "green" }} >you have selected green color</h1>
    } else {
        content = <h1> you haven't selected proper color</h1>
    }


    return (
     <>
        {content}
     </>
    )
}

export default Conditional_02