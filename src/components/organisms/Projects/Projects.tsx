import React from "react"
import Project from "./Project"
import { FluidObject } from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

interface QueryProjectProps {
  allProjectsJson: {
    nodes: [
      {
        title: string
        description: string
        demoLink: string
        codeLink: string
        image: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
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
  padding: 8rem 0;
`

const ProjectsSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Projects = () => {
  const { allProjectsJson } = useStaticQuery<QueryProjectProps>(graphql`
    {
      allProjectsJson(sort: { fields: order }) {
        nodes {
          title
          description
          demoLink
          codeLink
          image {
            childImageSharp {
              fluid(maxWidth: 880, maxHeight: 591, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="projects">
      <TitleWrapper>
        <ProjectsSectionTitle>My projects</ProjectsSectionTitle>
      </TitleWrapper>
      <InnerWrapper>
        {allProjectsJson.nodes.map(
          ({ title, description, demoLink, codeLink, image }) => (
            <Project
              key={title}
              title={title}
              description={description}
              demoLink={demoLink}
              codeLink={codeLink}
              image={image.childImageSharp.fluid}
            />
          )
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default Projects
