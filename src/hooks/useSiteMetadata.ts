import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            social_links {
              twitter
              facebook
              youtube
              instagram
              linkedin
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
