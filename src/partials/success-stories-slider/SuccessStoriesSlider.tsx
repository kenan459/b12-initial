import React, { useState, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useMediaQuery from '@hooks/useMediaQuery'
import { breakpoints, theme } from '@styles/theme'
import { SliderProps } from './types'
import { useTranslation } from 'react-i18next'

import {
  CustomSection,
  ContentWrapper,
  List,
  StyledTitle,
  ListItem,
  ListItemToggle,
  ListItemContent,
  ListItemSlide,
  ListItemContentTitle,
  ListItemContentSubtitle,
  SlideContent,
  SlideContentQuote,
  SlideContentAuthor,
  SlideContentAuthorContent,
  SlideContentAuthorName,
  SlideContentAuthorPosition,
  SlideContentQuoteText,
  SlideContentQuoteLink,
  SLIDER_ROWS_COUNT,
} from './SuccessStoriesSlider.styles'

import ArrowIcon from '@images/icons/icon-arrow-circle-right.inline.svg'

import { useTestimonialsQuery } from './helpers'

const SuccessStoriesSlider = ({
  title = 'Join thousands of professionals using B12 to power their business online',
  filter = [],
  alignItemsToTop,
  background,
  aiQuote = false,
}: SliderProps) => {
  const { t } = useTranslation(['success-stories-slider'])
  const [activeSlide, setActiveSlide] = useState(0)
  const [hovered, setHovered] = useState(false)
  const testimonials = useTestimonialsQuery()
  const itemsToShow = 4

  // Sort items by the order they are listed in filter array
  const sortFilteredItems = (a, b) => {
    const aIndex = filter.indexOf(a.name)
    const bIndex = filter.indexOf(b.name)

    if (aIndex < bIndex) {
      return -1
    } else if (aIndex > bIndex) {
      return 1
    }
    return 0
  }

  const filteredTestimonials = filter.length
    ? testimonials.filter((item) => filter.includes(item.name)).sort(sortFilteredItems)
    : testimonials.slice(0, itemsToShow)
  const matches = useMediaQuery(`(min-width: ${breakpoints.md}px)`)

  const cssGridRowStart = SLIDER_ROWS_COUNT / 2 - filteredTestimonials.length

  const handleSlideChange = (index: number) => {
    setActiveSlide(index)
  }

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (activeSlide + direction < 0) {
      slideNumber = filteredTestimonials.length - 1
    } else {
      slideNumber = (activeSlide + direction) % filteredTestimonials.length
    }

    setActiveSlide(slideNumber)
  }

  useEffect(() => {
    if (matches && !hovered) {
      const interval = setInterval(() => {
        changeSlide(1)
      }, 5000)

      return () => {
        clearInterval(interval)
      }
    }

    return
  }, [activeSlide, hovered])

  return (
    <CustomSection background={background}>
      <ContentWrapper>
        <List onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <StyledTitle
            as="h3"
            style={{
              gridRow: alignItemsToTop ? 'auto' : `${cssGridRowStart}/${cssGridRowStart + 1}`,
            }}
          >
            {t(title)}
          </StyledTitle>
          {filteredTestimonials.map((item, idx) => (
            <React.Fragment key={`slider-item-${idx}`}>
              <ListItem
                active={idx === activeSlide}
                isLast={idx === filteredTestimonials.length - 1}
                style={{
                  gridRow: alignItemsToTop
                    ? 'auto'
                    : `
                    ${cssGridRowStart + idx + 1}/
                    ${cssGridRowStart + idx + 2}
                  `,
                }}
              >
                <ListItemToggle onClick={() => handleSlideChange(idx)}>
                  <ListItemContent>
                    <ListItemContentTitle>{item.customer.name}</ListItemContentTitle>
                    <ListItemContentSubtitle>
                      {item.customer.position}, {item.company}
                    </ListItemContentSubtitle>
                  </ListItemContent>
                  <ArrowIcon />
                </ListItemToggle>
              </ListItem>
              <ListItemSlide
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: idx === activeSlide ? 1 : 0,
                  height: matches ? 'auto' : idx === activeSlide ? '100%' : '0',
                }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  pointerEvents: idx === activeSlide ? 'all' : 'none',
                }}
              >
                <SlideContent>
                  <GatsbyImage className="slide-image" image={item.image} alt={item.company} />
                  <SlideContentQuote>
                    <SlideContentQuoteText>
                      {aiQuote && item.ai_quote ? t(item.ai_quote) : t(item.quote)}
                    </SlideContentQuoteText>
                    <SlideContentAuthor>
                      <GatsbyImage
                        image={item.customer.avatar}
                        alt={item.customer.name}
                        className="slide-author-avatar"
                      />
                      <SlideContentAuthorContent>
                        <SlideContentAuthorName>{item.customer.name}</SlideContentAuthorName>
                        <SlideContentAuthorPosition>
                          {item.customer.position}, {item.company}
                        </SlideContentAuthorPosition>
                      </SlideContentAuthorContent>
                    </SlideContentAuthor>
                    {item.link && (
                      <SlideContentQuoteLink
                        as="link"
                        href={item.link}
                        color={theme.colors.text.white}
                        label={t('readStory', { name: item.customer.name })}
                      />
                    )}
                  </SlideContentQuote>
                </SlideContent>
              </ListItemSlide>
            </React.Fragment>
          ))}
        </List>
      </ContentWrapper>
    </CustomSection>
  )
}

export default SuccessStoriesSlider
