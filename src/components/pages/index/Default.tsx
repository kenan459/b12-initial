import styled from '@emotion/styled'
import React from 'react'
import { theme, mq } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

// Components
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import List from '@components/list/List'
import TextIcon from '@components/text-icon/TextIcon'

// Partials
import HomeHero from '@partials/home-hero/HomeHero'
import HomeHeroNew from '@partials/home-hero-new/HomeHeroNew'
import FeaturedIn from '@partials/featured-in/FeaturedIn'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import ToolsSection from '@partials/tools-section/ToolsSection'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SectionCta from '@partials/section-cta/SectionCta'

import PricingHero from '@partials/pricing-hero/PricingHero'


// Data
import { engageItems, reliableItems } from './data'

// Styles

const FeaturedInStyled = styled(FeaturedIn)`
  padding-block: 0;
  margin-top: 30px;

  ${mq['sm']} {
    padding-block: 0;
  }

  ${mq['md']} {
    margin-top: -40px;
  }
`

const IndexControl = ({ lang }) => {
  const { t } = useTranslation(['index'], { lng: lang })

  return (
    <>
      <HomeHeroNew />
      <FeaturedInStyled />
      <SectionNext
        containerType="shaped"
        paddingTop="80px"
        container={{
          bg: theme.colors.brand.accentLightest,
          split: 'half',
          verticalAlign: 'center',
        }}
      >
        <List>
          {engageItems.map((item, idx) => (
            <TextIcon
              key={`list-item-${idx}`}
              icon={item.icon}
              iconLight={true}
              title={t(item.title, { ns: 'index' })}
              text={t(item.subtitle, { ns: 'index' })}
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
        <SectionNextHeader bottomMargin="none">
          <Title textStyle="h3">{t('From new client intake to invoicing.', { ns: 'index' })}</Title>
          <p>
            {t(
              'With B12, you get a powerful website backed by tools to help you look professional, engage with clients, and streamline business operations.',
              { ns: 'index' }
            )}
          </p>
        </SectionNextHeader>
      </SectionNext>

      {/* <SuccessStoriesSlider
        filter={[
          'action-logistix',
          'envision-hr',
          'bell-group',
          'the-sandusky-group',
          'find-yourself-in-fashion',
        ]}
      /> */}

      <PricingHero />
      

      {/* <SplitTextLarge
        title={t('Automated, collaborative, secure')}
        subtitle={t(
          'Easily launch a beautiful, modern site that helps you accomplish more. Join 150,000+ companies that rate B12 as a top website builder on Google, Trustpilot, and G2.'
        )}
        imageFullWidth
        image={
          <StaticImage
            src="../../../images/automated-secure.jpeg"
            alt={t('Automated, collaborative, secure')}
            placeholder="blurred"
            width={860}
          />
        }
      >
        <List>
          {reliableItems.map((item, idx) => (
            <TextIcon
              key={`list-item-${idx}`}
              icon={item.icon}
              title={t(item.title)}
              text={t(item.subtitle)}
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
      </SplitTextLarge> */}

      <SectionCta
        title={t('The best AI website builder for businesses')}
        text={t(
          'Get a fully functional website built for you in seconds, with all the features you need to grow.'
        )}
        ctaText={t('Start for free')}
      />
    </>
  )
}

export default IndexControl
