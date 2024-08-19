import { ReactNode, isValidElement } from 'react'
import ReactDOMServer from 'react-dom/server'

export const renderComponentToHTMLString = (component: ReactNode) => {
  if (typeof component === 'string') {
    return component
  }

  if (isValidElement(component)) {
    return ReactDOMServer.renderToString(component)
  }

  return undefined
}

export const wrapInParagraphTags = (component: string) => {
  if (!component && typeof component !== 'string') {
    return ''
  }
  
  if (component.includes('<p>') || component.includes('</p>')) {
    return component
  } else {
    return `<p>${component}</p>`
  }
}
