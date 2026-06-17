

// new method

const Props = ({ msg,greeting }) => {


    return (
        <>

            <h1> hi there {msg}</h1>

            <h5>{greeting}</h5>
        </>
    )
}


// old method

// const Props = (props) => {


//     return (
//         <>

//             <h1> hi there {props.msg}</h1>
//         </>
//     )
// }


export default Props;