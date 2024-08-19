import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

// Type
type Props = {
  align?: 'left' | 'center' | 'right'
  bottomMargin?: 'none' | 'sm' | 'md'
  maxWidth?: string
  className?: string
}

// Styles
const SectionNextHeader = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
  gap: 16px;
  text-align: ${(props) => (props.align ? props.align : 'left')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  justify-self: ${(props) => (props.align ? props.align : 'flex-start')};
  ${(props) => props.bottomMargin === 'none' && `margin-bottom: 0;`}
  ${(props) => props.bottomMargin === 'sm' && `margin-bottom: 10px;`}
  ${(props) => props.bottomMargin === 'md' && `margin-bottom: 16px;`}
  ${(props) => !props.bottomMargin && `margin-bottom: ${theme.spacing.section.smallest};`}

  > *:last-of-type {
    margin-bottom: 0;
  }

  ${mq['md']} {
    max-width: ${(props) => props.maxWidth || '100%'};
    ${(props) => props.bottomMargin === 'none' && `margin-bottom: 0;`}
    ${(props) => props.bottomMargin === 'sm' && `margin-bottom: ${theme.spacing.section.smallest};`}
    ${(props) => props.bottomMargin === 'md' && `margin-bottom: ${theme.spacing.section.xxxsmall};`}
    ${(props) => !props.bottomMargin && `margin-bottom: ${theme.spacing.section.small};`}
  }
`

export default SectionNextHeader
