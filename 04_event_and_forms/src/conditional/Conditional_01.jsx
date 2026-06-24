

import React, { useState } from 'react'

const Conditional_01 = () => {

    const [login, setLogin] = useState(false)

    const [user,setUser] = useState(false)

    return (

        <>

            <h1>{login ? "welcome " : "click to login"}</h1>

            <button onClick={() =>setLogin(!login)} >{login ? "logOut" : "login"}</button>

            {user && <h3>welcome user</h3>}
        </>

    )
}

export default Conditional_01