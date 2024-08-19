import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

import LayoutMain from './Main'
import HeroTextImage from '../hero/HeroTextImage'
import SectionNext from '../section-next/SectionNext'
import SectionNextHeader from '../section-next/SectionNextHeader'
import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import Accordion from '../accordion/Accordion'
import FeaturedIn from '../../partials/featured-in/FeaturedIn'
import TextIcon from '../text-icon/TextIcon'
import Timeline from '../timeline/Timeline'
import LinksList from '../list/LinksList'
import UnorderedList from '../list/UnorderedList'
import { Button } from '../button/Button'
import SectionCta from '../../partials/section-cta/SectionCta'
import SplitTextLarge from '../../partials/split-text-large/SplitTextLarge'
import SuccessStoriesSlider from '../../partials/success-stories-slider/SuccessStoriesSlider'
import ReviewsImages from '../../partials/reviews/ReviewsImages'

// Styles
const TightSection = styled(SectionNext)`
  padding: ${theme.spacing.section.xsmall} 0;

  ${mq['md']} {
    padding: ${theme.spacing.section.medium} 0;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${mq['md']} {
    gap: 40px;
    grid-template-columns: 1fr 1fr;
  }
`

const EmptySection = styled(SectionNext)<{ bgImage: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgImage || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${mq['md']} {
    height: 550px;
  }
`

const SplitTextLargeWrapper = styled.div`
  margin-block: 0;

  ${mq['md']} {
    margin-block: -176px -128px;
  }
`

const IndustryHubsParentLayout = ({
  hero,
  ingredients,
  emptySectionBg,
  winningApproach,
  childHubs,
  designBasics,
  ctaMini,
  splitImageRight,
  splitImageLeft,
  sliderTitle,
  sliderItems,
  faq,
}) => (
  <LayoutMain>
    <HeroTextImage
      title={hero.title}
      subtitle={hero.subtitle}
      text={hero.text}
      ctaText={hero.ctaText}
      ctaUrl={hero.ctaUrl}
      ctaNoMargin
      padding="sm"
      image={hero.image}
    />

    <TightSection>
      <SectionNextHeader>
        <Title textStyle="h3">{ingredients.title}</Title>
      </SectionNextHeader>
      <List>
        {ingredients.list.map((item, idx) => (
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
            vertical
          />
        ))}
      </List>
    </TightSection>

    <EmptySection bgImage={emptySectionBg}>
      <></>
    </EmptySection>

    <SectionNext bg={theme.colors.brand.accentLightest} container={{ split: '1/3' }}>
      <SectionNextHeader bottomMargin="none">
        <Title textStyle="h3">{winningApproach.title}</Title>
        <Subtitle as="h3">{winningApproach.subtitle}</Subtitle>
        {winningApproach.text}
      </SectionNextHeader>

      <Timeline
        parentBackground={theme.colors.brand.accentLightest}
        items={winningApproach.items}
      />
    </SectionNext>

    {childHubs && (
      <SectionNext bg={theme.colors.brand.accentDarkest} container={{ split: '1/3' }}>
        <SectionNextHeader bottomMargin="none">
          <Title light>{childHubs.title}</Title>
        </SectionNextHeader>

        <LinksList items={childHubs.links} />
      </SectionNext>
    )}

    <SectionNext
      bg={theme.colors.brand.accentLightest}
      containerType="shaped"
      container={{
        bg: theme.colors.surface.default,
      }}
    >
      <SectionNextHeader maxWidth="70%">
        <Title textStyle="h3">{designBasics.title}</Title>
        <p>{designBasics.text}</p>
      </SectionNextHeader>
      <UnorderedList columns={2} items={designBasics.items} />
    </SectionNext>

    <SectionCta
      title={ctaMini.title}
      text=""
      ctaText={ctaMini.text}
      ctaStyle="primary"
      buttonNoteVisible={false}
    />

    <SplitTextLarge
      title={splitImageRight.title}
      subtitle={splitImageRight.subtitle}
      headerBottomMargin="sm"
      bgShape
      image={splitImageRight.image}
      imageNoMargin
    >
      {splitImageRight.text}

      <br />

      <Button
        as="anchor"
        to={splitImageRight.ctaLink}
        label={splitImageRight.ctaText}
        variant="primary-inverted"
      />
    </SplitTextLarge>

    <SplitTextLargeWrapper>
      <SplitTextLarge
        reversed
        title={splitImageLeft.title}
        subtitle={splitImageLeft.subtitle}
        headerBottomMargin="sm"
        bgShape
        image={splitImageLeft.image}
        imageNoMargin
      >
        {splitImageLeft.text}
        <ReviewsImages />
      </SplitTextLarge>
    </SplitTextLargeWrapper>

    <FeaturedIn />

    <SuccessStoriesSlider alignItemsToTop title={sliderTitle} filter={sliderItems} />

    <SectionNext
      container={{
        maxWidth: '800px',
      }}
      borderBottom
    >
      <SectionNextHeader align="center">
        <Title textStyle="h3">{faq.title}</Title>
      </SectionNextHeader>
      <Accordion items={faq.items} />
    </SectionNext>
  </LayoutMain>
)

export default IndustryHubsParentLayout
