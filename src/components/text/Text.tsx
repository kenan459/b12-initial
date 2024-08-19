import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

// Types
type Props = {
  small?: boolean
  light?: boolean
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
  className?: string
}

// Styles
const StyledP = styled.p<Props>`
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.regular)};

  ${mq['sm']} {
    font-size: ${(props) => (props.small ? '16px' : '18px')};
    line-height: ${(props) => (props.small ? '25px' : '30px')};
    text-align: ${(props) => props.align};

    a {
      font-size: ${(props) => (props.small ? '16px' : '18px')};
      line-height: ${(props) => (props.small ? '25px' : '30px')};
    }
  }
`

const Text = ({
  small = false,
  children = null,
  light = false,
  align = 'left',
  className = '',
}: Props) => (
  <StyledP light={light} small={small} align={align} className={className}>
    {children}
  </StyledP>
)

export default Text
