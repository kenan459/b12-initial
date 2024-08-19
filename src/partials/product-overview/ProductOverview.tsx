import React from 'react'
import { theme } from '@styles/theme'
import styled from '@emotion/styled'

// Components
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Grid from '@components/grid/Grid'

// Data
import navigationData from '@data/navigation.yaml'

// Types
import {
  NavItemDropdownSectionType,
  NavItemDropdownSectionItemsType,
} from '@components/navigation//types'

// Styles
import {
  NavMenuItemDropdownSection,
  NavMenuItemDropdownSectionTitle,
  NavMenuItemDropdownSectionDescription,
  NavMenuItemDropdownSectionItems,
  NavMenuItemDropdownSectionItemsItem,
} from '@components/navigation/NavigationDropdown.styles'

const StyledNavMenuItemDropdownSectionTitle = styled(NavMenuItemDropdownSectionTitle)`
  font-size: ${theme.fontSizes.large};
`

const ProductOverview = () => {
  const { main } = navigationData
  const productOverviewItem = main.find((item) => item.slug === '#product-overview')
  const dropdownItems = productOverviewItem.dropdownItems

  return (
    <SectionNext
      bg={theme.colors.brand.accentLightest}
      containerType="shaped"
      container={{
        bg: theme.colors.surface.default,
      }}
    >
      <SectionNextHeader>
        <Title as="h3">Browse all features</Title>
        <Subtitle>
          Our simple, powerful platform works especially well for businesses in these industries:
        </Subtitle>
      </SectionNextHeader>
      <Grid
        gapXs={theme.spacing.large}
        gapSm={theme.spacing.medium}
        gapMd={theme.spacing.gutter}
        gapLg={theme.spacing.gutter}
        gapXl={theme.spacing.gutter}
        colsMd={2}
        colsLg={4}
        colsXl={4} // TO DO: simplify this section in the future. All copied from the navigation dropdown component as is.
      >
        {dropdownItems.map((dropdownItem: NavItemDropdownSectionType, idx) => (
          <NavMenuItemDropdownSection key={`${dropdownItem.slug}-${idx}`}>
            <StyledNavMenuItemDropdownSectionTitle href={dropdownItem.slug}>
              {dropdownItem.title}
            </StyledNavMenuItemDropdownSectionTitle>
            {dropdownItem.description && (
              <NavMenuItemDropdownSectionDescription>
                {dropdownItem.description}
              </NavMenuItemDropdownSectionDescription>
            )}
            {dropdownItem.items && (
              <NavMenuItemDropdownSectionItems>
                {dropdownItem.items.map((item: NavItemDropdownSectionItemsType, idx) => (
                  <NavMenuItemDropdownSectionItemsItem href={item.url} key={`${item.url}-${idx}`}>
                    {item.title}
                  </NavMenuItemDropdownSectionItemsItem>
                ))}
              </NavMenuItemDropdownSectionItems>
            )}
          </NavMenuItemDropdownSection>
        ))}
      </Grid>
    </SectionNext>
  )
}

export default ProductOverview
