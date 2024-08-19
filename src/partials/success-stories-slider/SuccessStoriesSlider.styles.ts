import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq, theme } from '@styles/theme'

// Components
import Title from '@components/title/Title'
import LinkWithIcon from '@components/link-with-icon/LinkWithIcon'

import { CONTAINER_WIDTH } from '../../components/container/constants'

export const SLIDER_ROWS_COUNT = 100
const quoteBreakpoint = `@media (min-width: 1045px)`

export const CustomSection = styled.section<{ background?: string }>`
  padding-top: 48px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  background: ${({ background }) => (background ? background : theme.colors.brand.accentLightest)};

  ${mq['md']} {
    padding-top: 128px;
    padding-bottom: 128px;
    flex-direction: row;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  padding-inline: 15px;

  ${mq['md']} {
    padding-right: 0;
  }

  @media (min-width: ${CONTAINER_WIDTH}px) {
    margin-left: calc((100% - ${CONTAINER_WIDTH}px) / 2);
  }
`

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;

  ${mq['md']} {
    margin-bottom: 40px;
  }
`

export const List = styled.div`
  ${mq['md']} {
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-auto-rows: min-content;
    column-gap: 100px;
  }
`

export const ListItemContent = styled.div`
  width: 100%;
`

export const ListItemContentTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  transition: ${theme.transition[1]};
`

export const ListItemContentSubtitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-top: 4px;
`

export const ListItemToggle = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    flex-shrink: 0;
    transition: ${theme.transition[1]};
  }

  &:hover {
    ${ListItemContentTitle} {
      color: ${theme.colors.brand.accent};
    }

    svg {
      rect {
        fill: ${theme.colors.brand.accent};
      }

      path {
        stroke: ${theme.colors.surface.default};
      }

      ${mq['md']} {
        transform: rotate(0deg) translateX(-5px);
      }
    }
  }
`

export const ListItem = styled.div<{ active: boolean; isLast?: boolean }>`
  ${(props) =>
    !props.active &&
    !props.isLast &&
    `
      border-bottom: 1px solid ${theme.colors.surface.border};
    `}

  ${mq['md']} {
    ${(props) =>
      !props.isLast &&
      `
      border-bottom: 1px solid ${theme.colors.surface.border};
    `}
  }

  svg {
    transform: rotate(90deg);

    ${mq['md']} {
      transform: rotate(0deg);
    }
  }

  ${(props) =>
    props.active &&
    `
      ${ListItemContentTitle},
      ${ListItemContentSubtitle} {
        color: ${theme.colors.brand.accent};
      }

      svg {
        transform: rotate(-90deg);

        ${mq['md']} {
          transform: rotate(0deg);
        }

        rect {
          fill: ${theme.colors.brand.accent};
        }

        path {
          stroke: ${theme.colors.surface.default};
        }
      }
    `}
`

export const ListItemSlide = styled(motion.div)`
  background: ${theme.colors.brand.accentDarkest};
  border-radius: 16px 8px 8px 80px;
  overflow: hidden;

  ${mq['md']} {
    grid-row: 1 / ${SLIDER_ROWS_COUNT}; // should take all rows in grid
    grid-column: 2 / 3;
    border-radius: 16px 0 0 80px;
    display: grid;
    align-items: center;
  }
`

export const SlideContent = styled.div`
  padding: 48px 32px;

  ${mq['md']} {
    padding: 64px;
  }

  .slide-image {
    width: 80%;
    margin: 0 auto 16px;

    ${mq['md']} {
      margin-bottom: 32px;
    }
  }
`

export const SlideContentQuote = styled.div`
  ${mq['sm']} {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 24px;
  }

  ${quoteBreakpoint} {
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
  }
`
export const SlideContentQuoteText = styled.p`
  color: ${theme.colors.text.white};
  margin: 0;

  ${quoteBreakpoint} {
    grid-column: 1/3;
  }
`

export const SlideContentQuoteLink = styled(LinkWithIcon)`
  margin-top: 18px;

  ${mq['sm']} {
    margin-top: 0;
  }

  ${quoteBreakpoint} {
    grid-column: 2/3;
    justify-self: flex-end;
    font-size: 18px;
    line-height: 30px;
  }
`

export const SlideContentAuthor = styled.div`
  margin-top: 16px;

  .slide-author-avatar {
    border-radius: 50%;

    ${mq['sm']} {
      grid-column: 1/2;
      grid-row: 1/3;
    }
  }

  ${mq['sm']} {
    margin-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 72px 1fr;
    column-gap: 10px;
  }

  ${quoteBreakpoint} {
    grid-column: 1/2;
  }
`

export const SlideContentAuthorContent = styled.div`
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-bottom: 12px;

  ${mq['sm']} {
    margin-bottom: 0;
  }
`

export const SlideContentAuthorName = styled.p`
  font-weight: 600;
  margin: 8px 0 0;
  color: ${theme.colors.text.white};

  ${mq['sm']} {
    font-size: 16px;
    line-height: 16px;
    margin: 0;
  }

  ${mq['xl']} {
    margin-right: 20px;
  }
`
export const SlideContentAuthorPosition = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.text.white};
  margin: 0;

  ${mq['sm']} {
    align-self: flex-start;
  }

  ${mq['xl']} {
    margin-right: 20px;
  }
`
