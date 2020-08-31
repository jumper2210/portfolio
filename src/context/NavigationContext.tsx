import React, { useState, createContext, ReactNode } from "react"

interface Props {
  children: ReactNode
}
interface ContextProps {
  isNavVisible: boolean
  navHandler: (isVisible: boolean) => void
}
export const NavigationContext = createContext<ContextProps>({
  isNavVisible: false,
  navHandler: () => null,
})

const NavigationProvider = ({ children }: Props) => {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const navHandler = (isVisible: boolean) => {
    setIsNavVisible(isVisible)

    // if (isVisible) document.body.style.overflow = "hidden"
    // else document.body.style.overflow = "auto"
  }
  const context = {
    isNavVisible,
    navHandler,
  }
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
