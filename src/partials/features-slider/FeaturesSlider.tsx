import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useMediaQuery from '../../hooks/useMediaQuery'
import { breakpoints } from '../../assets/theme'
import { TSliderProps } from './types'
import { mq } from '../../assets/theme'

// Data

import {
  CustomSection,
  ContentWrapper,
  List,
  StyledTitle,
  StyledSubtitle,
  ListItem,
  ListItemToggle,
  ListItemContent,
  ListItemContentButton,
  ListItemSlide,
  ListItemContentTitle,
  ListItemContentDetails,
  SLIDER_ROWS_COUNT,
} from './FeaturesSlider.styles'

// Images, icons
import { ImageWrapper } from '../split-text-large/SplitTextLarge'
import ArrowIcon from '../../images/icons/icon-arrow-circle-right.inline.svg'

const StyledImageWrapper = styled(ImageWrapper)`
  ${mq['md']} {
    width: 100%;
  }

  &::before {
    border-radius: 16px 8px 8px 80px;

    ${mq['md']} {
      top: -50px;
      bottom: -50px;
      border-radius: 36px 0 0 128px;
    }
  }
`

const FeaturesSlider = ({
  title = 'Powerfully simple. Packed with features. Purpose built for professional services.',
  subtitle = "With all the tools today's firms need to sell, scale, and succeed, B12 is your all-in-one online solution.",
  alignItemsToTop,
  features = [],
  children,
}: TSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [hovered, setHovered] = useState(false)
  const matches = useMediaQuery(`(min-width: ${breakpoints.md}px)`)

  const cssGridRowStart = SLIDER_ROWS_COUNT / 2 - features.length

  const handleSlideChange = (index: number) => {
    setActiveSlide(index)
  }

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (activeSlide + direction < 0) {
      slideNumber = features.length - 1
    } else {
      slideNumber = (activeSlide + direction) % features.length
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
    <CustomSection>
      <ContentWrapper>
        <List onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <StyledTitle as="h3">{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          {features.map((item, idx) => (
            <React.Fragment key={`slider-item-${idx}`}>
              <ListItem
                active={idx === activeSlide}
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
                    <ListItemContentTitle>
                      {item.title} <ArrowIcon />
                    </ListItemContentTitle>
                    <ListItemContentDetails
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: idx === activeSlide ? 1 : 0,
                        height: idx === activeSlide ? 'auto' : '0',
                      }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.text}
                      {item.link && (
                        <ListItemContentButton
                          label="Learn more"
                          as="anchor"
                          variant="default"
                          to={item.link}
                          size="xsmall"
                        />
                      )}
                    </ListItemContentDetails>
                  </ListItemContent>
                </ListItemToggle>
              </ListItem>
              <ListItemSlide
                initial={{ opacity: 0 }}
                animate={{
                  opacity: idx === activeSlide ? 1 : 0,
                  height: matches ? '100%' : idx === activeSlide ? '100%' : '0',
                }}
                exit={{ opacity: 0 }}
                style={{
                  pointerEvents: idx === activeSlide ? 'all' : 'none',
                }}
              >
                <StyledImageWrapper bgShape imageFullWidth>
                  {item.image}
                </StyledImageWrapper>
              </ListItemSlide>
            </React.Fragment>
          ))}
          {children}
        </List>
      </ContentWrapper>
    </CustomSection>
  )
}

export default FeaturesSlider
