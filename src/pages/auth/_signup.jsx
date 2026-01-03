import React, { useEffect, useState } from "react";

import UI from "@ui";
import Context from "@context";
import Form from "@form";
import { useForm as useFormik } from "@form";
import { fetcher } from "@lib/useFetch";

export default function Register({ onLogged, onPasscode, onSignin }) {
  const [step, setstep] = useState(1);
  const [refemail, setrefemail] = useState();
  const [passcode, setpasscode] = useState();

  useEffect(() => {
    // step == 2 && onPasscode(true);
  }, [step]);

  return (
    <UI.Col className="gap-2">
      <h2 className="text-4xl text-gray-900 font-bold ">Sign Up</h2>
      {step == 1 && <RegisterForm onDone={setstep} onSignin={onSignin} refemail={setrefemail} />}
      {step == 2 && (
        <PasscodeForm
          refemail={refemail}
          onDone={(v) => {
            setstep(v?.step);
            setpasscode(v?.passcode);
          }}
        />
      )}
      {step == 3 && <NewPassword onLogged={onLogged} passcode={passcode} refemail={refemail} />}
    </UI.Col>
  );
}

function RegisterForm({ onDone, onSignin, refemail }) {
  const { app } = React.useContext(Context);
  const [err, seterr] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      let res = await fetcher({
        url: `auth/signup`,
        method: "post",
        data: values,
      });
      if (res?.data?.next == "passcode") {
        onDone(2);
        refemail(formik.values.email);
      } else {
        seterr("this email already registered");
      }
    },
  });
  return (
    <>
      <p className="text-gray-500/90 text-sm">
        Already have an account?{" "}
        <a className="text-indigo-400 hover:opacity-90" href="#" onClick={onSignin}>
          Sign in
        </a>
      </p>
      <Form.Text label="full name" value={formik.values.name} onChange={(e) => formik.set("name", e)} />
      <Form.Text label="email" name="email" value={formik.values.email} onChange={(e) => formik.set("email", e)} />
      <UI.Button onClick={formik.handleSubmit} loading={formik.isSubmitting} disabled={formik.isSubmitting}>
        Register
      </UI.Button>
      {err && (
        <UI.Col center>
          <UI.Text variant="body2" color="error">
            {err}
          </UI.Text>
          <UI.Button fullWidth variant="text" onClick={onSignin}>
            Continue to Signin
          </UI.Button>
        </UI.Col>
      )}
    </>
  );
}

export function PasscodeForm({ onDone, refemail }) {
  const AuthInputRef = React.createRef();
  const { app } = React.useContext(Context);
  const [hasResend, sethasResend] = useState(false);
  const [passcode, setpasscode] = useState();
  const [err, seterr] = useState();

  function resendVerification() {
    //code
    seterr(false);
    sethasResend(true);
    reCode();
  }

  async function reCode() {
    let res = await fetcher({
      url: `auth/recode`,
      method: "post",
      data: {
        email: refemail,
      },
    });
  }

  async function doVerification() {
    let res = await fetcher({
      url: `auth/verification`,
      method: "post",
      data: {
        email: refemail,
        passcode: passcode,
      },
    });

    if (res?.data?.id) {
      onDone({ step: 3, passcode: passcode });
    } else {
      seterr("wrong passcode");
      AuthInputRef.current?.clear();
    }
  }

  useEffect(() => {
    if (passcode?.length == 4) {
      doVerification();
    }
  }, [passcode]);

  return (
    <UI.Col className="gap-2" center>
      <UI.Text variant="body1" center>
        Please enter 4 digit code
        <br /> that we've sent to your email
      </UI.Text>
      <Form.OTP length={4} onChange={setpasscode} ref={AuthInputRef} />
      <UI.Text
        variant="body2"
        color="error"
        sx={{
          minHeight: 24,
        }}
      >
        {err}
      </UI.Text>
      <UI.Row spacing={1} center my={1}>
        {!hasResend ? (
          <>
            <UI.Button startIcon={<UI.Icon name="refresh" />} variant="outlined" onClick={resendVerification}>
              Resend Verification Code
            </UI.Button>
          </>
        ) : (
          <UI.Text variant="body2" align="center" color="primary">
            Verification Code Sent
          </UI.Text>
        )}
      </UI.Row>
    </UI.Col>
  );
}

export function NewPassword({ onLogged, passcode, refemail, redirect = true }) {
  const { app, auth } = React.useContext(Context);

  const formik = useFormik({
    initialValues: {
      password: "",
      rpwd: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      let res = await fetcher({
        url: `auth/verification`,
        method: "post",
        data: {
          email: refemail,

          passcode: passcode,
          ...values,
        },
      });

      if (res?.data?.id) {
        auth.signin(res.data);
        onLogged(true);
      } else {
        seterr("something wrong");
      }
    },
  });

  return (
    <UI.Col className="gap-2">
      <UI.Text variant="body1">Enter new password</UI.Text>
      <Form.Text
        type="password"
        label="password"
        fullWidth
        value={formik.values.password}
        name="password"
        onChange={(e) => formik.setFieldValue("password", e)}
      />
      <Form.Text type="password" label="re-enter password" fullWidth value={formik.values.rpwd} name="rpwd" onChange={(e) => formik.setFieldValue("rpwd", e)} />
      <UI.Button fullWidth onClick={formik.handleSubmit} disabled={formik.values.password != formik.values.rpwd}>
        Submit
      </UI.Button>
    </UI.Col>
  );
}
