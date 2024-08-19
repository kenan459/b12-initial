export type GradientSvg = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top'

export type SectionProps = {
  gradient?: boolean
  gradientSvg?: GradientSvg
  backgroundColor?: string
  borderBottom?: boolean
  scrollToNextSection?: boolean
  padding?: 'default' | 'md'
  className?: string
  children: React.ReactNode
  id?: string
}

export type SectionTitleProps = {
  primary?: boolean
  color?: string
  align?: 'left' | 'center'
  width?: number
  textStyle?: 'h1' | 'h2' | 'h3'
}

export type SectionSubtitleProps = {
  color?: string
  align?: 'left' | 'center'
  alignMobile?: 'left' | 'center'
  width?: number
}

export type SectionEyebrowProps = {
  color?: string
  align?: 'left' | 'center'
  alignMobile?: 'left' | 'center'
  width?: number
}

export type SectionHeaderProps = {
  align?: 'flex-start' | 'center' | 'flex-end'
  alignMobile?: 'flex-start' | 'center' | 'flex-end'
}

export type SectionContentProps = {
  className?: string
  children?: React.ReactNode
  align?: 'left' | 'center'
}

export type SectionActionsProps = {
  align?: 'flex-start' | 'center' | 'flex-end'
  alignMobile?: 'flex-start' | 'center' | 'flex-end'
  marginTop?: 'sm' | 'md' | 'lg'
}
