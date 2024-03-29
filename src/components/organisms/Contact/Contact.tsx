import React from "react"
import styled from "styled-components"
import FormSchema from "../../Molecules/Form/FormSchema"
import FromSvgs from "../../Molecules/Form/FormSvgs"

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.colors.color_primary};
  ${({ theme }) => theme.mq.md} {
    padding: 10rem;
  }
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 93vw;  
  box-shadow: 0px -1px 26px 10px rgba(0, 0, 0, 0.51);
  ${({ theme }) => theme.mq.md} {
   width: 82vw;
  }
`
const Title = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
`
const TitleWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
`
const ContentWrapper = styled.div`
  width: 90%;
    ${({ theme }) => theme.mq.md} {
    width: 60%;

  }
`

const Contact = () => {
  return (
    <Wrapper id="contact">
      <InnerWrapper>
        <ContentWrapper>
        <TitleWrapper>
          <Title>Find me on social media</Title>
        </TitleWrapper>
        <FromSvgs />
        <TitleWrapper>
          <Title>Or write a message</Title>
        </TitleWrapper>
        <FormSchema />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
