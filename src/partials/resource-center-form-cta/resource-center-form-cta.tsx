import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

// Components
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import { HubspotForm } from '../../components/hubspot-form/HubspotForm'
import SignUpForm from '../../components/sign-up-form/SignupForm'
import SectionNext from '../../components/section-next/SectionNext'

// Images
import B12LogoSvg from '../../images/logo-b12.inline.svg'

// Types
type TRCFormSection = {
  title?: string
  text?: string
  ctaText?: string
  formType: 'b12-signup' | 'newsletter-form'
}

// Styles
const StyledB12LogoSvg = styled(B12LogoSvg)`
  width: 40px;
  margin-bottom: 5px;
`

const StyledSignupForm = styled(SignUpForm)`
  margin-top: 0;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  ${mq['md']} {
    grid-template-columns: 1fr 1fr;
  }
`

const Content = styled.div`
  display: grid;
  gap: 8px;
`

const RCFormCTA = ({
  title = 'Get more tips to grow online',
  text = 'Receive advice straight to your inbox on how to build brand awareness and convert more leads.',
  formType = 'b12-signup',
  ctaText = 'Get started',
}: TRCFormSection) => (
  <SectionNext tightPadding bg={theme.colors.brand.accentLightest}>
    <ContentWrapper>
      <Content>
        <StyledB12LogoSvg />
        <Title textStyle="h3">{title}</Title>
        <Subtitle small>{text}</Subtitle>
      </Content>
      {formType === 'b12-signup' && <StyledSignupForm ctaText={ctaText} />}
      {formType === 'newsletter-form' && (
        <HubspotForm
          formId="2726025d-29c0-457f-a09e-0e074791220d"
          formElementId="2726025d-29c0-457f-a09e-0e074791220d"
        />
      )}
    </ContentWrapper>
  </SectionNext>
)

export default RCFormCTA
