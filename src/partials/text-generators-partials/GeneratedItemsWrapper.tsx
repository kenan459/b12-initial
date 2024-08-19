import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { mq } from '../../assets/theme'

const StyledDiv = styled.div<StyledDivProps>`
  margin: 50px 0 !important;
  display: grid;
  gap: 30px;
  ${(props) => !props.hasSingleItem && multipleItemsGrid}
`

const multipleItemsGrid = css`
  ${mq['sm']} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq['lg']} {
    grid-template-columns: repeat(3, 1fr);
  }
`
type StyledDivProps = {
  hasSingleItem: boolean
}

type Props = {
  hasSingleItem?: boolean
  children: ReactNode
}

const GeneratedItemsWrapper = (props: Props) => {
  const { hasSingleItem = false, children } = props
  return <StyledDiv hasSingleItem={hasSingleItem}>{children}</StyledDiv>
}

export default GeneratedItemsWrapper
