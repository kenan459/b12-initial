import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

type TSEO = {
  pageTitle?: string
  pageDescription?: string
  noIndex?: boolean
  prefixTitle?: boolean
  prefixMetaTitle?: boolean
  addOptimizeSnippet?: boolean
  schemaTemplate?: {}
  lang?: string
  hrefLang?: string[]
  pagePath?: string
  children?: React.ReactNode
}

const SEO = ({
  pageTitle = '',
  pageDescription = '',
  schemaTemplate = undefined,
  noIndex = false,
  prefixTitle = false,
  prefixMetaTitle = false,
  addOptimizeSnippet = false,
  lang = 'en',
  hrefLang = [],
  pagePath = '',
  children,
}: TSEO) => {
  const { title, description, author, siteUrl, social_links } = useSiteMetadata()

  const metaTitle = pageTitle || title || ''
  const titleTemplate = prefixTitle ? `${author} | ${metaTitle}` : `${metaTitle} | ${author}`
  const metaTitleTemplate = prefixMetaTitle ? `${author} | ${metaTitle}` : metaTitle
  const metaDescription = pageDescription || description || ''
  const ogImagePath = `${siteUrl}/static-assets/images/ai-website-builder.jpeg`

  return (
    <>
      <html lang={lang} />
      {/* Google Optimize snippet: should be at the top of the head section */}
      {addOptimizeSnippet && (
        <script src="https://www.googleoptimize.com/optimize.js?id=GTM-TJ5588Z"></script>
      )}
      <title>{titleTemplate}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImagePath} />
      {noIndex && <meta name="robots" content="noindex" />}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Corporation",
            "name": "B12",
            "description": "Get a professional website built for you with online tools to sell your services and get paid. Serve clients online using B12’s AI website builder.",
            "image": "${siteUrl}/assets/img/b12-logo_1200w.png",
            "logo": "${siteUrl}/assets/img/b12-logo_1200w.png",
            "url": "${siteUrl}",
            "sameAs": [
              "${social_links.twitter}",
              "${social_links.facebook}",
              "${social_links.instagram}"
            ]
          }
        `}
      </script>
      {schemaTemplate && (
        <script type="application/ld+json">{JSON.stringify(schemaTemplate)}</script>
      )}
      {hrefLang && hrefLang.length > 0 && (
        <>
          <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${pagePath}`} />
          {hrefLang.map((lang, index) => (
            <link
              key={index}
              rel="alternate"
              hrefLang={lang}
              href={`${siteUrl}/${lang}${pagePath}`}
            />
          ))}
        </>
      )}
      {children}
    </>
  )
}

export default SEO
