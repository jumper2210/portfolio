import React from "react"
import Button from "../../atoms/CustomButton/CustomButton"
import FormInput from "./FormInput"
import { Formik, Form, FormikHelpers, Field } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required!"),
  email: Yup.string()
    .email("Email address is invalid!")
    .required("Email address is required!"),
  message: Yup.string()
    .min(6, "Message is too short!")
    .required("Message is required!"),
})

interface FormValues {
  name: string
  email: string
  message: string
}

const initialValues: FormValues = {
  name: "name",
  email: "email",
  message: "message",
}
interface Data {
  [key: string]: string
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
      onSubmit={(
        values,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>
      ) => {
        const sendMessage = async () => {
          try {
            await fetch("/", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: encode({
                "form-name": "contact-form",
                ...values,
              }),
            })
            setSubmitting(false)
            resetForm()

            sendMessage()
          } catch (err) {
            setSubmitting(false)
          }
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          name="contact-form"
          data-netlify-honeypot="bot-field"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
          <FormInput
            id="name"
            label=""
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.name}
            touched={touched.name}
            errors={errors.name}
          />
          <FormInput
            id="email"
            label=""
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.email}
            touched={touched.email}
            errors={errors.email}
          />
          <FormInput
            textarea
            id="message"
            label=""
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.message}
            touched={touched.message}
            errors={errors.message}
          />
          <div data-netlify-recaptcha="true"></div>
          <ButtonWrapper>
            <Button isSubmitting={isSubmitting} type="submit">
              Send a message{!isSubmitting}
            </Button>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  )
}

export default FormSchema
