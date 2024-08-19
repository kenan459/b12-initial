import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { mq } from '@styles/theme'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import { HubspotForm } from '@components/hubspot-form/HubspotForm'

// Partials
import HeroTextImage from '@components/hero/HeroTextImage'

const StyledHubspotForm = styled(HubspotForm)`
  width: 100%;

  ${mq['md']} {
    form {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;

      .hs-submit {
        margin-top: 5px !important;
      }

      input[type='email'] {
        min-width: 300px;
        height: 58px;

        &.error {
          &::focus-visible {
            outline: 1px solid #f05e5e;
          }
          outline: 1px solid #f05e5e;
        }
      }
    }
  }
`

const EarlyAdoptersWaitlistPage = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Become a B12 early adopter"
        titleVariant="h2"
        subtitle="Gain early access to our most innovative AI features"
        text="Stay ahead of the curve by signing up to pioneer new AI tools and features. You'll be the first to know about our latest products, and your feedback will help us make them even better."
        imageBorderRadius
        cta={
          <StyledHubspotForm
            formElementId="734c7197-c461-4bf5-a40c-7fa7ab834322"
            formId="734c7197-c461-4bf5-a40c-7fa7ab834322"
          />
        }
        image={
          <>
            <StaticImage
              src="../images/early-adopters-hero.jpeg"
              className="hero-image-desktop"
              alt="The easiest way to edit your website"
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              className="hero-image-mobile"
              src="../images/early-adopters-hero.jpeg"
              alt="The easiest way to edit your website"
              width={420}
              loading="eager"
              quality={100}
              placeholder="none"
            />
          </>
        }
      />
    </LayoutMain>
  )
}

export default EarlyAdoptersWaitlistPage

export const Head = () => (
  <SEO
    pageTitle="Early adopters"
    pageDescription="Gain early access to our most innovative AI features"
  />
)
