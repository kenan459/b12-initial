import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import Container from '@components/container/Container'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import { Button } from '@components/button/Button'

import { ToolsSliderSection, ImagesWrapper, ImageRowWrapper } from './ToolsSlider.styles'

const ToolsSlider = ({ lang }) => {
  const { t } = useTranslation(['index'], { lng: lang })
  const scrollY = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  const transform = useTransform(scrollY, [3000, 5500], [0, -1000])
  const physics = { damping: 50, mass: 0.27, stiffness: 400 }
  const spring = useSpring(transform, physics)

  return (
    <ToolsSliderSection>
      <Container maxWidth="900px">
        <SectionNextHeader align="center">
          <Title align="center">{t('Your new site is just the beginning')}</Title>
          <Text align="center">
            {t(
              'B12 is more than an AI website builder, giving you all the tools you need to serve clients and scale your business. From eSignatures to invoicing, one frictionless platform unlocks it all.'
            )}
          </Text>
          <Button
            as="anchor"
            variant="primary"
            to="https://b12.io/signup/"
            label="Start for free"
          />
        </SectionNextHeader>
      </Container>
      <motion.div>
        <ImagesWrapper>
          <ImageRowWrapper style={{ x: spring }}>
            <StaticImage
              src="images/Monitor-3.png"
              alt="Contracts and eSignatures"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-1.png"
              alt="B12 Online Scheduling"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-2.png"
              alt="Payments & Invoicing"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-3.png"
              alt="Contracts and eSignatures"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-1.png"
              alt="B12 Online Scheduling"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-2.png"
              alt="Payments & Invoicing"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-3.png"
              alt="Contracts and eSignatures"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
          </ImageRowWrapper>
          <ImageRowWrapper style={{ x: spring }}>
            <StaticImage
              src="images/Monitor-7.png"
              alt="Client Intake Forms"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-4.png"
              alt="Contact manager"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-5.png"
              alt="Email Marketing"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-6.png"
              alt="B12 website editor"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-7.png"
              alt="Client Intake Forms"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-4.png"
              alt="Contact manager"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-5.png"
              alt="Email Marketing"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
            <StaticImage
              src="images/Monitor-6.png"
              alt="B12 website editor"
              placeholder="blurred"
              width={435}
              style={{ borderRadius: '12px' }}
            />
          </ImageRowWrapper>
        </ImagesWrapper>
      </motion.div>
    </ToolsSliderSection>
  )
}

export default ToolsSlider
