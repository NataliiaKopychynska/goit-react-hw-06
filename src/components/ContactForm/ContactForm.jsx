import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

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

  const handleAddContact = (values, actions) => {
    const newContact = {
      id: Date.now().toString(),
      name: values.nameContact,
      number: values.numberContact,
    };
    dispatch(addContact(newContact)); // Додаємо контакт до Redux store
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        nameContact: "",
        numberContact: "",
      }}
      onSubmit={handleAddContact}
      validationSchema={yupValidation}
    >
      <Form className={s.form}>
        <div className={s.containerInput}>
          <label className={s.label} htmlFor="nameContact">
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="nameContact"
            id="nameContact"
          />
          <ErrorMessage
            className={s.error}
            name="nameContact"
            component="span"
          />
        </div>

        <div className={s.containerInput}>
          <label className={s.label} htmlFor="numberContact">
            Number
          </label>
          <Field
            className={s.input}
            type="text"
            name="numberContact"
            id="numberContact"
            pattern="\d*"
          />
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
