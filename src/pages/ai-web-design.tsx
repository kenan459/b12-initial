import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'
import useExperiment, { isInExperimentGroup } from '@hooks/useExperiment'
import Skeleton from '@components/skeleton/Skeleton'

// Componenets
import LayoutClean from '@components/layouts/LayoutClean'
import SEO from '@components/SEO'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import Grid from '@components/grid/Grid'
import TextIcon from '@components/text-icon/TextIcon'
import FreeDraftHero from '@components/hero/FreeDraftHero'
import Accordion from '@components/accordion/Accordion'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Images
import IconAI from '@images/icons/ai.inline.svg'
import IconRocket from '@images/icons/rocket.inline.svg'
import IconSimple from '@images/icons/simple.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'

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
import { StyledTitle, StyledText } from '@components/pages/free-draft/ExperimentLayout'

const StyledIconAI = styled(IconAI)`
  margin-right: 10px;
  path {
    fill: #fff;
  }
`

const CtaButtonWrapper = styled.div`
  width: 201px;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-top: 0;
  }
`

const faqs = [
  {
    question: 'How does the $1/month for 3 months offer work?',
    answer:
      'Get a free draft of your website in 60 seconds, then 3 months of B12 for $1/month on <a href="https://www.b12.io/pricing">select plans</a>. After 3 months, you’ll be billed at the standard monthly rate. Cancel or change plans at any time.',
  },
  {
    question: 'What’s included in the free draft?',
    answer:
      'You’ll receive a draft of your website with personalized, industry-specific images, text, and tools like appointment scheduling. Customize your draft further using the intuitive B12 Editor on mobile or desktop.',
  },
  {
    question: 'What happens after 3 months?',
    answer:
      'After 3 months, you’ll be billed at the <a href="https://www.b12.io/pricing">standard monthly rate</a>. You can always cancel, upgrade, or downgrade.',
  },
  {
    question: 'What is B12?',
    answer:
      'B12 is an AI-powered website builder that generates your customizable draft in seconds. With B12, you get online fast and make the best first impression with a polished online presence. Our platform centralizes everything you need to be successful online — email marketing, online scheduling, invoicing, and more to engage clients and get paid. All aspects of your online presence, including email templates, contracts, and client forms, automatically match your website for a cohesive experience.',
  },
  {
    question: 'Can I use my own domain with B12?',
    answer:
      "Yes, you can use your own domain with B12. If you have an existing one, you can connect it to your new B12 site. If you don't yet have one, our team will help you secure a domain.",
  },
  {
    question: 'Can I edit my B12 website?',
    answer:
      'Yes! The B12 Editor is simple enough for anyone to customize their AI draft and launch fast with all the right pages, content, features, and more. Make edits any time on desktop or mobile. If you need more help, B12’s team of designers and copywriters are available for additional customization.',
  },
]

const features = [
  {
    icon: <IconRocket />,
    title: <StyledTitle>Instant website creation</StyledTitle>,
    description: (
      <StyledText>
        In 60 seconds, get an AI-generated website made specifically for you, including content,
        images, and SEO best practices.
      </StyledText>
    ),
  },
  {
    icon: <IconDesign />,
    title: <StyledTitle>Customizable</StyledTitle>,
    description: (
      <StyledText>
        Easily edit the site yourself on desktop or mobile, and draft new text using our AI content
        generator. Want expert help? Work with a B12 designer any time.
      </StyledText>
    ),
  },
  {
    icon: <IconSimple />,
    title: <StyledTitle>All in one</StyledTitle>,
    description: (
      <StyledText>
        Manage your website, email marketing, invoices & payments, appointments, eSignatures,
        contact management, and more in one place.
      </StyledText>
    ),
  },
]

// Button variants
const ExperimentButton = () => {
  return (
    <Button
      as="anchor"
      to="https://b12.io/signup"
      variant="primary"
      label="Start for free"
      size="medium"
      icon={<StyledIconAI />}
    />
  )
}

const ControlButton = () => {
  return <Button as="anchor" to="https://b12.io/signup" variant="primary" label="Start for free" />
}

const AIWebDesign = () => {
  const experiment = useExperiment('ai_website_builder_page_cta_experiment_20240617')

  const isInExperiment = isInExperimentGroup(experiment, 'primary_button_prominent_20240617')

  return (
    <>
      <LayoutClean gdprHidden>
        <FreeDraftHero
          title="Launch an AI website for $1/month"
          subtitle="Let AI generate your personalized site in seconds with built-in scheduling, payments, email marketing, and more. Unlock 3 months of B12 for $1/month."
          note="No credit card required"
          cta={
            <>
              <CtaButtonWrapper>
                <Skeleton
                  loaded={experiment !== null}
                  width="201px"
                  height="71px"
                  backgroundColor="transparent"
                  foregroundColor="transparent"
                >
                  {isInExperiment ? <ExperimentButton /> : <ControlButton />}
                </Skeleton>
              </CtaButtonWrapper>
            </>
          }
          image={
            <StaticImage
              src="../data/free-draft/images/product-management-training.png"
              alt="Launch an AI website for $1/month"
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
            <Title>Build a better website effortlessly using AI</Title>
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
          filter={['action-logistix', 'mortgages-by-jill', 'the-rainbow-disruption']}
          background={theme.colors.brand.accentLightest}
        />

        <SectionNext
          container={{
            maxWidth: '800px',
          }}
        >
          <SectionNextHeader align="center" bottomMargin="md">
            <Title textStyle="h3">FAQs</Title>
          </SectionNextHeader>
          <Accordion items={faqs} />
        </SectionNext>

        <CtaSectionBanner>
          <Title as="h3" light align="center">
            Build your perfect website for $1
          </Title>
          <Text light align="center">
            See your AI website draft for free, then enjoy 3 months of B12 for $1/month on select
            plans.
          </Text>

          <CtaButtonWrapper>
            <Skeleton
              loaded={experiment !== null}
              width="201px"
              height="71px"
              backgroundColor="transparent"
              foregroundColor="transparent"
            >
              {isInExperiment ? <ExperimentButton /> : <ControlButton />}
            </Skeleton>
          </CtaButtonWrapper>
        </CtaSectionBanner>
      </LayoutClean>
    </>
  )
}

export default AIWebDesign

export const Head = () => {
  return <SEO pageTitle="Launch an AI website for $1/month" />
}
