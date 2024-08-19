import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import HeroTextImage from '../hero/HeroTextImage'
import { Button } from '../button/Button'

const ResourceCenterHero = () => {
  return (
    <HeroTextImage
      padding="sm"
      image={
        <StaticImage
          src="../../images/strengthen-relationships.jpg"
          alt="The online platform that powers professional services"
          placeholder="blurred"
          width={420}
          quality={80}
          style={{ borderRadius: '16px' }}
        />
      }
      title="The online platform that powers professional services"
      text="Launch an online presence that makes it simple to attract, win, and serve clients — including a website, scheduling, payments, email marketing, and more."
      cta={
        <>
          <Button
            as="anchor"
            label="Get started for free"
            to="https://b12.io/signup"
            variant="primary"
            size="small"
          />
        </>
      }
    />
  )
}

export default ResourceCenterHero
