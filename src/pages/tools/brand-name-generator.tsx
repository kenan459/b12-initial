import React, { useState, useEffect } from 'react'
import { mq, theme } from '../../assets/theme'
import styled from '@emotion/styled'

// Helpers
import { StaticImage } from 'gatsby-plugin-image'

// Types
import { TFormInfo } from '../../partials/slogan-generator/types'

// Helpers
import {
  isFormEmpty,
  retrieveFormInfoFromParams,
  scrollToItem,
  submitHubspotForm,
} from '../../partials/text-generators-partials/helpers'
import { makeGeneratorRequest } from '../../partials/slogan-generator/helpers'
import { isValidEmail } from '../../components/hubspot-form/helpers'

// Data
import data from '../../data/brand-name-generator/faq.yaml'

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
import SplitTextLarge from '../../partials/split-text-large/SplitTextLarge'
import SectionNext from '../../components/section-next/SectionNext'
import GeneratorForm from '../../partials/text-generators-partials/GeneratorForm'
import CatchyBusinessNameElements from '../../partials/brand-name-generator/CatchyBusinessNameElements'
import ResourcesSection from '../../partials/brand-name-generator/ResourcesSection'
import GeneratorFAQ from '../../partials/text-generators-partials/GeneratorFAQ'

const StyledSectionNextHeader = styled(SectionNextHeader)`
  gap: 0;
`

const StyledSectionNext = styled(SectionNext)`
  > div {
    ${mq['sm']} {
      display: flex;
      justify-content: center;
    }
    > div {
      padding: 0;
      ${mq['sm']} {
        padding: 64px 66px;
        max-width: 80%;
        h2 {
          font-size: 32px;
          line-height: 40px;
        }
      }
    }
  }
`

const BrandNameGeneratorPage = () => {
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
  }, [output.length !== 0])

  const submitForm = async (urlFormInfo: TFormInfo | null = null) => {
    setIsLoading(true)
    if (!urlFormInfo) {
      const formId = '4112a226-cc2f-4b58-878e-408630b3f591'
      await submitHubspotForm(
        formInfo,
        'brand_name_generator_keywords',
        formId,
        'Brand name generator',
        'brand name'
      )
    }
    const response = await generateOutput(urlFormInfo || formInfo)
    setOutput(response || [])
    setIsLoading(false)
  }

  const generateOutput = async (formInfo: TFormInfo) => {
    const url = 'https://b12.io/lead_tools/generate_brand_name/'
    return await makeGeneratorRequest(formInfo, url)
  }

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1" align="center">
              Free brand name generator
            </Title>
            <Subtitle small>
              A memorable business name can help you create a brand identity that captivates your
              target audience and encourages them to learn more about working with you. Use B12’s
              AI-powered business name generator to produce creative business names in seconds.
            </Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder="Enter some keywords about your business, (e.g., “Law, justice”)"
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate business name ideas"
              onClick={() => submitForm()}
              loading={isLoading}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoading}
            />
          </SectionNextHeader>

          {output.length !== 0 && (
            <StyledSectionNextHeader align="center">
              <Title as="h3" className="generated-output" align="center">
                Here are a few brand names that match your inputs
              </Title>
              <GeneratedItemsWrapper>
                {output.map((text) => (
                  <GeneratedItem generatedText={text} />
                ))}
              </GeneratedItemsWrapper>
              <Button
                as="button"
                variant="primary"
                label="See other brand names"
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
              verticalAlign: 'center',
            }}
          >
            <SectionNextHeader bottomMargin="none">
              <Title textStyle="h4">
                Your company name greatly affects how potential customers view you.
              </Title>
            </SectionNextHeader>
          </StyledSectionNext>
        </Container>
      </AddingBackgroundWrapper>
      <SplitTextLarge
        reversed
        title={
          <Title textStyle="h2">
            The right name can turn a business idea into a memorable brand
          </Title>
        }
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="The right name can turn a business idea into a memorable brand"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Naming a new business is a big decision. Your business name can help you attract
          customers, convey information about your services, and leave a lasting impression.
        </p>
        <p>
          So, how do you get started choosing the name of your brand? Start by thinking about the
          company’s mission, services, or unique story. Next, use our free brand name generator to
          produce business name ideas. Then, check if corresponding domain names are available for
          the company name you like. After confirming that another business doesn’t already use your
          desired brand name, you can start developing your brand, including its online presence.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={
          <Title textStyle="h2">
            Use our free business name generator to find unique business name ideas
          </Title>
        }
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="Use our free business name generator to find unique business name ideas"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Establishing your brand can take years, but you only need seconds to discover your
          business name. B12's company name generator presents you with brandable names that fit
          your industry, values, and offerings — for free.
        </p>
        <p>
          Picking a good business name can lay the foundation of your brand and help you get noticed
          by prospective clients. If you’re stuck in the brainstorming phase, our business name
          generator can help! Based on your input, AI suggests several naming options that get you
          one step close to establishing a powerful business. Feel free to use any of the names
          generated as is, or put your own spin on it.
        </p>
      </SplitTextLarge>

      <CatchyBusinessNameElements />
      <ResourcesSection />
      <GeneratorFAQ data={data} topic="brand names" />
    </LayoutMain>
  )
}

export default BrandNameGeneratorPage

export const Head = () => (
  <SEO
    pageTitle="Free online brand name generator"
    pageDescription="Use B12’s free brand name generator to generate creative and catchy brand name ideas for your business."
    prefixTitle
  />
)
