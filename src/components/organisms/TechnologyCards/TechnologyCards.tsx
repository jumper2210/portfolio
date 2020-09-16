import React from "react"
import styled from "styled-components"
import TechnologyCard from "./TechnologyCard"
import { useStaticQuery, graphql } from "gatsby"
// @ts-ignore
import Fade from "react-reveal/Fade"

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
  padding: 9rem 0rem 5rem 0rem;
  ${({ theme }) => theme.mq.md} {
    padding: 0;
  }
`

const InnerWrapper = styled.div`
  display: grid;
  ${({ theme }) => theme.mq.md} {
    grid-template-columns: 0.5fr 0.5fr;
    padding: 10rem;
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
            <Fade right>
              <TechnologyCard
                key={title}
                title={title}
                description={description}
                technologies={technologies}
              />
            </Fade>
          )
        )}
      </InnerWrapper>
    </Wrapper>
  )
}
export default Technologies
