import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

type TItemsWrapperProps = { itemsNum: Number; gap?: string }

const ItemsWrapper = styled.div<TItemsWrapperProps>`
  gap: ${(props) => props.gap || '10px'};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${mq['md']} {
    grid-template-columns: ${(props) => `repeat(${props.itemsNum}, 1fr)`};
  }
`

export default ItemsWrapper
