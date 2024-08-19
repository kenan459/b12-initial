import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'
import { useTranslation } from 'react-i18next'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'

import { CONTAINER_WIDTH } from '../../components/container/constants'

// Types
type Props = {
  title: string | React.ReactNode
  subtitle?: string
  headerBottomMargin?: 'none' | 'sm' | 'md'
  reversed?: boolean
  image: React.ReactNode
  children: React.ReactNode
  bgShape?: boolean
  bgShapeFromTop?: boolean
  bgShapeColor?: string
  imageFullWidth?: boolean
  imageNoMargin?: boolean
  bg?: string
  className?: string
  id?: string
}

// Styles
const CustomSection = styled.section<{ reversed?: boolean; bg?: string }>`
  padding-top: 48px;
  padding-bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.bg ? props.bg : 'transparent')};

  ${mq['md']} {
    padding-top: 128px;
    padding-bottom: 128px;
    flex-direction: ${(props) => (props.reversed ? `row-reverse` : 'row')};
  }
`

const ContentWrapper = styled.div<{ reversed?: boolean }>`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;

  ${mq['md']} {
    justify-content: ${(props) => (props.reversed ? `flex-start` : 'flex-end')};
    width: 50%;
    padding-right: 0;
  }
`

const Content = styled.div`
  padding-bottom: 40px;

  ${mq['md']} {
    max-width: calc(${CONTAINER_WIDTH / 2}px - 15px);
    width: 100%;
    padding-block: 40px;
    order: 1;
  }
`

export const ImageWrapper = styled.div<{
  bgShape?: boolean
  bgShapeFromTop?: boolean
  bgShapeColor?: string
  imageFullWidth?: boolean
  imageNoMargin?: boolean
  reversed?: boolean
}>`
  display: flex;
  position: relative;
  align-items: center;
  ${(props) => props.reversed && `order: 0`};

  .split-image-desktop {
    display: none;

    ${mq['md']} {
      display: block;
    }
  }

  .split-image-mobile {
    display: block;
    margin-inline: auto;

    ${mq['md']} {
      display: none !important;
    }
  }

  ${mq['md']} {
    width: 50%;
    justify-content: ${(props) => (props.reversed ? `flex-start` : 'flex-end')};

    .gatsby-image-wrapper {
      display: block;
      ${(props) =>
        props.reversed
          ? `margin-left: ${props.imageNoMargin ? '-5%' : '-20%'}`
          : `margin-right: ${props.imageNoMargin ? '-5%' : '-20%'}`};
    }
  }

  ${(props) =>
    props.bgShape &&
    `
    &::before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      background: ${props.bgShapeColor || theme.colors.brand.accentLightest};
      ${props.reversed ? `right: 25%; left: 0;` : 'left: 25%; right: 0;'}
      border-radius: ${props.reversed ? `0 36px 128px 0;` : '36px 0 0 128px;'}

      ${mq['md']} {
        top: ${props.bgShapeFromTop ? `-164px` : 0};
      }
    }
  `}

  ${(props) =>
    props.imageFullWidth &&
    `
    .gatsby-image-wrapper {
      width: 100%;
      position: static;
      transform: translateY(0);
      margin-right: 0;
    }

    ${mq['md']} {
      .gatsby-image-wrapper {
        width: 90%;
        height: 100%;
        border-radius: 16px 0 0 16px;

        ${
          props.reversed &&
          `
          margin-left: 0;
          border-radius: 0 16px 16px 0;
        `
        }
      }
    }
  `}

  ${(props) =>
    props.imageFullWidth &&
    props.bgShape &&
    `
      ${mq['md']} {
        .gatsby-image-wrapper {
          height: 80%;
          border-radius: ${props.reversed ? `0 36px 128px 0;` : '36px 0 0 128px;'}
        }
      }
  `}
`

const SplitTextLarge = ({
  title = '',
  subtitle = '',
  headerBottomMargin,
  reversed,
  image = null,
  children = null,
  bgShape = false,
  bgShapeFromTop = false,
  bgShapeColor,
  imageFullWidth = false,
  imageNoMargin = false,
  bg,
  id,
  className,
}: Props) => {
  const { t } = useTranslation()

  return (
    <CustomSection reversed={reversed} bg={bg} className={className} id={id}>
      <ContentWrapper reversed={reversed}>
        <Content>
          <SectionNextHeader bottomMargin={headerBottomMargin}>
            {title && React.isValidElement(title) && <>{title}</>}
            {title && typeof title === 'string' && <Title textStyle="h3">{t(title)}</Title>}
            {subtitle && <Subtitle>{t(subtitle)}</Subtitle>}
          </SectionNextHeader>
          {children}
        </Content>
      </ContentWrapper>
      <ImageWrapper
        bgShape={bgShape}
        bgShapeFromTop={bgShapeFromTop}
        bgShapeColor={bgShapeColor}
        imageFullWidth={imageFullWidth}
        reversed={reversed}
        imageNoMargin={imageNoMargin}
      >
        {image}
      </ImageWrapper>
    </CustomSection>
  )
}

export default SplitTextLarge
