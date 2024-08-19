import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'
import BackgroundWaves from './BackgroundWaves'

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  background: ${theme.colors.brand.accentLightest};
  padding: 56px 0 0;

  ${mq['md']} {
    padding: 72px 0 0;
  }
`

const Wrapper = ({ children }) => {
  return (
    <StyledSection>
      {children}
      <BackgroundWaves />
    </StyledSection>
  )
}

export default Wrapper
