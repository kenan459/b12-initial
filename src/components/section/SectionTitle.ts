import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import { SectionTitleProps } from './types'

const SectionTitle = styled.h2<SectionTitleProps>`
  font-size: 44px;
  line-height: 50px;
  font-weight: 500;
  margin: 0 auto;
  color: ${(props) => (props.color ? props.color : theme.palette.secondary.default)};
  text-align: center;

  ${mq['md']} {
    font-size: 56px;
    line-height: 70px;
  }

  ${mq['lg']} {
    font-size: 64px;
    line-height: 78px;
    text-align: ${(props) => (props.align ? props.align : 'left')};
    width: ${(props) => (props.width ? `${props.width}%` : `100%`)};
  }

  ${(props) =>
    props.textStyle === 'h2' &&
    `
    font-size: 32px;
    line-height: 40px;

    ${mq['md']} {
      font-size: 42px;
      line-height: 55px;
    }

    ${mq['lg']} {
      font-size: 47px;
      line-height: 60px;
    }
  `}

  ${(props) =>
    props.textStyle === 'h3' &&
    `
    font-size: 26px;
    line-height: 32px;
    font-weight: bold;

    ${mq['md']} {
      font-size: 32px;
      line-height: 40px;
    }
  `}
`

export default SectionTitle
