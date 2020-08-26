import React, { createContext, ReactNode } from "react"
import GlobalStyle from "../theme/GlobalStyle"

interface Props {
  children: ReactNode
}
interface ContextProps {}
export const NavigationContext = createContext<ContextProps>({})
const NavigationProvider = ({ children }: Props) => {
  const context = {}
  return (
    <NavigationContext.Provider value={context}>
      <GlobalStyle />
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
