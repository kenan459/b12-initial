import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

import { SectionHeaderProps } from './types'

const SectionHeader = styled.div<SectionHeaderProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  flex-wrap: no-wrap;
  align-items: ${(props) => (props.alignMobile ? props.alignMobile : 'center')};
  justify-content: center;

  ${mq['lg']} {
    align-items: ${(props) => (props.align ? props.align : 'center')};
    justify-content: center;
  }
`

export default SectionHeader
