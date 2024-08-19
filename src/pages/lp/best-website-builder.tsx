import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const BestWebsiteBuilder = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="The best website builder to grow your professional services firm."
      text="More easily sell your services and scale your client base with the best website builder for professional service providers."
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
            alt="The best website builder to grow your professional services firm."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="The best website builder to grow your professional services firm."
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

export default BestWebsiteBuilder

export const Head = () => (
  <SEO
    pageTitle="Best Website Builder for Professional Service Providers"
    pageDescription="More easily attract, win, and serve clients online with the best website builder for professional service providers."
  />
)
