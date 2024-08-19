import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme, mq } from '../../assets/theme'

import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import { Button } from '../../components/button/Button'

// Images
import VectorOutline from './images/vector-outline.inline.svg'
import VectorFilled from './images/vector-filled.inline.svg'

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  background: ${theme.colors.brand.accentLightest};
  padding: 56px 0 0; // based on design. shit.

  ${mq['md']} {
    padding: 72px 0 0; // based on design. shit.
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledSectionNextHeader = styled(SectionNextHeader)`
  margin-bottom: 40px;

  ${mq['md']} {
    margin-bottom: 56px;
  }
`

export const StyledButton = styled(Button)`
  margin: 32px 0;
  align-self: center;
`

const vectorStyles = css`
  position: absolute;
  z-index: 1;
  top: 280px;
  width: 200%;
  left: 50%;
  transform: translateX(-50%);

  ${mq['md']} {
    top: 150px;
    transform: translateX(-46%);
  }
`

export const StyledVectorFilled = styled(VectorFilled)`
  ${vectorStyles}
  z-index: 2;
`

export const StyledVectorOutline = styled(VectorOutline)`
  ${vectorStyles}
  top: 210px;

  ${mq['md']} {
    top: 50px;
  }
`
