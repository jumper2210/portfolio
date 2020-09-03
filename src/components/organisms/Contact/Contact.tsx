import React from "react"
import styled from "styled-components"
import FormSchema from "../../Molecules/Form/FormSchema"
import FromSvgs from "../../Molecules/Form/FormSvgs"

const Wrapper = styled.section`
  position: relative;
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.colors.color_primary};
`
const InnerWrapper = styled.div`
  display: grid;
  justify-content: center;

  align-items: center;
  border-radius: 2rem;
  box-shadow: 0px -1px 26px 10px rgba(0, 0, 0, 0.51);
  margin: 0 1.5rem;
`
const Title = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-size: ${({ theme }) => theme.fontSize.s};
`
const TitleWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
`

const Contact = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleWrapper>
          <Title>Let's make some business</Title>
        </TitleWrapper>
        <FromSvgs />
        <FormSchema />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
