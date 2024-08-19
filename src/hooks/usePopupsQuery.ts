import { graphql, useStaticQuery } from 'gatsby'

export type TPopup = {
  active: boolean
  title: string
  description: string
  slug_list: string[]
  include_form: boolean
  dark_theme: boolean
  popup_intent:
    | 'cta-type'
    | 'file-download'
    | 'newsletter-sign-up'
    | 'signup-form'
    | 'slogan-ideas-sign-up'
  popup_trigger: 'time' | 'exit-intent' | 'scroll-position'
  /** In seconds */
  delay_value?: number
  /** In percentage of the page */
  scroll_depth?: number
  cta_text?: string
  cta_url?: string
  form_title?: string
  form_cta_text?: string
  form_id?: string
}

export const usePopupsQuery = (pathname: string) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { item_type: { eq: "popup-form" }, active: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                slug_list
                include_form
                dark_theme
                popup_intent
                popup_trigger
                delay_value
                scroll_depth
                cta_text
                cta_url
                form_title
                form_cta_text
                form_id
              }
            }
          }
        }
      }
    `
  )

  const popups: TPopup[] = query.allMarkdownRemark.edges.map(({ node }) => {
    const {
      title,
      description,
      slug_list,
      include_form,
      dark_theme,
      popup_intent,
      popup_trigger,
      delay_value,
      scroll_depth,
      cta_text,
      cta_url,
      form_title,
      form_cta_text,
      form_id,
    } = node.frontmatter

    return {
      title,
      description,
      slug_list,
      include_form,
      dark_theme,
      popup_intent,
      popup_trigger,
      delay_value,
      scroll_depth,
      cta_text,
      cta_url,
      form_title,
      form_cta_text,
      form_id,
    }
  })

  // Get the popup that matches the current page
  const slugs = pathname.split('/').map((segment) => segment.split('.')[0])
  const relevantPopups = popups.filter((popup) =>
    popup.slug_list.some((popupSlug) => slugs.includes(popupSlug))
  )

  return relevantPopups.length > 0 ? relevantPopups[0] : null
}
