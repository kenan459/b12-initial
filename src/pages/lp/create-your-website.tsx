import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const CreateYourWebsite = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Create your website in seconds with B12's website builder"
      text="The only website builder designed for professional service providers that makes it fast and easy to create a website that attracts, wins, and serves clients online."
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
            alt="Create your website in seconds with B12's website builder"
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Create your website in seconds with B12's website builder"
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

export default CreateYourWebsite

export const Head = () => (
  <SEO
    pageTitle="Create Your Website for Free"
    pageDescription="Create your website for free with the B12 website builder for professional service providers. "
  />
)
