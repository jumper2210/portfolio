import React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import Button from "../../atoms/CustomButton"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
const TitleWrapper = styled.div``
const DescriptionWrapper = styled.div``

interface Props {
  title: string
  description: string
  demoLink: string
  codeLink: string
  image: FluidObject
}

const Project = ({ title, description, demoLink, codeLink, image }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <ImageWrapper>
        <Image fluid={image} alt={title} />
      </ImageWrapper>
      <DescriptionWrapper>{description}</DescriptionWrapper>
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
