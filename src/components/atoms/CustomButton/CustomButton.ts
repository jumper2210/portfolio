// @ts-nocheck
import styled, { css } from "styled-components"

interface Props {
  readonly isSubmitting?: boolean
  readonly disabled?: boolean
  readonly color?: string
}

const Button = styled.button<Props>`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.colors.color_secondary};
  cursor: pointer;
    ${({ color }) =>
      color === "violet" &&
      css`
        border-color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.accent};
      `}
   ${({ color }) =>
     color === "bluViolet" &&
     css`
       border-color: ${({ theme }) => theme.colors.color_secondary} !important;
       background: ${({ theme }) => theme.colors.color_secondary} !important;
       &:hover {
         border-color: ${({ theme }) => theme.colors.color_secondary};
         background: ${({ theme }) => theme.colors.color_secondary};
       }
     `}
  ${({ color }) =>
    color === "grey" &&
    css`
      border-color: ${({ theme }) => theme.colors.grey} !important;
      background: ${({ theme }) => theme.colors.grey} !important;
      &:hover {
        border-color: ${({ theme }) => theme.colors.grey};
        background: ${({ theme }) => theme.colors.grey};
      }
    `}
`

export default Button
