import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const BestSiteBuilder = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="The site builder professional service providers use to scale."
      text="Start selling your services online and scaling your firm fast with B12's website builder designed for professional service providers."
      cta={
        <Button
          label="Sign up for free"
          as="anchor"
          to="http://b12.io/signup"
          variant="primary"
          size="small"
        />
      }
      imageDefaultSize
      imageBorderRadius
      image={
        <>
          <StaticImage
            className="hero-image-desktop"
            src="../../images/sem-campaign/create-your-website.png"
            alt="The site builder professional service providers use to scale."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="The site builder professional service providers use to scale."
            width={300}
            loading="eager"
            quality={100}
            placeholder="none"
          />
        </>
      }
    />
  </SEMLandingPageLayout>
)

export default BestSiteBuilder

export const Head = () => (
  <SEO
    pageTitle="Best Site Builder for Professional Service Providers"
    pageDescription="More easily attract, win, and serve clients online with the only site builder designed professional service providers."
  />
)
