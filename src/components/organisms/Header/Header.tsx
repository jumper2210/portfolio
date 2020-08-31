import React, { useRef } from "react"
import styled from "styled-components"
import Button from "../../atoms/CustomButton"

const MainWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.color_primary};
`
const TextMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  justify-content: center;
  align-items: center;
`
const MainTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-family: ${({ theme }) => theme.fonts.subFont};
  text-transform: uppercase;
`
const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fonts.subFont};
  text-transform: uppercase;
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

const Header = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)

  // useEffect(() => {

  // }, [])

  return (
    <MainWrapper>
      <TextMainWrapper>
        <MainTitle>Krzysztof Skoczek</MainTitle>
        <SubTitle>Front-End React Developer</SubTitle>
      </TextMainWrapper>
      <ButtonWrapper>
        <Button>see my work</Button>
      </ButtonWrapper>
    </MainWrapper>
  )
}

export default Header
