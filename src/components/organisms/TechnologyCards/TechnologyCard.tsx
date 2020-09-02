import React from "react"
import styled from "styled-components"

interface Props {
  title: string
  description: string
  technologies: {
    name: string
    icon: {
      publicURL: string
    }
  }[]
}

interface IconProps {
  readonly icon: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5rem 0;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.color_secondary};
  margin-top: 10rem;
`
const Name = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.grey};
`

const NameWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color_white};
  z-index: 3;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-family: ${({ theme }) => theme.fonts.subFont};
`

const Technologies = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0 10px;
  padding: 20px 0;
`
const Technology = styled.li<IconProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 7px 0;
  white-space: pre;
  color: ${({ theme }) => theme.colors.white};
`
const Img = styled.img`
  width: 15%;
  height: 15%;
  object-fit: cover;
`
const TechnologyCard = ({ title, description, technologies }: Props) => {
  return (
    <Wrapper>
      <NameWrapper>
        <Name>{title}</Name>
      </NameWrapper>
      <Technologies>
        {technologies.map(({ icon, name }) => (
          <Technology key={name} icon={icon.publicURL}>
            {name}
            <Img src={icon.publicURL} />
          </Technology>
        ))}
      </Technologies>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default TechnologyCard
