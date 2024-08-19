import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

// Types
type Props = {
  className?: string
  light?: boolean
  small?: boolean
  children: React.ReactNode
}

const Subtitle = styled.p<Props>`
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  margin: 0;

  ${mq['sm']} {
    font-size: ${(props) => (props.small ? '18px' : '24px')};
    line-height: ${(props) => (props.small ? '30px' : '36px')};
  }

  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.regular)};
`

export default Subtitle
