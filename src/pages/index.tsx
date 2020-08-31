import React from "react"
import Header from "../components/organisms/Header/Header"
import NavigationProvider from "../context/NavigationContext"
import NavigationBar from "../containers/Navigation/NavigationBar"
import Projects from "../components/organisms/Projects/Projects"
import Technologies from "../components/organisms/Technologies/Technologies"
const IndexPage = () => (
  <NavigationProvider>
    <NavigationBar />
    <Header />
    <Projects />
    <Technologies />
  </NavigationProvider>
)

export default IndexPage
