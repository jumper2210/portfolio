import React from "react"
import styled from "styled-components"
import fbSVG from "../../../assets/icons/facebook.svg"
import mailSVG from "../../../assets/icons/mail.svg"
import gitSVG from "../../../assets/icons/github.svg"
import linkedinSVG from "../../../assets/icons/linkedin.svg"

interface IconProps {
  icon: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Icon = styled.a<IconProps>`
  display: block;
  background-size: 10%;
  background: url(${({ icon }) => icon}) no-repeat center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  &:last-of-type {
    margin: 0;
  }
`

const FormSvgs = () => {
  return (
    <Wrapper>
      <Icon
        href="https://www.facebook.com/krzysztof.skoczek.58"
        target="_blank"
        rel="noopener noreferrer"
        icon={fbSVG}
      />
      <Icon href="mailto:krzysiek.skoczek22@gmail.com" icon={mailSVG} />
      <Icon
        icon={gitSVG}
        href="https://github.com/jumper2210"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Icon
        icon={linkedinSVG}
        href="https://www.linkedin.com/in/krzysztof-s-4a7a24167/"
        target="_blank"
        rel="noopener noreferrer"
      />
    </Wrapper>
  )
}

export default FormSvgs
