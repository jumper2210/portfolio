import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Button from "../../atoms/CustomButton/CustomButton"
import gsap from "gsap"

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.color_primary};
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 30%;
  left: 0;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
`
const MainTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  font-family: ${({ theme }) => theme.fonts.subFont};
`
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fonts.subFont};
  margin-top: 5rem;
`
const ButtonWrapper = styled.div`
  position: relative;
  top: 80%;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const StyledButton = styled(Button)`
  padding: 1.5rem;
`

const Header = () => {
  const mainTitleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const mainTitle = mainTitleRef.current
    const subTitle = subTitleRef.current

    if (mainTitle && subTitle) {
      const tl = gsap.timeline({
        defaults: { ease: "Power3.easeOut" },
      })

      tl.addLabel("start")

      tl.from(mainTitle, { autoAlpha: 0, x: "+=20", delay: 1, duration: 1 })

      tl.from(
        subTitle,
        { autoAlpha: 0, y: "+=50", delay: 2, duration: 1 },
        "start"
      )
    }
  }, [])

  return (
    <Wrapper>
      <InnerWrapper>
        <MainTitle ref={mainTitleRef}>Krzysztof Skoczek</MainTitle>
        <SubTitle ref={subTitleRef}>Front-end / React Developer</SubTitle>
      </InnerWrapper>
      <ButtonWrapper>
        <StyledButton>see my work</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Header
