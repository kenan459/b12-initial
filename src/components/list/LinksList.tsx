import styled from '@emotion/styled'
import { opacify } from '../../assets/helpers'

import { mq, theme } from '../../assets/theme'

// Images
import ArrowIcon from '../../images/icons/icon-arrow-circle-right.inline.svg'

// Types
type Item = {
  text: string
  url: string
}

type Wrapper = {
  className?: string
}

type Props = {
  className?: string
  items: Item[]
}

// Styles
const Wrapper = styled.div<Wrapper>`
  display: grid;

  ${mq['md']} {
    column-gap: 64px;
    grid-template-columns: 1fr 1fr;
  }
`

const StyledLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.text.white};
  font-weight: 700;
  padding: 18px 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  border-top: 1px solid ${opacify(theme.colors.surface.default, 0.2)};

  &:last-child {
    border-bottom: 1px solid ${opacify(theme.colors.surface.default, 0.2)};
  }

  svg {
    flex-shrink: 0;
  }

  rect {
    fill: ${theme.colors.brand.accent};
  }

  path {
    stroke: ${theme.colors.surface.default};
  }

  &:hover {
    color: ${theme.colors.brand.accentLightMedium};
    text-decoration: none;

    rect {
      fill: ${theme.colors.surface.default};
      stroke: ${theme.colors.surface.default};
    }

    path {
      stroke: ${theme.colors.brand.accent};
    }
  }

  ${mq['md']} {
    font-size: 16px;
    line-height: 30px;
    padding: 20px 0;

    &:nth-last-of-type(-n + 2) {
      border-bottom: 1px solid ${opacify(theme.colors.surface.default, 0.2)};
    }
  }
`

const LinksList = ({ className, items }: Props) => (
  <Wrapper className={className}>
    {items.map((item, idx) => (
      <StyledLink href={item.url} key={`link-item-${idx}`}>
        {item.text} <ArrowIcon />
      </StyledLink>
    ))}
  </Wrapper>
)

export default LinksList
