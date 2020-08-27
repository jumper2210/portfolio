import React from "react"
import styled from "styled-components"

const Button = styled.button`
  position: fixed;
  z-index: 2;
  background-color: transparent;
`
const SVG = styled.svg`
  cursor: pointer;
  user-select: none;
  // background-color: ${({ theme }) => theme.colors.color_secondary};
  background-color: transparent;
  `
const Line = styled.path`
  fill: none;
  // transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: ${({ theme }) => theme.colors.accent};
  stroke-width: 5.5;
  stroke-linecap: round;
`

const LineTop = styled(Line)`
  stroke-dasharray: 40 139;
`

const LineBottom = styled(Line)`
  stroke-dasharray: 40 180;
`

const MenuButton = () => {
  return (
    <Button>
      <SVG viewBox="0 0 100 100" width="65">
        <LineTop d="m 30,41 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <Line d="m 30,55 h 40" />
        <LineBottom d="m 30,69 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </SVG>
    </Button>
  )
}

export default MenuButton
