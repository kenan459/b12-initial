import React from 'react'

// Types
import { TButton } from './types'

// Styles
import { StyledLink, StyledAnchor, StyledButton, ButtonSpinner } from './Button.styles'

/** Button component that returns different tags based on situation
 *
 * By default renders as Gatsby Link component that should be used ONLY for internal links
 *
 * Use `as="link"` for internal links (Gatsby links)
 * Use `as="anchor"` to use it as a simple link (best for external links)
 */
export const Button = ({
  label = 'Learn more',
  variant = 'default',
  as = 'anchor',
  to,
  fullWidth = false,
  size = 'default',
  onClick,
  target = '_self',
  className,
  loading = false,
  disabled = false,
  icon = null,
}: TButton) => {
  if (as === 'anchor') {
    return (
      <StyledAnchor
        href={to}
        variant={variant}
        className={className}
        fullWidth={fullWidth}
        size={size}
        onClick={onClick}
        target={target}
      >
        {icon && icon}
        {label}
      </StyledAnchor>
    )
  }

  if (as === 'button' && onClick) {
    return (
      <StyledButton
        variant={variant}
        className={className}
        fullWidth={fullWidth}
        size={size}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
      >
        {loading ? (
          <ButtonSpinner />
        ) : (
          <>
            {icon && icon}
            {label}
          </>
        )}
      </StyledButton>
    )
  }

  return (
    <StyledLink
      to={to}
      variant={variant}
      className={className}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
      target={target}
    >
      {label}
    </StyledLink>
  )
}
