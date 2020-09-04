import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-scroll"
import useMedia from "../../utils/mediaHook"

interface Props {
  mobile?: boolean
}

interface ItemProps {
  // readonly isActive: boolean;
  readonly mobile: boolean
}

const NavigationList = styled.li<ItemProps>`
  display: flex;
  position: relative;
  z-index: 100;
  color: ${({ theme }) => theme.colors.white};
  ${({ mobile }) =>
    mobile &&
    css`
      height: 100%;
      width: 100vw;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.color_secondary};
    `}
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
`

const LinkWrapper = styled.div<ItemProps>`
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
  // const { activeLink } = useContext(NavigationContext);
  const matches = useMedia("(min-width: 800px)")
  return (
    <>
      <NavigationList mobile={mobile || false}>
        <LinkWrapper mobile={mobile || false}>
          <StyledLink
            duration={800}
            offset={matches ? -130 : -50}
            smooth={matches}
            to="home"
          >
            Home
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper mobile={mobile || false}>
          <StyledLink
            duration={800}
            offset={matches ? -130 : -50}
            smooth={matches}
            to="projects"
          >
            Projects
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper mobile={mobile || false}>
          <StyledLink
            duration={800}
            offset={matches ? -130 : -50}
            smooth={matches}
            to="technologies"
          >
            Technologies
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper mobile={mobile || false}>
          <StyledLink
            duration={800}
            offset={matches ? -130 : -50}
            smooth={matches}
            to="Contact"
          >
            Contact
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
    </>
  )
}

export default NavigationLinks
