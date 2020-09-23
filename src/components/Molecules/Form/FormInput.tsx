import React, { ReactElement } from "react"
import styled from "styled-components"

interface Props {
  id: string
  value: string
  label: string
  name: string
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlurFn: (e: any) => void
  touched: boolean | undefined
  errors: string | undefined
  textarea?: boolean
}

interface InputProps {
  id: string
  name: string
  as: ReactElement
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: any) => void
  value: string
  invalid: boolean
  valid: boolean
}

interface LabelProps {
  isInvalid: boolean
}

const Input = styled.div`
  position: relative;
  width: 100%;
  margin: 2.5rem 0 5rem;
`

const Label = styled.label<LabelProps>`
  position: absolute;
  top: -3.5rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.accent};
`

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 1.5rem 3rem;
  background: ${({ theme }) => theme.colors.color_primary};
  border: 2px solid ${({ theme }) => theme.colors.color_secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  resize: none;
`

const FormInput = ({
  id,
  onChangeFn,
  onBlurFn,
  value,
  touched,
  errors,
  label,
  textarea,
}: Props) => (
  <Input>
    <StyledInput
      type="text"
      // @ts-ignore
      as={textarea ? "textarea" : "input"}
      rows="6"
      id={id}
      name={id}
      placeholder=""
      onChange={onChangeFn}
      onBlur={onBlurFn}
      value={value}
      invalid={Boolean(touched && errors)}
      valid={Boolean(touched && !errors)}
    />
    <Label htmlFor={id} isInvalid={Boolean(touched && errors)}>
      {(errors && touched && errors) || label}
    </Label>
  </Input>
)

export default FormInput
