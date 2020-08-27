import React from "react"
import logo from "../../../assets/images/Logo.png"
import styled from "styled-components"

const Image = styled.img`
  width: 60%;
  height: 60%;
`
const Wrapper = styled.div`
  // position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
`

const Logo = () => {
  return (
    <Wrapper>
      <Image src={logo} alt="logo" />
    </Wrapper>
  )
}

export default Logo
