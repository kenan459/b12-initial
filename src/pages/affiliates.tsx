import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import HeroTextImage from '@components/hero/HeroTextImage'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import TextIcon from '@components/text-icon/TextIcon'
import Accordion from '@components/accordion/Accordion'
import { Button } from '@components/button/Button'
import { List } from '@partials/tools-section/ToolsSection'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Images
import IconCup from '@images/icons/cup.inline.svg'
import IconTrack from '@images/icons/chart.inline.svg'
import IconShare from '@images/icons/streamline.inline.svg'

// Data
import faqs from '@data/affiliates-faq.yaml'

const reliableItems = [
  {
    icon: <IconShare />,
    title: 'Share',
    subtitle:
      'Get accepted as an affiliate and share B12 with your audience. We’re here to help by providing you with premium account access, content support, cross-promotion, and creative materials.',
  },
  {
    icon: <IconTrack />,
    title: 'Track',
    subtitle:
      'We offer real-time tracking of your program in the Awin platform. Understand how your campaigns are doing and we will work with you to optimize your campaigns.',
  },
  {
    icon: <IconCup />,
    title: 'Earn',
    subtitle:
      'Get paid for every subscription conversion. We offer generous payouts across all of our packages and send payouts monthly.',
  },
]

const AffiliatesPage = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Share B12. Earn a commission."
        subtitle="As an affiliate, you can grow your business by sharing B12 with your audience."
        text="B12 is the only all-in-one AI website builder that makes it easy for professional service providers to attract, win, and serve clients online."
        ctaAsButton
        ctaText="Apply now"
        ctaUrl="https://ui.awin.com/merchant-profile/31619"
        image={
          <StaticImage
            src="../../assets/img/how-it-works-hero.png"
            alt="AI design"
            placeholder="blurred"
            loading="eager"
            width={500}
            quality={100}
          />
        }
      />

      <SplitTextLarge
        title="Join our community of affiliates"
        subtitle=" Our affiliates support small businesses. We support you with tracking links, special
        offers, and creative assets"
        imageFullWidth
        image={
          <StaticImage
            src="../images/reliable.jpg"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <List>
          {reliableItems.map((item, idx) => (
            <TextIcon
              key={`list-item-${idx}`}
              icon={item.icon}
              title={item.title}
              text={item.subtitle}
              iconMotion={{
                initial: {
                  opacity: 0,
                  scale: 0,
                },
                transition: { delay: 0.5 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
              }}
            />
          ))}
        </List>
      </SplitTextLarge>

      <SectionNext
        container={{
          maxWidth: '800px',
        }}
        borderTop
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">FAQs</Title>
        </SectionNextHeader>
        <Accordion items={faqs} />
      </SectionNext>
      <CtaSectionBanner bg="light">
        <Title as="h3" align="center">
          Join thousands of growing businesses that trust B12 with their online presence
        </Title>
        <Text align="center">
          Want to learn more about what B12 can do for your business? See what we’ve built for
          customers like you.
        </Text>
        <Button
          as="anchor"
          variant="primary"
          to="https://b12.io/signup/"
          label="Get started for free"
        />
      </CtaSectionBanner>
    </LayoutMain>
  )
}

export default AffiliatesPage

export const Head = () => (
  <SEO pageTitle="B12 Affiliate Program" pageDescription="Share B12. Earn a commission." />
)
