import React from "react"
import styled from "styled-components"

const MainWrapper = styled.section`
  position: absolute;
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
`
const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fonts.subFont};
`

const Header = () => {
  return (
    <MainWrapper>
      <TextMainWrapper>
        <MainTitle>Krzysztof Skoczek</MainTitle>
        <SubTitle>Front-End React Developer</SubTitle>
      </TextMainWrapper>
    </MainWrapper>
  )
}

export default Header
