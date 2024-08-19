import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

// Components
import Container from '../../components/container/Container'
import SEO from '../../components/SEO'
import LayoutMain from '../../components/layouts/Main'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import AddingBackgroundWrapper from '../../components/background-vectors/AddingBackgroundWrapper'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import { Button } from '../../components/button/Button'

// Partials
import GeneratorForm from '../../partials/text-generators-partials/GeneratorForm'

// Helpers
import { StaticImage } from 'gatsby-plugin-image'

// Types
import { TFormInfo } from '../../partials/slogan-generator/types'

// Helpers
import { generateEmail } from '../../partials/email-template-generator/helpers'
import {
  isFormEmpty,
  retrieveFormInfoFromParams,
  scrollToItem,
  submitHubspotForm,
} from '../../partials/text-generators-partials/helpers'
import { isValidEmail } from '../../components/hubspot-form/helpers'

// Data
import emailsFAQ from '../../data/email-template-generator/faq.yaml'

// Components
import GeneratedItemsWrapper from '../../partials/text-generators-partials/GeneratedItemsWrapper'
import GeneratedItem from '../../partials/text-generators-partials/GeneratedItem'
import SplitTextLarge from '../../partials/split-text-large/SplitTextLarge'
import WriteEffectiveEmail from '../../partials/email-template-generator/WriteEffectiveEmail'
import ResourcesSection from '../../partials/email-template-generator/ResourcesSection'
import GeneratorFAQ from '../../partials/text-generators-partials/GeneratorFAQ'
import SectionNext from '../../components/section-next/SectionNext'
import { theme } from '../../assets/theme'

const StyledSectionNextHeader = styled(SectionNextHeader)`
  gap: 0;
`

const EmailGeneratorPage = () => {
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
  const [email, setEmail] = useState('')

  useEffect(() => {
    retrieveFormInfoFromParams((urlFormInfo: TFormInfo) => {
      setFormInfo(urlFormInfo)
      submitForm(urlFormInfo)
    })
  }, [])

  useEffect(() => {
    scrollToItem('generated-email')
  }, [email !== ''])

  const submitForm = async (urlFormInfo: TFormInfo | null = null) => {
    setIsLoading(true)
    if (!urlFormInfo) {
      const formId = 'c974bafc-51af-4c5f-abe7-dece628fd865'
      await submitHubspotForm(
        formInfo,
        'email_generator_keywords',
        formId,
        'Email template generator contact form',
        'email'
      )
    }
    const response = await generateEmail(urlFormInfo || formInfo)
    setEmail(response?.[0] || '')
    setIsLoading(false)
  }

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1">Free email template generator</Title>
            <Subtitle small>
              An engaging email message can make your business stand out, but writing professional
              emails is deceptively time-consuming.
            </Subtitle>
            <Subtitle small>
              Let B12's email template creation tool produce copy in seconds to save time, capture
              contacts' attention, and effectively sell your services.
            </Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder={
              'Enter key points for the email separated by commas, (e.g., “Thank you for contacting our law office,  fill out this intake form,  provide your availability”)'
            }
            numCustomerInputLines={2}
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate my email"
              onClick={() => submitForm()}
              loading={isLoading}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoading}
            />
          </SectionNextHeader>

          {email !== '' && (
            <StyledSectionNextHeader align="center">
              <Title as="h3" className="generated-email">
                Here's an email template that matches your input
              </Title>
              <GeneratedItemsWrapper hasSingleItem>
                <GeneratedItem generatedText={email} splitText />
              </GeneratedItemsWrapper>
              <Button
                as="button"
                variant="primary"
                label="See another email"
                to="#"
                onClick={() => submitForm()}
                loading={isLoading}
              />
            </StyledSectionNextHeader>
          )}

          <SectionNext
            containerType="shaped"
            tightPadding
            bg="none"
            container={{
              bg: theme.colors.brand.accentLightest,
              maxWidth: '80%',
              verticalAlign: 'center',
            }}
          >
            <SectionNextHeader bottomMargin="none">
              <Title textStyle="h3">
                Sending emails to your customers can help boost your website traffic, improve sales,
                and build relationships.
              </Title>
            </SectionNextHeader>
          </SectionNext>
        </Container>
      </AddingBackgroundWrapper>

      <SplitTextLarge
        reversed
        title={<Title textStyle="h2">Why emails are so important for your business</Title>}
        subtitle="Email is one of the most effective tools at your disposal, with the highest ROI of any marketing strategy or channel."
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="Why emails are so important for your business"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Want to set your firm apart from companies offering similar services and stay top of mind
          with clients? Email is your answer.
        </p>
        <p>
          According to{' '}
          <a href="https://www.radicati.com/wp/wp-content/uploads/2015/02/Email-Statistics-Report-2015-2019-Executive-Summary.pdf">
            a report from Radicati
          </a>
          , approximately 3 billion people use email each year. It boosts brand awareness,{' '}
          <a href="https://www.b12.io/resource-center/traffic-generation/free-website-promotion-tactics-2022.html">
            promotes your website
          </a>
          , and brings in more revenue. Customers spend{' '}
          <a href="https://www.disruptiveadvertising.com/marketing/email-marketing-statistics/">
            138%
          </a>{' '}
          more on average if they’ve received email marketing. As a result, email marketing
          campaigns boast an impressive ROI of{' '}
          <a href="https://dma.org.uk/uploads/ckeditor/National-client-email-2015.pdf">3800%</a>.
          Pair that return with the time savings you get from a user-friendly free email template
          generator, and your efficiency skyrockets.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={
          <Title textStyle="h2">
            Use B12's free email template generator to email clients more effectively
          </Title>
        }
        subtitle="The B12 email template generator is designed to inspire your sales, marketing, and other informational or transactional emails."
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="How to use B12's free email template generator to generate catchy emails"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Based on your input, the generated email provides a jumping-off point from which you can
          further refine an email’s content to fit your brand and the recipient. It's meant to be
          the start, not the finish line. You'll want to add more details and personalization to
          craft the perfect email.
        </p>
      </SplitTextLarge>
      <WriteEffectiveEmail />
      <ResourcesSection />
      <GeneratorFAQ topic="emails" data={emailsFAQ} />
    </LayoutMain>
  )
}

export default EmailGeneratorPage

export const Head = () => (
  <SEO
    pageTitle="Free email template generator"
    pageDescription="An engaging email message can make your business stand out from the crowd, but writing professional emails is deceptively time-consuming."
    prefixTitle
  />
)
