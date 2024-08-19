import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

import { SectionContentProps } from './types'

const SectionContent = styled.div<SectionContentProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;

  > *:last-child {
    margin-bottom: 0;
  }

  ${mq['md']} {
    text-align: center;
  }

  ${mq['lg']} {
    text-align: ${(props) => (props.align ? props.align : 'left')};

    > p {
      text-align: ${(props) => (props.align ? props.align : 'left')};
    }
  }
`

export default SectionContent
