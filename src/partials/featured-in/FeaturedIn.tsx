import React from 'react'
import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { motion } from 'framer-motion'

// Components
import WebsitesCreatedBadge from '@components/websites-created-badge/WebsitesCreatedBadge'

// Images
import VentureBeat from './images/venture-beat.inline.svg'
import WallStreetJournal from './images/wall-street-journal.inline.svg'
import FastCompany from './images/fast-company.inline.svg'
import OReilly from './images/oreilly.inline.svg'
import TechCrunch from './images/techcrunch.inline.svg'

const logoAnimationVarians = {
  animate: {
    x: [0, -1400], // this number is a calculation of logo width (200px) + gap (80px) * logo items count (5 unique items)
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
}

// Styles
const Wrapper = styled.section`
  padding-block: ${theme.spacing.section.xxxsmall};
  position: relative;
  z-index: 10;
  overflow: hidden;

  ${mq['sm']} {
    padding-block: ${theme.spacing.section.medium};
  }
`

const Title = styled.div`
  font-family: ${theme.typography.heading};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 2px;
  width: 100%;
  color: ${theme.colors.text.regular};
  text-align: center;
  display: inline-block;
  margin: 0 0 32px;

  ${mq['sm']} {
    margin: 0 0 44px;
  }
`

const imagesBaseStyles = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 40px;
  cursor: drag;
  margin-inline: auto;

  &::-webkit-scrollbar {
    opacity: 0;
  }

  svg {
    width: 100%;
    min-width: 200px;
    max-width: 200px;
    max-height: 30px;
  }

  ${mq['lg']} {
    cursor: default;
    justify-content: space-between;
  }
`

const Images = styled.div`
  ${imagesBaseStyles}
  overflow-x: auto;
  padding-inline: 20px;

  ${mq['lg']} {
    padding-inline: 120px;
  }
`

const AnimatedImages = styled(motion.div)`
  ${imagesBaseStyles}

  ${mq['lg']} {
    gap: 80px;
  }
`

const MarqueeWrapper = styled.div`
  max-width: 1232px;
  overflow-x: hidden;
  margin: 0 auto;
`

const FeaturedInLogos = () => (
  <Images>
    <FastCompany />
    <OReilly />
    <TechCrunch />
    <VentureBeat />
    <WallStreetJournal />
  </Images>
)

const FeaturedInLogosMarquee = () => {
  return (
    <MarqueeWrapper>
      <AnimatedImages variants={logoAnimationVarians} animate="animate">
        <FastCompany />
        <OReilly />
        <TechCrunch />
        <VentureBeat />
        <WallStreetJournal />
        <FastCompany />
        <OReilly />
        <TechCrunch />
        <VentureBeat />
        <WallStreetJournal />
      </AnimatedImages>
    </MarqueeWrapper>
  )
}

export const FeaturedIn = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation()

  return (
    <Wrapper className={className}>
      <Title>{t('As featured in...', { ns: 'common' })}</Title>
      <FeaturedInLogos />
    </Wrapper>
  )
}

export const FeaturedInMarquee = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation()

  return (
    <Wrapper className={className}>
      <Title>{t('As featured in...', { ns: 'common' })}</Title>
      <FeaturedInLogosMarquee />
    </Wrapper>
  )
}

const FeaturedInWithBadgeWrapper = styled.section`
  position: relative;
  z-index: 10;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  ${mq['md']} {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 40px;
  }

  ${Images} {
    gap: 20px;
    flex-wrap: wrap;
    padding: 0;
    justify-content: center;

    svg {
      min-width: 100px;
      max-width: 100px;
      width: auto;
    }

    ${mq['md']} {
      justify-content: flex-start;

      svg {
        min-width: 175px;
        max-width: 175px;
      }
    }

    ${mq['lg']} {
      flex-wrap: nowrap;
      padding-inline: 0;
    }
  }
`

export const FeaturedInWithBadge = ({ className = '' }: { className?: string }) => (
  <FeaturedInWithBadgeWrapper className={className}>
    <WebsitesCreatedBadge />
    <FeaturedInLogos />
  </FeaturedInWithBadgeWrapper>
)

export default FeaturedIn
