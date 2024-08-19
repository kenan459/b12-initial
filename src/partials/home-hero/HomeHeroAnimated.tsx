import React from 'react'
import { Button } from '@components/button/Button'
import { useTranslation } from 'react-i18next'

// import LaptopVideoAnimation from './laptop-video-animation'
import LaptopVideoAnimationVariant from './laptop-video-animation/variant'
import HeroShapeAnimated from './AnimatedLineShape'
import HeroFilledShapeAnimated from './AnimatedFilledShape'

import {
  StyledSection,
  Content,
  Header,
  Eyebrow,
  StyledTitle,
  SubTitle,
  ButtonWrapper,
  ButtonNote,
  StyledShapeFilled,
  StyledShapeOutline,
} from './HomeHero.styles'

export type HeroImageProps = {
  loading: 'eager' | 'lazy'
  quality: number
  placeholder: 'none' | 'blurred'
}

const HomeHeroAnimated = () => {
  const { t } = useTranslation()

  return (
    <StyledSection>
      <Content>
        <Header>
          <Eyebrow as="h1" light>
            {t('B12 website builder')}
          </Eyebrow>
          <StyledTitle as="h1" light>
            {t('Create a professional AI website instantly')}
          </StyledTitle>
          <SubTitle>
            {t(
              'B12 is the easiest AI website builder to help you attract, win, and serve clients online.'
            )}
          </SubTitle>
          <ButtonWrapper>
            <Button
              label={t('Start for free', { ns: 'common' })}
              to="https://b12.io/signup"
              variant="primary"
              as="anchor"
            />
            <ButtonNote>{t('No credit card required', { ns: 'common' })}</ButtonNote>
          </ButtonWrapper>
        </Header>
        <LaptopVideoAnimationVariant />
      </Content>
      <HeroShapeAnimated />
      <HeroFilledShapeAnimated />
    </StyledSection>
  )
}

export default HomeHeroAnimated
