import Context from "@context";
import React, { useState, useEffect } from "react";

import UI from "@ui";
import Form, { useForm } from "@form";
import { fetcher } from "@lib/useFetch";

export default function Signin({ onSignup }) {
  const { auth, r } = React.useContext(Context);
  const formik = useForm({
    initialValues: {},
    validationSchema: null,
    onSubmit: async (payload) => {
      let res = await fetcher({
        url: "auth/signin",
        data: payload,
        method: "post",
      });
      res?.data?.token && auth.signin(res.data);
    },
  });

  return (
    <UI.Col className="md:w-96 w-80 flex flex-col justify-center gap-2">
      <h2 className="text-4xl text-gray-900 font-bold ">Sign In</h2>
      <p className="text-gray-500/90 text-sm">
        Don’t have an account?{" "}
        <a className="text-indigo-400 hover:opacity-90" href="#" onClick={onSignup}>
          Sign up
        </a>
      </p>
      <Form.Text autocomplete="off" label="email" name="email" value={formik.values.email} onChange={(e) => formik.set("email", e)} />
      <Form.Text
        autocomplete="new-password"
        label="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={(e) => formik.set("password", e)}
      />
      <UI.Button onClick={formik.handleSubmit}>Login</UI.Button>
    </UI.Col>
  );
}
