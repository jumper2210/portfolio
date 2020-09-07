import styled from "styled-components"

interface Props {
  readonly isSubmitting?: boolean
}

const Button = styled.button<Props>`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.colors.color_secondary};
`

export default Button
