import React, { useState, useEffect } from 'react'
import { theme, breakpoints } from '@styles/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import useMediaQuery from '@hooks/useMediaQuery'
import { AnimatePresence, Variants } from 'framer-motion'
import { SliderProps } from './types'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import { useTranslation, Trans } from 'react-i18next'

// Images
import { CtaShapeFilled, CtaShapeOutline } from '@components/cta-sections/CtaSectionBanner'
import IconNext from '@images/icons/icon-next.inline.svg'
import IconPrev from '@images/icons/icon-prev.inline.svg'

import {
  ContentWrapper,
  StyledTitle,
  SlideContentQuote,
  SlideContentAuthor,
  SlideContentAuthorDetails,
  SlideContentAuthorName,
  SlideContentAuthorPosition,
  SlideContentQuoteText,
  StyledSlidesButton,
} from './SuccessStoriesSliderCentered.styles'

import { useTestimonialsQuery } from './helpers'

const slideVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 20,
  },
}

const SuccessStoriesSliderCentered = ({
  title = 'See how other professionals have grown their business online with B12',
  filter = [],
  light = false,
  aiQuote = false,
}: SliderProps) => {
  const { t } = useTranslation(['success-stories-slider'])
  const [activeSlide, setActiveSlide] = useState(0)
  const testimonials = useTestimonialsQuery()
  const itemsToShow = 4
  const filteredTestimonials = filter.length
    ? testimonials.filter((item) => filter.includes(item.name))
    : testimonials.slice(0, itemsToShow)
  const matches = useMediaQuery(`(min-width: ${breakpoints.md}px)`)

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
    if (matches) {
      const interval = setInterval(() => {
        changeSlide(1)
      }, 5000)

      return () => {
        clearInterval(interval)
      }
    }

    return
  }, [activeSlide])

  return (
    <SectionNext
      bg={light ? theme.colors.brand.accentLightest : theme.colors.brand.accentDarkest}
      tightPadding
      container={{
        maxWidth: '900px',
      }}
    >
      <SectionNextHeader align="center" bottomMargin="md">
        <StyledTitle align="center" as="h3">
          {t(title)}
        </StyledTitle>
      </SectionNextHeader>

      <ContentWrapper>
        <StyledSlidesButton direction="prev" onClick={() => changeSlide(-1)}>
          <IconPrev />
        </StyledSlidesButton>
        <AnimatePresence>
          {filteredTestimonials.map((item, idx) => (
            <SlideContentQuote
              key={`slider-item-${idx}`}
              initial="hidden"
              variants={slideVariants}
              animate={idx === activeSlide ? 'visible' : 'hidden'}
            >
              <SlideContentQuoteText>
                {aiQuote && item.ai_quote ? t(item.ai_quote) : t(item.quote)}
              </SlideContentQuoteText>
              <SlideContentAuthor>
                <GatsbyImage
                  image={item.customer.avatar}
                  alt={item.customer.name}
                  className="slide-author-avatar"
                />
                <SlideContentAuthorDetails>
                  <SlideContentAuthorName>{item.customer.name}</SlideContentAuthorName>
                  <SlideContentAuthorPosition>
                    {item.customer.position}, {item.company}
                  </SlideContentAuthorPosition>
                </SlideContentAuthorDetails>
              </SlideContentAuthor>
            </SlideContentQuote>
          ))}
        </AnimatePresence>
        <StyledSlidesButton direction="next" onClick={() => changeSlide(-1)}>
          <IconNext />
        </StyledSlidesButton>
      </ContentWrapper>
      <CtaShapeOutline />
      <CtaShapeFilled />
    </SectionNext>
  )
}

export default SuccessStoriesSliderCentered
