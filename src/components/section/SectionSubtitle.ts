import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import { SectionSubtitleProps } from './types'

const SectionSubtitle = styled.div<SectionSubtitleProps>`
  text-align: ${(props) => (props.alignMobile ? props.alignMobile : 'center')};

  p {
    margin: 0;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) =>
      props.color ? props.color : theme.palette.gray.default};

    + p {
      margin-top: 15px;
    }

    ${mq['md']} {
      font-size: 22px;
      line-height: 35px;
    }
  }

  ${mq['lg']} {
    text-align: ${(props) => (props.align ? props.align : 'center')};
    width: ${(props) => (props.width ? `${props.width}%` : `66%`)};
  }
`

export default SectionSubtitle
