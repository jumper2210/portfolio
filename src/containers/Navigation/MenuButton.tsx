import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { NavigationContext } from "../../context/NavigationContext"

interface Props {
  readonly isActive: boolean
}

const Button = styled.button<Props>`
  background-color: transparent;
  ${({ isActive }) =>
    isActive &&
    css`
      & > ${SVG} ${LineTop} {
        stroke-dashoffset: -98px;
      }
      & > ${SVG} ${LineBottom} {
        stroke-dashoffset: -138px;
      }
    `}
`
const SVG = styled.svg`
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  transition: transform 0.4s;
`
const Line = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.colors.color_secondary};
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dasharray 3000ms, stroke-dashoffset 3000ms;
`

const LineTop = styled(Line)`
  stroke-dasharray: 40 150;
`

const LineBottom = styled(Line)`
  stroke-dasharray: 40 150;
`

const MenuButton = () => {
  const { isNavVisible, navHandler } = useContext(NavigationContext)

  const toggleNav = () => {
    navHandler(!isNavVisible)
  }

  return (
    <Button onClick={toggleNav} isActive={isNavVisible}>
      <SVG viewBox="0 0 100 100" width="65">
        <LineTop
          d="
        m 30,41 
        h 40
        "
        />
        <Line
          d="
        m 30,55
        h 40"
        />
        <LineBottom
          d="
        m 30,69
        h 40"
        />
      </SVG>
    </Button>
  )
}

export default MenuButton
