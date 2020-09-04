import React, { useState, createContext, ReactNode } from "react"

interface Props {
  children: ReactNode
}
interface ContextProps {
  isNavVisible: boolean
  isTransparent: boolean
  popInNavHandler: (isVisible: boolean) => void
}
export const NavigationContext = createContext<ContextProps>({
  isNavVisible: false,
  isTransparent: true,
  popInNavHandler: () => null,
})

const NavigationProvider = ({ children }: Props) => {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)

  const popInNavHandler = (isVisible: boolean) => {
    setIsNavVisible(isVisible)
    if (isVisible) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }
  const context = {
    isNavVisible,
    isTransparent,
    popInNavHandler,
  }
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
