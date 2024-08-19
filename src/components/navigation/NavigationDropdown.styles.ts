import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'

import Container from '../container/Container'

import { NavItemDropdownSectionTitleType } from './types'

import { NAV_HEIGHT, NAV_HEIGHT_MOBILE } from './constants'
import { navBreakpointDown, navBreakpointUp } from './helpers'

export const NavMenuItemDropdown = styled.div`
  position: absolute;
  left: 100%;
  top: ${NAV_HEIGHT_MOBILE};
  bottom: 0;
  width: 100%;
  padding: ${theme.spacing.medium} 0 ${theme.spacing.large};
  background-color: ${theme.palette.common.white};
  z-index: 10;
  overflow: auto;
  transition: ${theme.transition[1]};

  .is-dropdown-visible-on-mobile & {
    ${navBreakpointDown} {
      left: 0;
    }
  }

  ${navBreakpointUp} {
    display: none;
    z-index: auto;
    top: ${NAV_HEIGHT};
    left: 0;
    right: 0;
    bottom: auto;
    padding-block: 30px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.05);
    transition: none;
  }
`

export const NavMenuItemDropdownContainer = styled(Container)`
  align-items: flex-start;
  gap: ${theme.spacing.gutter};
  padding-inline: ${theme.spacing.medium};

  ${navBreakpointUp} {
    align-items: flex-end;
    padding-inline: 15px;
  }
`

export const NavMenuItemDropdownLabel = styled.button`
  border: 0;
  background: none;
  margin: 0;
  padding: 0;
  color: ${theme.palette.primary.darker};
  font-family: inherit;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xsmall};

  svg {
    transform: rotate(180deg);

    path {
      fill: ${theme.palette.primary.darker};
    }
  }

  @media (min-width: 1150px) {
    display: none;
  }
`

export const NavMenuItemDropdownCta = styled.a`
  color: ${theme.palette.gray.darker};
  font-size: ${theme.fontSizes.medium};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xsmall};

  &:hover {
    color: ${theme.palette.primary.darker};

    svg {
      path {
        fill: ${theme.palette.primary.darker};
      }
    }
  }
`

export const NavMenuItemDropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xsmall};
`

// TODO(glebovsky): update component
// Internal links should use Link component in future when we convert pages to Gatsby
export const NavMenuItemDropdownSectionTitle = styled('a', {
  shouldForwardProp: isPropValid,
})<NavItemDropdownSectionTitleType>`
  color: ${(props) => (props.isAlternative ? theme.palette.gray.dark : theme.palette.gray.darker)};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${(props) => (props.isAlternative ? 400 : 600)};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xsmall};

  > div {
    display: flex;
    place-content: center;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: ${theme.palette.primary.darker};

    svg {
      path {
        fill: ${theme.palette.primary.darker};
      }
    }
  }
`
export const NavMenuItemDropdownSectionDescription = styled.div`
  color: ${theme.palette.gray.dark};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.fontSizes.large};

  ${navBreakpointUp} {
    min-height: calc(${theme.fontSizes.large} * 2);
  }
`

export const NavMenuItemDropdownSectionItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};

  ${navBreakpointUp} {
    margin-top: ${theme.spacing.small};
  }
`
export const NavMenuItemDropdownSectionItemsItem = styled.a`
  color: ${theme.palette.gray.dark};
  font-size: ${theme.fontSizes.medium};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xsmall};
  padding-block: ${theme.spacing.xxsmall};

  ${navBreakpointUp} {
    padding-block: ${theme.spacing.none};
  }

  > div {
    display: flex;
    place-content: center;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: ${theme.palette.primary.darker};

    svg {
      path {
        fill: ${theme.palette.primary.darker};
      }
    }
  }
`
