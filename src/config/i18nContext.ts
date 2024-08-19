import { createContext } from 'react'

export const PageContext = createContext<{
  pageLanguage: string
  ns: string[]
  translated: boolean
  browserLanguage?: string
  redirected: boolean
  setRedirected: (redirected: boolean) => void
}>({
  pageLanguage: '',
  ns: [],
  translated: false,
  browserLanguage: '',
  redirected: false,
  setRedirected: () => {},
})
