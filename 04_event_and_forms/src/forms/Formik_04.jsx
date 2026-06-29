import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form } from "formik";
import Formik_Error_04 from "./Formik_Error_04";

const Formik_04 = () => {
  const validation = () => {
  return  Yup.object({
      name: Yup.string()
        .min(2, "minimum 2 character is required")
        .max(50, "max 50 character can be used as name")
        .required("name is required"),
      email: Yup.string().email("invalid email").required("email is required"),
      password: Yup.string("password must be string")
        .min(6, "password must be 6 character long")
        .required("email is required"),
    });
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          console.log("form data", values);

          resetForm();
        }}
      >
        <Form>
          <Field type="text" name="name" placeholder="enter name" />
          <br />
          <br />
          <Formik_Error_04 name={"name"} />

          <Field type="email" name="email" placeholder="enter email" />
          <br />
          <br />

          <Formik_Error_04 name={"email"} />
          <Field type="password" name="password" placeholder="enter password" />
          <br />
          <br />
          <Formik_Error_04 name={"password"} />
          <button type="submit">add</button>
        </Form>
      </Formik>
    </>
  );
};

export default Formik_04;
