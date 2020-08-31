import React from "react"
import styled from "styled-components"
import MenuButton from "./MenuButton"
import Logo from "../../components/organisms/Logo/Logo"

const ToolbarWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 20;
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
  width: 5.5rem;
  height: 5.5rem;
`

const LogoWrapper = styled.div`
  display: flex;
  width: 7.5rem;
  height: 7.5rem;
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
