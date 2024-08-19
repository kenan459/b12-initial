import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import { SectionActionsProps } from './types'

const SectionActions = styled.div<SectionActionsProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${theme.spacing.gutter};
  align-items: center;
  justify-content: ${(props) => (props.alignMobile ? props.alignMobile : 'center')};

  ${(props) => props.marginTop === 'lg' && `margin-top: 30px;`}

  ${mq['sm']} {
    flex-direction: row;
    flex-wrap: no-wrap;
  }

  ${mq['lg']} {
    align-items: center;
    justify-content: ${(props) => (props.align ? props.align : 'flex-start')};

    ${(props) => props.marginTop === 'lg' && `margin-top: 60px;`}
  }
`

export default SectionActions
