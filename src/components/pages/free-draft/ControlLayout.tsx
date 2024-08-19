import React from 'react'
import { theme } from '@styles/theme'

// Componenets
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import Icon from '@components/icon/Icon'
import Grid from '@components/grid/Grid'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Partials
import FeaturedIn from '@partials/featured-in/FeaturedIn'

// Images
import IconClock from '@images/icons/clock.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'
import IconAI from '@images/icons/aidraft.inline.svg'
import IconRecommendations from '@images/icons/streamline.inline.svg'
import B12LogoWhite from '@images/logo-b12-white.inline.svg'

// Types
type TFeatures = {
  title: string
  description: string
  note?: string
  icon: React.ReactNode
}

import {
  FreeDraftHero,
  HeroTitle,
  StyledContainer,
  HeroContent,
  StyledSectionNext,
  CardItemWrapper,
  CardItemNote,
} from '@components/layouts/FreeDraftLegacy'

const steps = [
  {
    icon: <IconAI />,
    title: '1. Our AI learns about you and builds your website',
    description:
      "Tell us about your business, and then we'll crawl the web to gather content and tailor a custom website to your specific needs.",
    note: '60 SECONDS',
  },
  {
    icon: <IconDesign />,
    title: '2. Designers personalize and launch your website',
    description:
      'Our expert designers work with you to put the finishing touches on your website. Your site is ready to launch fast.',
    note: '1-2 WEEKS',
  },
  {
    icon: <IconRecommendations />,
    title: '3. Receive a monthly website report',
    description:
      "We'll summarize your site’s performance each month, so you understand its progress. You’ll also receive recommendations to improve your website metrics.",
    note: 'EVERY MONTH',
  },
]

const FreeDraftControl = () => {
  return (
    <>
      <FreeDraftHero>
        <StyledContainer>
          <HeroContent>
            <B12LogoWhite />
            <HeroTitle>Let us design a website for you in 60 seconds</HeroTitle>
            <Subtitle light>See your AI website draft for free</Subtitle>
            <Button to="https://b12.io/signup/" variant="primary" label="Start now" as="anchor" />
            <Text light small>
              No credit card required
            </Text>
          </HeroContent>
        </StyledContainer>
      </FreeDraftHero>

      <FeaturedIn />

      <StyledSectionNext container={{ maxWidth: '1160px' }} bg={theme.colors.surface.background}>
        <SectionNextHeader align="center">
          <Title>How it works</Title>
          <Subtitle>Smart websites design and build themselves – so you don’t have to</Subtitle>
        </SectionNextHeader>
        <Grid>
          {steps.map((item: TFeatures, idx: number) => (
            <CardItemWrapper key={`card-item-${idx}`}>
              <Icon size="lg">{item.icon}</Icon>
              <Title as="h3" textStyle="h4" align="center">
                {item.title}
              </Title>
              <Text align="center">{item.description}</Text>

              <CardItemNote>
                <IconClock />
                {item.note}
              </CardItemNote>
            </CardItemWrapper>
          ))}
        </Grid>
      </StyledSectionNext>

      <CtaSectionBanner>
        <Title as="h3" light align="center">
          Trusted by over 100,000 businesses worldwide
        </Title>
        <Text light align="center">
          See what our AI will build for free
        </Text>
        <Button as="anchor" variant="primary" to="https://b12.io/signup/" label="Get started" />
      </CtaSectionBanner>
    </>
  )
}

export default FreeDraftControl
