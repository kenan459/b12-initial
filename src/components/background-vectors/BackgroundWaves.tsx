import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'
import { vectorStyles } from './styles'

import VectorOutline from './images/vector-outline.inline.svg'
import VectorFilled from './images/vector-filled.inline.svg'

const StyledVectorFilled = styled(VectorFilled)`
  ${vectorStyles}
  z-index: 2;
`

const StyledVectorOutline = styled(VectorOutline)`
  ${vectorStyles}
  top: 210px;

  ${mq['md']} {
    top: 50px;
  }
`
const BackgroundWaves = () => {
  return (
    <>
      <StyledVectorOutline />
      <StyledVectorFilled />
    </>
  )
}

export default BackgroundWaves
