import React from "react"
import styled from "styled-components"

const NavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 10%;
  grid-template-rows: min-content min-content min-content;
  justify-content: space-around;
  justify-items: center;
  background: rgb(17, 17, 17);
  z-index: 10;
`

const Navigation = () => {
  return (
    <>
      <NavigationWrapper></NavigationWrapper>
    </>
  )
}
export default Navigation
