import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme, mq } from '@styles/theme'

import SectionNext from '@components/section-next/SectionNext'
import ShapeFilled from '@images/shape-filled.inline.svg'
import ShapeOutline from '@images/shape-outline.inline.svg'

type TCtaSectionBannerOptions = {
  children: React.ReactNode
  className?: string
  bg?: 'light' | 'dark'
  id?: string
}

const Cta = styled(SectionNext)<Pick<TCtaSectionBannerOptions, 'bg'>>`
  background: ${({ bg }) =>
    bg === 'light' ? theme.colors.brand.accentLightest : theme.colors.brand.accentDarkest};
  padding: ${theme.spacing.section.smallest} 0;

  ${mq['md']} {
    padding: ${theme.spacing.section.xsmall} 0;
  }
`

const CtaContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  position: relative;
  z-index: 20;

  a {
    margin-top: 22px;
  }
`

const ctaShapeBaseStyles = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: -130px;
  right: -40px;
  opacity: 0.2;

  ${mq['md']} {
    width: auto;
    bottom: 30%;
    transform: translateY(50%);
  }
`

export const CtaShapeFilled = styled(ShapeFilled)<Pick<TCtaSectionBannerOptions, 'bg'>>`
  ${ctaShapeBaseStyles}

  ${({ bg }) => bg === 'light' && `opacity: 0.6;`}
`

export const CtaShapeOutline = styled(ShapeOutline)<Pick<TCtaSectionBannerOptions, 'bg'>>`
  ${ctaShapeBaseStyles}

  ${({ bg }) => bg === 'light' && `opacity: 0.6;`}
  right: -60px;
`

const CtaSectionBanner: React.FC<TCtaSectionBannerOptions> = ({
  children,
  bg = 'dark',
  id = '',
}) => {
  return (
    <Cta bg={bg} id={id}>
      <CtaContent>{children}</CtaContent>
      <CtaShapeOutline bg={bg} />
      <CtaShapeFilled bg={bg} />
    </Cta>
  )
}

export default CtaSectionBanner
