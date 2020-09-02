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
  display: flex;
  background-color: ${({ theme }) => theme.colors.color_primary};
  padding: 10rem 0;
  justify-content: center;
  align-items: center;

`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // width: 75%;
  padding: 0 3rem;
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
    <Wrapper>
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
