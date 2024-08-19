/** @jsx jsx */
import React from 'react'
import { Global, jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'

// Components
import NavigationHeader from '@components/navigation/NavigationHeader'

// Data
import navigationData from '@data/orchestra-navigation.yaml'

// Types
import { NavItemType } from '@components/navigation/types'

// Icons
import IconGit from '@images/icons/github.inline.svg'
import IconComments from '@images/icons/streamline.inline.svg'

// Styles
import { NavContainer, Nav, NavMenu } from '@components/navigation/Navigation.styles'
import { NavMenuItem, NavMenuItemExternalLink } from '@components/navigation/NavigationItem.styles'

import { NAV_BREAKPOINT } from '@components/navigation/constants'

const StyledStyledNavMenuItemExternalLink = styled(NavMenuItemExternalLink)`
  svg {
    height: 20px;
    width: 20px;
    transform: none;

    path {
      fill: ${theme.colors.text.dark};
      stroke: none !important;
    }
  }

  &:hover {
    svg {
      transform: none;

      path {
        fill: ${theme.colors.brand.accent};
      }
    }
  }
`

// Component
const NavigationOrchestra = () => {
  const { main } = navigationData

  return (
    <>
      <Global
        styles={css`
          body.is-mobile-nav-visible {
            @media (max-width: ${NAV_BREAKPOINT}) {
              overflow: hidden;
            }
          }
        `}
      />

      <NavContainer>
        <Nav>
          <NavigationHeader orchestraHeader />

          <NavMenu>
            {main.map((item: NavItemType) => (
              <NavMenuItem key={item.slug}>
                <StyledStyledNavMenuItemExternalLink href={item.slug} id={item.id}>
                  {item.label}
                </StyledStyledNavMenuItemExternalLink>
              </NavMenuItem>
            ))}
            <NavMenuItem>
              <StyledStyledNavMenuItemExternalLink href="http://github.com/b12io/orchestra">
                <IconGit />
              </StyledStyledNavMenuItemExternalLink>
            </NavMenuItem>
            <NavMenuItem>
              <StyledStyledNavMenuItemExternalLink href="https://github.com/b12io/orchestra/discussions">
                <IconComments />
              </StyledStyledNavMenuItemExternalLink>
            </NavMenuItem>
          </NavMenu>
        </Nav>
      </NavContainer>
    </>
  )
}

export default NavigationOrchestra
