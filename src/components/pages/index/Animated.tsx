import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

// Components
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import TextIcon from '@components/text-icon/TextIcon'

// Partials
import HomeHeroAnimated from '@partials/home-hero/HomeHeroAnimated'
import ToolsSectionAnimated from '@partials/tools-section/ToolsSectionAnimated'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SectionCta from '@partials/section-cta/SectionCta'
import { FeaturedInMarquee } from '@partials/featured-in/FeaturedIn'
import AnimatedCTA from '@partials/animated-cta/AnimatedCta'
import ToolsSlider from '@partials/tools-slider/ToolsSlider'
import HomeAnimatedBenefits from '@partials/home-animated-benefits/HomeAnimatedBenefits'

// Images
import IconPeopleAnimated from '@partials/home-animated-benefits/IconPeopleAnimated'
import IconSecureAnimated from '@partials/home-animated-benefits/IconSecureAnimated'
import IconAiAnimated from '@partials/home-animated-benefits/IconAIAnimated'
import IconSimpleAnimated from '@partials/home-animated-benefits/IconSimpleAnimated'

// Data
export const engageItems = [
  {
    icon: <IconAiAnimated delayValue={0.3} />,
    title: 'Generate a website instantly',
    subtitle:
      'AI sets up your entire website in seconds, complete with text, images, and client-facing tools.',
  },
  {
    icon: <IconSimpleAnimated delayValue={1.8} />,
    title: 'Bring your ideas to life',
    subtitle:
      'Have AI generate drafts of new website content, blog posts, and email campaigns in seconds.',
  },
  {
    icon: <IconPeopleAnimated delayValue={3.4} />,
    title: 'Work with experts',
    subtitle:
      'Customize your online presence with the user-friendly B12 Editor or get help from our experts.',
  },
]

export const reliableItems = [
  {
    icon: <IconAiAnimated delayValue={0.6} />,
    title: 'AI-powered',
    subtitle:
      'Save time by applying AI to more aspects of your business. Automate how you draft new content and send emails, invoices, and payment reminders to clients.',
  },
  {
    icon: <IconPeopleAnimated delayValue={1.5} />,
    title: 'Team-friendly',
    subtitle:
      'Invite team members to help manage your website, clients, communication, documents, appointments, and payments.',
  },
  {
    icon: <IconSecureAnimated delayValue={2.5} />,
    title: 'Highly secure',
    subtitle:
      'Premier security practices, like HTTPS and TLS certificates for your site, protect your information and give your clients peace of mind.',
  },
]

const engageItemsAnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 2 } },
}

// Styles
const AnimatedList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mq['md']} {
    gap: 40px;
  }
`

const IndexVariant = ({ lang }) => {
  const { t } = useTranslation(['index'], { lng: lang })

  return (
    <>
      <HomeHeroAnimated />
      <FeaturedInMarquee />
      <SectionNext
        containerType="shaped"
        paddingTop="80px"
        container={{
          bg: theme.colors.brand.accentLightest,
          split: 'half',
          verticalAlign: 'center',
        }}
      >
        <SectionNextHeader bottomMargin="none">
          <Title textStyle="h3">
            {t('Let AI effortlessly build what you need', { ns: 'index' })}
          </Title>
          <p>
            {t(
              'With B12, AI automatically creates a website with the tools you need to succeed online, including invoicing, scheduling, documents and eSignatures, and email marketing.',
              { ns: 'index' }
            )}
          </p>
        </SectionNextHeader>
        <AnimatedList
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 1.5,
              },
            },
          }}
        >
          {engageItems.map((item, idx) => (
            <TextIcon
              key={`list-item-${idx}`}
              icon={item.icon}
              iconLight={true}
              title={t(item.title, { ns: 'index' })}
              text={t(item.subtitle, { ns: 'index' })}
              animationSettings={engageItemsAnimationVariants}
            />
          ))}
        </AnimatedList>
      </SectionNext>
      <AnimatedCTA />

      <ToolsSectionAnimated />
      <ToolsSlider lang={lang} />

      <SuccessStoriesSlider
        filter={[
          'action-logistix',
          'envision-hr',
          'bell-group',
          'the-sandusky-group',
          'find-yourself-in-fashion',
        ]}
      />

      <HomeAnimatedBenefits items={reliableItems} />

      <SectionCta
        animated
        title={t('The best AI website builder for businesses')}
        text={t(
          'Get a fully functional website built for you in seconds, with all of the features you need to grow.'
        )}
        ctaText={t('Start for free')}
      />
    </>
  )
}

export default IndexVariant
