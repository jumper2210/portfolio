import React from "react"
import styled from "styled-components"
import SEO from "../components/atoms/SEO/seo"
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.color_primary};
`
const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesnt exist... the sadness.</p>
  </Wrapper>
)

export default NotFoundPage
