import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

import { CONTAINER_WIDTH } from './constants'

import { ContainerProps } from './types'

const Container = styled.div<ContainerProps>`
  max-width: ${(props) => props.maxWidth || `${CONTAINER_WIDTH}px`};
  width: 100%;
  margin: 0 auto;
  display: grid;
  padding: 0 15px;
  position: relative;
  z-index: 10;
  align-items: ${(props) => props.verticalAlign || 'flex-start'};

  ${(props) =>
    props.split &&
    `
      grid-template-columns: 1fr;
      gap: ${theme.spacing.section.xxxsmall};

      ${mq['md']} {
        gap: 40px;
      }
    `}

  ${(props) =>
    props.split === '1/3' &&
    `
     ${mq['md']} {
       grid-template-columns: 30% 1fr;
     }
   `}

  ${(props) =>
    props.split === 'half' &&
    `
     ${mq['md']} {
       grid-template-columns: 1fr 1fr;
     }
   `}
`

export default Container
