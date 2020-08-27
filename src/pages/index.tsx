import React from "react"
import Header from "../components/organisms/Header/Header"
import NavigationProvider from "../context/NavigationContext"
import NavigationBar from "../containers/Navigation/NavigationBar"

const IndexPage = () => (
  <NavigationProvider>
    <NavigationBar />
    <Header />
  </NavigationProvider>
)

export default IndexPage
