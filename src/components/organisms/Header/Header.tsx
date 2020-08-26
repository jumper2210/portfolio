import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color_primary};
`

const Header = () => {
  return <Wrapper></Wrapper>
}

export default Header
