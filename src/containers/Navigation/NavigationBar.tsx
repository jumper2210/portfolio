import React from "react"
import styled from "styled-components"
import MenuButton from "./MenuButton"
import Logo from "../../components/organisms/Logo/Logo"

const ToolbarWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.color_primary};
`

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 2rem 0rem 0rem;
  width: 4.5rem;
  height: 4.5rem;
  // border-radius: 50%;
  // background-color: ${({ theme }) => theme.colors.white};
`

const LogoWrapper = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationBar = () => {
  return (
    <ToolbarWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <HamburgerWrapper>
        <MenuButton />
      </HamburgerWrapper>
    </ToolbarWrapper>
  )
}

export default NavigationBar
