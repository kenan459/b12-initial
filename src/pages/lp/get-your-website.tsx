import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const GetYourWebsite = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Get your website to work as hard as you do. Build your website with B12."
      text="Get your website to do more for your business. When you build a website with B12 you get an all-in-one platform to more easily attract, win, and serve your clients online."
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
            alt="Get your website to work as hard as you do. Build your website with B12."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Get your website to work as hard as you do. Build your website with B12."
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

export default GetYourWebsite

export const Head = () => (
  <SEO
    pageTitle="Get Your Website for Free"
    pageDescription="Attract, win, and serve your clients online with the only website builder designed for professional service providers. Get your website for free today."
  />
)
