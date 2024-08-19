import React, { useState, useEffect } from 'react'
import { theme } from '../../assets/theme'
import styled from '@emotion/styled'

// Helpers
import { StaticImage } from 'gatsby-plugin-image'

// Data
import faq from '../../data/blog-post-outline-generator/faq.yaml'

// Types
import { TFormInfo } from '../../partials/slogan-generator/types'

// Helpers
import {
  formatText,
  isFormEmpty,
  retrieveFormInfoFromParams,
  scrollToItem,
  submitHubspotForm,
} from '../../partials/text-generators-partials/helpers'
import { makeGeneratorRequest } from '../../partials/slogan-generator/helpers'
import { isValidEmail } from '../../components/hubspot-form/helpers'

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
import HowToStartBlogGrid from '../../partials/blog-post-outline-generator/HowToStartBlogGrid'
import ResourcesSection from '../../partials/blog-post-outline-generator/ResourcesSection'
import GeneratorFAQ from '../../partials/text-generators-partials/GeneratorFAQ'
import GeneratorForm from '../../partials/text-generators-partials/GeneratorForm'

const StyledSectionNextHeader = styled(SectionNextHeader)`
  gap: 0;
`

const PostOutlineGeneratorPage = () => {
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
  const [output, setOutput] = useState('')

  useEffect(() => {
    retrieveFormInfoFromParams((urlFormInfo: TFormInfo) => {
      setFormInfo(urlFormInfo)
      submitForm(urlFormInfo)
    })
  }, [])

  useEffect(() => {
    scrollToItem('generated-output')
  }, [output !== ''])

  const submitForm = async (urlFormInfo: TFormInfo | null = null) => {
    setIsLoading(true)
    if (!urlFormInfo) {
      const formId = 'db94e534-ed07-441c-b448-4c8d2f04d466'
      await submitHubspotForm(
        formInfo,
        'post_outline_generator_keywords',
        formId,
        'Blog post outline generator',
        'blog post outline'
      )
    }
    const response = await generateBlogPostOutline(urlFormInfo || formInfo)
    setOutput(response?.[0] || '')
    setIsLoading(false)
  }

  const generateBlogPostOutline = async (formInfo: TFormInfo) => {
    const url = 'https://b12.io/lead_tools/generate_post_outline/'
    return await makeGeneratorRequest(formInfo, url)
  }

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1">Free blog outline generator</Title>
            <Subtitle small>
              A memorable article can make your blog stand out from the rest of the millions out
              there. Kickstart your next blog post with B12's free blog idea and outline generator.
              Enter the topic for your blog post, and we'll generate an outline based on your input.
              In seconds, your blog idea comes to life!
            </Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder="Enter the topic for your blog post., (e.g., “5 things to do when you get a speeding ticket”)"
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate my outline"
              onClick={() => submitForm()}
              loading={isLoading}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoading}
            />
          </SectionNextHeader>

          {output !== '' && (
            <StyledSectionNextHeader align="center">
              <Title as="h3" className="generated-output">
                Here’s a blog outline draft based on your input
              </Title>
              <GeneratedItemsWrapper hasSingleItem>
                <GeneratedItem
                  generatedText={output}
                  splitText
                  formatText={(text) => formatText(text, ['Blog topic:', 'Blog outline:'])}
                />
              </GeneratedItemsWrapper>
              <Button
                as="button"
                variant="primary"
                label="Create another outline"
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
                Frequently publishing high-quality blog posts can drive traffic, improve search
                rankings, and build authority for your business website.
              </Title>
            </SectionNextHeader>
          </SectionNext>
        </Container>
      </AddingBackgroundWrapper>
      <SplitTextLarge
        reversed
        title={<Title textStyle="h2">Why blogging is important for your business</Title>}
        subtitle="A blog is vital to your digital marketing strategy, appealing to both website visitors and search engines."
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="Why blog is so important for your business"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Relevant content shows search engines you’re an authority on industry topics and an
          essential resource to potential clients. This can lead to better search rankings, an
          expanded online footprint on relevant directories, and even conversions.
        </p>
        <p>
          With the right content marketing strategy in place, your company can capture more leads,
          drum up interest in your services, and educate your audience to build brand authority.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={
          <Title textStyle="h2">How to use B12's AI blog idea generator to create content</Title>
        }
        subtitle="The B12 blog outline generator is designed to help you save time as you flesh out your next blog post idea."
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="How to use B12's AI blog idea generator to create content"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Based on the blog topic you share, AI generates an outline. This outline is a jumping-off
          point to brainstorm new ideas and write blog content. It's just a start, but sometimes
          that's the hardest part. To make your blog post publish-ready, you'll want to add details
          and keywords relevant to your brand and target audience.
        </p>
        <p>
          With your creative juices flowing and awesome ideas brought to life in seconds, you spend
          less time on the basics and more time focused on information that's compelling to your
          prospective clients.
        </p>
      </SplitTextLarge>
      <HowToStartBlogGrid />
      <ResourcesSection />
      <GeneratorFAQ data={faq} topic="blog ideas and outlines" />
    </LayoutMain>
  )
}

export default PostOutlineGeneratorPage

export const Head = () => (
  <SEO
    pageTitle="Free blog outline generator"
    pageDescription="A memorable article can make your blog stand out from the rest of the millions out there. Kickstart your next blog post with B12's free blog idea and outline generator."
    prefixTitle
  />
)
