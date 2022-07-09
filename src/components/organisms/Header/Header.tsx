import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Button from "../../atoms/CustomButton/CustomButton"
import gsap from "gsap"
import headerPhoto from "../../../assets/images/headerPhoto.png"
import { Link } from "react-scroll"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

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
const Box = styled.span`
  background-color: ${({ theme }) => theme.colors.color_secondary};
`
const MainTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxxlm};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fonts.Bold};
`
const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
`
const TitlesWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 15rem;
  ${({ theme }) => theme.mq.md} {
    height: 12rem;
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
  text-align: center;
  padding: 0rem 15rem;
  ${({ theme }) => theme.mq.md} {
    text-align: left;
    padding-left: 0 5rem;
  }
`

const HeaderIMG = styled.img`
  object-fit: contain;
  width: 65%;
  height: 65%;
  ${({ theme }) => theme.mq.lg} {
    width: 70%;
    height: 70%;
  }
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
const MainTitleWrapper = styled.h1`
  position: relative;
  z-index: 10;
  overflow: hidden;
  ${Box} {
    position: absolute;
    bottom: 4px;
    height: 1vw;
    z-index: -1;
    display: inline-block;
    ${({ theme }) => theme.mq.lg} {
      height: 0.4vw;
    }
  }
  ${MainTitle} {
    display: inline-block;
  }
`

const Header = () => {
  const mainTitleRef = useRef<HTMLSpanElement>(null)
  const subTitleRef = useRef<HTMLSpanElement>(null)
  const boxRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const mainTitle = mainTitleRef.current
    const subTitle = subTitleRef.current
    const box = boxRef.current

    if (box && MainTitle && subTitle) {
      const words = [
        `Krzysztof Skoczek.`,
        "Front-End Developer.",
        "React-Developer.",
        "React-Freelancer.",
      ]
      let masterTl = gsap.timeline({ repeat: -1 }).pause()
      let boxTl = gsap.timeline()

      boxTl
        .to(box, {
          duration: 1,
          width: "22rem",
          delay: 0.5,
          ease: "power4.inOut",
        })
        .from(mainTitle, { duration: 1, y: "22rem", ease: "power3.out" })
        .to(box, {
          duration: 1,
          height: "7rem",
          ease: "elastic.out",
          onComplete: () => masterTl.play(),
        })
        .to(box, {
          duration: 2,
          autoAlpha: 0.6,
          yoyo: true,
          repeat: -1,
          ease:
            "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
        })
      words.forEach(word => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
        tl.to(subTitle, { duration: 1, text: word })
        masterTl.add(tl)
      })
    }
  }, [])

  return (
    <Wrapper id="home">
      <InnerWrapper>
        <TitlesWrapper>
          <MainTitleWrapper>
            <Box ref={boxRef}></Box>
            <MainTitle ref={mainTitleRef}>Hi, I'm</MainTitle>
          </MainTitleWrapper>
          <SubTitle ref={subTitleRef}></SubTitle>
        </TitlesWrapper>
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
