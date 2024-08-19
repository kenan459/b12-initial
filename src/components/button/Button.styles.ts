import { css } from '@emotion/react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { theme, mq } from '../../assets/theme'

import { Link } from 'gatsby'

import { TStyledLink, TStyledAnchor, TStyledButton } from './types'

export const baseCss = css`
  display: inline-flex;
  place-content: center;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  font-weight: bold;
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.medium};
  transition: ${theme.transition[1]};
  border-radius: 3px;
  align-items: center;

  svg path {
    transition: ${theme.transition[1]};
  }

  &:active {
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 10%);
  }

  ${mq['md']} {
    font-size: ${theme.fontSizes.medium};
  }
`

export const spacingDefault = css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};

  ${mq['md']} {
    padding: ${theme.spacing.medium} ${theme.spacing.large};
  }
`

const spacingLarge = css`
  padding: 24px 40px;
`
const spacingMedium = css`
  padding: 20px 32px;

  ${mq['md']} {
    padding: 24px 32px;
  }
`

const spacingSmall = css`
  padding: 14px 24px;
`

const spacingXSmall = css`
  padding: 9px 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`

const fullWidth = css`
  width: 100%;
`

export const styleDefaultCss = css`
  border: 1px solid ${theme.palette.gray.light};
  background: ${theme.palette.common.white};
  color: ${theme.palette.primary.default};

  &:hover {
    background: ${theme.palette.primary.xxlight};
    border-color: ${theme.palette.primary.xlight};
  }
`

export const stylePrimaryCss = css`
  border: 1px solid ${theme.palette.primary.default};
  background: ${theme.palette.primary.default};
  color: ${theme.palette.common.white};

  &:hover {
    background: ${theme.palette.primary.darker};
    border-color: ${theme.palette.primary.darker};
  }

  &:active {
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 30%);
  }
`

const stylePrimaryInvertedCss = css`
  border: 1px solid ${theme.palette.primary.light};
  background: ${theme.palette.primary.light};
  color: ${theme.palette.secondary.light};

  &:hover {
    background: ${theme.palette.primary.xlight};
    border-color: ${theme.palette.primary.xlight};
  }

  &:active {
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 30%);
  }
`

export const stylePrimaryProminentCss = css`
  border: 1px solid ${theme.palette.primary.default};
  background: ${theme.palette.primary.default};
  color: ${theme.palette.common.white};
  font-size: ${theme.fontSizes.medium};
  line-height: ${theme.fontSizes.large};

  ${mq['md']} {
    font-size: ${theme.fontSizes.large};
    line-height: ${theme.fontSizes.xlarge};
  }

  &:hover {
    background-color: ${theme.colors.brand.accentLight};
    border: 1px solid rgba(65, 58, 161, 0.3);
  }
`

const styleDisabledState = css`
  opacity: 0.4;
  pointer-events: none;
`

export const ButtonSpinner = styled.span`
  display: block;
  margin: 0 auto;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  animation: rotateme 1.2s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 14px;
    height: 6px;
    background: ${theme.palette.primary.default};
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${theme.palette.primary.default};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes rotateme {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

/** Used for internal links */
export const StyledLink = styled(Link, {
  shouldForwardProp: isPropValid,
})<TStyledLink>`
  ${baseCss}
  ${(props) => props.size === 'default' && spacingDefault}
  ${(props) => props.size === 'large' && spacingLarge}
  ${(props) => props.size === 'small' && spacingSmall}
  ${(props) => props.size === 'xsmall' && spacingXSmall}
  ${(props) => props.variant === 'default' && styleDefaultCss}
  ${(props) => props.variant === 'primary' && stylePrimaryCss}
  ${(props) => props.variant === 'primary-inverted' && stylePrimaryInvertedCss}
  ${(props) => props.fullWidth && fullWidth}
`

/** Used for external links */
export const StyledAnchor = styled('a', {
  shouldForwardProp: isPropValid,
})<TStyledAnchor>`
  ${baseCss}
  ${(props) => props.size === 'default' && spacingDefault}
  ${(props) => props.size === 'large' && spacingLarge}
  ${(props) => props.size === 'medium' && spacingMedium}
  ${(props) => props.size === 'small' && spacingSmall}
  ${(props) => props.size === 'xsmall' && spacingXSmall}
  ${(props) => props.variant === 'default' && styleDefaultCss}
  ${(props) => props.variant === 'primary' && stylePrimaryCss}
  ${(props) => props.variant === 'primary-inverted' && stylePrimaryInvertedCss}
  ${(props) => props.variant === 'primary-prominent' && stylePrimaryProminentCss}
  ${(props) => props.fullWidth && fullWidth}
`

/** Used for buttons */
export const StyledButton = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'loading',
})<TStyledButton>`
  ${baseCss}
  ${(props) => props.size === 'default' && spacingDefault}
  ${(props) => props.size === 'large' && spacingLarge}
  ${(props) => props.size === 'medium' && spacingMedium}
  ${(props) => props.size === 'small' && spacingSmall}
  ${(props) => props.size === 'xsmall' && spacingXSmall}
  ${(props) => props.variant === 'default' && styleDefaultCss}
  ${(props) => props.variant === 'primary' && stylePrimaryCss}
  ${(props) => props.variant === 'primary-inverted' && stylePrimaryInvertedCss}
  ${(props) => props.variant === 'primary-prominent' && stylePrimaryProminentCss}
  ${(props) => props.fullWidth && fullWidth}
  ${(props) => props.disabled && styleDisabledState}
`
