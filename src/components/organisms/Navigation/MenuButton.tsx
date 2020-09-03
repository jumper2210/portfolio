import React, { useContext } from "react"
import styled from "styled-components"
import { NavigationContext } from "../../../context/NavigationContext"

interface Props {
  readonly isActive: boolean
}

const StyledBurger = styled.button<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2.9rem;
  margin: 0.5rem 1rem 0 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    background-color: ${({ theme }) => theme.colors.color_secondary};
    width: 2.8rem;
    height: 0.33rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isActive }) =>
        isActive ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isActive }) => (isActive ? "0" : "1")};
      transform: ${({ isActive }) =>
        isActive ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuButton = () => {
  const { isNavVisible, navHandler } = useContext(NavigationContext)
  const toggleNav = () => {
    navHandler(!isNavVisible)
  }
  return (
    <StyledBurger onClick={toggleNav} isActive={isNavVisible}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  )
}

export default MenuButton
