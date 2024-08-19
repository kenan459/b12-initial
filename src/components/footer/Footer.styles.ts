import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

import Container from '../container/Container'

export const Wrapper = styled.footer`
  padding: 60px 0 30px;

  ${mq['md']} {
    padding: 120px 0 30px;
  }
`
export const WrapperSimple = styled.footer`
  padding: 40px 0;
`

export const ContainerStyled = styled(Container)`
  ${mq['sm']} {
    width: 80%;
    margin: 0 auto;
  }

  ${mq['md']} {
    gap: 120px;
  }

  ${mq['lg']} {
    width: 100%;
  }
`
