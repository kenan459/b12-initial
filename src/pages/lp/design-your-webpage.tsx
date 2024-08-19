import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const DesignYourWebpage = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Easily design your webpage. No coding required."
      text="Better attract, win, and serve clients online with the only all-in-one website builder designed for professional service providers. "
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
            alt="Easily design your webpage. No coding required."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Easily design your webpage. No coding required."
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

export default DesignYourWebpage

export const Head = () => (
  <SEO
    pageTitle="Design Your Webpage for Free"
    pageDescription="In just a few clicks design a webpage that will help sell your services online"
  />
)
