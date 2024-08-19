import React from 'react'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useTranslation, Trans } from 'react-i18next'
import { getActiveLocales } from '@config/i18n'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import HeroTextImage from '@components/hero/HeroTextImage'
import Accordion from '@components/accordion/Accordion'
import { Button } from '@components/button/Button'
import TextImage from '@components/text-image/TextImage'
import { List } from '@partials/tools-section/ToolsSection'
import TextIcon from '@components/text-icon/TextIcon'
import YouTubeVideo from '@components/youtube-video/YoutubeVideo'
import Grid from '@components/grid/Grid'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'
import SuccessStoriesSliderCentered from '@partials/success-stories-slider/SuccessStoriesSliderCentered'

// Data
import { features, benefits, faqs } from '@data/pages/ai-assist'

// Images
import AiAssistVideo from '@images/ai-assist.mp4'

// Styles
const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 280px;

  video {
    box-shadow: ${theme.shadows[1]};
    border-radius: 6px;

    max-width: 100%;
  }
`

export const AiAssistPageLayout = ({ lang }) => {
  const { t } = useTranslation(['ai-assist'], { lng: lang })

  return (
    <LayoutMain>
      <HeroTextImage
        title={t('Generate web pages, blog posts, and emails with AI')}
        subtitle={t('In less than a minute, draft what your business needs')}
        text={t(
          "B12's AI copilot creates full-length drafts for you, even handling search engine optimization, text snippets, and formatting. It's effortless, fast, and customizable – simply edit and publish."
        )}
        ctaAsButton
        padding="lg"
        cta={
          <Button
            as="anchor"
            label={t('Get started for free')}
            to="https://b12.io/signup"
            variant="primary"
            size="small"
          />
        }
        image={
          <ImageWrapper>
            <video
              className="hero-video"
              loop
              muted
              poster="../images/ai-assist-poster.png"
              autoPlay
              playsInline
              style={{ maxHeight: 450 }}
            >
              <source src={AiAssistVideo} type="video/mp4" />
            </video>
          </ImageWrapper>
        }
      />

      <SectionNext>
        <SectionNextHeader>
          <Title>{t('Create what you need 40x faster with AI Assist')}</Title>
          <Text>
            {t(
              'A major obstacle to building a website, content library, or email marketing strategy is drafting and refining the right copy. You have to be clear, compelling, and concise about what makes your business unique, while considering tone of voice, word count, keywords, and calls to action. It’s a lot of work on top of running your business.'
            )}
          </Text>
          <Text>
            {t(
              'AI Assist can help. With AI Assist, share as much or as little about what you want to create, and B12 drafts it using generative AI. Every last detail, including SEO metadata and preview text, is done for you. Best of all, you’ll see a first draft 40 times faster than if you wrote copy from scratch!'
            )}
          </Text>
        </SectionNextHeader>
        <List>
          {features.map((item, idx: number) => (
            <TextImage
              key={`list-item-${idx}`}
              image={item.image}
              title={t(item.title)}
              text={<Trans>{item.text}</Trans>}
              linkUrl={item.linkUrl}
              linkText={t(item.linkText)}
              reversed={item.reversed}
            />
          ))}
        </List>
      </SectionNext>

      <SectionNext bg={theme.colors.brand.accentLightest}>
        <SectionNextHeader align="center">
          <Title>{t('Why use AI Assist for your online content?')}</Title>
        </SectionNextHeader>

        <Grid colsLg={2} colsMd={2} colsXl={2}>
          {benefits.map((item, idx) => (
            <TextIcon
              title={t(item.title)}
              iconLight
              icon={item.icon}
              text={t(item.description)}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
      </SectionNext>

      <SectionNext
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader align="center">
          <Title>{t('See AI Assist in action')}</Title>
        </SectionNextHeader>
        <YouTubeVideo
          title={t('AI Assist by B12: Draft pages, posts, & emails in under 1 minute')}
          src="https://www.youtube.com/embed/u-bIM4hTZBE"
        />
      </SectionNext>

      <SuccessStoriesSliderCentered
        background={theme.colors.brand.accentLightest}
        filter={['legacy-guard-financial-group', 'madeline-buchanan']}
      />

      <SectionNext
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">{t('AI Assist FAQs')}</Title>
        </SectionNextHeader>
        <Accordion items={faqs} itemAsComponent />
      </SectionNext>

      <SectionCta
        title={t('Maximize efficiency and effectiveness with AI')}
        text={t(
          'Launch your website for free in under an hour. Now it’s easier than ever with AI Assist!'
        )}
        ctaUrl="https://b12.io/signup"
        ctaText={t('Sign up for B12')}
        ns="ai-assist"
      />
    </LayoutMain>
  )
}

export const AiAssistPageHead = ({ lang }) => {
  const { t } = useTranslation(['ai-assist'], { lng: lang })

  return (
    <SEO
      pageTitle={t('AI Assist')}
      pageDescription={t('Let AI generate entire web pages, blog posts, and emails')}
      lang={lang}
      hrefLang={getActiveLocales()}
      pagePath="/ai-assist"
    />
  )
}
