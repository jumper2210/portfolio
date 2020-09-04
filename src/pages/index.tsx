import React from "react"
import Header from "../components/organisms/Header/Header"
import NavigationProvider from "../context/NavigationContext"
import NavigationBar from "../components/organisms/Navigation/Navigation"
import Projects from "../components/organisms/Projects/Projects"
import TechnologyCards from "../components/organisms/TechnologyCards/TechnologyCards"
import Contact from "components/organisms/Contact/Contact"
import Footer from "components/organisms/Footer/Footer"

const IndexPage = () => (
  <NavigationProvider>
    <NavigationBar />
    <Header />
    <Projects />
    <TechnologyCards />
    <Contact />
    <Footer />
  </NavigationProvider>
)

export default IndexPage
