import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const EasyWebsiteBuilder = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Skip the DIY headaches with B12's easy website builder."
      text="Spend less time building your website and more time focused on what you do best with B12's easy website builder."
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
            alt="Skip the DIY headaches with B12's easy website builder."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Skip the DIY headaches with B12's easy website builder."
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

export default EasyWebsiteBuilder

export const Head = () => (
  <SEO
    pageTitle="Easy Website Builder for Professional Service Providers"
    pageDescription="Get the easy website builder designed exclusively for professional service providers"
  />
)
