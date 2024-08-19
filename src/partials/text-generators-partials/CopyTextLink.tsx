import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

import CopyIcon from '../../images/icons/icon-copy.inline.svg'

export const StyledButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 18px;
  cursor: pointer;
  display: flex;
  line-height: 0;
  align-items: center;
  background: none;
  border: none;
  span {
    font-size: 16px;
    color: ${theme.colors.brand.accent};
    margin: 0;
  }
  &:active {
    border: 1px solid ${theme.colors.brand.accent};
    border-radius: 6px;
  }
`

type CopyTextLinkProps = {
  copiedText: string
}

const CopyTextLink = (props: CopyTextLinkProps) => {
  const { copiedText } = props
  const copy = () => {
    navigator.clipboard.writeText(copiedText)
  }

  return (
    <StyledButton onClick={copy}>
      <span>copy</span>
      <CopyIcon />
    </StyledButton>
  )
}

export default CopyTextLink
