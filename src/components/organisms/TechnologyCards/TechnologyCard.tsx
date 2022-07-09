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
  display: flex;
  position: relative;
  height: 50rem;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 14rem 2rem 10rem;
  border-radius: 2.5rem;
  box-shadow: 0px -1px 26px 10px rgba(0, 0, 0, 0.81);
  background: ${({ theme }) => theme.colors.color_primary};
  overflow: hidden;
 
  ${({ theme }) => theme.mq.xxs} {
     height: 78rem;
     margin-top: 4rem;
  }
  ${({ theme }) => theme.mq.xs} {
    height: 76rem;
 }

  ${({ theme }) => theme.mq.md} {
    height: 80rem;
  }

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
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  ${({ theme }) => theme.mq.xs} {
    padding-bottom: 4rem;
  }
`
const Technologies = styled.ul` 
  display: flex;
  height: 100%;
  flex-direction: column;  
`
const Technology = styled.li<IconProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.mq.xxs} {
  font-size: ${({ theme }) => theme.fontSize.xs};
  justify-content: space-evenly;
  padding:0rem 1rem;
  height: 6rem;
  }
    ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const Icon = styled.img`
  width: 30%;
  height: 100%;
  margin-left: 1rem;
  object-fit: contain;
    ${({ theme }) => theme.mq.xxs} {
    height: 60%;
  }
    ${({ theme }) => theme.mq.s} {
    height: 80%;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
     ${({ theme }) => theme.mq.md} {
    // flex-direction: row;
  }
`
const TechnologyCard = ({ title, description, technologies }: Props) => {
  return (
    <Wrapper>
      <NameWrapper>
        <Title>{title}</Title>
      </NameWrapper>
      <ContentWrapper>
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
      </ContentWrapper>
    </Wrapper>
  )
}

export default TechnologyCard
