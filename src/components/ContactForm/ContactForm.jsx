import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";
import { useId } from "react";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ addContacts }) {
  const nameContact = useId();
  const telContact = useId();

  const yupValidation = Yup.object().shape({
    nameContact: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    numberContact: Yup.string()
      .matches(/^\d+$/, "Only digits are allowed")
      .min(7, "Too Short!")
      .max(15, "Too Long!")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={{
        nameContact: "",
        numberContact: "",
      }}
      onSubmit={addContacts}
      validationSchema={yupValidation}
    >
      <Form className={s.form}>
        <div className={s.containerInput}>
          <label className={s.label} htmlFor={nameContact}>
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="nameContact"
            id={nameContact}
          ></Field>
          <ErrorMessage
            className={s.error}
            name="nameContact"
            component="span"
          />
        </div>

        <div className={s.containerInput}>
          <label className={s.label} htmlFor={telContact}>
            Number
          </label>
          <Field
            className={s.input}
            type="text"
            name="numberContact"
            id={telContact}
            pattern="\d*"
          ></Field>
          <ErrorMessage
            className={s.error}
            name="numberContact"
            component="span"
          />
        </div>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
