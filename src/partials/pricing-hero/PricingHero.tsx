import React, { useState } from 'react'

// Components
import Container from '../../components/container/Container'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import PricingCards from './PricingCards'
import PricingCardStarter from './PricingCardStarter'
import PricingFeatures from './PricingFeatures'

// Styles
import {
  Wrapper,
  ButtonWrapper,
  StyledSectionNextHeader,
  StyledVectorOutline,
  StyledVectorFilled,
  StyledButton,
} from './PricingHero.styles'

const PricingHero = () => {
  const [featuresVisible, setFeaturesVisible] = useState(false)

  const toggleFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setFeaturesVisible(!featuresVisible)
  }

  return (
    <>
      <Wrapper>
        <Container>
          <StyledSectionNextHeader align="center" maxWidth="70%">
            <Title as="h1" align="center">
              Simple, straightforward, pricing for every stage of business
            </Title>
            <Subtitle small>
              Join over 150,000 businesses who have built a website with B12
            </Subtitle>
          </StyledSectionNextHeader>

          <PricingCards />

          {/* Has to be inside Wrapper because of the shadows on pricing cards */}
          {/* <ButtonWrapper>
            <StyledButton
              aria-pressed={featuresVisible}
              size="xsmall"
              as="anchor"
              variant="primary"
              label="Show plan features"
              to="#toggle-features"
              onClick={(e) => toggleFeatures(e)}
            />
          </ButtonWrapper> */}
        </Container>

        <StyledVectorOutline />
        <StyledVectorFilled />
      </Wrapper>

      {featuresVisible && <PricingFeatures />}

      {/* <PricingCardStarter /> */}
    </>
  )
}

export default PricingHero
