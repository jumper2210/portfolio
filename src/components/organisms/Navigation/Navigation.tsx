import React, { useContext, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import Logo from "../Logo/Logo"
import PopInNavigation from "./PopInNavigation"
import NavigationLinks from "./NavigationLinks"
import { NavigationContext } from "../../../context/NavigationContext"
import gsap from "gsap"

interface Props {
  readonly isActive: boolean
}

const Wrapper = styled.nav<Props>`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.colors.color_primary};
  ${({ theme }) => theme.mq.md} {
    ${({ isActive }) =>
      isActive &&
      css`
        position: fixed;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      `}
  }
`
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
`
const List = styled.ul`
  display: none;
  align-items: center;
  opacity: 0;
  ${({ theme }) => theme.mq.md} {
    display: flex;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  width: 7.5rem;
  height: 6.2rem;
  justify-content: center;
  align-items: center;
`

const Navigation = () => {
  const { isTransparent } = useContext(NavigationContext)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (list) {
      const listItems = list.children
      gsap.to(list, { autoAlpha: 1 })
      gsap.fromTo(
        listItems,
        { y: -50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power3.inOut",
          duration: 1,
        }
      )
    }
  }, [])

  return (
    <>
      <Wrapper isActive={!isTransparent}>
        <InnerWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <List ref={listRef}>
            <NavigationLinks />
          </List>
        </InnerWrapper>
        <PopInNavigation />
      </Wrapper>
    </>
  )
}

export default Navigation
