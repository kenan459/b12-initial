import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { css } from '@emotion/react'
import { useTranslation, Trans } from 'react-i18next'
import { getActiveLocales } from '@config/i18n'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import FaqSchemaTemplate from '@components/faq-schema-template'

import LayoutMain from '@components/layouts/Main'
import SEO from '@components/SEO'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Grid from '@components/grid/Grid'
import Title from '@components/title/Title'
import TextIcon from '@components/text-icon/TextIcon'
import Text from '@components/text/Text'
import UnorderedList from '@components/list/UnorderedList'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import Accordion from '@components/accordion/Accordion'
import ExperimentAIWebsiteBuilderPageHeroAnimation from './ExperimentHeroImage'
import HeroTextImage from '@components/hero/HeroTextImage'
import Skeleton from '@components/skeleton/Skeleton'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'

// Data
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import { websiteBuilderFeatures } from '@pages/_ai-website-builder.data'

// Images
import ShapeFilled from '@images/shape-filled.inline.svg'
import ShapeOutline from '@images/shape-outline.inline.svg'

const faqItems = [
  {
    question: 'How does B12 create AI-powered websites?',
    answer: (
      <>
        <p>
          Powered by artificial intelligence technology, B12 can create an entire website in
          seconds. Answer a few questions about your business, and generative AI produces your
          website draft with industry-specific images and copy. Your website draft is a starting
          point you can customize in real time with the B12 Editor.
        </p>
        <p>
          If you’d like some help, B12 uses a human-in-the-loop AI system called Orchestra to
          organize teams of human experts and machines that work together to launch and update a
          full website. This combination lets B12 experts tackle the website-building process more
          efficiently, focus their work in the areas they're most knowledgeable about (e.g., SEO,
          copywriting, more advanced web design), and add accuracy and consistency.
        </p>
      </>
    ),
  },
  {
    question: 'What else can I generate using AI?',
    answer: (
      <>
        <p>
          Aside from its AI website creator, B12 offers several{' '}
          <a href="https://www.b12.io/tools/">AI tools</a> and features you can use for free,
          including:
        </p>
        <ul>
          <li>Blog outline generator</li>
          <li>Slogan generator</li>
          <li>Business name generator</li>
          <li>Email template generator</li>
          <li>Service and product description generator</li>
          <li>Social media posts and captions generator </li>
          <li>Call to action generator</li>
        </ul>
        <p>
          Additionally, the{' '}
          <a href="https://support.b12.io/en/articles/6992915-generating-text-with-help-from-ai-assist">
            AI Assist
          </a>{' '}
          feature is baked into your site, allowing you to generate content for your professional
          website, blog, email — any text — in seconds.
        </p>
      </>
    ),
  },
  {
    question: 'Is B12 a free AI website builder?',
    answer: (
      <p>
        B12 does offer a free version, which allows you to publish a polished, responsive site
        complete with client intake forms, online scheduling, invoice templates, and payments.{' '}
        <a href="https://b12.io/signup/">Get started</a> and launch yourself using built-in AI tools
        and an intuitive process that takes just a few moments.
      </p>
    ),
  },
  {
    question: `Can I use my own domain with B12's AI site builder?`,
    answer: (
      <p>
        Yes, if you already have a domain, you can connect it to your B12 website through our
        user-friendly interface. If you still need one, purchasing your desired custom domain
        through B12 takes only seconds — and is free for the first year!
      </p>
    ),
  },
  {
    question: `How much do the best AI website builders cost?`,
    answer: (
      <>
        <p>
          The cost of an AI website generator depends on the plan you choose and which additional
          features you need. With B12, there are no add-on fees — just straightforward pricing plans
          built to suit the needs of busy professionals. You can view our pricing plans and compare
          the features of each plan on the <a href="https://www.b12.io/pricing/">pricing page</a>.
          Or, you can go straight to using our free plan, which allows you to quickly launch a
          website that includes AI-powered online scheduling, payments, and intake forms.
        </p>
      </>
    ),
  },
]

// Styles
const StyledUnorderedList = styled(UnorderedList)`
  margin-bottom: 30px;
`

const CustomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background: ${theme.colors.brand.accentDarkest};
  position: relative;
  overflow: hidden;

  img {
    z-index: 10;
  }

  ${mq['md']} {
    padding-top: 160px;
  }
`

const CustomSectionHeader = styled(SectionNextHeader)`
  padding-inline: 20px;
  max-width: 900px !important;
  z-index: 10;
`

const shapeBaseStyles = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 50%;
  opacity: 0.3;

  ${mq['md']} {
    top: 0;
    left: 50%;
  }
`

const StyledShapeFilled = styled(ShapeFilled)`
  ${shapeBaseStyles}

  ${mq['md']} {
    top: -10%;
    transform: translateX(-50%) rotate(365deg);
  }
`

const StyledShapeOutline = styled(ShapeOutline)`
  ${shapeBaseStyles}
  ${mq['md']} {
    transform: translateX(-50%) rotate(195deg);
  }
`

const ControlHeroImages = () => {
  return (
    <>
      <StaticImage
        className="hero-image-desktop"
        src="../../../images/ai-website-builder-hero.png"
        alt="AI Website Builder"
        width={960}
        quality={80}
        placeholder="blurred"
        loading="eager"
      />
      <StaticImage
        className="hero-image-mobile"
        src="../../../images/ai-website-builder-hero-mobile.png"
        alt="AI Website Builder"
        width={380}
        quality={80}
        placeholder="blurred"
        loading="eager"
      />
    </>
  )
}

export const AiWebsiteBuilderPageLayout = ({ lang }) => {
  const { t } = useTranslation(['ai-website-builder'], { lng: lang })
  const isInExperiment = true

  const b12Offerings = [
    t('Free hosting'),
    t('Unlimited storage'),
    t('Free custom domain'),
    t('Mobile website editor'),
    t('No coding knowledge or technical experience required'),
  ]

  return (
    <LayoutMain>
      <HeroTextImage
        padding="sm"
        paddingBottom={isInExperiment ? '84px' : ''}
        paddingTop={isInExperiment ? '84px' : ''}
        title={t('The easiest AI website builder creates your site in 60 seconds')}
        text={t(
          "B12's AI website builder instantly generates your professional online presence, with AI-enabled tools, content, and images tailored to you"
        )}
        image={
          <Skeleton
            loaded={true}
            width="200px"
            height="535px"
            mobileHeight="345px"
            backgroundColor="transparent"
            foregroundColor="transparent"
          >
            {isInExperiment ? (
              <ExperimentAIWebsiteBuilderPageHeroAnimation />
            ) : (
              <ControlHeroImages />
            )}
          </Skeleton>
        }
        ctaAsButton
        ctaUrl="https://b12.io/signup/"
        ctaText={t('Generate my site')}
      />
      <SplitTextLarge
        title="Effortlessly launch your AI website today"
        bgShape
        headerBottomMargin="sm"
        reversed
        image={
          <>
            <StaticImage
              src="../../../images/best-ai-builder.png"
              alt="Effortlessly launch your AI website today"
              placeholder="blurred"
              layout="constrained"
              width={960}
              className="split-image-desktop"
            />
            <StaticImage
              src="../../../images/best-ai-builder.png"
              alt="Effortlessly launch your AI website today"
              placeholder="blurred"
              layout="constrained"
              width={380}
              className="split-image-mobile"
            />
          </>
        }
      >
        <Text>
          {t(
            'Bring your business online in seconds with minimal effort. AI instantly generates a personalized site with the right pages, copy, images, and tools to help achieve your goals.'
          )}
        </Text>

        <Text>
          {t(
            'Customize your AI-generated website using the intuitive B12 Editor or get help from our on-platform web designers, copywriters, and SEO specialists. B12 offers:'
          )}
        </Text>
        <StyledUnorderedList columns={1} items={b12Offerings} />
        <Text>
          {t(
            'Launch your dream website today using a centralized platform that automates your online presence, client interactions, invoicing and payments, and more.'
          )}
        </Text>
      </SplitTextLarge>
      <SectionNext paddingTop="20px">
        <Grid>
          {websiteBuilderFeatures.map((item, idx) => (
            <TextIcon
              key={`feature-item-${idx}`}
              icon={item.icon}
              vertical
              title={t(item.title)}
              text={t(item.description)}
              url={item.linkUrl}
              ctaText={t(item.linkText)}
              ctaAsButton
              externalUrl
            />
          ))}
        </Grid>
      </SectionNext>
      <CustomSection>
        <CustomSectionHeader align="center">
          <Title light align="center">
            {t('Your new site is just the beginning')}
          </Title>
          <Text light align="center">
            {t(
              'B12 is more than an AI website builder, giving you all the tools you need to succeed online. From eSignatures to invoicing, one frictionless AI-powered platform unlocks it all.'
            )}
          </Text>
        </CustomSectionHeader>
        <StaticImage
          src="../../../images/CETools.png"
          alt="Your new site is just the beginning"
          placeholder="blurred"
          layout="constrained"
          quality={100}
        />
        <StyledShapeFilled />
        <StyledShapeOutline />
      </CustomSection>
      <SuccessStoriesSlider
        title="Join thousands of professional websites created by B12
      "
        aiQuote
        filter={[
          'mortgages-by-jill',
          'bell-group',
          'the-sandusky-group',
          'envision-hr',
          'the-rainbow-disruption',
          'find-yourself-in-fashion',
        ]}
      />
      <SectionNext
        container={{
          maxWidth: '800px',
        }}
        borderBottom
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">{t('AI website builder FAQs')}</Title>
        </SectionNextHeader>
        <Accordion items={faqItems} itemAsComponent />
      </SectionNext>
      <SectionCta
        title={t('Instantly create a website with AI')}
        text={t(
          'AI removes the stress from the website creation process. Try B12 for free in 60 seconds to get your own AI-generated website with all the online tools you need to grow effortlessly.'
        )}
        ctaUrl="https://b12.io/signup/"
        ctaText={t('Generate my website')}
      />
    </LayoutMain>
  )
}

export const AiWebsiteBuilderPageHead = ({ lang }) => {
  const { t } = useTranslation(['ai-website-builder'], { lng: lang })

  const translatedFaqs = faqItems.map((item) => {
    return {
      question: t(item.question),
      answer: <Trans t={t}>{item.answer}</Trans>,
    }
  })

  return (
    <SEO
      pageTitle={t('AI Website Builder - Create Your Site in 60 Seconds')}
      pageDescription={t(
        "B12's AI Website Builder creates your professional site in 60 seconds. Describe what you need and launch today for free! No coding required."
      )}
      lang={lang}
      hrefLang={getActiveLocales()}
      pagePath="/ai-website-builder"
      schemaTemplate={FaqSchemaTemplate(translatedFaqs)}
    />
  )
}
