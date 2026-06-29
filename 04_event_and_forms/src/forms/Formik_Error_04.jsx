

import { ErrorMessage } from 'formik'
import React from 'react'

const Formik_Error_04 = ({ name }) => {
    return (
        <>
            <ErrorMessage name={name}  render={msg => <div style={{ color: "red" }}>{msg}</div>} />
        </>
    )
}

export default Formik_Error_04