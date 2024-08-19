import React from 'react'
import { PageProps, HeadProps, HeadFC } from 'gatsby'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import { StaticImage } from 'gatsby-plugin-image'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import UnorderedList from '@components/list/UnorderedList'
import Accordion from '@components/accordion/Accordion'

import CircleStripeImg from '@images/dify-program/circle-stripe-with-outline.inline.svg'
import SquiggleLine from '@images/dify-program/section-squiggle.inline.svg'
import CircleStripeSmall from '@images/dify-program/circle-stripe.inline.svg'
import CircleOutlineSmall from '@images/dify-program/circle-outline.inline.svg'

import faqItems from '@data/black-owned-business-program-faq.yaml'

const HeroSection = styled(SectionNext)`
  padding: ${theme.spacing.section.xxxsmall} 0;

  ${mq['md']} {
    padding: ${theme.spacing.section.xsmall} 0;
  }

  .hero-circle-stripe-img {
    position: absolute;
    left: -60px;
    top: -60px;
    width: 120px;
    height: 120px;

    ${mq['md']} {
      width: 270px;
      height: 270px;
      left: -130px;
      top: -130px;
    }
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  padding-top: 60px;

  ${mq['md']} {
    padding-top: 0;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`

const NoApplications = styled.div`
  background: #f8f8f8;
  text-align: center;
  padding: 40px;
  margin-bottom: 40px;

  ${mq['md']} {
    padding: 60px;
    margin-bottom: 80px;
  }

  ${Title} {
    text-align: center;
    font-weight: normal;
  }
`

const SectionDetails = styled(SectionNext)<{ topSpace?: 'sm' | 'md' | 'lg' }>`
  ${(props) => props.topSpace === 'sm' && `margin-top: ${theme.spacing.section.xsmall};`}
  ${(props) => props.topSpace === 'md' && `margin-top: ${theme.spacing.section.medium};`}
  ${(props) => props.topSpace === 'lg' && `margin-top: ${theme.spacing.section.large};`}

  .squiggle-line-1,
  .squiggle-line-2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 174px;
    height: 17px;
  }

  .squiggle-line-2 {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
`

const SelectionCriteriaCards = styled.div`
  display: grid;
  gap: 20px;
  position: relative;

  .criteria-circle-1,
  .criteria-circle-2 {
    position: absolute;
    right: -40px;
    top: -40px;
    width: 92px;
    height: 92px;
    z-index: -1;
    border-radius: 50%;
  }

  .criteria-circle-1 {
    right: auto;
    top: auto;
    bottom: -40px;
    left: -40px;
  }

  ${mq['md']} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`

const SelectionCriteriaCard = styled.div`
  background: #f8f8f8;
  padding: 20px;

  ${Title} {
    text-align: center;
    margin-bottom: 20px;
  }

  ${mq['md']} {
    padding: 40px;
  }
`

const BlackOwnedBusinessProgramPage: React.FC<PageProps> = () => {
  return (
    <LayoutMain ctaOnlyNav>
      <HeroSection directChildren={<CircleStripeImg className="hero-circle-stripe-img" />}>
        <HeroContent>
          <SectionNextHeader>
            <Title as="h1">B12 Black-owned Businesses Program</Title>
            <Text>
              Black entrepreneurs disproportionately face significant hurdles when establishing
              their businesses. We would like to do our part to counterbalance the racist actions
              and policies that prevent Black-owned businesses from reaching their full potential.
              To that end, B12 is providing free websites for Black-owned businesses as a way to
              amplify their voices and connect them with customers.
            </Text>
          </SectionNextHeader>
          <StaticImage
            src="../../assets/uploads/black-owned-businesses-hero.png"
            alt="B12 Black-owned Businesses Program"
            placeholder="blurred"
            loading="eager"
            width={650}
            quality={100}
          />
        </HeroContent>
      </HeroSection>

      <SectionDetails
        tightPadding
        directChildren={
          <>
            <SquiggleLine className="squiggle-line-1" />
            <SquiggleLine className="squiggle-line-2" />
          </>
        }
      >
        <NoApplications>
          <Title as="h3">This program isn't currently accepting applications.</Title>
        </NoApplications>
        <SectionNextHeader>
          <Title as="h2">Details</Title>
          <Text>
            Each quarter, B12 will select up to <b>two winners</b> of a free website (and more!).
          </Text>
          <Text>
            <b>The winners will receive:</b>
          </Text>
          <UnorderedList
            columns={2}
            icon="plus"
            items={[
              'A free B12 site built by professional designers',
              'A free website domain',
              'Unlimited website bandwidth and storage',
              'Built-in search engine optimization (SEO)',
              "B12's online scheduling tool",
              'A monthly report summarizing your website metrics',
              "A company spotlight on B12's social channels",
            ]}
          />
        </SectionNextHeader>
      </SectionDetails>

      <SectionNext tightPadding>
        <SectionNextHeader>
          <Title as="h2">Eligibility</Title>
          <Text>
            If you have questions about your organization's eligibility, contact us at{' '}
            <a href="mailto:blackownedbusinesses@b12.io">blackownedbusinesses@b12.io</a>.
          </Text>
          <Text>
            <b>Eligible applicants meet these requirements:</b>
          </Text>
          <UnorderedList
            columns={3}
            items={[
              'Black-owned business',
              'Owned by an adult (18+)',
              'Located in the U.S. or Canada',
            ]}
          />
        </SectionNextHeader>
      </SectionNext>

      <SectionNext tightPadding>
        <SectionNextHeader>
          <Title as="h2">Selection criteria</Title>
          <Text>
            Some business owners may read the criteria and feel discouraged because they’re not an
            exact match.
            <br /> Please apply anyway! There's a good chance that you're a better fit than you
            realize.
          </Text>
        </SectionNextHeader>
        <SelectionCriteriaCards>
          <CircleStripeSmall className="criteria-circle-1" />
          <CircleOutlineSmall className="criteria-circle-2" />
          <SelectionCriteriaCard>
            <Title as="h4">Your story</Title>

            <Text>
              We want to hear all about what prompted you to start your business, as well as its
              goals, mission, and any obstacles you overcame. Our selection committee will pay
              special attention to intersectional applicants.
            </Text>
          </SelectionCriteriaCard>
          <SelectionCriteriaCard>
            <Title as="h4">Need</Title>

            <Text>
              We want the B12 Black-owned Businesses Program to help applicants who need it most.
              Please note in your application if you’ve struggled to obtain funding elsewhere or
              have been impacted by the COVID-19 pandemic, or the recent economic downturn.
            </Text>
          </SelectionCriteriaCard>
        </SelectionCriteriaCards>
      </SectionNext>

      <SectionDetails
        tightPadding
        topSpace="lg"
        directChildren={
          <>
            <SquiggleLine className="squiggle-line-1" />
            <SquiggleLine className="squiggle-line-2" />
          </>
        }
      >
        <NoApplications>
          <Title as="h3" align="center">
            How to apply
          </Title>
          <Text align="center">This program isn't currently accepting applications.</Text>
        </NoApplications>

        <Text align="center">
          Don’t hesitate to <a href="mailto:blackownedbusinesses@b12.io">contact us</a> with
          questions about the program or your application. Thank you for taking the time to apply!
        </Text>
      </SectionDetails>

      <SectionDetails
        tightPadding
        topSpace="lg"
        directChildren={
          <>
            <SquiggleLine className="squiggle-line-1" />
            <SquiggleLine className="squiggle-line-2" />
          </>
        }
      >
        <Title as="h2" align="center">
          What does B12 offer my business?
        </Title>
        <Text align="center">
          B12 takes a modern approach to building websites. We combine the best of artificial
          intelligence (AI) with human designers to launch professional websites fast and improve
          them over time. B12 designers create a search engine optimized site that fits your
          business and we’re available to update it for you as you evolve. Receive a monthly website
          report to track your progress and grow your business after launch.
        </Text>
      </SectionDetails>

      <SectionNext>
        <SectionNextHeader>
          <Title>FAQ</Title>
        </SectionNextHeader>
        <Accordion items={faqItems} variant="with-background" />
      </SectionNext>
    </LayoutMain>
  )
}

export default BlackOwnedBusinessProgramPage

export const Head: HeadFC<HeadProps> = () => (
  <SEO
    pageTitle="B12 Black-owned Businesses Program"
    pageDescription="B12 Black-owned Businesses Program"
  />
)
