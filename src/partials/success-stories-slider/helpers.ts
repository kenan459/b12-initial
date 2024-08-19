import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Testimonial, Node } from './types'

export const useTestimonialsQuery = () => {
  const {
    allFile: { edges: nodes },
  } = useStaticQuery(
    graphql`
      query Testimonials {
        allFile(filter: { sourceInstanceName: { eq: "testimonials" }, extension: { eq: "md" } }) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  active
                  company
                  quote
                  ai_quote
                  customer {
                    name
                    position
                    avatar {
                      childImageSharp {
                        gatsbyImageData(height: 72, width: 72, placeholder: BLURRED, layout: FIXED)
                      }
                    }
                  }
                  image {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    }
                  }
                  link
                }
              }
              name
            }
          }
        }
      }
    `
  )

  const testimonials: Testimonial[] = nodes.map((node: Node) => {
    const frontmatter = node.node.childMarkdownRemark.frontmatter

    return {
      active: frontmatter.active,
      company: frontmatter.company,
      quote: frontmatter.quote,
      ai_quote: frontmatter.ai_quote,
      customer: {
        name: frontmatter.customer.name,
        position: frontmatter.customer.position,
        avatar: getImage(frontmatter.customer.avatar),
      },
      image: getImage(frontmatter.image),
      link: frontmatter.link,
      name: node.node.name,
    }
  })

  return testimonials.filter((testimonial: Testimonial) => testimonial.active)
}
