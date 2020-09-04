import React, { useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import { NavigationContext } from "../../../context/NavigationContext"
import gsap from "gsap"
import NavigationLinks from "./NavigationLinks"
import MenuButton from "./MenuButton"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 20;
  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  transition: 0.4s;
  visibility: hidden;
  overflow: scroll;
`

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Background = styled.div`
  position: fixed;
  top: -80rem;
  right: -80rem;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  will-change: transform;
`

const PopInNavigation = () => {
  const { popInNavHandler } = useContext(NavigationContext)
  const listRef = useRef<HTMLUListElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    const background = bgRef.current
    const content = contentRef.current
    const btn = btnRef.current

    if (list && background && content && btn) {
      const [button] = btn.children
      const listItems = [...list.children]

      const closePopInNav = () => {
        tl.reverse()
        popInNavHandler(false)
      }
      const clickHandler = () => {
        tl.reversed() ? tl.play() : tl.reverse()
      }

      listItems.forEach(item => item.addEventListener("click", closePopInNav))
      button.addEventListener("click", clickHandler)

      const tl = gsap.timeline({
        defaults: { ease: "Power3.easeOut" },
        reversed: true,
      })
      tl.set(content, { visibility: "visible" })
      tl.to(background, { scale: 9, duration: 0.4, ease: "Circ.easeOut" })
      tl.addLabel("showItems")

      tl.from(listItems, { x: -50, autoAlpha: 0, stagger: 0.1 }, "showItems")
    }
  }, [])

  return (
    <Wrapper>
      <div ref={btnRef}>
        <MenuButton />
      </div>
      <Background ref={bgRef} />
      <Content ref={contentRef}>
        <ListWrapper>
          <List ref={listRef}>
            <NavigationLinks mobile />
          </List>
        </ListWrapper>
      </Content>
    </Wrapper>
  )
}

export default PopInNavigation
