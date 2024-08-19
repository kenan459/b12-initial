import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import HeroTextImage from '@components/hero/HeroTextImage'
import Text from '@components/text/Text'
import Card from '@components/card/Card'
import { Button } from '@components/button/Button'
import TextIcon from '@components/text-icon/TextIcon'
import createMotionIcon from '@components/icon-motion/IconMotion'
import Grid from '@components/grid/Grid'

// Partials
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SectionCta from '@partials/section-cta/SectionCta'

// Data
import industriesData from '@data/industry-hubs/industries.yaml'

// Images
import IconAi from '@images/icons/ai-round.inline.svg'
import IconArchitects from '@images/icons/architect.inline.svg'
import IconAccountants from '@images/icons/accountants.inline.svg'
import IconCoaches from '@images/icons/people.inline.svg'
import IconCommercialRealEstate from '@images/icons/real-estate.inline.svg'
import IconConsultants from '@images/icons/people.inline.svg'
import IconFinancialAdvisor from '@images/icons/financial.inline.svg'
import IconInsuranceBroker from '@images/icons/insurance.inline.svg'
import IconInvestingService from '@images/icons/investment.inline.svg'
import IconLawyers from '@images/icons/law.inline.svg'
import IconMortgageBroker from '@images/icons/mortgage-brokers.inline.svg'
import IconProfessionalServices from '@images/icons/bell.inline.svg'

// Types
export type TIndustry = {
  title: string
  description: string
  cta_text?: string
  cta_url?: string
  icon: string
}

export type TIndustriesIcons = {
  [key: string]: React.ReactNode
}

// Data
// Because Gatsby or any of it's plugins can't process SVGs from GraphQL queries, we have to add a high-end crutch like this.
const iconsData: TIndustriesIcons = {
  accountants: <IconAccountants />,
  'professional-services': <IconProfessionalServices />,
  architects: <IconArchitects />,
  coaches: <IconCoaches />,
  'commercial-real-estate': <IconCommercialRealEstate />,
  consultants: <IconConsultants />,
  'financial-advisor': <IconFinancialAdvisor />,
  'insurance-broker': <IconInsuranceBroker />,
  'investing-services': <IconInvestingService />,
  lawyers: <IconLawyers />,
  'mortgage-broker': <IconMortgageBroker />,
}

// Styles
const IconAiStyles = `
  top: -20px;
  right: 0;

  svg {
    width: 50px;
    height: 50px;
  }

  ${mq['md']} {
    top: -15px;
    right: 0;

    svg {
      width: 70px;
      height: 70px;
    }
  }

  ${mq['lg']} {
    svg {
      width: 94px;
      height: 94px;
    }
  }
`

const IndustriesPage = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Launch an AI-powered website tailored to your industry"
        text={
          <p>
            From CPAs to consultants, B12’s AI website builder and online tools help businesses
            elevate their online presence. Launch your industry-specific website in under an hour,
            with everything you need to reach clients, accept appointments, and get paid.
          </p>
        }
        ctaAsButton
        imageBorderRadius
        ctaText="Start for free"
        ctaUrl="https://b12.io/signup"
        image={
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../images/launch-ai-powered-website.jpeg"
              alt="Launch an AI-powered website tailored to your industry"
              placeholder="blurred"
              width={700}
              quality={100}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../images/launch-ai-powered-website.jpeg"
              alt="Launch an AI-powered website tailored to your industry"
              placeholder="blurred"
              width={420}
              quality={100}
            />
          </>
        }
        secondaryImage={
          <>
            <StaticImage
              className="hero-image-desktop-secondary"
              src="../images/industries-secondary-image.png"
              alt="Launch an AI-powered website tailored to your industry"
              placeholder="blurred"
              width={360}
              quality={100}
            />

            <StaticImage
              className="hero-image-tablet-secondary"
              src="../images/industries-secondary-image.png"
              alt="Launch an AI-powered website tailored to your industry"
              placeholder="blurred"
              width={240}
              quality={100}
            />

            <StaticImage
              className="hero-image-mobile-secondary"
              src="../images/industries-secondary-image.png"
              alt="Launch an AI-powered website tailored to your industry"
              placeholder="blurred"
              width={120}
              quality={100}
            />
            {createMotionIcon({
              customStyles: IconAiStyles,
              icon: <IconAi />,
              transition: { delay: 0.8 },
            })}
          </>
        }
      />
      <SplitTextLarge
        title="Powerful AI tools to more efficiently run your business"
        imageFullWidth
        headerBottomMargin="sm"
        bgShape
        reversed
        image={
          <StaticImage
            src="../images/elevate-your-presence.jpeg"
            alt="Powerful AI tools to more efficiently run your business"
            placeholder="blurred"
            layout="fullWidth"
            width={960}
          />
        }
      >
        <Text>
          AI drafts a website in only a few clicks to help you attract and retain the clients you
          need to succeed. Your B12 site includes tools like online scheduling, contact management,
          client forms, contracts and eSignatures, email marketing, and online payments and
          invoicing.
        </Text>
        <Text>
          These are a few of the industries that thrive using B12 to centralize their website,
          appointments, payments, contacts, marketing emails, and more.
        </Text>
      </SplitTextLarge>

      <SectionNext paddingTop="0px">
        <Grid gapLg={theme.spacing.large} gapXl={theme.spacing.large}>
          {industriesData.map((item: TIndustry, idx: number) => (
            <Card key={`industry-item-${idx}`}>
              <TextIcon
                iconSize="sm"
                vertical
                title={item.title}
                text={item.description}
                icon={iconsData[item.icon]}
              />
              {item.cta_url && item.cta_text && (
                <Button label={item.cta_text} to={item.cta_url} size="xsmall" as="link" />
              )}
            </Card>
          ))}
        </Grid>
      </SectionNext>

      <SuccessStoriesSlider
        filter={[
          'action-logistix',
          'envision-hr',
          'bell-group',
          'find-yourself-in-fashion',
          'the-sandusky-group',
        ]}
      />

      <SectionCta
        title="See your industry-specific site in seconds"
        text="Create the first version of your new AI website and unlock powerful online tools in 60 seconds."
        ctaUrl="https://b12.io/signup"
        ctaText="Start for free"
        buttonNoteVisible
      />
    </LayoutMain>
  )
}

export default IndustriesPage

export const Head = () => (
  <SEO
    pageTitle="Industries"
    pageDescription="The best all-in-one online solution for service businesses"
  />
)
