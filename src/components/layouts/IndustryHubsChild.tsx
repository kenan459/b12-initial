import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

import LayoutMain from './Main'
import SectionNext from '../section-next/SectionNext'
import SectionNextHeader from '../section-next/SectionNextHeader'
import Title from '../title/Title'
import Text from '../text/Text'
import Accordion from '../accordion/Accordion'
import TextIcon from '../text-icon/TextIcon'
import { Button } from '../button/Button'
import TextImage from '../text-image/TextImage'
import SectionCta from '../../partials/section-cta/SectionCta'
import SplitTextLarge from '../../partials/split-text-large/SplitTextLarge'
import FeaturedIn from '../../partials/featured-in/FeaturedIn'
import ReviewsImages from '../../partials/reviews/ReviewsImages'

// Styles
const StyledSplitTextLarge = styled(SplitTextLarge)`
  ${mq['md']} {
    padding-top: 30px;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${mq['md']} {
    gap: 40px;
    grid-template-columns: 1fr 1fr;
  }
`

const StyledHero = styled(SectionNext)`
  padding-bottom: 0;
  margin-bottom: -20px;

  ${mq['md']} {
    padding-bottom: 0;
    margin-bottom: -40px;
  }
`

export const DriveLeadsSection = styled(SectionNext)`
  ${mq['md']} {
    padding-top: 0;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  &::before {
    display: block;
    position: absolute;
    content: '';
    background: ${theme.colors.brand.accentLightest};
    left: 0;
    bottom: 0;
    border-radius: 16px 0px 0px 56px;
    height: 90px;
    right: -100%;

    ${mq['md']} {
      height: 350px;
      border-radius: 36px 0px 0px 128px;
    }
  }
`

export const ImageWrapperContainer = styled.div`
  /* overflow: hidden; */
  width: 100%;
  position: relative;
  z-index: 2;

  .gatsby-image-wrapper {
    width: 90%;
    margin: 0 auto;

    ${mq['md']} {
      width: 85%;
      margin: 0 auto;
    }
  }
`

const TestimonialsWrapper = styled.div`
  display: grid;
  gap: 40px;

  ${mq['md']} {
    gap: 128px;
  }
`

const TwoColText = styled.div`
  ${mq['md']} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`

const TwoColTextRight = styled.div``

const IndustryHubsChildLayout = ({
  hero,
  businessCard,
  driveLeads,
  websiteNeeds,
  testimonials,
  ctaMini,
  help,
  faq,
}) => (
  <LayoutMain>
    <StyledHero>
      <SectionNextHeader align="center">
        <Title as="h1">{hero.title}</Title>
        <br />
        <Button
          as="anchor"
          to={hero.ctaLink}
          target="_blank"
          label={hero.ctaText}
          variant="primary"
        />
      </SectionNextHeader>
    </StyledHero>
    <FeaturedIn />

    <StyledSplitTextLarge
      title={<Title textStyle="h2">{businessCard.title}</Title>}
      subtitle={businessCard.subtitle}
      headerBottomMargin="sm"
      bg={theme.colors.brand.accentLightest}
      reversed
      bgShape
      bgShapeFromTop
      bgShapeColor={theme.colors.brand.accentLightMedium}
      image={businessCard.image}
      imageNoMargin
    >
      {businessCard.text}

      <br />
      <Button
        as="anchor"
        to="https://b12.io/signup"
        target="_blank"
        label="Create your free website in seconds"
        variant="primary-inverted"
      />
    </StyledSplitTextLarge>

    <SplitTextLarge
      title={<Title textStyle="h2">{driveLeads.title}</Title>}
      subtitle={driveLeads.subtitle}
      headerBottomMargin="sm"
      imageFullWidth
      bgShape
      image={driveLeads.image}
    >
      {driveLeads.text}
    </SplitTextLarge>

    <DriveLeadsSection>
      <SectionNextHeader align="center">
        <Title textStyle="h1">
          <span dangerouslySetInnerHTML={{ __html: websiteNeeds.title }} />
        </Title>
        <ImageWrapper>
          <ImageWrapperContainer>{websiteNeeds.image}</ImageWrapperContainer>
        </ImageWrapper>
      </SectionNextHeader>
      <List>
        {websiteNeeds.list.map((item, idx) => (
          <TextIcon
            key={`list-item-${idx}`}
            icon={item.icon}
            iconInlineWithTitle
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
    </DriveLeadsSection>

    <SectionCta
      title={ctaMini.title}
      text=""
      ctaText={ctaMini.text}
      ctaStyle="primary"
      buttonNoteVisible={false}
    />

    <SectionNext>
      <SectionNextHeader maxWidth="70%">
        <Title textStyle="h1">{testimonials.title}</Title>
      </SectionNextHeader>
      <TestimonialsWrapper>
        {testimonials.list.map((item, idx) => (
          <TextImage
            key={`list-item-${idx}`}
            small
            reversed={item.reversed}
            image={item.image}
            text={
              <>
                <Text>{item.quote}</Text>
                <Text small>
                  <b>{item.name}</b>
                  <br />
                  {item.position} / {item.customerSince}
                </Text>
              </>
            }
            linkUrl={item.link}
            linkText={item.linkText}
          />
        ))}
      </TestimonialsWrapper>
    </SectionNext>

    <SectionNext borderTop borderBottom>
      <TwoColText>
        <SectionNextHeader bottomMargin="none">
          <Title textStyle="h3">{help.title}</Title>
          {help.textLeft}
        </SectionNextHeader>
        <TwoColTextRight>
          {help.textRight}
          <br />
          <ReviewsImages />
        </TwoColTextRight>
      </TwoColText>
    </SectionNext>

    <SectionNext
      container={{
        maxWidth: '800px',
      }}
    >
      <SectionNextHeader align="center">
        <Title textStyle="h3">
          <span dangerouslySetInnerHTML={{ __html: faq.title }} />
        </Title>
      </SectionNextHeader>
      <Accordion items={faq.items} />
    </SectionNext>
  </LayoutMain>
)

export default IndustryHubsChildLayout
