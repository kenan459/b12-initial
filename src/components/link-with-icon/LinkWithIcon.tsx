import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { Link } from 'gatsby'
import isPropValid from '@emotion/is-prop-valid'

import IconArrowCircle from '../../images/icons/icon-arrow-circle-right.inline.svg'

// Types
type Props = {
  label: string
  href: string
  color?: string
  as?: 'anchor' | 'link'
  target?: '_self' | '_blank'
  className?: string
}

// Styles
const StyledLink = styled('a', {
  shouldForwardProp: isPropValid,
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : theme.colors.brand.accent)};
  text-decoration: none;

  ${mq['md']} {
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;

    svg {
      transform: translateX(4px);
    }
  }

  svg {
    flex-shrink: 0;
    transition: all 0.15s ease-in;

    path,
    rect {
      ${(props) => (props.color ? `stroke: ${props.color}` : '')};
    }
  }
`

const GatsbyLink = StyledLink.withComponent(Link)

/** Renders as `a` tag. Provide href for proper use */
const LinkWithIcon = ({
  label,
  href,
  color,
  as = 'anchor',
  target = '_self',
  className,
}: Props) => {
  if (as === 'anchor') {
    return (
      <StyledLink color={color} href={href} target={target} className={className}>
        {label}
        <IconArrowCircle />
      </StyledLink>
    )
  }

  return (
    <GatsbyLink color={color} to={href} className={className}>
      {label}
      <IconArrowCircle />
    </GatsbyLink>
  )
}

export default LinkWithIcon
