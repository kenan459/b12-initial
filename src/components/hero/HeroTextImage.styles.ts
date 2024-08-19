import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'
import { mq, theme } from '../../assets/theme'
import { motion } from 'framer-motion'

import SectionNext from '../section-next/SectionNext'
import LinkWithIcon from '../link-with-icon/LinkWithIcon'

import ShapeFilled from './images/shape-filled.inline.svg'
import ShapeOutline from './images/shape-outline.inline.svg'

export const Wrapper = styled(SectionNext)<{
  padding?: 'sm' | 'md' | 'lg'
  paddingTop?: string
  paddingBottom?: string
}>`
  overflow: hidden;
  background: ${theme.colors.brand.accentLightest};
  padding: ${theme.spacing.section.xxxsmall} 0;

  ${mq['md']} {
    ${(props) => props.padding === 'sm' && `padding: ${theme.spacing.section.xxsmall} 0`};
    ${(props) => props.padding === 'md' && `padding: ${theme.spacing.section.small} 0`};
    ${(props) => props.padding === 'lg' && `padding: ${theme.spacing.section.xlarge} 0`};
    ${(props) =>
      props.paddingTop &&
      `padding-top: ${props.paddingTop};`} // will override the padding settings above, used for stacked sections
    ${(props) =>
      props.paddingBottom &&
      `padding-bottom: ${props.paddingBottom};`} // will override the padding settings above, used for stacked sections
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mq['md']} {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`

export const Header = styled.div`
  text-align: center;
  align-items: center;
  position: relative;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 16px;

  h1,
  h2,
  h3 {
    text-align: center;
  }

  ${mq['md']} {
    text-align: left;
    justify-items: flex-start;
    width: 50%;
    gap: 20px;

    h1,
    h2,
    h3 {
      text-align: left;
    }

    p {
      margin: 0;

      + p {
        // Adds margins in case of multiple paragraphs
        margin-top: 12px;

        ${mq['lg']} {
          margin-top: 16px;
        }
      }
    }
  }
`

export const StyledLinkWithIcon = styled(LinkWithIcon)<{ ctaNoMargin?: boolean }>`
  margin-top: 10px;
  margin-inline: auto;

  ${mq['md']} {
    margin-top: ${(props) => (props.ctaNoMargin ? 0 : '24px')};
    margin-left: 0;
  }
`

export const Images = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  margin-top: ${theme.spacing.section.xxxsmall};
  margin-inline: auto;

  .hero-image-desktop,
  .hero-image-desktop-secondary,
  .hero-image-tablet-secondary {
    display: none;
  }

  ${mq['sm']} {
    .hero-image-mobile,
    .hero-image-mobile-secondary {
      display: none;
    }

    .hero-image-desktop,
    .hero-image-tablet-secondary {
      display: block;
    }
  }

  ${mq['md']} {
    width: 45%;
    transform: translateX(10%);
    margin-block: -40px;
    max-width: 500px;
  }

  ${mq['lg']} {
    .hero-image-tablet-secondary {
      display: none;
    }

    .hero-image-desktop-secondary {
      display: block;
    }
  }
`

export const SecondaryImageWrapper = styled(motion.div)`
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);

  ${mq['md']} {
    left: -50px;
  }
`

export const ImageLaptopWrapper = styled(motion.div, {
  shouldForwardProp: isPropValid,
})<{
  imageDefaultSize?: boolean
  imageBorderRadius?: boolean
  noImageTransform?: boolean
}>`
  width: 100%;
  text-align: center;

  ${mq['md']} {
    width: ${(props) => (props.imageDefaultSize ? '100%' : '150%')};
    ${(props) =>
      !props.imageDefaultSize &&
      !props.noImageTransform &&
      `
      transform: translateX(10%);
    `}
  }

  ${(props) =>
    props.imageBorderRadius &&
    `
      img {
        border-radius: 16px;
      }
  `}
`
const shapeBaseStyles = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: -130px;
  right: -40px;

  ${mq['md']} {
    width: auto;
    bottom: 50%;
    right: -550px;
    transform: translateY(50%);
  }
`

export const StyledShapeFilled = styled(ShapeFilled)`
  ${shapeBaseStyles}
`

export const StyledShapeOutline = styled(ShapeOutline)`
  ${shapeBaseStyles}
  right: -60px;

  ${mq['md']} {
    right: -700px;
  }
`
