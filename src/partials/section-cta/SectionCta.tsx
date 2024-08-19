import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { mq } from '@styles/theme'
import { useTranslation } from 'react-i18next'
import { useScroll, useTransform } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import { Button } from '@components/button/Button'

// Types
type TSectionCta = {
  title?: string
  text?: string | React.ReactNode
  ctaText?: string
  ctaUrl?: string
  ctaStyle?: 'primary-inverted' | 'primary'
  buttonNoteVisible?: boolean
  buttonNoteText?: string
  cta?: boolean
  ns?: string
  animated?: boolean
}

// Styles
import { SectionStyled, Wrapper, Actions, Image, StyledSpan } from './SectionCta.styles'

const StyledTitle = styled(Title)`
  text-align: center;

  ${mq['md']} {
    text-align: left;
  }
`

const SectionCta = ({
  title = 'The best website builder for professional services',
  text = 'Take the stress out of website building, and in just a few clicks, build a website with all the features you need to better attract, win, and serve your clients online.',
  cta = true,
  ctaText = 'Build my free site today',
  ctaUrl = 'https://b12.io/signup/',
  ctaStyle = 'primary-inverted',
  buttonNoteVisible = true,
  buttonNoteText = 'No credit card required',
  ns = 'common',
  animated = false,
}: TSectionCta) => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const transformY = useTransform(scrollYProgress, [0.8, 1], [0, 100])
  const transformX = useTransform(scrollYProgress, [0.8, 1], [0, 100])

  return (
    <SectionStyled
      directChildren={
        <Image style={animated ? { y: transformY, x: transformX } : {}}>
          <StaticImage
            src="./images/bg-devices.png"
            alt={t('Everything your business needs to thrive', { ns })}
            placeholder="blurred"
            layout="fullWidth"
          />
        </Image>
      }
    >
      <Wrapper>
        <StyledTitle light textStyle="h3">
          {t(title, { ns })}
        </StyledTitle>
        {text && typeof text === 'string' && (
          <Subtitle light small>
            {t(text, { ns })}
          </Subtitle>
        )}
        {text && React.isValidElement(text) && <>{text}</>}
        {cta && (
          <Actions>
            <Button as="anchor" to={ctaUrl} label={t(ctaText, { ns })} variant={ctaStyle} />
            {buttonNoteVisible && <StyledSpan>{t(buttonNoteText, { ns: 'common' })}</StyledSpan>}
          </Actions>
        )}
      </Wrapper>
    </SectionStyled>
  )
}

export default SectionCta
