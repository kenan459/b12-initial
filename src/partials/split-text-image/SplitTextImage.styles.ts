import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

import { SectionContent } from '../../components/section'

import { WrapperProps } from './types'

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverseOrderMobile ? 'column-reverse' : 'column')};
  align-items: center;
  gap: 30px;

  ${mq['lg']} {
    flex-direction: ${(props) => (props.reverseOrder ? 'row-reverse' : 'row')};
    gap: 60px;
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 10;

  ${mq['lg']} {
    width: 50%;
  }
`

export const Content = styled(SectionContent)`
  width: 100%;
  gap: 20px;
  align-items: center;
  text-align: center;

  ${mq['lg']} {
    width: 50%;
    align-items: flex-start;
    text-align: left;
  }
`
