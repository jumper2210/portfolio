import React from "react"
import logo from "../../../assets/images/Logo.png"
import styled from "styled-components"

const Image = styled.img`
  width: 50%;
  height: 50%;
`

const Logo = () => {
  return <Image src={logo} alt="logo" />
}

export default Logo
