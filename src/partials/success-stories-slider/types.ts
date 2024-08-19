import { IGatsbyImageData } from 'gatsby-plugin-image'

export type SliderProps = {
  title?: string
  filter?: string[]
  aiQuote?: boolean
  alignItemsToTop?: boolean
  background?: string
  light?: boolean
}

export type Testimonial = {
  active: boolean
  company: string
  quote: string
  ai_quote?: string
  customer: {
    name: string
    position: string
    avatar: IGatsbyImageData
  }
  image: IGatsbyImageData
  link: string
  name: string
}

export type Node = {
  node: {
    childMarkdownRemark: {
      frontmatter: Testimonial
    }
    name: string
  }
}
