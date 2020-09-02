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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`
const ProjectTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
`

const TitleWrapper = styled.div``
const DescriptionWrapper = styled.div``
const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.subFont};
`

const Project = ({ title, description, demoLink, codeLink, image }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <ProjectTitle>{title}</ProjectTitle>
      </TitleWrapper>
      <ImageWrapper>
        <Image fluid={image} alt={title} />
      </ImageWrapper>
      <DescriptionWrapper>
        <ProjectDescription>{description}</ProjectDescription>
      </DescriptionWrapper>
      <ButtonsWrapper>
        <Button
          as="a"
          target="_blanket"
          rel="noopener noreferrer"
          href={demoLink}
        >
          Demo
        </Button>
        <Button
          as="a"
          target="_blanket"
          rel="noopener noreferrer"
          href={codeLink}
        >
          Code
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default Project
