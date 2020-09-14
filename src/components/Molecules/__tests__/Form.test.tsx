import React from "react"
import FormInput from "../Form/FormInput"
// @ts-ignore
import { render, fireEvent } from "../../../../jest-configs/test-utils"
import { Formik, Form } from "formik"

describe("Form", () => {
  it("renders properly with proper label", () => {
    const { getByLabelText } = render(
      <Formik initialValues={{ test: "" }} onSubmit={() => {}}>
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <FormInput
              id="test"
              label="test"
              onChangeFn={handleChange}
              onBlurFn={handleBlur}
              value={values.test}
              touched={touched.test}
              errors={errors.test}
            />
          </Form>
        )}
      </Formik>
    )
    const formInput = getByLabelText(/test/i)
    expect(formInput).toBeInTheDocument()
  })
})
it("form gets proper values from the input", () => {
  const { getByDisplayValue } = render(
    <Formik initialValues={{ test: "input" }} onSubmit={() => {}}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <FormInput
            id="test"
            label="test"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.test}
            touched={touched.test}
            errors={errors.test}
          />
        </Form>
      )}
    </Formik>
  )
  const formInput = getByDisplayValue("input")
  fireEvent.change(formInput, { target: { value: "another test value" } })

  expect(formInput).toHaveValue("another test value")
})
it("displays form values properly", () => {
  const { getByDisplayValue } = render(
    <Formik initialValues={{ test: "test_Value" }} onSubmit={() => {}}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <FormInput
            id="test"
            label="test"
            onChangeFn={handleChange}
            onBlurFn={handleBlur}
            value={values.test}
            touched={touched.test}
            errors={errors.test}
          />
        </Form>
      )}
    </Formik>
  )
  const formInput = getByDisplayValue("test_Value")

  expect(formInput).toBeInTheDocument()
})
