/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { Global, jsx, css } from '@emotion/react'
import { useAnnouncementBannerConfig } from '@hooks/useAnnouncementBannerConfig'
import { useTranslation } from 'react-i18next'

// Components
import NavigationHeader from './NavigationHeader'
import NavigationItem from './NavigationItem'
import SocialStrip from '../social-strip/SocialStrip'

// Data
import navigationData from '../../data/navigation.yaml'

// Types
import { TNavigation, NavItemType } from './types'

// Styles
import {
  NavContainer,
  Nav,
  NavigationBanner,
  NavMenu,
  NavCopy,
  NavCopyText,
} from './Navigation.styles'

import { NAV_BREAKPOINT } from './constants'

// Component
const Navigation = ({ ctaOnly = false }: TNavigation) => {
  const { t } = useTranslation()
  const { main } = navigationData
  const bannerConfig = useAnnouncementBannerConfig()
  const [isBannerActive, setIsBannerActive] = useState(bannerConfig.active)
  const year = new Date().getFullYear()

  // To change nav CTA styles to primary after scrolling down the page
  const handleNavButtonChange = () => {
    const ctaOnlyItem = document.querySelector('#ctaOnlyItem')

    if (ctaOnlyItem && window.scrollY >= 400) {
      ctaOnlyItem.classList.add('active')
    } else if (ctaOnlyItem) {
      ctaOnlyItem.classList.remove('active')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavButtonChange)
  }, [])

  const handleBannerClose = () => {
    setIsBannerActive(!isBannerActive)
  }

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

      <NavContainer id="nav-container">
        {isBannerActive && (
          <NavigationBanner
            text={bannerConfig.text}
            ctaText={bannerConfig.cta_text}
            ctaUrl={bannerConfig.cta_url}
            onClose={handleBannerClose}
            secondaryCtaText={bannerConfig.secondary_cta_text}
            secondaryCtaUrl={bannerConfig.secondary_cta_url}
            backgroundColor={bannerConfig.background_color}
          ></NavigationBanner>
        )}

        <Nav>
          <NavigationHeader />

          <NavMenu>
            {ctaOnly ? (
              <NavigationItem
                item={{
                  slug: 'https://b12.io/signup/',
                  isExternal: true,
                  isButton: true,
                  label: t('Get started', { ns: 'navigation' }),
                  id: 'ctaOnlyItem',
                }}
              />
            ) : (
              <>
                {main.map((item: NavItemType) => (
                  <NavigationItem item={item} key={item.slug} />
                ))}
              </>
            )}
          </NavMenu>

          {!ctaOnly && (
            <NavCopy>
              <SocialStrip />
              <NavCopyText>© {year} B12. All rights reserved.</NavCopyText>
            </NavCopy>
          )}
        </Nav>
      </NavContainer>
    </>
  )
}

export default Navigation
