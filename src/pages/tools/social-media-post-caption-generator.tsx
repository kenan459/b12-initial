import { useState, useEffect } from 'react'
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
import data from '../../data/social-media-post-caption-generator/faq.yaml'

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
import HowToGrid from '../../partials/social-media-post-caption-generator/HowToGrid'
import ResourcesSection from '../../partials/social-media-post-caption-generator/ResourcesSection'
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

const SocialMediaPostCaptionGeneratorPage = () => {
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
      const formId = 'cdd013dc-056e-43d0-ba73-6034d0821b6c'
      await submitHubspotForm(
        formInfo,
        'social_media_post_caption_generator',
        formId,
        'Social media post caption generator',
        'social media post and caption'
      )
    }
    const response = await generateOutput(urlFormInfo || formInfo)
    setOutput(response?.[0] || '')
    setIsLoading(false)
  }

  const generateOutput = async (formInfo: TFormInfo) => {
    const url = 'https://b12.io/lead_tools/generate_post_caption/'
    return await makeGeneratorRequest(formInfo, url)
  }

  return (
    <LayoutMain>
      <AddingBackgroundWrapper>
        <Container>
          <StyledSectionNextHeader align="center">
            <Title as="h1" align="center">
              Social media posts and captions generator
            </Title>
            <Subtitle small>
              Strong social media engagement allows you to reach a larger audience, build brand
              trust, and drive referral traffic. Use the B12 social media caption generator to
              create a catchy caption that helps boost your Facebook, LinkedIn, and Instagram
              engagement. Save time writing social copy and get more likes, followers, shares, and
              retweets in no time!
            </Subtitle>
          </StyledSectionNextHeader>

          <GeneratorForm
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            submitForm={submitForm}
            customerInputPlaceholder="Enter the topic for your caption (e.g., “5 things to do when you get a speeding ticket”)"
          />

          <SectionNextHeader align="center">
            <Button
              to="#"
              as="button"
              variant="primary"
              label="Generate my caption"
              onClick={() => submitForm()}
              loading={isLoading}
              disabled={isFormEmpty(formInfo) || !isValidEmail(formInfo.email) || isLoading}
            />
          </SectionNextHeader>

          {output !== '' && (
            <StyledSectionNextHeader align="center">
              <Title as="h3" className="generated-output" align="center">
                Here’s a post caption draft based on your input
              </Title>
              <GeneratedItemsWrapper hasSingleItem>
                <GeneratedItem generatedText={output} splitText />
              </GeneratedItemsWrapper>
              <Button
                as="button"
                variant="primary"
                label="Create another caption"
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
                Create catchy captions in seconds to improve your social media presence
              </Title>
            </SectionNextHeader>
          </StyledSectionNext>
        </Container>
      </AddingBackgroundWrapper>

      <SplitTextLarge
        reversed
        title={<Title textStyle="h2">Why are social media captions important?</Title>}
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/business_needs.jpg"
            alt="Why are social media captions important?"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          Every social media post is a chance to communicate directly with your target audience. Use
          them to provide updates, start a conversation, share the backstory behind an image, offer
          advice, or share what you’re excited about. Compelling captions have the power to increase
          your account’s engagement and reach, drive website traffic, add leads to your funnel, and
          strengthen your brand.
        </p>
      </SplitTextLarge>

      <SplitTextLarge
        title={<Title textStyle="h2">Save time when you have AI create copy for you</Title>}
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        image={
          <StaticImage
            src="../../partials/slogan-generator/images/how_to_use_generator.jpg"
            alt="Save time when you have AI create copy for you"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <p>
          The B12 social media caption generator enables you to create the best caption options for
          your brand in no time. Rather than writing every new post from scratch, get your creative
          juices flowing and speed up the process with help from our AI caption generator tool.
          Publish new posts using caption suggestions to discover what messaging your audience
          responds to.
        </p>
        <p>
          Based on your input, AI generates captions you can refine to fit your post, brand voice,
          and audience. It's a starting point to ensure you create super-engaging Facebook,
          LinkedIn, and Instagram captions. Over time, find your perfect caption strategy to
          consistently get more likes, followers, and comments.
        </p>
      </SplitTextLarge>
      <HowToGrid />
      <ResourcesSection />
      <GeneratorFAQ data={data} topic="social media captions" />
    </LayoutMain>
  )
}

export default SocialMediaPostCaptionGeneratorPage

export const Head = () => (
  <SEO
    pageTitle="Social media posts and captions generator"
    pageDescription="Strong social media engagement allows you to reach a larger audience, build brand trust, and drive referral traffic"
    prefixTitle
  />
)
