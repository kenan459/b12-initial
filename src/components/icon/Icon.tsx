import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq, theme } from '../../assets/theme'

// Types
type Props = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  light?: boolean
  children: React.ReactNode
  iconMotion?: {
    initial?: object
    transition?: object
    whileInView?: object
    viewport?: object
  }
}

const StyledIcon = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'light',
})<Props>`
  ${(props) => props.size === 'sm' && 'width: 36px; height: 36px;'}
  ${(props) => props.size === 'md' && 'width: 56px; height: 56px;'}
  ${(props) => props.size === 'lg' && 'width: 75px; height: 75px;'}
  ${(props) => props.size === 'xl' && 'width: 100px; height: 100px;'}
  border-radius: 50%;
  flex-shrink: 0;
  display: grid;
  place-content: center;
  padding: 10px;
  color: ${theme.colors.brand.accent};
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  font-family: ${theme.typography.heading};

  > svg {
    width: 100%;
    height: 100%;
  }

  ${mq['sm']} {
    ${(props) => props.size === 'sm' && 'width: 48px; height: 48px;'}
    ${(props) => props.size === 'md' && 'width: 60px; height: 60px;'}
    ${(props) => props.size === 'lg' && 'width: 75px; height: 75px;'}
    padding: 14px;
  }

  background-color: ${(props) =>
    props.light ? theme.colors.surface.default : theme.colors.brand.accentLightest};
`

const Icon = ({ className = '', light = false, size = 'sm', children, iconMotion = {} }: Props) => (
  <StyledIcon className={className} {...iconMotion} light={light} size={size}>
    {children}
  </StyledIcon>
)

export default Icon
