import React, { useState, useEffect } from "react"
import Button from "../../atoms/CustomButton/CustomButton"
import FormInput from "./FormInput"
import { Formik, Form, Field, FormikHelpers } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import Recaptcha from "react-recaptcha"
import LazyLoad from "react-lazyload"
import axios from "axios"

const StyledButton = styled(Button)`
  width: 100%;
  margin: 1.2rem 0 2.5rem;
  border-radius: 0.6rem;
  ${({ theme }) => theme.mq.md} {
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    margin-top: 4.5rem;
  }
`
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

const FormSchema = () => {
  const [token, setToken] = useState("")
  const [submitBtn, setSubmitBtn] = useState({
    content: "Send message",
    color: "violet",
  })
  const clearButton = () => {
    setSubmitBtn({ content: "Send message", color: "violet" })
  }
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(
        values,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>
      ) => {
        if (token) {
          const sendMessage = async () => {
            try {
              await axios({
                url: `https://getform.io/f/${process.env.GET_FORM_KEY}`,
                method: "POST",
                data: values,
              })
              setSubmitting(false)
              setSubmitBtn({
                content: "All good! I'll respond as soon as possible!",
                color: "bluViolet",
              })
              resetForm()
              setTimeout(clearButton, 2500)
            } catch (err) {
              setSubmitting(false)
              setSubmitBtn({ content: "Something went wrong!", color: "red" })
              setTimeout(clearButton, 1500)
            }
          }
          sendMessage()
        } else {
          setSubmitting(false)
          setSubmitBtn({
            content: "You have to verify reCAPTCHA first!",
            color: "grey",
          })
          setTimeout(clearButton, 1000)
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
        <Form onSubmit={handleSubmit} data-netlify-recaptcha="true">
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
            name="name"
          />
          <FormInput
            id="email"
            label="email"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.email}
            touched={touched.email}
            errors={errors.email}
            name="email"
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
            name="message"
          />

          <LazyLoad height={70} offset={280}>
            <Recaptcha
              sitekey={process.env.SITE_RECAPTCHA_KEY}
              render="explicit"
              theme="dark"
              verifyCallback={response => {
                setToken(response)
              }}
              onloadCallback={() => {
                clearButton()
              }}
            />
          </LazyLoad>

          <StyledButton
            color={submitBtn.color}
            disabled={isSubmitting || submitBtn.color !== "violet"}
            isSubmitting={isSubmitting}
            type="submit"
          >
            {!isSubmitting && submitBtn.content}
          </StyledButton>
        </Form>
      )}
    </Formik>
  )
}
export default FormSchema
