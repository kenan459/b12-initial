import path from 'path'
import { locales } from './src/config/i18n'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@partials': path.resolve(__dirname, 'src/partials'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@config': path.resolve(__dirname, 'src/config'),
      },
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      about: About
      author_img: File @fileByRelativePath
      benefits: Benefits
      b12_info: B12Info
      cards_list: [TextIconList]
      challenge: Challenge
      content: [Content]
      cta: CtaSection
      details: String @md
      features_list: [TextImageList]
      features: [String]
      hero: Hero
      hero_free_resources: HeroFreeResources
      hero_with_hubspot_form: HeroWithHubspotForm
      image: File @fileByRelativePath
      preview_image: File @fileByRelativePath
      process: Process
      results: Results
      show_product_overview: Boolean
      site_page_1: File @fileByRelativePath
      site_page_2: File @fileByRelativePath
      site_page_3: File @fileByRelativePath
      site_page_4: File @fileByRelativePath
      site_page_5: File @fileByRelativePath
      solution: Solution
      spider_monkey: SpiderMonkey
      summary: String @md
      testimonials: [Testimonials]
      testimonials_slider: TestimonialsSlider
      directory_faqs: DirectoryFaqs
    }

    type DirectoryItems {
      question: String
      answer: String @md
    }

    type DirectoryFaqs {
      title: String
      items: [DirectoryItems]
    }

    type CtaSection {
      text: String @md
    }

    type Testimonials {
      title: String
      name: String
      featured_text: String
    }

    type TestimonialsSlider {
      items: [String]
    }

    type Content {
      description: String @md
      title: String
      title_type: String
    }

    type Process {
      title: String
      steps: [TextImageList]
    }

    type TextImageList {
      title: String
      description: String @md
      image: File @fileByRelativePath
      secondary_image: File @fileByRelativePath
    }

    type TextIconList {
      title: String
      description: String
      icon: File @fileByRelativePath
      cta_url: String
      cta_text: String
    }

    type Benefits {
      title: String
      collection_items: [TextIconList]
      cta_text: String
      cta_url: String
      cta_note: String @md
      features: [TextIconList]
    }

    type SpiderMonkey {
      image: File @fileByRelativePath
    }

    type About {
      description: String @md
    }

    type Hero {
      customer_img: File @fileByRelativePath
      img: File @fileByRelativePath
      logo: File @fileByRelativePath
      cta_note: String @md
      text: String @md
    }

    type HeroFreeResources {
      image: File @fileByRelativePath
    }

    type HeroWithHubspotForm {
      logo: File @fileByRelativePath
    }

    type Challenge {
      description: String @md
    }

    type Solution {
      description: String @md
    }

    type Results {
      intro: String @md
      body: String @md
    }

    type B12Info {
      description: String @md
    }
  `

  createTypes(typeDefs)
}

exports.createPages = async function ({ actions, graphql, reporter }) {
  const { createPage, createRedirect } = actions

  /**
   * Create Case Studies pages
   */
  const caseStudiesGraphQlResult = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "case-studies" }, extension: { eq: "md" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                permalink
              }
            }
          }
        }
      }
    }
  `)

  if (caseStudiesGraphQlResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on Case studies pages.`)
    return
  }

  caseStudiesGraphQlResult.data.allFile.edges.forEach(({ node }) => {
    if (node.childMarkdownRemark === null) {
      return
    }

    createPage({
      path: node.childMarkdownRemark.frontmatter.permalink,
      component: path.resolve(`./src/components/layouts/case-studies/CaseStudy.tsx`),
      context: { id: node.id },
    })
  })

  /**
   * Create Free Draft pages
   */
  const freeDraftGraphQlResult = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "free-draft" }, extension: { eq: "md" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                permalink
              }
            }
          }
        }
      }
    }
  `)

  if (freeDraftGraphQlResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on Free Draft pages.`)
    return
  }

  freeDraftGraphQlResult.data.allFile.edges.forEach(({ node }) => {
    if (node.childMarkdownRemark === null) {
      return
    }

    createPage({
      path: node.childMarkdownRemark.frontmatter.permalink,
      component: path.resolve(`./src/components/layouts/FreeDraft.tsx`),
      context: { id: node.id },
    })
  })

  /**
   * Create Free Draft Legacy pages
   */
  const freeDraftLegacyGraphQlResult = await graphql(`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "free-draft-legacy" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                permalink
              }
            }
          }
        }
      }
    }
  `)

  if (freeDraftLegacyGraphQlResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on Free draft pages.`)
    return
  }

  freeDraftLegacyGraphQlResult.data.allFile.edges.forEach(({ node }) => {
    if (node.childMarkdownRemark === null) {
      return
    }

    createPage({
      path: node.childMarkdownRemark.frontmatter.permalink,
      component: path.resolve(`./src/components/layouts/FreeDraftLegacy.tsx`),
      context: { id: node.id },
    })
  })

  /**
   * Create Landing pages
   */
  const landingPagesGraphQlResult = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "landing-pages" }, extension: { eq: "md" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                permalink
              }
            }
          }
        }
      }
    }
  `)

  if (landingPagesGraphQlResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on Landing pages.`)
    return
  }

  landingPagesGraphQlResult.data.allFile.edges.forEach(({ node }) => {
    if (node.childMarkdownRemark === null) {
      return
    }

    createPage({
      path: node.childMarkdownRemark.frontmatter.permalink,
      component: path.resolve(`./src/components/layouts/landing-pages/LandingPage.tsx`),
      context: { id: node.id },
    })
  })

  /**
   * Create Product pages
   */
  const productPagesGraphQlResult = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "product-pages" }, extension: { eq: "md" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                permalink
              }
            }
          }
        }
      }
    }
  `)

  if (productPagesGraphQlResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on Product pages.`)
    return
  }

  productPagesGraphQlResult.data.allFile.edges.forEach(({ node }) => {
    if (node.childMarkdownRemark === null) {
      return
    }

    createPage({
      path: node.childMarkdownRemark.frontmatter.permalink,
      component: path.resolve(`./src/components/layouts/product-pages/ProductPage.tsx`),
      context: { id: node.id },
    })
  })

  /**
   * Manual redirects for existing pages
   * Note: Gatsby and Netlify don't redirect existing pages automatically
   */

  createRedirect({
    fromPath: `/case_study/villanova-insurance-partners`,
    toPath: `/case-studies`,
    redirectInBrowser: true,
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const regex = /\/(?<ns>[^\/]*)\.(?<language>[^\/]*)\/$/

  /**
   * Create pages if they have locale set up in file name
   * Example: `index.fr.tsx` will be available at `/fr/`
   */
  const existingLocales = Object.keys(locales)
  const activeLocales = existingLocales.filter((l) => locales[l].active)
  const pageHasLocale = existingLocales.some((l) => page.path.includes(`.${l}`))

  if (pageHasLocale) {
    deletePage(page)

    /**
     * Don't create page if locale is not active
     */
    if (!activeLocales.some((l) => page.path.includes(`.${l}`))) {
      return
    }

    /**
     * Parse page path and extract locale and namespace
     * Example: `/index.fr.tsx` will be parsed to `{ ns: 'index', language: 'fr' }`
     */
    const match = page.path.match(regex)

    if (match && match.groups) {
      const { ns, language } = match.groups
      const isIndexPage = ns === 'index'
      const isDefaultLocale = language === 'en'
      const newPath = `${!isDefaultLocale ? `/${language}` : ''}${
        !isIndexPage ? page.path.replace(`.${language}`, '') : '/'
      }`

      createPage({
        ...page,
        path: newPath,
        context: {
          ...page.context,
          language,
          ns,
          translated: true,
        },
      })
    }
  }
}
