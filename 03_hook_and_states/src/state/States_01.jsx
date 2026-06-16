import { useState } from "react";

const States_01 = () => {


    const [count, setCount] = useState(0);



    const handleIncrement = () => {


        setCount(count + 1)


        // setCount((c) => c + 1)

        console.log("handle increment called",count)

    }


    return (
        <>

            <h1>count value {count}</h1>

            <br />
            <br />

            <button onClick={handleIncrement}  > increment +1</button>

            <br />
            <br />

            <button onClick={() => {
                handleIncrement();
                handleIncrement();
                handleIncrement();
                handleIncrement();
                handleIncrement();
            }}  >increment +5</button>

        </>
    );
};

export default States_01;
