import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { theme } from '@styles/theme'

import { Link } from 'gatsby'
import { NavMenuItemDropdown } from './NavigationDropdown.styles'

import { NAV_HEIGHT } from './constants'
import { navBreakpointUp } from './helpers'

import { NavMenuItemExternalLinkType } from './types'

export const NavMenuItemExternalLink = styled('a', {
  shouldForwardProp: isPropValid,
})<NavMenuItemExternalLinkType>`
  text-decoration: none;
  color: ${theme.palette.secondary.default};
  font-family: ${theme.typography.heading};
  font-size: ${theme.fontSizes.large};
  line-height: ${theme.lineHeight.medium};
  font-weight: 500;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  transition: ${theme.transition[1]};

  ${(props) =>
    props.isButton &&
    `
      padding: 13px 19px;
      border: 1px solid #e8e7eb;
      border-radius: 4px;
      color: ${theme.palette.primary.default};
      place-content: center;
      align-self: flex-start;

      &.active {
        border: 1px solid ${theme.palette.primary.default};
        background: ${theme.palette.primary.default};
        color: ${theme.palette.common.white};

        &:hover {
          color: ${theme.palette.common.white};
          background: ${theme.palette.primary.darker};
          border-color: ${theme.palette.primary.darker};
        }

        &:active {
          box-shadow: inset 0 2px 4px rgb(0 0 0 / 30%);
        }
      }
    `}

  ${navBreakpointUp} {
    font-size: ${theme.fontSizes.medium};
    font-weight: 600;
    place-content: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    ${(props) => props.isButton && `align-self: center;`}
  }

  &:hover {
    color: ${theme.palette.primary.default};

    ${(props) =>
      props.isButton &&
      `
        background-color: ${theme.palette.primary.xxlight};
      `}

    ${navBreakpointUp} {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  // Chevron
  > svg {
    transition: ${theme.transition[1]};
    transform: rotate(-90deg);

    ${navBreakpointUp} {
      width: 8px;
      transform: none;

      path {
        stroke: ${theme.palette.gray.darker};
        fill: ${theme.palette.gray.darker};
      }
    }
  }
`

export const NavMenuItemLink = NavMenuItemExternalLink.withComponent(Link)

export const NavMenuItem = styled.li`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;

  ${navBreakpointUp} {
    flex-direction: row;
    align-items: center;

    &:hover {
      // Trick to make mega menus work with simple hover
      height: ${NAV_HEIGHT};

      ${NavMenuItemDropdown} {
        display: block;
      }

      ${NavMenuItemLink} {
        color: ${theme.palette.primary.default};

        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`
