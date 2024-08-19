import styled from '@emotion/styled'
import { theme } from '@styles/theme'

// Styles
const LogoWrapper = styled.span`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.colors.text.light};
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
`

const OrchestraLogo = () => {
  return <LogoWrapper>Orchestra</LogoWrapper>
}

export default OrchestraLogo
