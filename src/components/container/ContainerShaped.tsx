import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import Container from './Container'
import { ContainerShapedProps } from './types'

const Shape = styled.div<ContainerShapedProps>`
  background: ${(props) => props.bg || theme.colors.brand.accentLightest};
  border-radius: 16px 80px;
  padding: 48px 32px;
  display: grid;
  align-items: ${(props) => props.verticalAlign || 'flex-start'};

  ${mq['md']} {
    border-radius: 36px 128px;
    padding: 64px 66px;
  }

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

const ContainerShaped = ({ className, children, ...args }: ContainerShapedProps) => (
  <Container className={className} maxWidth={args.maxWidth}>
    <Shape split={args.split} verticalAlign={args.verticalAlign} bg={args.bg}>
      {children}
    </Shape>
  </Container>
)

export default ContainerShaped
