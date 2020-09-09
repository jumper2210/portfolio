import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Button from "../../atoms/CustomButton/CustomButton"
import gsap from "gsap"
import headerPhoto from "../../../assets/images/headerPhoto.png"
import { Link } from "react-scroll"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.color_primary};
`
const ImgWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mq.md} {
    display: inherit;
    justify-content: center;
  }
`
const TitleWrapper = styled.div`
  text-align: center;
  ${({ theme }) => theme.mq.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem 0rem 10rem 3rem;
    text-align: left;
  }
`
const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  left: 0;
  top: 0%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
`

const HeaderIMG = styled.img`
  object-fit: contain;
  width: 55%;
  height: 55%;
  ${({ theme }) => theme.mq.lg} {
    width: 62%;
    height: 62%;
  }
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
  padding-top: 2rem;
`
const ButtonWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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

      tl.from(mainTitle, { autoAlpha: 0, x: "-=20", delay: 1, duration: 1 })

      tl.from(
        subTitle,
        { autoAlpha: 0, y: "+=50", delay: 2, duration: 1 },
        "start"
      )
    }
  }, [])

  return (
    <Wrapper id="home">
      <InnerWrapper>
        <TitleWrapper>
          <MainTitle ref={mainTitleRef}>Krzysztof Skoczek</MainTitle>
          <SubTitle ref={subTitleRef}>Front-end | React Developer</SubTitle>
        </TitleWrapper>
        <ImgWrapper>
          <HeaderIMG src={headerPhoto} alt="header photo" />
        </ImgWrapper>
      </InnerWrapper>
      <ButtonWrapper>
        <Link to="projects">
          <StyledButton>see my work</StyledButton>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Header
