import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { theme } from '@styles/theme'

import { Link } from 'gatsby'

import { NAV_HEIGHT_MOBILE } from './constants'
import { navBreakpointUp } from './helpers'

export const NavHeader = styled.div`
  display: flex;
  flex: 0 0 ${NAV_HEIGHT_MOBILE};
  justify-content: space-between;
  align-items: center;
  height: ${NAV_HEIGHT_MOBILE};
  width: 100%;
  position: relative;

  &::before {
    display: block;
    content: '';
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: 0;
    height: 1px;
    background: ${theme.palette.gray.light};
  }

  ${navBreakpointUp} {
    height: auto;
    width: auto;
    display: block;

    &::before {
      display: none;
    }
  }
`

export const B12Logo = styled(Link, {
  shouldForwardProp: isPropValid,
})<{ large?: boolean }>`
  width: ${(props) => (props.large ? '166px' : '53px')};
  height: 24px;
  flex-shrink: 0;
  text-decoration: none;
  display: flex;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  svg {
    width: 53px;
    height: 24px;
  }
`

export const NavToggle = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  width: 32px;
  height: 32px;
  position: relative;
  transition: ${theme.transition[1]};
  background-color: transparent;
  cursor: pointer;

  ${navBreakpointUp} {
    display: none;
  }

  span {
    display: block;
    width: 16px;
    height: 2px;
    position: absolute;
    left: 8px;
    top: 9px;
    background: ${theme.palette.primary.default};
    transition: ${theme.transition[1]};

    &:nth-of-type(2) {
      top: 15px;
    }

    &:nth-of-type(3) {
      top: 21px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      top: 15px;
      transform: rotate(-45deg);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      top: 15px;
      transform: rotate(45deg);
    }
  }
`
