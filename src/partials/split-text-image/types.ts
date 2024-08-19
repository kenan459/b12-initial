import { GradientSvg } from '../../components/section/types'

export type Props = {
  title?: string
  textStyle?: 'h1' | 'h2' | 'h3'
  image?: React.ReactNode
  scrollToNextSection?: boolean
  gradientSvg?: GradientSvg
  gradient?: boolean
  tightPadding?: boolean
  reverseOrder?: boolean
  reverseOrderMobile?: boolean
  children: React.ReactNode
}

export type WrapperProps = {
  reverseOrder?: boolean
  reverseOrderMobile?: boolean
}
