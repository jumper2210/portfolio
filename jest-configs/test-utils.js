import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../src/theme/GlobalStyle"
import { theme } from "../src/theme/mainTheme"

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
