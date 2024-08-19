import { NAV_BREAKPOINT } from './constants'

export const navBreakpointUp = () => {
  return `@media (min-width: ${NAV_BREAKPOINT})`
}

export const navBreakpointDown = () => {
  return `@media (max-width: ${NAV_BREAKPOINT})`
}
