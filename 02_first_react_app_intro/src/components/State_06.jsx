import { useState } from "react";



const State_06 = () => {

    const [name, setInput] = useState("");

    return (
        <>

            <input type="text" placeholder="enter text" value={name} onChange={(e) => setInput(e.target.value)} />

            <h1>you have typed  {name} </h1>

        </>
    )


}

export default State_06;