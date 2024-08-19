export type ContainerProps = {
  className?: string
  /** Pixels or percentage */
  maxWidth?: string
  split?: '1/3' | 'half'
  verticalAlign?: 'flex-start' | 'center'
}

export type ContainerShapedProps = {
  bg?: string
  children?: React.ReactNode
} & ContainerProps
