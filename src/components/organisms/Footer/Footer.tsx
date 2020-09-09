import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_primary};
  padding: 3rem 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.color_secondary};
`

const Footer = () => {
  return <Wrapper id="footer">@Created by krzysztof skoczek</Wrapper>
}

export default Footer
