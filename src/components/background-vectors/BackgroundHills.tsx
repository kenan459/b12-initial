import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'
import { vectorStyles } from './styles'

import VectorOutline from './images/vector-hill-lined.inline.svg'
import VectorFilled from './images/vector-hill-filled.inline.svg'

const StyledVectorFilled = styled(VectorFilled)`
  ${vectorStyles}
  top: 126px;
  opacity: 0.2;
  transform: translateX(-55%);
  z-index: 2;
`

const StyledVectorOutline = styled(VectorOutline)`
  ${vectorStyles}
  top: 210px;

  ${mq['md']} {
    top: 163px;
    opacity: 0.2;
    transform: translateX(-53%);
  }
`
const BackgroundHills = () => {
  return (
    <>
      <StyledVectorOutline />
      <StyledVectorFilled />
    </>
  )
}

export default BackgroundHills
