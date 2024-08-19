import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'

// Componenets
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import Grid from '@components/grid/Grid'
import TextIcon from '@components/text-icon/TextIcon'
import FreeDraftHero from '@components/hero/FreeDraftHero'
import Accordion from '@components/accordion/Accordion'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Partials
import FeaturedIn from '@partials/featured-in/FeaturedIn'
import SuccessStoriesSliderCentered from '@partials/success-stories-slider/SuccessStoriesSliderCentered'

// Types
type TFeatures = {
  title: React.ReactNode
  description: React.ReactNode
  icon: React.ReactNode
}

// Styles
export const StyledTitle = styled(Title)`
  font-size: 24px;
  line-height: 30px;

  ${mq['sm']} {
    font-size: 26px;
    line-height: 32px;
  }
`

export const StyledText = styled(Text)`
  font-size: 18px;
  line-height: 30px;
`

// Images
import IconRocket from '@images/icons/rocket.inline.svg'
import IconSimple from '@images/icons/simple.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'

const features = [
  {
    icon: <IconRocket />,
    title: <StyledTitle>Fast</StyledTitle>,
    description: (
      <StyledText>
        Describe your business and see a website in 60 seconds, including content, images, and SEO
        best practices.
      </StyledText>
    ),
  },
  {
    icon: <IconDesign />,
    title: <StyledTitle>Flexible</StyledTitle>,
    description: (
      <StyledText>
        Easily edit the site yourself, draft text using our AI content generator, or get expert help
        from a B12 designer any time.
      </StyledText>
    ),
  },
  {
    icon: <IconSimple />,
    title: <StyledTitle>Powerful</StyledTitle>,
    description: (
      <StyledText>
        Harness built-in email marketing, invoices & payments, appointments, eSignatures, and AI
        content creation to grow online.
      </StyledText>
    ),
  },
]

const faqs = [
  {
    question: 'How does the $1/month for 3 months offer work?',
    answer:
      'You’ll get a free draft of your website, then 3 months of B12 for $1/month on select plans. After 3 months, you’ll be billed at the standard monthly rate. You can cancel at any time.',
  },
  {
    question: 'What’s included in the free draft?',
    answer:
      'You’ll get a draft of your website with personalized images, text, and tools like online scheduling. Customize it further using the intuitive B12 Editor.',
  },
  {
    question: 'What happens after 3 months?',
    answer:
      'After 3 months, you’ll be billed at the standard monthly rate. You can cancel at any time.',
  },
  {
    question: 'What is B12?',
    answer:
      'B12 is an AI-powered website builder that generates your customizable draft in less than 60 seconds. Launch a polished online presence in no time, unlocking built-in tools like email marketing, online scheduling, and invoicing to engage clients and get paid for your services.',
  },
  {
    question: 'Can I use my own custom domain with B12?',
    answer:
      "Yes, you can use your own domain with B12. If you have an existing one, you can connect it to your new B12 site. If you don't have one, our team will help you secure a custom domain (plus, it’s free for the first year!).",
  },
  {
    question: 'Is B12 suitable for beginners?',
    answer:
      'Yes, B12 is simple enough for anyone to customize their AI draft and launch with all the right pages, content, features, and more. Use the intuitive B12 Editor on desktop or mobile to update your site over time. Need more help? B12’s team of designers and copywriters are available for additional customization.',
  },
]
const FreeDraftExperiment = () => {
  return (
    <>
      <FreeDraftHero
        title="Launch your website for $1/month"
        subtitle="Instantly see your AI-generated site draft for free!"
        note="3 months for $1/month, no credit card required"
        cta_text="Start for free"
        cta_url="https://b12.io/signup"
        image={
          <StaticImage
            src="../../../data/free-draft/images/product-management-training.png"
            alt="Launch your website for $1/month"
            layout="constrained"
            placeholder="none"
            loading="eager"
            quality={80}
          />
        }
      />

      <FeaturedIn />

      <SectionNext container={{ maxWidth: '1160px' }} paddingTop="48px">
        <SectionNextHeader align="center">
          <Title>The easiest AI website builder</Title>
        </SectionNextHeader>
        <Grid>
          {features &&
            features.map((item: TFeatures, idx: number) => (
              <TextIcon
                iconSize="md"
                vertical
                key={idx}
                title={item.title}
                text={item.description}
                icon={item.icon}
              />
            ))}
        </Grid>
      </SectionNext>

      <SuccessStoriesSliderCentered
        aiQuote
        title="What makes B12 so popular with professionals?"
        filter={['action-logistix', 'envision-hr', 'bell-group', 'the-sandusky-group']}
        background={theme.colors.brand.accentLightest}
      />

      <SectionNext
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader align="center" bottomMargin="md">
          <Title textStyle="h3">Is B12 the right AI website builder for you?</Title>
          <Subtitle>FAQs</Subtitle>
        </SectionNextHeader>
        <Accordion items={faqs} />
      </SectionNext>

      <CtaSectionBanner>
        <Title as="h3" light align="center">
          Build your best website for $1
        </Title>
        <Text light align="center">
          See your website draft for free, then enjoy 3 months of B12 for $1/month on select plans.
        </Text>
        <Button as="anchor" variant="primary" to="https://b12.io/signup" label="Start for free" />
      </CtaSectionBanner>
    </>
  )
}

export default FreeDraftExperiment
