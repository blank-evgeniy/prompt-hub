import { useMediaQuery } from 'react-responsive'

const breakpoints = {
  md: 768,
  lg: 1024,
  xl: 1280,
}

export function useBreakpoint() {
  const md = useMediaQuery({ minWidth: breakpoints.md })
  const lg = useMediaQuery({ minWidth: breakpoints.lg })
  const xl = useMediaQuery({ minWidth: breakpoints.xl })

  return {
    md,
    lg,
    xl,
  }
}
