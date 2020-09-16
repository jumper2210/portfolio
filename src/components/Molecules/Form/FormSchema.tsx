import React from "react"
import Button from "../../atoms/CustomButton/CustomButton"
import FormInput from "./FormInput"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

const StyledButton = styled(Button)`
  width: 100%;
  margin: 1.2rem 0 2.5rem;
  border-radius: 3px;
`

interface Data {
  [key: string]: string
}

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required!"),
  email: Yup.string()
    .email("Email address is invalid!")
    .required("Email address is required!"),
  message: Yup.string()
    .min(6, "Message is too short!")
    .required("Message is required!"),
})

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
}

const encode = (data: Data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormSchema = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const sendMessage = async () => {
          try {
            fetch("/", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: encode({ "form-name": "contact-form", ...values }),
            })
              .then(() => {
                alert("Success")
                actions.resetForm()
              })
              .catch(() => {
                alert("Error")
              })
              .finally(() => actions.setSubmitting(false))
          } catch (err) {
            console.log(err)
          }
        }
        sendMessage()
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form
          onSubmit={handleSubmit}
          method="POST"
          autoComplete="off"
          data-netlify={true}
          name="contact-form"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
          <FormInput
            id="name"
            label="name"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.name}
            touched={touched.name}
            errors={errors.name}
          />
          <FormInput
            id="email"
            label="email"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.email}
            touched={touched.email}
            errors={errors.email}
          />
          <FormInput
            textarea
            id="message"
            label="message"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.message}
            touched={touched.message}
            errors={errors.message}
          />
          <div data-netlify-recaptcha="true"></div>
          <StyledButton type="submit">Send a message</StyledButton>
        </Form>
      )}
    </Formik>
  )
}

export default FormSchema
