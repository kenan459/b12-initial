import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq, theme } from '../../assets/theme'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import { Button } from '../../components/button/Button'

import { CONTAINER_WIDTH } from '../../components/container/constants'

export const SLIDER_ROWS_COUNT = 100

export const CustomSection = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;

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
  margin-bottom: 16px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;

  ${mq['lg']} {
    grid-column: 1 / 2;
  }
`

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 16px;
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  ${mq['md']} {
    margin-bottom: 32px;
  }

  ${mq['lg']} {
    grid-column: 1 / 2;
  }
`

export const List = styled.div`
  ${mq['md']} {
    display: grid;
    grid-template-columns: 43% 1fr;
    grid-auto-rows: min-content;
    column-gap: 40px;
  }
`

export const ListItemContent = styled.div`
  width: 100%;
`

export const ListItemContentTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  transition: ${theme.transition[1]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.text.regular};
`

export const ListItemContentDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.text.regular};
`

export const ListItemContentButton = styled(Button)`
  display: block;
  width: auto;
  margin-top: 16px;
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

export const ListItem = styled.div<{ active: boolean }>`
  ${(props) =>
    !props.active &&
    `
      border-bottom: 1px solid ${theme.colors.surface.border};

      svg {
        transform: rotate(90deg);

        ${mq['md']} {
          transform: rotate(0deg);
        }

        rect {
          fill: ${theme.colors.brand.accentLightest};
          stroke: ${theme.colors.brand.accentLightest};
        }
    
        path {
          stroke: ${theme.colors.brand.accent};
        }
      }
    `}

  ${mq['md']} {
    border-bottom: 1px solid ${theme.colors.surface.border};
  }

  ${(props) =>
    props.active &&
    `
      ${ListItemContentTitle} {
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

      ${ListItemContentDetails} {
        margin-top: 16px;
      }
  `}
`

export const ListItemSlide = styled(motion.div)`
  overflow: hidden;

  ${mq['md']} {
    grid-row: 1 / ${SLIDER_ROWS_COUNT}; // should take all rows in grid
    grid-column: 2 / 3;
    display: grid;
    align-items: center;
  }
`
