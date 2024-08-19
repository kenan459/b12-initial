import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { getImage } from 'gatsby-plugin-image'

export type TPerson = {
  title: string
  position: string
  website: string
  image?: IGatsbyImageData
}

type TNode = {
  node: {
    frontmatter: TPerson
  }
}

export const usePeopleQuery = () => {
  const query = useStaticQuery(
    graphql`
      query People {
        team: allMarkdownRemark(
          filter: { frontmatter: { item_type: { eq: "person" }, role: { eq: "team" } } }
        ) {
          edges {
            node {
              frontmatter {
                website
                title
                position
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      layout: CONSTRAINED
                      width: 260
                      height: 260
                      quality: 90
                    )
                  }
                }
              }
            }
          }
        }

        advisors: allMarkdownRemark(
          filter: { frontmatter: { item_type: { eq: "person" }, role: { eq: "advisor" } } }
        ) {
          edges {
            node {
              frontmatter {
                website
                title
                position
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      layout: CONSTRAINED
                      width: 260
                      height: 260
                    )
                  }
                }
              }
            }
          }
        }

        investors: allMarkdownRemark(
          filter: { frontmatter: { item_type: { eq: "person" }, role: { eq: "investor" } } }
        ) {
          edges {
            node {
              frontmatter {
                website
                title
                position
                image {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, height: 40)
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const { team, advisors, investors } = query

  const getFieldsFromQuery = ({ edges }: { edges: TNode[] }): TPerson[] => {
    return edges.map((node) => {
      const { title, position, website, image } = node.node.frontmatter

      return {
        title,
        position,
        website,
        image: image ? getImage(image) : null,
      }
    })
  }

  return {
    team: getFieldsFromQuery(team),
    advisors: getFieldsFromQuery(advisors),
    investors: getFieldsFromQuery(investors),
  }
}
