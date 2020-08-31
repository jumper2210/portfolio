import React from "react"
import Header from "../components/organisms/Header/Header"
import NavigationProvider from "../context/NavigationContext"
import NavigationBar from "../containers/Navigation/NavigationBar"
import Projects from "../components/organisms/Projects/Projects"

const IndexPage = () => (
  <NavigationProvider>
    <NavigationBar />
    <Header />
    <Projects />
  </NavigationProvider>
)

export default IndexPage
