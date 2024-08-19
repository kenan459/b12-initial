import { useEffect, useState } from 'react'

// Images/Icons
import B12LogoSvg from '../../images/logo-b12.inline.svg'
import OrchestraLogo from '@components/orchestra/OrchestraLogo'

// Styles
import { NavHeader, B12Logo, NavToggle } from './NavigationHeader.styles'

// Types
type NavHeaderProps = {
  orchestraHeader?: boolean
}

// Component
const NavigationHeader = ({ orchestraHeader = false }: NavHeaderProps) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false)

  const handleToggleClick = () => {
    setIsMobileNavVisible(!isMobileNavVisible)
  }

  useEffect(() => {
    if (isMobileNavVisible) {
      // Add 'overflow: hidden' to body on mobile to disable page scroll
      // Styles are in global-styles.ts file
      document.body.classList.add('is-mobile-nav-visible')
    } else {
      document.body.classList.remove('is-mobile-nav-visible')
    }
  }, [isMobileNavVisible])

  return (
    <NavHeader>
      <B12Logo to="/" aria-label="Click to go to home page" large>
        <B12LogoSvg />
        {orchestraHeader ? <OrchestraLogo /> : null}
      </B12Logo>

      <NavToggle
        className={isMobileNavVisible ? 'active' : undefined}
        onClick={handleToggleClick}
        type="button"
        aria-label="Toggle mobile navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </NavToggle>
    </NavHeader>
  )
}

export default NavigationHeader
