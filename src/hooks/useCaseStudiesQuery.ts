import { graphql, useStaticQuery } from 'gatsby'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { diffDates } from '../helpers/string-helpers'

export type TCaseStudy = {
  permalink: string
  title: string
  text: string
  quote: string
  date: Date
  industry: string
  avatar: IGatsbyImageData
  name: string
  image: IGatsbyImageData
}

export const useCaseStudiesQuery = (storyTitle?: string) => {
  const query = useStaticQuery(
    graphql`
      query CaseStudies {
        allMarkdownRemark(filter: { frontmatter: { item_type: { eq: "case-study" } } }) {
          edges {
            node {
              frontmatter {
                permalink
                about {
                  industry
                }
                title
                date
                hero {
                  title
                }
                featured_quote
                customer {
                  avatar {
                    childImageSharp {
                      gatsbyImageData(width: 30, height: 30, placeholder: BLURRED)
                    }
                  }
                }
                customer_name
                thumbnail_img {
                  childImageSharp {
                    gatsbyImageData(width: 520, height: 350, placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }

        readNext: allMarkdownRemark(filter: { frontmatter: { item_type: { eq: "case-study" } } }) {
          edges {
            node {
              frontmatter {
                date
                permalink
                title
                hero {
                  title
                }
                customer {
                  avatar {
                    childImageSharp {
                      gatsbyImageData(width: 360, height: 360, placeholder: BLURRED)
                    }
                  }
                }
                customer_name
              }
            }
          }
        }
      }
    `
  )

  const stories: TCaseStudy[] = query.allMarkdownRemark.edges.map(({ node }) => {
    const { frontmatter } = node

    return {
      date: frontmatter.date,
      permalink: frontmatter.permalink,
      industry: frontmatter.about.industry,
      title: frontmatter.title,
      text: frontmatter.hero.title,
      quote: frontmatter.featured_quote,
      avatar: getImage(frontmatter.customer.avatar),
      name: frontmatter.customer_name,
      image: getImage(frontmatter.thumbnail_img),
    } as TCaseStudy
  })
  stories.sort((a, b) => diffDates(a.date, b.date))

  let readNextStories: Partial<TCaseStudy>[] = []

  if (storyTitle) {
    readNextStories = query.readNext.edges
      .map(({ node }) => {
        const { frontmatter } = node

        return {
          date: frontmatter.date,
          permalink: frontmatter.permalink,
          title: frontmatter.title,
          text: frontmatter.hero.title,
          avatar: getImage(frontmatter.customer.avatar),
          name: frontmatter.customer_name,
        } as Partial<TCaseStudy>
      })
      .filter((item: Partial<TCaseStudy>) => item.title !== storyTitle)
      .slice(0, 3)
  }

  return { stories, readNextStories }
}
