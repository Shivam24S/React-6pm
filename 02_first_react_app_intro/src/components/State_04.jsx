import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);


    // const handleClick = () => {

    //     setCount(count + 1)
    // }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>increase count</button>
        </>
    );
};

export default State;
