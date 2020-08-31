import styled from "styled-components"

const Button = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  background: ${({ theme }) => theme.colors.button};
`

export default Button
