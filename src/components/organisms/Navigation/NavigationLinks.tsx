import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Link } from "react-scroll"
import useMedia from "../../utils/mediaHook"
import { NavigationContext } from "../../../context/NavigationContext"

interface Props {
  mobile?: boolean
}

interface ItemProps {
  readonly isActive: boolean
  readonly mobile: boolean
}

interface LinkProps {
  readonly mobile: boolean
}
const NavigationList = styled.li<ItemProps>`
  display: flex;
  position: relative;
  z-index: 100;
  color: ${({ theme }) => theme.colors.white};
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -10px;
    width: 35px;
    height: 1.9px;
    background-color: ${({ theme }) => theme.colors.color_secondary};
    transition: 0.4s;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.color_primary};
      &:after {
        transform: scaleX(1.2);
      }
    `}
  ${({ mobile }) =>
    mobile &&
    css`
      height: 100%;
      width: 100vw;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.color_secondary};
      &:after {
        content: none;
      }
    `}
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const LinkWrapper = styled.div<LinkProps>`
  padding-right: 10rem;
  ${({ mobile }) =>
    mobile &&
    css`
      display: flex;
      justify-content: space-around;
      background-color: ${({ theme }) => theme.colors.color_secondary};
      border-radius: 1.4rem;
      width: 14rem;
      padding: 1rem;
      margin: 2rem 0;
    `}
`

const NavigationLinks = ({ mobile }: Props) => {
  const { activeLink } = useContext(NavigationContext)
  const matches = useMedia("(min-width: 800px)")
  return (
    <>
      <NavigationList mobile={mobile || false} isActive={activeLink === "home"}>
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="home">
            Home
          </StyledLink>
        </LinkWrapper>
      </NavigationList>

      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === "projects"}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="projects">
            Projects
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === "technologies"}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="technologies">
            Technologies
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === "contact"}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="contact">
            Contact
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
    </>
  )
}

export default NavigationLinks
