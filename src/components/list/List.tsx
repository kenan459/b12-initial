import styled from '@emotion/styled'
import { mq } from '@styles/theme'

// Types
type TListGap = 'sm' | 'md' | 'lg'

type Props = {
  className?: string
  children: React.ReactNode
  gap?: TListGap
}

// Styles
const Wrapper = styled.div<{ gap?: TListGap }>`
  display: flex;
  flex-direction: column;
  ${({ gap }) => gap === 'sm' && 'gap: 16px;'}
  ${({ gap }) => gap === 'md' && 'gap: 32px;'} 
  ${({ gap }) => gap === 'lg' && 'gap: 48px;'}

  ${mq['md']} {
    ${({ gap }) => gap === 'sm' && 'gap: 40px;'}
    ${({ gap }) => gap === 'md' && 'gap: 52px;'} 
    ${({ gap }) => gap === 'lg' && 'gap: 64px;'}
  }
`

const List = ({ className, children, gap = 'sm' }: Props) => (
  <Wrapper className={className} gap={gap}>
    {children}
  </Wrapper>
)

export default List
