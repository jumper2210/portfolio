interface MediaQueryProps {
  [breakpoint: string]: number
}

const breakpoints: MediaQueryProps = {
  xs: 420,
  s: 576,
  md: 800,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}
export const theme = {
  fonts: {
    mainFont: `'Poppins', sans-serif`,
    subFont: `'Kalam', cursive`,
  },
  colors: {
    color_primary: `#15142A`,
    color_secondary: `#8B4BE3`,
    accent: `#5444E0`,
    white: `#ffff`,
    grey: `#A1A1A9`,
    button: `linear-gradient(128deg, rgba(84,68,224,1) 0%, rgba(139,75,227,1) 63%);`,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "1.4rem",
    s: "1.6rem",
    m: "1.8rem",
    lg: "2rem",
    xlg: "2.3rem",
    xl: "2.8rem",
    xxlm: "3.6rem",
    xxl: "4.8rem",
  },
  mq: Object.keys(breakpoints).reduce<Record<string, string>>(
    (acc, breakpoint) => {
      acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`
      return acc
    },
    {}
  ),
}
