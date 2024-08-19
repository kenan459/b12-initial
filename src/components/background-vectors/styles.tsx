import { css } from '@emotion/react'
import { mq } from '../../assets/theme'

export const vectorStyles = css`
  position: absolute;
  z-index: 1;
  top: 280px;
  width: 200%;
  left: 50%;
  transform: translateX(-50%);

  ${mq['md']} {
    top: 150px;
    transform: translateX(-55%);
  }
`
