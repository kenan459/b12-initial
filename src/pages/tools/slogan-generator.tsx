import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import Container from '@components/container/Container'
import SEO from '@components/SEO'
import FaqSchemaTemplate from '@components/faq-schema-template'
import LayoutMain from '@components/layouts/Main'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import { Button } from '@components/button/Button'
import AddingBackgroundWrapper from '@components/background-vectors/AddingBackgroundWrapper'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import GeneratorFAQ from '@partials/text-generators-partials/GeneratorFAQ'

// Partials
import SlogansList from '@partials/slogan-generator/SlogansList'
import ChooseEffectiveSloganSection from '@partials/slogan-generator/ChooseEffectiveSloganSection'
import ResourcesSection from '@partials/slogan-generator/ResourcesSection'
import GeneratorForm from '@partials/text-generators-partials/GeneratorForm'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'

// Data
import slogansFAQ from '@data/slogans-generator/faq.yaml'

// Types
import { TFormInfo } from '@partials/slogan-generator/types'
import styled from '@emotion/styled'

// Helpers
import { generateSlogans } from '@partials/slogan-generator/helpers'
import {
  isFormEmpty,
  retrieveFormInfoFromParams,
  scrollToItem,
  submitHubspotForm,
} from '@partials/text-generators-partials/helpers'
import { isValidEmail } from '@components/hubspot-form/helpers'

const StyledSectionNextHeader = styled(SectionNextHeader)`
  gap: 0;
  margin-bottom: 20px !important;
`

const SloganGeneratorPage = () => {
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

  const [slogans, setSlogans] = useState<string[]>([])
  const [isLoadingSlogans, setIsLoadingSlogans] = useState(false)
  const [isLoadingMoreSlogans, setIsLoadingMoreSlogans] = useState(false)

  useEffect(() => {
    retrieveFormInfoFromParams((urlFormInfo: TFormInfo) => {
      setFormInfo(urlFormInfo)
      generateSlogans(urlFormInfo, setIsLoadingSlogans, setIsLoadingMoreSlogans, setSlogans)
    })
  }, [])

  useEffect(() => {
    scrollToItem('slogans-list')
  }, [slogans.length === 0])

  const submitForm = async () => {
    setIsLoadingSlogans(true)
    const formId = '0054ff35-aca2-400d-a904-2d87abb14263'
    await submitHubspotForm(
      formInfo,
      'slogan_campaign_keywords',
      formId,
      'Slogan generator',
      'slogan'
    )
    await generateSlogans(formInfo, setIsLoadingSlogans, setIsLoadingMoreSlogans, setSlogans)
    setIsLoadingSlogans(false)
  }

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1">Free slogan generator</Title>
            <Subtitle small>
              A catchy and memorable slogan can make your business stand out from the crowd.
            </Subtitle>
            <Subtitle small>Get inspiration for your own with B12's free slogan maker.</Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder={
              'Enter terms separated by commas, (e.g., "Law office of Jane Smith, Estate law, Probate law")'
            }
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate slogans"
              onClick={submitForm}
              loading={isLoadingSlogans}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoadingSlogans}
            />
          </SectionNextHeader>

          <SlogansList
            slogans={slogans}
            generateSlogans={() =>
              generateSlogans(
                formInfo,
                setIsLoadingSlogans,
                setIsLoadingMoreSlogans,
                setSlogans,
                true,
                slogans
              )
            }
            loadingSlogans={isLoadingMoreSlogans}
          />
        </Container>
      </AddingBackgroundWrapper>

      <SplitTextLarge
        reversed
        title={<Title textStyle="h2">Why slogans are so important for your business</Title>}
        subtitle="A good slogan or tagline helps set your firm apart from others providing similar services. "
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="Why slogans are so important for your business"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          It has the power to influence purchasing decisions and, for some buyers, can be an
          important factor in choosing a service. In fact, a 2020{' '}
          <a href="https://themanifest.com/digital-strategy/6-brand-elements-rebranding-strategy">
            study conducted by The Manifest
          </a>{' '}
          found that 50% of people identify the slogan as the brand element that helps them
          understand the company's unique selling proposition the most.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={
          <Title textStyle="h2">
            How to use B12's free slogan generator to generate catchy slogans
          </Title>
        }
        subtitle="The B12 slogan generator is designed to provide inspiration for your business slogan. "
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="How to use B12's free slogan generator to generate catchy slogans"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Based on your inputs, generated slogans provide a jumping-off point from which you can
          brainstorm ideas and refine concepts. It's meant to be the start, not the finish line. To
          craft the perfect slogan you're going to want to add your own ideas and brand elements.
        </p>
      </SplitTextLarge>

      <ChooseEffectiveSloganSection />
      <ResourcesSection />
      <GeneratorFAQ topic="slogans" data={slogansFAQ} />
    </LayoutMain>
  )
}

export default SloganGeneratorPage

export const Head = () => {
  return (
    <SEO
      pageTitle="Free slogan generator"
      pageDescription="A catchy and memorable slogan can make your business stand out from the crowd. Get inspiration for your own with B12's free slogan maker."
      prefixTitle
      schemaTemplate={FaqSchemaTemplate(slogansFAQ)}
    />
  )
}
