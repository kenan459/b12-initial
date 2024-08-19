import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

// Images
import sectionGradientSvgBottomLeft from './images/section-gradient-left.svg'
import sectionGradientSvgBottomRight from './images/section-gradient-right.svg'
import sectionGradientSvgTopLeft from './images/section-gradient-left-flipped.svg'
import sectionGradientSvgTopRight from './images/section-gradient-right-flipped.svg'
import sectionGradientSvgTop from './images/section-gradient-top.svg'

import { SectionProps } from './types'

const gradientTopCss = css`
  background-image: linear-gradient(-180deg, #f3f2f4 6%, #fff 100%);
`
const gradientSvgBottomLeftCss = css`
  background-image: url(${sectionGradientSvgBottomLeft});
  background-position: left -30px bottom 0;
  background-size: 200% auto;
  padding-bottom: 90px;

  ${mq['md']} {
    background-size: 150% auto;
    background-position: left calc(50% + 220px) bottom 0;
    padding-bottom: 120px;

    // Adjust scroll to next section button
    > button {
      bottom: 0;
    }
  }

  ${mq['lg']} {
    background-size: auto;
    background-position: left calc(50% + 600px) bottom 0;
    padding-bottom: 190px;
  }
`
const gradientSvgBottomRightCss = css`
  background-image: url(${sectionGradientSvgBottomRight});
  background-position: right -30px bottom 0;
  background-size: 200% auto;
  padding-bottom: 90px;

  ${mq['md']} {
    background-size: 150% auto;
    background-position: right calc(50% + 220px) bottom 0;
    padding-bottom: 120px;

    // Adjust scroll to next section button
    > button {
      bottom: 0;
    }
  }

  ${mq['lg']} {
    background-size: auto;
    background-position: right calc(50% + 600px) bottom 0;
    padding-bottom: 190px;
  }
`
const gradientSvgTopLeftCss = css`
  background-size: 200% auto;
  background-image: url(${sectionGradientSvgTopLeft});
  background-position: left -30px top 0;
  padding-top: 90px;

  ${mq['md']} {
    background-size: 150% auto;
    background-position: left calc(50% + 220px) top 0;
    padding-top: 120px;
  }

  ${mq['lg']} {
    background-size: auto;
    background-position: left calc(50% + 600px) top 0;
    padding-top: 190px;
  }
`
const gradientSvgTopRightCss = css`
  background-image: url(${sectionGradientSvgTopRight});
  background-position: right -30px top 0;
  background-size: 200% auto;
  padding-top: 90px;

  ${mq['md']} {
    background-size: 150% auto;
    background-position: right calc(50% + 220px) top 0;
    padding-top: 120px;
  }

  ${mq['lg']} {
    background-size: auto;
    background-position: right calc(50% + 600px) top 0;
    padding-top: 190px;
  }
`
const gradientSvgTop = css`
  background-size: 160% auto;
  background-image: url(${sectionGradientSvgTop});
  background-position: left 50% top 0;
  padding-top: 90px;

  ${mq['md']} {
    background-size: auto auto;
  }
`

export const SectionWrapper = styled.section<SectionProps>`
  position: relative;
  padding: ${(props) => (props.padding === 'md' ? '40px 0' : '60px 0')};

  ${mq['lg']} {
    padding: ${(props) => (props.padding === 'md' ? '80px 0' : '160px 0')};
  }

  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  background-repeat: no-repeat;
  background-size: auto;

  ${(props) => props.gradient && gradientTopCss}
  ${(props) => props.gradientSvg === 'bottom-left' && gradientSvgBottomLeftCss}
  ${(props) => props.gradientSvg === 'bottom-right' && gradientSvgBottomRightCss}
  ${(props) => props.gradientSvg === 'top-left' && gradientSvgTopLeftCss}
  ${(props) => props.gradientSvg === 'top-right' && gradientSvgTopRightCss}
  ${(props) => props.gradientSvg === 'top' && gradientSvgTop}

  ${(props) =>
    props.borderBottom &&
    `
      border-bottom: 1px solid ${theme.palette.gray.light};
    `}
`
