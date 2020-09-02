import React from "react"
import Header from "../components/organisms/Header/Header"
import NavigationProvider from "../context/NavigationContext"
import NavigationBar from "../containers/Navigation/NavigationBar"
import Projects from "../components/organisms/Projects/Projects"
import TechnologyCards from "../components/organisms/TechnologyCards/TechnologyCards"
const IndexPage = () => (
  <NavigationProvider>
    <NavigationBar />
    <Header />
    <Projects />
    <TechnologyCards />
  </NavigationProvider>
)

export default IndexPage
