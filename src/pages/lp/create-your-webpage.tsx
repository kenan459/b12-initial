import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const CreateYourWebpage = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Effortlessly create your webpage for a professional first impression."
      text="Easily attract, win, and serve clients online with the only website builder designed for professional service providers."
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
            alt="Effortlessly create your webpage for a professional first impression."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Effortlessly create your webpage for a professional first impression."
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

export default CreateYourWebpage

export const Head = () => (
  <SEO
    pageTitle="Create Your Webpage for Free"
    pageDescription="Create your webpage in just a few clicks and sell your services online with the B12 website builder"
  />
)
