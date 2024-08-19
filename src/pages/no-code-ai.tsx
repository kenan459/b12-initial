import React, { useState, useEffect } from 'react'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import HeroTextImage from '@components/hero/HeroTextImage'
import Accordion from '@components/accordion/Accordion'
import Icon from '@components/icon/Icon'
import { Button } from '@components/button/Button'
import { baseCss } from '@components/button/Button.styles'
import Grid from '@components/grid/Grid'

// Partials
import { HeroImageProps } from '@partials/home-hero/HomeHero'
import SectionCta from '@partials/section-cta/SectionCta'

// Data
import aiPrompts from '@data/no-code-ai-promts.yaml'
import faqs from '@data/no-code-ai-faqs.yaml'
import industries from '@data/no-code-ai-industries.yaml'
import { getIcon } from '@data/icons'

// Types
import { TGalleryTag } from '@hooks/useWebsiteGalleryQuery'

type TPrompt = {
  title: string
  categories: string[]
  tag?: string
  icon: string
  text: string
  cta_link: string
  cta_text: string
}

type TTag = {
  title: string
  tag: string
}

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

// Styles
import { GalleryTag } from '@components/directory/styles'

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 280px;

  .image-desktop {
    position: absolute;
    left: 0;
    top: 0;
  }

  .secondary-image-desktop {
    position: absolute;
    bottom: 0;
    left: 80px;
  }

  ${mq['md']} {
    .image-desktop {
      top: -60px;
    }

    .secondary-image-desktop {
      bottom: -100px;
      right: auto;
    }
  }
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;

  ${mq['md']} {
    margin-bottom: 80px;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`

const ToggleButton = styled.button<{ active: boolean }>`
  all: unset;
  ${baseCss}
  background: ${(props) =>
    props.active ? theme.colors.surface.borderLight : theme.palette.common.white};
  color: ${(props) => (props.active ? theme.colors.text.gray : theme.palette.primary.default)};
  border: 1px solid ${theme.palette.gray.light};
  padding: ${theme.spacing.small} ${theme.spacing.medium};

  &:hover {
    background: ${theme.palette.primary.xxlight};
    border-color: ${theme.palette.primary.xlight};
  }

  ${mq['md']} {
    padding: ${theme.spacing.medium} ${theme.spacing.large};
  }
`

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`
const IndustryTitle = styled(Title)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  ${mq['md']} {
    grid-column: 1/4;
  }
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const filterPrompts = (prompts: TPrompt[], selectedCategory: string) =>
  prompts.filter((item) => {
    if (selectedCategory === 'all') return prompts

    return !!item.categories.find((category: string) => category === selectedCategory)
  })

const filterPropmptsByInIndustryTag = (
  prompts: TPrompt[],
  selectedCategory: string,
  selectedTag: string
) => prompts.filter((item) => selectedCategory === 'industries' && selectedTag === item.tag)

const getTitle = (category: string) => {
  switch (category) {
    case 'featured-prompts':
      return 'Featured prompts'
    case 'industries':
      return 'Industries'
    default:
      return 'All'
  }
}

const NoCodeAiPage = () => {
  const [aiPromptsFiltered, setAiPromptsFiltered] = useState(aiPrompts)
  const [selectedCategory, setSelectedCategory] = useState('featured-prompts')
  const [selectedTag, setSelectedTag] = useState('')

  let industryTitle = ''
  let isGeneralTitlePrinted = false

  useEffect(() => {
    const filteredPrompts = selectedTag
      ? filterPropmptsByInIndustryTag(aiPrompts, selectedCategory, selectedTag)
      : filterPrompts(aiPrompts, selectedCategory)

    setAiPromptsFiltered(filteredPrompts)
  }, [selectedCategory, selectedTag])

  const handleToggleClick = (id: string) => {
    setSelectedCategory(id)
    setSelectedTag('')
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
  }

  const getSubtitle = (tag: string) => {
    industryTitle = tag
    const industryItem = industries.find((item: TTag) => item.tag === tag)
    const industryIcon = industryItem?.icon
    const industryItemTitle = industryItem?.title

    return (
      <IndustryTitle as="h3">
        {industryIcon && <Icon size="sm">{getIcon(industryIcon)}</Icon>}
        {industryItemTitle}
      </IndustryTitle>
    )
  }

  return (
    <LayoutMain>
      <HeroTextImage
        title="Transform your business with No-code AI"
        subtitle="Unlock new everyday efficiencies for everything from attracting leads, discovering new ideas, analyzing data, and tackling tasks specific to your industry."
        text="Sign up for B12 to discover the value of No-code AI and seamlessly integrate it with
        your website and business tools."
        ctaAsButton
        padding="lg"
        ctaText="Set up No-code AI"
        ctaUrl="https://b12.io/signup"
        image={
          <ImageWrapper>
            <StaticImage
              className="image-desktop"
              src="../images/no-code-hero-front.png"
              alt="Transform your business with No-code AI"
              width={450}
              {...imgProps}
            />
            <StaticImage
              className="secondary-image-desktop"
              src="../images/no-code-hero-back.png"
              alt="Transform your business with No-code AI"
              width={400}
              {...imgProps}
            />
          </ImageWrapper>
        }
      />

      <SectionNext>
        <SectionNextHeader>
          <Title>Unlock the full potential of AI in your business</Title>
          <Text>
            Choose from hundreds of No-code AI templates to speed up the tasks you already do, solve
            the problems slowing you down, and impress clients. Use these templates as starting
            points to build custom AI-powered processes without any technical skills needed.
          </Text>
          <ToggleWrapper>
            <ToggleButton
              active={selectedCategory === 'featured-prompts'}
              onClick={() => handleToggleClick('featured-prompts')}
            >
              Browse featured
            </ToggleButton>
            <ToggleButton
              active={selectedCategory === 'industries'}
              onClick={() => handleToggleClick('industries')}
            >
              Browse industries
            </ToggleButton>
            <ToggleButton
              active={selectedCategory === 'all'}
              onClick={() => handleToggleClick('all')}
            >
              Browse all
            </ToggleButton>
          </ToggleWrapper>
        </SectionNextHeader>

        <ContentBlock>
          <Title as="h2">{getTitle(selectedCategory)}</Title>
          <TagsWrapper>
            {selectedCategory === 'industries' &&
              industries.map((item: TGalleryTag, idx: number) => (
                <GalleryTag
                  key={`industry-tag-${idx}`}
                  active={item.tag === selectedTag}
                  onClick={() => handleTagClick(item.tag)}
                >
                  {item.title}
                </GalleryTag>
              ))}
          </TagsWrapper>
          <Grid>
            {aiPromptsFiltered.map((item: TPrompt, idx: number) => {
              return (
                <React.Fragment key={`list-item-${idx}`}>
                  {item.tag && item.tag !== industryTitle && getSubtitle(item.tag)}
                  {selectedCategory === 'all' && item.tag === 'general' && !isGeneralTitlePrinted && (
                    <React.Fragment>
                      <IndustryTitle as="h3">General</IndustryTitle>
                      {(isGeneralTitlePrinted = true)}
                    </React.Fragment>
                  )}

                  <CardItem>
                    {item.icon && <Icon size="md">{getIcon(item.icon)}</Icon>}

                    <Title as="h4">{item.title}</Title>
                    {item.text && <Text>{item.text}</Text>}
                    {item.cta_link && item.cta_text && (
                      <Button as="anchor" to={item.cta_link} label={item.cta_text} size="small" />
                    )}
                  </CardItem>
                </React.Fragment>
              )
            })}
          </Grid>
        </ContentBlock>
      </SectionNext>
      <SectionNext
        bg={theme.colors.brand.accentLightest}
        container={{
          maxWidth: '800px',
        }}
        borderBottom
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">No-code AI FAQs</Title>
        </SectionNextHeader>
        <Accordion items={faqs} />
      </SectionNext>

      <SectionCta
        title="Level up your business with simple-yet-powerful AI "
        text="Sign up for B12 to start working more productively with No-code AI templates that integrate with your website, online scheduling, email marketing, and more."
        ctaUrl="https://b12.io/signup"
        ctaText="Set up No-code AI"
      />
    </LayoutMain>
  )
}

export default NoCodeAiPage

export const Head = () => (
  <SEO
    pageTitle="Transform your business with No-code AI"
    pageDescription="Unlock new everyday efficiencies for everything from attracting leads, discovering new ideas, analyzing data, and tackling tasks specific to your industry."
  />
)
