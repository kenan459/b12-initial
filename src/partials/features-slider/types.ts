import React from 'react'

export type TSliderProps = {
  title?: string
  subtitle?: string
  alignItemsToTop?: boolean
  features?: TFeature[]
  children?: React.ReactNode
}

export type TFeature = {
  title: string
  text: string
  link?: string
  image: React.ReactNode
}

export type TNode = {
  node: {
    childMarkdownRemark: {
      frontmatter: TFeature
    }
  }
}
