import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

import AnnouncementBanner from '../announcement-banner/AnnouncementBanner'

import { NAV_HEIGHT, NAV_HEIGHT_MOBILE } from './constants'
import { navBreakpointUp, navBreakpointDown } from './helpers'

export const NavContainer = styled.div`
  position: sticky;
  inset: 0 0 auto 0;
  z-index: 1000;

  .is-mobile-nav-visible & {
    ${navBreakpointDown} {
      position: fixed;
      inset: 0;
      display: flex;
      flex-direction: column;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
  z-index: 1000;
  height: ${NAV_HEIGHT_MOBILE};
  border-bottom: 1px solid ${theme.palette.gray.light};
  background: ${theme.palette.common.white};

  .is-mobile-nav-visible & {
    ${navBreakpointDown} {
      align-items: stretch;
      flex-grow: 1;
    }
  }

  ${navBreakpointUp} {
    height: ${NAV_HEIGHT};
    flex-direction: row;
  }
`

export const NavigationBanner = styled(AnnouncementBanner)`
  p {
    color: #110f33;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }

  span {
    color: ${theme.colors.brand.accentLight};
    font-size: 18px;
    line-height: 20px;
    margin-left: 4px;
  }
`

export const NavMenu = styled.ul`
  display: none;
  margin: 0;
  padding: 0;

  .is-mobile-nav-visible & {
    ${navBreakpointDown} {
      display: flex;
      flex: 0 1 100%;
      flex-direction: column;
      padding: 20px 0;
      gap: 14px;
      overflow: auto;
    }
  }

  ${navBreakpointUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
`

export const NavCopy = styled.div`
  display: none;
  flex-direction: column;
  gap: 20px;
  padding: 0 0 20px;
  align-items: flex-start;

  .is-mobile-nav-visible & {
    display: flex;

    ${navBreakpointUp} {
      display: none;
    }
  }
`
export const NavCopyText = styled.div`
  color: ${theme.palette.gray.medium};
`
