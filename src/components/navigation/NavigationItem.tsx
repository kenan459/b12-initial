import { useState } from 'react'
import useMediaQuery from '@hooks/useMediaQuery'
import { useTranslation } from 'react-i18next'

// Components
import NavDropdown from './NavigationDropdown'

// Images/Icons
import ChevronIcon from '@images/icons/arrow-down-bold.inline.svg'

// Helpers
import { NAV_BREAKPOINT } from './constants'

// Styles
import { NavMenuItem, NavMenuItemLink, NavMenuItemExternalLink } from './NavigationItem.styles'

// Component
const NavigationItem = ({ item }) => {
  const { t } = useTranslation()
  const [isDropdownVisibleOnMobile, setIsDropdownVisibleOnMobile] = useState<boolean>(false)
  const isMobile = useMediaQuery(`(max-width: ${NAV_BREAKPOINT})`)

  const handleDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()

    if (isMobile) {
      setIsDropdownVisibleOnMobile(!isDropdownVisibleOnMobile)
    }
  }

  return (
    <NavMenuItem
      className={isDropdownVisibleOnMobile ? 'is-dropdown-visible-on-mobile' : undefined}
    >
      {item.isExternal ? (
        <NavMenuItemExternalLink href={item.slug} isButton={item.isButton} id={item.id}>
          {t(item.label, { ns: 'navigation' })}
        </NavMenuItemExternalLink>
      ) : (
        <NavMenuItemLink
          isButton={item.isButton}
          to={item.slug}
          onClick={item.isDropdown ? handleDropdownToggle : undefined}
        >
          {t(item.label, { ns: 'navigation' })}
          {item.isDropdown && <ChevronIcon />}
        </NavMenuItemLink>
      )}
      {item.isDropdown && (
        <NavDropdown
          slug={item.slug}
          label={t(item.label, { ns: 'navigation' })}
          items={item.dropdownItems}
          ctaLink={item.ctaLink}
          onCloseDropdown={handleDropdownToggle}
        />
      )}
    </NavMenuItem>
  )
}

export default NavigationItem
