import React from "react"
import Project from "./Project"
import { FluidObject } from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// @ts-ignore
import Fade from "react-reveal/Fade"

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
  padding: 10rem 0;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`

const ProjectsSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.mq.md} {
    grid-template-columns: 0.5fr 0.5fr;
    grid-gap 0.5rem;
  }
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
              fluid(maxWidth: 880, maxHeight: 581, quality: 100) {
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
            <Fade left>
              <Project
                key={title}
                title={title}
                description={description}
                demoLink={demoLink}
                codeLink={codeLink}
                image={image.childImageSharp.fluid}
              />
            </Fade>
          )
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default Projects
