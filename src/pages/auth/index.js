import Context from "@context";
import React, { useState, useEffect } from "react";

import UI from "@ui";
import Form, { useForm } from "@form";
import { fetcher } from "@lib/useFetch";

export default function Example() {
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

  useEffect(() => {
    if (auth?.id) {
      if (auth?.user.role_id == 1) {
        r.push("/super");
      } else if (auth?.user.role_id == 2) {
        // r.push("/u");
      }
    }
  }, [auth?.id]);

  return (
    <UI.Col className="w-screen h-screen justify-center items-center ">
      <UI.Col className="flex p-8 rounded-xl border border-gray-300">
        <UI.Col className="md:w-96 w-80 flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3">Welcome back! Please sign in to continue</p>
          <Form.Text label="email" name="email" value={formik.values.email} onChange={(e) => formik.set("email", e)} />
          <Form.Text label="password" name="password" type="password" value={formik.values.password} onChange={(e) => formik.set("password", e)} />

          <UI.Button onClick={formik.handleSubmit}>Login</UI.Button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?{" "}
            <a className="text-indigo-400 hover:underline" href="#">
              Sign up
            </a>
          </p>
          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">Or sign in with email</p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>
          <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
          </button>
        </UI.Col>
      </UI.Col>
    </UI.Col>
  );
}
