import React from 'react'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextImage from '@components/hero/HeroTextImage'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import Accordion from '@components/accordion/Accordion'
import TextIcon from '@components/text-icon/TextIcon'
import { Button } from '@components/button/Button'
import Grid from '@components/grid/Grid'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Data
import referralFAQ from '@data/referral-faq.yaml'

const REFERRAL_CREDIT_AMOUNT = 50

// Styles
const IngredientsSection = styled(SectionNext)`
  padding: ${theme.spacing.section.xsmall} 0;
`

const iconMotion = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  transition: { delay: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
}

const ReferralPage = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        title={`Give $${REFERRAL_CREDIT_AMOUNT}, Get $${REFERRAL_CREDIT_AMOUNT}`}
        subtitle="Share your referral link with your friends & colleagues and both of you will earn free credits."
        cta={
          <>
            <Button
              as="anchor"
              label="Get your referral link"
              to="https://b12.io/dashboard/refer"
              variant="primary"
            />
          </>
        }
        imageDefaultSize
        imageBorderRadius
        image={
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../images/referral/1_Hero.jpg"
              alt="Helping Firms Secure A Successful Future"
              width={960}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              className="hero-image-mobile"
              src="../images/referral/1_Hero.jpg"
              alt="Helping Firms Secure A Successful Future"
              width={420}
              loading="eager"
              quality={100}
              placeholder="none"
            />
          </>
        }
      />

      <IngredientsSection>
        <SectionNextHeader>
          <Title textStyle="h2">How the B12 Referral program works</Title>
          <Subtitle>
            For every colleague you refer that purchases B12, you will both earn $
            {REFERRAL_CREDIT_AMOUNT} toward your subscription.
          </Subtitle>
        </SectionNextHeader>
        <Grid>
          <TextIcon
            icon="1"
            title="Refer a colleague"
            text="Know someone looking for a website? Refer them to B12."
            iconMotion={iconMotion}
            vertical
          />
          <TextIcon
            icon="2"
            title={`Your colleague gets $${REFERRAL_CREDIT_AMOUNT}`}
            text={`Your colleague signs up with your unique referral link and gets a $${REFERRAL_CREDIT_AMOUNT} coupon applied toward their purchase with B12.`}
            iconMotion={iconMotion}
            vertical
          />
          <TextIcon
            icon="3"
            title={`You get $${REFERRAL_CREDIT_AMOUNT}`}
            text={`Your account will be credited $${REFERRAL_CREDIT_AMOUNT} once your colleague uses B12 for 1 month.`}
            iconMotion={iconMotion}
            vertical
          />
        </Grid>
      </IngredientsSection>
      <CtaSectionBanner>
        <Title as="h3" light align="center">
          Log in to get a referral link
        </Title>
        <Text light align="center">
          B12 is the only all-in-one website builder that makes it easy for professional service
          providers to attract, win, and serve clients online.
        </Text>
        <Button
          as="anchor"
          variant="primary"
          to="https://b12.io/dashboard/refer"
          label="Get your referral link"
        />
      </CtaSectionBanner>

      <SectionNext
        bg={theme.colors.brand.accentLightest}
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader align="center" id="faq">
          <Title textStyle="h3">FAQs</Title>
        </SectionNextHeader>
        <Accordion items={referralFAQ} />
      </SectionNext>
    </LayoutMain>
  )
}

export default ReferralPage

export const Head = () => (
  <SEO
    pageTitle={`Give $${REFERRAL_CREDIT_AMOUNT}, Get $${REFERRAL_CREDIT_AMOUNT}`}
    pageDescription="Share your referral link with your friends & colleagues and both of you will earn free credits."
  />
)
