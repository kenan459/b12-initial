import React from 'react'

// Components
import SEO from '../../components/SEO'
import SEMLandingPageLayout from '../../components/layouts/SEMLandingPage'
import HeroTextImage from '../../components/hero/HeroTextImage'
import { Button } from '../../components/button/Button'
import { StaticImage } from 'gatsby-plugin-image'

// Styles

const OnlineWebsiteBuilder = () => (
  <SEMLandingPageLayout>
    <HeroTextImage
      title="Build your professional website in seconds with the B12 online website builder"
      text="The only all-in-one website builder designed to showcase the expertise of professional service providers. Wow visitors, capture leads, engage clients, and grow your business with B12."
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
            alt="Build your professional website in seconds with the B12 online website builder"
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <StaticImage
            className="hero-image-mobile"
            src="../../images/sem-campaign/create-your-website.png"
            alt="Build your professional website in seconds with the B12 online website builder"
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

export default OnlineWebsiteBuilder

export const Head = () => (
  <SEO
    pageTitle="Free Online Website Builder"
    pageDescription="B12 Is the all-In-one platform for professional service providers to attract, win, and serve clients online. Sell your services and scale your business faster with B12."
  />
)
