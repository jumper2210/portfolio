import React from "react"
import styled from "styled-components"
import TechnologyCard from "./TechnologyCard"
import { useStaticQuery, graphql } from "gatsby"

interface QueryProps {
  allTechnologyCardsJson: {
    nodes: [
      {
        title: string
        description: string
        technologies: {
          name: string
          icon: {
            publicURL: string
          }
        }[]
      }
    ]
  }
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.color_primary};
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5rem;
  ${({ theme }) => theme.mq.md} {
    margin-bottom: 3rem;
  }
`

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem 3rem;
  ${({ theme }) => theme.mq.lg} {
    grid-gap: 6rem;
    grid-template-columns: 0.5fr 0.5fr;
  }
`
const TechnologiesSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const Technologies = () => {
  const { allTechnologyCardsJson } = useStaticQuery<QueryProps>(graphql`
    {
      allTechnologyCardsJson(sort: { fields: order }) {
        nodes {
          title
          description
          technologies {
            name
            icon {
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="technologies">
      <TitleWrapper>
        <TechnologiesSectionTitle>How I work</TechnologiesSectionTitle>
      </TitleWrapper>
      <InnerWrapper>
        {allTechnologyCardsJson.nodes.map(
          ({ title, description, technologies }) => (
            <TechnologyCard
              key={title}
              title={title}
              description={description}
              technologies={technologies}
            />
          )
        )}
      </InnerWrapper>
    </Wrapper>
  )
}
export default Technologies
