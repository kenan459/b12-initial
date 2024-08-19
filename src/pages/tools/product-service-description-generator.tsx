import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'

// Components
import Container from '@components/container/Container'
import SEO from '@components/SEO'
import FaqSchemaTemplate from '@components/faq-schema-template'
import LayoutMain from '@components/layouts/Main'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import AddingBackgroundWrapper from '@components/background-vectors/AddingBackgroundWrapper'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import { Button } from '@components/button/Button'

// Partials
import GeneratorForm from '@partials/text-generators-partials/GeneratorForm'

// Helpers
import {
  isFormEmpty,
  scrollToItem,
  submitHubspotForm,
} from '@partials/text-generators-partials/helpers'
import { isValidEmail } from '@components/hubspot-form/helpers'
import { getIndustryByName, makeGeneratorRequest } from '@partials/slogan-generator/helpers'

// Types
import { TFormInfo } from '@partials/slogan-generator/types'

// Data
import data from '@data/product-service-description-generator/faq.yaml'

// Components
import GeneratedItemsWrapper from '@partials/text-generators-partials/GeneratedItemsWrapper'
import GeneratedItem from '@partials/text-generators-partials/GeneratedItem'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import GeneratorFAQ from '@partials/text-generators-partials/GeneratorFAQ'
import SectionNext from '@components/section-next/SectionNext'
import ItemsWrapper from '@components/items-wrapper/ItemsWrapper'
import TextInput from '@components/text-input/TextInput'
import ProductServiceDescriptionGrid from '@partials/product-service-description-generator/ProductServiceDescriptionGrid'
import ResourcesSection from '@partials/product-service-description-generator/ResourcesSection'

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

const ProductServiceDescriptionGeneratorPage = () => {
  const [formInfo, setFormInfo] = useState<TFormInfo>({
    product_name: '',
    product_description: '',
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
  const [output, setOutput] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const urlProductName = params.get('product_name') || ''
    const urlProductDescription = params.get('product_description') || ''
    const urlCity = params.get('city') || ''
    const urlRegion = params.get('region') || ''
    const urlCountry = params.get('country') || ''
    const urlIndustry = params.get('industry') || ''
    if (urlProductName && urlProductDescription && (urlCity || urlRegion || urlCountry)) {
      const industryData = getIndustryByName(urlIndustry)
      const urlFormInfo = {
        product_name: urlProductName,
        product_description: urlProductDescription,
        industry: industryData,
        location: `${urlCity}, ${urlRegion}, ${urlCountry}`,
        city: urlCity,
        region: urlRegion,
        country: urlCountry,
        firstName: '',
        lastName: '',
        email: '',
      }
      setFormInfo(urlFormInfo)
      submitForm(urlFormInfo)
    }
  }, [])

  useEffect(() => {
    scrollToItem('generated-output')
  }, [output !== ''])

  const submitForm = async (urlFormInfo: TFormInfo | null = null) => {
    setIsLoading(true)
    if (!urlFormInfo) {
      const formId = 'fdf65d78-8ba5-4a16-b224-02e6c762b9dd'
      await submitHubspotForm(
        formInfo,
        '',
        formId,
        'Products and services description generator contact form',
        'product/service description',
        [
          {
            objectTypeId: '0-1',
            name: 'product_service_description_generator_keywords',
            value: formInfo.product_description || '',
          },
          {
            objectTypeId: '0-1',
            name: 'product_service_name_generator_keywords',
            value: formInfo.product_name || '',
          },
        ]
      )
    }
    const response = await generateOutput(urlFormInfo || formInfo)
    setOutput(response?.[0] || '')
    setIsLoading(false)
  }

  const generateOutput = async (formInfo: TFormInfo) => {
    const generatorUrl = 'https://b12.io/lead_tools/generate_product_description/'
    return await makeGeneratorRequest(formInfo, generatorUrl, {
      product_name: formInfo.product_name,
      product_description: formInfo.product_description,
    })
  }

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1" align="center">
              Free service & product description generator
            </Title>
            <Subtitle small>
              High-quality product descriptions and service descriptions that detail key features
              and benefits have the power to influence potential buyers' decision-making. The same
              goes for service descriptions. Use our AI tool to save time writing your descriptions
              and get a step closer to better conversion rates!
            </Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder=""
            keywordsRow={
              <ItemsWrapper itemsNum={2}>
                <TextInput
                  placeholder="Enter the product/service name"
                  inputSize="large"
                  value={formInfo.product_name}
                  onChange={(event) =>
                    setFormInfo((prevState) => ({ ...prevState, product_name: event.target.value }))
                  }
                />
                <TextInput
                  placeholder="Enter some words about the service/product"
                  inputSize="large"
                  value={formInfo.product_description}
                  onChange={(event) =>
                    setFormInfo((prevState) => ({
                      ...prevState,
                      product_description: event.target.value,
                    }))
                  }
                />
              </ItemsWrapper>
            }
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate my description"
              onClick={() => submitForm()}
              loading={isLoading}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoading}
            />
          </SectionNextHeader>

          {output !== '' && (
            <StyledSectionNextHeader align="center">
              <Title as="h3" className="generated-output" align="center">
                Here's a product/service description that matches your input
              </Title>
              <GeneratedItemsWrapper hasSingleItem>
                <GeneratedItem generatedText={output} splitText />
              </GeneratedItemsWrapper>
              <Button
                as="button"
                variant="primary"
                label="See another description"
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
                Get compelling product descriptions and service descriptions for more sales with
                less effort.
              </Title>
            </SectionNextHeader>
          </StyledSectionNext>
        </Container>
      </AddingBackgroundWrapper>

      <SplitTextLarge
        reversed
        title={
          <Title textStyle="h2">
            Why product and service descriptions matter for your business
          </Title>
        }
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="Why product and service descriptions matter for your business"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Service and product descriptions help your target audience make informed purchasing
          decisions. In fact, 87% of consumers say product content is a critical factor in their{' '}
          <a href="https://thegood.com/insights/product-descriptions/">decision to buy</a>. You
          can't just list product names and prices on your website and expect to consistently hit
          your sales targets. You must create unique descriptions detailing product features,
          benefits, use cases, and the results that potential customers can expect to see.
        </p>
        <p>
          Whether you have a consultancy that offers services directly on your website or an
          ecommerce business that sells products from an online store, these pages have the power to
          increase sales and attract potential clients.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={
          <Title textStyle="h2">
            Use an AI product description generator to save time writing product descriptions
          </Title>
        }
        subtitle="The B12 email template generator is designed to inspire your sales, marketing, and other informational or transactional emails."
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="Use an AI product description generator to save time writing product descriptions"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Creating unique descriptions for every product or service you sell is challenging and
          time-consuming, especially when you have a business to run, a team to manage, and clients
          to serve. Save time and overcome writer’s block using the B12 service and product
          description generator.
        </p>
        <p>
          Based on your input, our AI tool generates a new product or service description as a
          helpful starting point. Customize it to fit your needs, adding information about your
          product’s specific backstory, benefits, price, warranty, results, and refund policy.
        </p>
      </SplitTextLarge>
      <ProductServiceDescriptionGrid />
      <ResourcesSection />
      <GeneratorFAQ topic="service and product descriptions" data={data} />
    </LayoutMain>
  )
}

export default ProductServiceDescriptionGeneratorPage

export const Head = () => {
  return (
    <SEO
      pageTitle="Free online products and services description generator | B12"
      pageDescription="Use B12’s free products and services description generator to write persuasive descriptions for your website"
      prefixTitle
      schemaTemplate={FaqSchemaTemplate(data)}
    />
  )
}
