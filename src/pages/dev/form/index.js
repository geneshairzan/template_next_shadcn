"use client";

import UI from "@ui";
import Form, { useForm } from "@form";

export default function App() {
  const formik = useForm({
    initialValues: {},
    validationSchema: null,
    onSubmit: async (payload) => {},
  });

  return (
    <UI.Col className="flex flex-col p-2 gap-2">
      <Form.Text label="input text" value={formik.values.text} onChange={(e) => formik.setFieldValue("text", e)} />
      <Form.Number label="input number" value={formik.values.number} onChange={(e) => formik.setFieldValue("number", e)} />
      <Form.Select
        options={[
          { id: 1, name: "USD Label1" },
          { id: 2, name: "IDR" },
          { id: 3, name: "EUR" },
        ]}
        label="input select"
        value={formik.values.select}
        onChange={(e) => formik.setFieldValue("select", e)}
      />
      <Form.OTP label="input OTP" value={formik.values.otp} onChange={(e) => formik.setFieldValue("otp", e)} />
      <Form.Date label="input Date" value={formik.values.date} onChange={(e) => formik.setFieldValue("date", e)} />
      <Form.Time label="input Time" value={formik.values.time} onChange={(e) => formik.setFieldValue("time", e)} />
      <Form.HTML label="input HTML" value={formik.values.html} onChange={(e) => formik.setFieldValue("html", e)} />
      <Form.Checkbox label="input Checkbox" value={formik.values.check} onChange={(e) => formik.setFieldValue("check", e)} />
      <UI.Button onClick={formik.handleSubmit}>Submit</UI.Button>
      {/* <Elab label="input text" suffix={<UI.Icon name="check" />} helperText="Lorem ipsum dolor sit amet consectetur, adipisicing elit." /> */}
      {/* <El label="input text" /> */}
      {/* <Ela label="input text" /> */}
      {/* <El label="Price" placeholder="0.00" showStart={true} startVariant="text" startText="Rp" showEnd={false} /> */}
    </UI.Col>
  );
}
