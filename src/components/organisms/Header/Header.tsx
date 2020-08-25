import React from "react"
import styled from "styled-components"
import Content from "../../atoms/Content/Content"

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color_primary};
`
const TitleWrapper = styled.div`
  width: 50vw;
  height: 20rem;
`

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper></TitleWrapper>
      </Content>
    </Wrapper>
  )
}

export default Header
