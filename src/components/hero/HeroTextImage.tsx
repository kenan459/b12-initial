import React from 'react'
import Title from '../../components/title/Title'
import Subtitle from '../subtitle/Subtitle'
import { Button } from '../button/Button'

import {
  Wrapper,
  Content,
  Header,
  StyledLinkWithIcon,
  Images,
  ImageLaptopWrapper,
  SecondaryImageWrapper,
  StyledShapeFilled,
  StyledShapeOutline,
} from './HeroTextImage.styles'

type Props = {
  padding?: 'sm' | 'md' | 'lg'
  paddingTop?: string
  paddingBottom?: string
  eyebrow?: React.ReactNode
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  titleVariant?: 'h1' | 'h2' | 'h3'
  text?: string | React.ReactNode
  ctaText?: string
  ctaUrl?: string
  ctaAsButton?: boolean
  ctaNoMargin?: boolean
  cta?: React.ReactNode
  image: React.ReactNode
  imageDefaultSize?: boolean
  imageBorderRadius?: boolean
  noImageTransform?: boolean
  children?: React.ReactNode
  secondaryImage?: React.ReactNode
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  transition: { delay: 1 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const HeroTextImage = ({
  padding = 'md',
  paddingTop = '',
  paddingBottom = '',
  title = '',
  titleVariant = 'h1',
  eyebrow = null,
  logo = null,
  subtitle = '',
  text = '',
  ctaText = '',
  ctaUrl = '',
  ctaAsButton = false,
  ctaNoMargin = false,
  cta = null,
  image,
  secondaryImage = null,
  imageDefaultSize,
  imageBorderRadius,
  noImageTransform = false,
  children,
}: Props) => {
  return (
    <Wrapper padding={padding} paddingBottom={paddingBottom} paddingTop={paddingTop}>
      <Content>
        <Header>
          {logo && logo}
          {eyebrow && eyebrow}
          <Title as="h1" textStyle={titleVariant}>
            {title}
          </Title>
          {subtitle && <Subtitle as="h2">{subtitle}</Subtitle>}
          {text && React.isValidElement(text) && <>{text}</>}
          {text && typeof text === 'string' && <p>{text}</p>}
          {cta ? (
            <>{cta}</>
          ) : (
            <>
              {ctaAsButton ? (
                <Button variant="primary" label={ctaText} as="anchor" to={ctaUrl} target="_blank" />
              ) : (
                <StyledLinkWithIcon href={ctaUrl} label={ctaText} ctaNoMargin={ctaNoMargin} />
              )}
            </>
          )}
          {children}
        </Header>

        <Images>
          <ImageLaptopWrapper
            imageDefaultSize={imageDefaultSize}
            imageBorderRadius={imageBorderRadius}
            noImageTransform={noImageTransform}
            {...motionProps}
          >
            {image}
          </ImageLaptopWrapper>
          {secondaryImage && <SecondaryImageWrapper>{secondaryImage}</SecondaryImageWrapper>}
        </Images>
      </Content>
      <StyledShapeOutline />
      <StyledShapeFilled />
    </Wrapper>
  )
}

export default HeroTextImage
