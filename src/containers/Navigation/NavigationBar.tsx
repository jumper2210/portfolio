import React from "react"
import styled from "styled-components"
import MenuButton from "./MenuButton"

const ToolbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_primary};
`

const Logo = styled.div`
  width: 7rem;
`
const HamburgerWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem 0rem 2rem;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.color_white};
`

const NavigationBar = () => {
  return (
    <ToolbarWrapper>
      <Logo />
      <HamburgerWrapper>
        <MenuButton />
      </HamburgerWrapper>
    </ToolbarWrapper>
  )
}

export default NavigationBar
