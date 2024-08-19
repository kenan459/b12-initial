import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import { SectionEyebrowProps } from './types'

const SectionEyebrow = styled.div<SectionEyebrowProps>`
  text-align: ${(props) => (props.alignMobile ? props.alignMobile : 'center')};
  text-transform: uppercase;
  color: ${(props) => (props.color ? props.color : theme.palette.gray.default)};

  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 2px;

  ${mq['lg']} {
    text-align: ${(props) => (props.align ? props.align : 'center')};
    width: ${(props) => (props.width ? `${props.width}%` : `66%`)};
  }
`

export default SectionEyebrow
