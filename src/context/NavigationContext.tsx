import React, { useEffect, useState, createContext, ReactNode } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: ReactNode
}
interface ContextProps {
  activeLink: string
  isNavVisible: boolean
  isTransparent: boolean
  popInNavHandler: (isVisible: boolean) => void
}
export const NavigationContext = createContext<ContextProps>({
  activeLink: "home",
  isNavVisible: false,
  isTransparent: true,
  popInNavHandler: () => null,
})

const NavigationProvider = ({ children }: Props) => {
  const [activeLink, setActiveLink] = useState("home")
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    ScrollTrigger.create({
      start: "30",
      endTrigger: "footer",
      end: "bottom top",
      onToggle: ({ isActive }) => setIsTransparent(!isActive),
    })

    ScrollTrigger.create({
      trigger: "home",
      start: "top",
      end: "bottom 90%",
      onToggle: ({ isActive }) => isActive && setActiveLink("home"),
    })
    const sections = document.querySelectorAll("section")

    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        onToggle: ({ isActive }) => isActive && setActiveLink(section.id),
      })
    })
  }, [])

  const popInNavHandler = (isVisible: boolean) => {
    setIsNavVisible(isVisible)
    if (isVisible) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }
  const context = {
    activeLink,
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
