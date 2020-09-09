import React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import Button from "../../atoms/CustomButton/CustomButton"

interface Props {
  title: string
  description: string
  demoLink: string
  codeLink: string
  image: FluidObject
}

const StyledButton = styled(Button)`
  margin-right: 1.5rem;
  padding: 1.2rem 2.3rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  align-items: center;
  box-shadow: 0px -1px 26px 10px rgba(0, 0, 0, 0.51);
  border-radius: 2.2rem;
  margin: 3rem;
  gap: 4.5rem;
  ${({ theme }) => theme.mq.md} {
    padding: 7rem;
    margin: 5.6rem;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
`
const ProjectTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.subFont};
  text-transform: uppercase;
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  ${({ theme }) => theme.mq.md} {
    line-height: 2.5rem;
  }
`

const Project = ({ title, description, demoLink, codeLink, image }: Props) => {
  return (
    <Wrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ImageWrapper>
        <Image fluid={image} alt={title} />
      </ImageWrapper>
      <ProjectDescription>{description}</ProjectDescription>
      <ButtonsWrapper>
        <StyledButton
          as="a"
          target="_blanket"
          rel="noopener noreferrer"
          href={demoLink}
        >
          Demo
        </StyledButton>
        <StyledButton
          as="a"
          target="_blanket"
          rel="noopener noreferrer"
          href={codeLink}
        >
          Code
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default Project
