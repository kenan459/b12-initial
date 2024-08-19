import styled from '@emotion/styled'
import { mq } from '@styles/theme'

import { Props } from './types'

export const GridWrapper = styled.div<Props>`
  width: 100%;
  display: grid;
  gap: ${(props) => props.gapXs};
  grid-template-columns: repeat(${(props) => props.colsXs}, 1fr);

  ${(props) =>
    `${mq['xs']} {
      grid-template-columns: repeat(${props.colsXs}, 1fr);
      gap: ${props.gapXs};
    }`}

  ${(props) =>
    `${mq['sm']} {
      grid-template-columns: repeat(${props.colsSm}, 1fr);
      gap: ${props.gapSm};
    }`}

  ${(props) =>
    `${mq['md']} {
      grid-template-columns: repeat(${props.colsMd}, 1fr);
      gap: ${props.gapMd};
    }`}

  ${(props) =>
    `${mq['lg']} {
      grid-template-columns: repeat(${props.colsLg}, 1fr);
      gap: ${props.gapLg};
     }`}

  ${(props) =>
    `${mq['xl']} {
      grid-template-columns: repeat(${props.colsXl}, 1fr);
      gap: ${props.gapXl};
     }`}
`
