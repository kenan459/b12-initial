import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

// Images
import CheckmarkIcon from '../../images/icons/icon-checkmark.inline.svg'
import PlusIcon from '../../images/icons/icon-plus.inline.svg'

// Types
type Props = {
  items: Item[]
  icon?: 'checkmark' | 'plus'
} & Wrapper

type Wrapper = {
  className?: string
  columns?: 1 | 2 | 3
}

type Item = string

// Styles
const Wrapper = styled.ul<Wrapper>`
  margin: 0;
  padding: 0;
  list-style: none;

  ${mq['md']} {
    column-gap: ${theme.spacing.section.xxsmall};
    columns: ${(props) => props.columns};
  }
`

const Item = styled.li`
  color: inherit;
  display: flex;
  gap: 10px;
  font-size: 16px;
  line-height: 25px;

  & + & {
    margin-top: ${theme.spacing.section.xxxsmall};
  }

  svg {
    flex-shrink: 0;
    margin-top: 3px;
  }
`

const UnorderedList = ({ className, items, icon = 'checkmark', columns = 2 }: Props) => (
  <Wrapper className={className} columns={columns}>
    {items.map((item, idx) => (
      <Item key={`ul-item-${idx}`}>
        {icon === 'checkmark' && <CheckmarkIcon />}
        {icon === 'plus' && <PlusIcon />}
        {item}
      </Item>
    ))}
  </Wrapper>
)

export default UnorderedList
