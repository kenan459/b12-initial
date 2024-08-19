type TButtonVariant = 'default' | 'primary' | 'primary-inverted' | 'primary-prominent'
type TButtonSize = 'default' | 'large' | 'medium' | 'small' | 'xsmall'
type TButtonAs = 'link' | 'anchor' | 'button'

export type TButton = {
  label: string
  variant?: TButtonVariant
  to: string
  as: TButtonAs
  fullWidth?: boolean
  className?: string
  icon?: React.ReactNode
  size?: TButtonSize
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  target?: '_self' | '_blank'
  disabled?: boolean
  loading?: boolean
}

export type TStyledLink = {
  variant?: TButtonVariant
  fullWidth?: boolean
  size?: TButtonSize
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export type TStyledAnchor = {
  variant?: TButtonVariant
  fullWidth?: boolean
  size?: TButtonSize
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export type TStyledButton = {
  variant?: TButtonVariant
  fullWidth?: boolean
  size?: TButtonSize
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  loading?: boolean
}
