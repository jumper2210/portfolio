import React from "react"
import Header from "../components/organisms/Header/Header"
import NavigationProvider from "../context/NavigationContext"

const IndexPage = () => (
  <NavigationProvider>
    <Header />
  </NavigationProvider>
)

export default IndexPage
