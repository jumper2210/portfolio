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

const Wrapper = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem;
  border-radius: 2.5rem;
  box-shadow: 0px -1px 26px 10px rgba(0, 0, 0, 0.81);
  background: ${({ theme }) => theme.colors.color_primary};
  overflow: hidden;

  &:before {
    content: "";
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.color_secondary};
    width: 100%;
    height: 4rem;
    position: absolute;
    z-index: 10;
  }
`
const Title = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
`

const NameWrapper = styled.div`
  position: relative;
  top: 0;
  transform: translateY(-9px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.color_secondary};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-family: ${({ theme }) => theme.fonts.subFont};
  padding: 3rem 0rem 7rem 0rem;
`
const DescriptionWrapper = styled.div`
  width: 100%;
  height: 20rem;
`

const Technologies = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${({ theme }) => theme.mq.md} {
    grid-template-columns: 0.5fr 0.5fr;
  }
`
const Technology = styled.li<IconProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
`

const Icon = styled.img`
  width: 30%;
  height: 30%;
  object-fit: contain;
`
const TechnologyCard = ({ title, description, technologies }: Props) => {
  return (
    <Wrapper>
      <NameWrapper>
        <Title>{title}</Title>
      </NameWrapper>
      <Technologies>
        {technologies.map(({ icon, name }) => (
          <Technology key={name} icon={icon.publicURL}>
            {name}
            <Icon src={icon.publicURL} />
          </Technology>
        ))}
      </Technologies>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default TechnologyCard
