import { useState, useEffect } from 'react'
import { breakpoints, mq, theme } from '../../assets/theme'
import styled from '@emotion/styled'

// Helpers
import { StaticImage } from 'gatsby-plugin-image'

// Data
import faq from '../../data/call-to-action-generator/faq.yaml'

// Types
import { TFormInfo } from '../../partials/slogan-generator/types'

// Helpers
import {
  isFormEmpty,
  retrieveFormInfoFromParams,
  scrollToItem,
  submitHubspotForm,
} from '../../partials/text-generators-partials/helpers'
import { isValidEmail } from '../../components/hubspot-form/helpers'
import { makeGeneratorRequest } from '../../partials/slogan-generator/helpers'
import useMediaQuery from '../../hooks/useMediaQuery'

// Components
import Container from '../../components/container/Container'
import SEO from '../../components/SEO'
import LayoutMain from '../../components/layouts/Main'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import AddingBackgroundWrapper from '../../components/background-vectors/AddingBackgroundWrapper'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import { Button } from '../../components/button/Button'
import GeneratedItemsWrapper from '../../partials/text-generators-partials/GeneratedItemsWrapper'
import GeneratedItem from '../../partials/text-generators-partials/GeneratedItem'
import SectionNext from '../../components/section-next/SectionNext'
import GeneratorForm from '../../partials/text-generators-partials/GeneratorForm'
import SplitTextLarge from '../../partials/split-text-large/SplitTextLarge'
import GeneratorFAQ from '../../partials/text-generators-partials/GeneratorFAQ'
import CTAComponents from '../../partials/call-to-action-generator/CTAComponents'
import ResourcesSection from '../../partials/call-to-action-generator/ResourcesSection'

const StyledSectionNextHeader = styled(SectionNextHeader)`
  gap: 0;
`

const StyledSectionNext = styled(SectionNext)`
  > div {
    > div {
      padding: 0;
      ${mq['sm']} {
        padding: 64px 66px;
      }
    }
  }
`

const CallToActionGeneratorPage = () => {
  const [formInfo, setFormInfo] = useState<TFormInfo>({
    customerInput: '',
    industry: null,
    location: '',
    city: '',
    region: '',
    country: '',
    firstName: '',
    lastName: '',
    email: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [output, setOutput] = useState([])

  useEffect(() => {
    retrieveFormInfoFromParams((urlFormInfo: TFormInfo) => {
      setFormInfo(urlFormInfo)
      submitForm(urlFormInfo)
    })
  }, [])

  useEffect(() => {
    scrollToItem('generated-output')
  }, [output.length === 0])

  const submitForm = async (urlFormInfo: TFormInfo | null = null) => {
    setIsLoading(true)
    if (!urlFormInfo) {
      const formId = '10b365ff-dc74-4e0a-9b1e-fe74ebcc6ded'
      await submitHubspotForm(
        formInfo,
        'call_to_action_generator_keywords',
        formId,
        'Call to action generator',
        'call to action'
      )
    }
    const response = await generateText(urlFormInfo || formInfo)
    setOutput(response)
    setIsLoading(false)
  }

  const generateText = async (formInfo: TFormInfo) => {
    const url = 'https://b12.io/lead_tools/generate_call_to_action/'
    return await makeGeneratorRequest(formInfo, url)
  }

  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.sm}px)`)

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1" align="center">
              Free call to action generator
            </Title>
            <Subtitle small>
              Generate strong calls to action that resonate with your target audience and boost
              click-through rates for your landing pages, emails, and more. The B12 call to action
              generator formulates a click-worthy call to action in seconds, so you spend less time
              writing copy and more time growing your business.
            </Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder="Enter some keywords for your call to action (e.g., “Call now, get free website”)"
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate my calls to action"
              onClick={() => submitForm()}
              loading={isLoading}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoading}
            />
          </SectionNextHeader>

          {output.length !== 0 && (
            <StyledSectionNextHeader align="center">
              <Title as="h3" className="generated-output" align="center">
                Here are your calls to action based on your input
              </Title>
              <GeneratedItemsWrapper>
                {output.map((item) => (
                  <GeneratedItem generatedText={item} />
                ))}
              </GeneratedItemsWrapper>
              <Button
                as="button"
                variant="primary"
                label="Reload"
                to="#"
                onClick={() => submitForm()}
                loading={isLoading}
              />
            </StyledSectionNextHeader>
          )}

          <StyledSectionNext
            containerType="shaped"
            tightPadding
            bg="none"
            container={{
              bg: theme.colors.brand.accentLightest,
              ...(isDesktop && { maxWidth: '80%' }),
              verticalAlign: 'center',
            }}
          >
            <SectionNextHeader bottomMargin="none">
              <Title textStyle={isDesktop ? 'h3' : 'h4'}>
                A compelling CTA (call to action) encourages the reader to act, whether your goal is
                to increase sales or boost conversion rates.
              </Title>
            </SectionNextHeader>
          </StyledSectionNext>
        </Container>
      </AddingBackgroundWrapper>

      <SplitTextLarge
        reversed
        title={<Title textStyle="h2">Why an effective call to action is so important</Title>}
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="Why an effective call to action is so important"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          A call to action is a written directive that encourages your audience to take deliberate
          action, whether that's booking a consultation, visiting a landing page, sharing a blog
          post, or purchasing a subscription. Call-to-action examples include:
          <ul>
            <li>Download now</li>
            <li>Start free trial</li>
            <li>Subscribe today</li>
            <li>Sign up</li>
          </ul>
        </p>
        <p>
          CTAs are action phrases that take the form of call-to-action buttons, website copy, or
          text links that guide potential customers toward the next steps on a web page or in an
          email. CTA copy should include language specific to your core audience and entice them to
          learn more by clicking.
        </p>
        <p>
          A clear call to action benefits both you and your target audience. It keeps them from
          feeling overwhelmed or confused and can produce more leads, prospects, and clients for
          your company.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={
          <Title textStyle="h2">
            Use B12's call to action generator tool to increase conversion rates
          </Title>
        }
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="Use B12's call to action generator tool to increase conversion rates"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          The B12 call to action generator helps you improve your conversion rate with free,
          actionable copy that encourages people to take the next step in working with your company.
        </p>
        <p>
          Based on your input (a short description of your needs), AI generates potential CTA text
          that you can copy, paste, and use as is, or tweak to describe next steps in more detail.
          Use the call to action generator repeatedly to get multiple generated outputs and test
          numerous options to find what performs best with your audience.
        </p>
      </SplitTextLarge>
      <CTAComponents />
      <ResourcesSection />
      <GeneratorFAQ topic="calls to actions" data={faq} />
    </LayoutMain>
  )
}

export default CallToActionGeneratorPage

export const Head = () => (
  <SEO
    pageTitle="Free call to action generator"
    pageDescription=" Generate strong calls to action that resonate with your target audience and boost clickthrough rates for your landing pages, emails, and more."
    prefixTitle
  />
)
