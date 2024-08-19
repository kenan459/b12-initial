import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const MakeYourWebsite = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Make your website work as hard as you do. Make your website with B12."
      subtitle="Build your website with B12"
      text="Make a website that's more than just a digital business card. Create a site in seconds with all the tools to attract, win, and serve your clients online."
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
            alt="Make your website work as hard as you do. Make your website with B12."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Make your website work as hard as you do. Make your website with B12."
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

export default MakeYourWebsite

export const Head = () => (
  <SEO
    pageTitle="Make your website for Free"
    pageDescription="Attract, win, and serve your clients online with the only website builder designed for professional service providers. Make your website for free today!"
  />
)
