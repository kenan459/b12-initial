import { theme } from '@styles/theme'
import { useTranslation } from 'react-i18next'

// Components
import Grid from '../grid/Grid'

// Images/Icons
import ArrowRight from '../../images/icon-arrow-right.inline.svg'

// Types
import {
  NavItemDropdownType,
  NavItemDropdownSectionType,
  NavItemDropdownSectionItemsType,
} from './types'

// Styles
import {
  NavMenuItemDropdown,
  NavMenuItemDropdownContainer,
  NavMenuItemDropdownLabel,
  NavMenuItemDropdownCta,
  NavMenuItemDropdownSection,
  NavMenuItemDropdownSectionTitle,
  NavMenuItemDropdownSectionDescription,
  NavMenuItemDropdownSectionItems,
  NavMenuItemDropdownSectionItemsItem,
} from './NavigationDropdown.styles'

export const Icon = ({ svg = '' }: { svg: string }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: svg,
    }}
  ></div>
)

const NavDropdown = ({
  slug,
  label = '',
  items,
  ctaLink,
  onCloseDropdown,
}: NavItemDropdownType) => {
  const { t } = useTranslation()

  return (
    <NavMenuItemDropdown>
      <NavMenuItemDropdownContainer>
        <NavMenuItemDropdownLabel type="button" onClick={onCloseDropdown}>
          <ArrowRight />
          {t(label, { ns: 'navigation' })}
        </NavMenuItemDropdownLabel>
        <Grid
          gapXs={theme.spacing.large}
          gapSm={theme.spacing.medium}
          gapLg={theme.spacing.gutter}
          gapXl={theme.spacing.gutter}
          colsLg={4}
          colsXl={4}
          colsMd={2}
        >
          {items.map((dropdownItem: NavItemDropdownSectionType, idx) => (
            <NavMenuItemDropdownSection key={`${dropdownItem.slug}-${idx}`}>
              <NavMenuItemDropdownSectionTitle
                // TODO(glebovsky): use `to` prop for local links
                // Currently we can't use `to` prop to avoid fetching data for local links (prefetch) because we don't have them right now
                href={dropdownItem.slug}
                isAlternative={slug === '#industries'}
              >
                {dropdownItem.icon && <Icon svg={dropdownItem.icon} />}
                {t(dropdownItem.title, { ns: 'navigation' })}
              </NavMenuItemDropdownSectionTitle>
              {dropdownItem.description && (
                <NavMenuItemDropdownSectionDescription>
                  {t(dropdownItem.description, { ns: 'navigation' })}
                </NavMenuItemDropdownSectionDescription>
              )}
              {dropdownItem.items && (
                <NavMenuItemDropdownSectionItems>
                  {dropdownItem.items.map((item: NavItemDropdownSectionItemsType, idx) => (
                    <NavMenuItemDropdownSectionItemsItem
                      // TODO(glebovsky): use `to` prop for local links
                      // Currently we can't use `to` prop to avoid fetching data for local links (prefetch) because we don't have them right now
                      href={item.url}
                      key={`${item.url}-${idx}`}
                    >
                      {item.icon && <Icon svg={item.icon} />}
                      {t(item.title, { ns: 'navigation' })}
                    </NavMenuItemDropdownSectionItemsItem>
                  ))}
                </NavMenuItemDropdownSectionItems>
              )}
            </NavMenuItemDropdownSection>
          ))}
        </Grid>
        <NavMenuItemDropdownCta href={ctaLink.url}>
          {t(ctaLink.title, { ns: 'navigation' })} <ArrowRight />
        </NavMenuItemDropdownCta>
      </NavMenuItemDropdownContainer>
    </NavMenuItemDropdown>
  )
}

export default NavDropdown
