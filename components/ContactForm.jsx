import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-daisyui";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required().min(3),
});

const ContactForm = ({ email }) => {
  const handleSubmit = (values, { resetForm }) => {
    toast
      .promise(
        fetch(`https://formsubmit.co/ajax/${email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values,
          }),
        }),
        {
          loading: "sending your message",
          success: "message sended successfully",
          error: "there is an error in sending message",
        }
      )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resetForm();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="contact_form">
            {/* name */}
            <div className="form-control w-full">
              <Field
                type="text"
                name="name"
                placeholder="your name"
                className="input"
                disabled={isSubmitting}
              />
            </div>

            {/* email */}
            <div className="form-control w-full">
              <Field
                type="email"
                name="email"
                placeholder="your email"
                className="input"
                disabled={isSubmitting}
              />
            </div>

            {/* message */}
            <div className="form-control col-span-1 sm:col-span-2 w-full">
              <Field
                as="textarea"
                placeholder="Your Message"
                className="textarea"
                name="message"
                disabled={isSubmitting}
              ></Field>
            </div>

            <div>
              <Button color="primary" type="submit" disabled={isSubmitting}>
                <i className="bx bx-paper-plane icon"></i> &nbsp; Send Message
              </Button>
            </div>
          </div>

          {(errors.name && touched.name) ||
          (errors.email && touched.email) ||
          (errors.message && touched.message) ? (
            <div className="error_msg error_msg-1 mb-10">
              {errors.name || errors.email || errors.message}
            </div>
          ) : (
            ""
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
