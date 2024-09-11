import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, theme } from '@styles/theme'

import { Section } from '@components/section'
import Title from '@components/title/Title'
import { FeaturedInWithBadge } from '@partials/featured-in/FeaturedIn'


export const StyledSection = styled(Section)`
  overflow: hidden;
  background-image: linear-gradient(
    180deg,
    ${theme.colors.brand.accent} 10.89%,
    ${theme.colors.surface.default} 100%
  );
  padding-top: ${theme.spacing.section.xxsmall};
  padding-bottom: 0;

  ${mq['md']} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${mq['md']} {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  ${mq['lg']} {
    justify-content: flex-start;
  }
`

export const Header = styled.div`
  text-align: center;
  position: relative;
  z-index: 20;

  h1 {
    text-align: center;
  }

  ${mq['md']} {
    text-align: center;
    width: 50%;
    margin: auto;

    h1 {
    }
  }
`

export const Eyebrow = styled(Title)`
  margin: 0 0 4px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${mq['sm']} {
    font-size: 12px;
    line-height: 18px;
  }
`

export const StyledTitle = styled(Title)`
  margin: 0 0 8px;

  ${mq['md']} {
    margin-bottom: 24px;
  }
`

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${theme.colors.text.white};
  margin: 0 auto;
  font-weight: 400;
  text-align: center;

  ${mq['md']} {
    font-size: 24px;
    line-height: 35px;
    width: 90%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 18px;

  ${mq['md']} {
    width: 50%;
    margin: 42px auto;
    flex-direction: row;
    gap: 14px;
  }
`

export const ButtonNote = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.text.white};
`

const shapeBaseStyles = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 20px;

  ${mq['md']} {
    width: auto;
    bottom: -20px;
  }
`

// export const StyledShapeFilled = styled(ShapeFilled)`
//   ${shapeBaseStyles}
//   right: 3%;

//   ${mq['md']} {
//     right: 50%;
//     transform: translateX(100%);
//   }
// `

// export const StyledShapeOutline = styled(ShapeOutline)`
//   ${shapeBaseStyles}
//   left: 3%;

//   ${mq['md']} {
//     left: auto;
//     right: 50%;
//     transform: translateX(105%) rotate(-29deg);
//     bottom: -12px;
//   }
// `

export const FeaturedInWithBadgeStyled = styled(FeaturedInWithBadge)`
  margin-top: 20px;
`
