import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const EasyWebsiteCreator = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Effortlessly create your website with B12's easy website creator."
      text="Save time, look professional, and stay organized with the only all-in-one online platform that helps professional service providers build a website, engage clients, and get paid fast."
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
            alt="Effortlessly create your website with B12's easy website creator."
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Effortlessly create your website with B12's easy website creator."
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

export default EasyWebsiteCreator

export const Head = () => (
  <SEO
    pageTitle="Easy Website Creator for Professional Service Providers | B12"
    pageDescription="Get the easy website creator designed to help professional service providers attract, win, and serve clients online"
  />
)
