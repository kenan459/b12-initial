import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const EasyWebsiteMaker = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Make a website that wows with B12's all-in-one easy website maker"
      text="Attract, win, and serve your clients online. Make a fully-featured website in seconds with B12's AI-powered easy website maker."
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
            alt="Make a website that wows with B12's all-in-one easy website maker"
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Make a website that wows with B12's all-in-one easy website maker"
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

export default EasyWebsiteMaker

export const Head = () => (
  <SEO
    pageTitle="Easy Website Maker for Professional Service Providers"
    pageDescription="Get the easy website maker designed to help professional service providers attract, win, and serve clients online"
  />
)
