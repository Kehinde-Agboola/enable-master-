import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "yup-phone-lite";
import * as Yup from "yup";
import "./message.css";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  phone: Yup.string()
    .matches(/[0, 9]$/, "invalid phone number")
    .phone("NG", "Invalid phone number")
    .required("Phone number is required"),
});

// Define the initial values for the form fields
const initialValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

// Define the type for the form values
type FormValues = typeof initialValues;

// Define the props for the form component
interface FormProps {
  onSubmit: (values: FormValues) => void;
}
const handleSubmit = async (formValues: Record<string, any>) => {
  console.log("form values", formValues);
};

// Create the form component using Formik
export const Message: React.FC<FormProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <h1 className="text-[28px] mb-[2rem] font-bold">
              Send us a Message
            </h1>
          </div>
          <div>
            <label htmlFor="name">Full Name*</label>
            <Field id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone*</label>
            <Field id="phone" name="phone" type="tel" />
            <ErrorMessage name="phone" />
          </div>
          <div>
            <label htmlFor="message">Message*</label>
            <Field id="message" name="message" as="textarea" />
            <ErrorMessage name="message" />
          </div>
          <button
            className="button bg-white"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
console.log(Formik);
