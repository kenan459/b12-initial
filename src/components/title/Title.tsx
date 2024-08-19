import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, theme } from '../../assets/theme'

// Types
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type Props = {
  className?: string
  light?: boolean
  /** Should be one of 'h1', 'h2', 'h3' or 'h4' or 'h5' */
  as?: Headings
  textStyle?: Headings
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
}

// Styles
const baseStyles = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin: 0;
`

const textStyleH1 = css`
  ${mq['sm']} {
    font-size: 50px;
    line-height: 60px;
  }
`

const textStyleH2 = css`
  ${mq['sm']} {
    font-size: 40px;
    line-height: 52px;
  }
`

const textStyleH3 = css`
  ${mq['sm']} {
    font-size: 32px;
    line-height: 40px;
  }
`

const textStyleH4 = css`
  font-size: 20px;
  line-height: 26px;

  ${mq['sm']} {
    font-size: 22px;
    line-height: 30px;
  }
`

const textStyleH5 = css`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${theme.colors.text.regular};
`

// Heading styles Map
const textStyles = {
  h1: textStyleH1,
  h2: textStyleH2,
  h3: textStyleH3,
  h4: textStyleH4,
  h5: textStyleH5,
}

/**
 * Renders as H2 by default. Use `as` prop to render it as H1/H3
 *
 * Style of the heading can be changed by providing `textStyle` prop. This is useful when you want to render eg. h1 heading but want to visually display it as h2.
 *
 * There is no spacing provided by default.
 */
const Title = styled.h2<Props>`
  ${baseStyles}
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.dark)};
  ${(props) => textStyles[props.textStyle || props.as || 'h2']}
  text-align: ${(props) => props.align || 'left'};
`

// Defaults for styled component
Title.defaultProps = {
  className: '',
  light: false,
  children: null,
}

export default Title
