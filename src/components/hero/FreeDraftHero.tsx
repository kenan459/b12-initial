import React, { isValidElement } from 'react'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'

// Componenets
import Container from '@components/container/Container'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'

// Images
import HeroBgImage from '@images/purple-section-bg.png'
import B12LogoWhite from '@images/logo-b12-white.inline.svg'

// Types
type FreeDraftHeroProps = {
  title: string
  subtitle?: string
  description?: string
  cta_url?: string
  cta_text?: string
  cta?: React.ReactNode
  ctaIcon?: React.ReactNode
  note?: string
  image?: React.ReactNode | IGatsbyImageData
}

// Styles
const Wrapper = styled.section`
  padding: 40px 0;
  background-image: url('${HeroBgImage}');
  background-position: 10% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  justify-content: center;

  .gatsby-image-wrapper {
    margin-bottom: -100px;
  }

  + section {
    padding-top: 62px;
  }

  ${mq['md']} {
    padding: 80px 0;

    .gatsby-image-wrapper {
      margin-bottom: -220px;
    }

    + section {
      padding-top: 120px;
    }
  }

  ${mq['lg']} {
    padding: 120px 0 80px 0;

    .gatsby-image-wrapper {
      margin-bottom: -260px;
    }

    + section {
      padding-top: 150px;
    }
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const StyledText = styled(Text)`
  color: ${theme.colors.text.light};
`

const FreeDraftHero = ({
  title,
  subtitle,
  description,
  cta_url,
  cta_text,
  note,
  image,
  cta = null,
  ctaIcon = null,
}: FreeDraftHeroProps) => {
  return (
    <Wrapper>
      <Container maxWidth="700px">
        <HeroContent>
          <B12LogoWhite />
          <Title light as="h1" align="center">
            {title}
          </Title>
          {subtitle && <Subtitle light>{subtitle}</Subtitle>}
          {description && <Text light>{description}</Text>}
          {cta ? (
            <>{cta}</>
          ) : (
            cta_url &&
            cta_text && (
              <ButtonWrapper>
                <Button
                  as="anchor"
                  to={cta_url}
                  variant="primary"
                  label={cta_text}
                  icon={ctaIcon}
                />
                <StyledText align="center" small>
                  {note}
                </StyledText>
              </ButtonWrapper>
            )
          )}
        </HeroContent>
        {image && (
          <>
            {isValidElement(image) ? (
              image
            ) : (
              <GatsbyImage
                image={getImage(image?.childImageSharp?.gatsbyImageData) as IGatsbyImageData}
                alt={title}
              />
            )}
          </>
        )}
      </Container>
    </Wrapper>
  )
}

export default FreeDraftHero
