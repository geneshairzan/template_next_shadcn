import { useFormik } from "formik";

export default function extenduseFormik(config) {
  const formik = useFormik(config);

  const resetAndSubmit = async () => {
    formik.resetForm();
    await formik.submitForm();
  };

  return {
    ...formik,
    set: formik.setFieldValue,
    resetAndSubmit,
  };
}
