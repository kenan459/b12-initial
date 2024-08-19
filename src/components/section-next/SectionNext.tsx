import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

// Components
import Container from '@components/container/Container'
import ContainerShaped from '@components/container/ContainerShaped'
import { ContainerProps, ContainerShapedProps } from '@components/container/types'

// Types
type Props = {
  id?: string
  bg?: string
  paddingTop?: string
  paddingBottom?: string
  className?: string
  containerType?: 'default' | 'shaped'
  container?: ContainerProps | ContainerShapedProps
  children: React.ReactNode
  directChildren?: React.ReactNode
  borderTop?: boolean
  borderBottom?: boolean
  tightPadding?: boolean
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void
}

// Styles
const Wrapper = styled.section<{
  bg?: string
  paddingTop?: string
  paddingBottom?: string
  borderTop?: boolean
  tightPadding?: boolean
  borderBottom?: boolean
}>`
  background: ${(props) => props.bg || theme.colors.surface.default};
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.section.xsmall} 0; // based on current design. could be changed in future
  ${(props) =>
    props.borderTop &&
    `
    border-top: 1px solid ${theme.colors.surface.border};
  `}
  ${(props) =>
    props.borderBottom &&
    `
    border-bottom: 1px solid ${theme.colors.surface.border};
  `}

  ${mq['md']} {
    padding: ${(props) =>
        props.tightPadding ? theme.spacing.section.xxsmall : theme.spacing.section.xlarge}
      0; // based on current design. could be changed in future
    ${(props) =>
      props.paddingTop &&
      `padding-top: ${props.paddingTop};`} // will override the padding settings above, used for stacked sections
    ${(props) =>
      props.paddingBottom &&
      `padding-bottom: ${props.paddingBottom};`} // will override the padding settings above, used for stacked sections
  }
`

const SectionNext = ({
  id,
  bg,
  paddingTop = '',
  paddingBottom = '',
  className,
  containerType = 'default',
  container = {},
  children,
  directChildren = null,
  borderTop,
  borderBottom,
  tightPadding,
  onMouseMove,
}: Props) => (
  <Wrapper
    id={id}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    className={className}
    bg={bg}
    borderTop={borderTop}
    borderBottom={borderBottom}
    tightPadding={tightPadding}
    onMouseMove={onMouseMove}
  >
    {containerType === 'default' && <Container {...container}>{children}</Container>}
    {containerType === 'shaped' && <ContainerShaped {...container}>{children}</ContainerShaped>}
    {directChildren}
  </Wrapper>
)

export default SectionNext
