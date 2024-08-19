import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { getImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextImage from '@components/hero/HeroTextImage'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import TextIcon from '@components/text-icon/TextIcon'
import Accordion from '@components/accordion/Accordion'
import TextImage from '@components/text-image/TextImage'
import { Button } from '@components/button/Button'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'
import PopupWrapper from '@components/hubspot-popup-form/HubspotPopupForm'
import Grid from '@components/grid/Grid'

// Partials
import { List } from '@partials/tools-section/ToolsSection'
import SectionCta from '@partials/section-cta/SectionCta'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'

// Images
import CheckmarkIcon from '@images/icons/icon-plus.png'

const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 30px;
  background-color: ${theme.colors.surface.background};
  border-radius: 3px;

  ${mq['lg']} {
    padding: 40px;
  }
`

const FeatureNumber = styled.div`
  font-weight: 500;
  font-size: 26px;
  line-height: 26px;
  color: ${theme.colors.brand.accent};
  width: 60px;
  height: 60px;
  border: 2px solid ${theme.colors.brand.accent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  margin-bottom: 20px;
`

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`
const ProcessText = styled.div`
  .--plus-sign-list {
    list-style-type: none;
    padding-left: 10px;

    li {
      display: flex;
      align-items: flex-start;
      padding: 10px;
      margin: 0;

      &:before {
        content: '';
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url('${CheckmarkIcon}') no-repeat center center;
        background-size: contain;
        margin: 5px 10px 0 0;
      }
    }
  }
`

const LandingPage = ({ data }) => {
  const {
    hero,
    hero_free_resource,
    about,
    benefits,
    faq,
    process,
    how_it_works,
    pricing_cards,
    contact_cta,
  } = data.file.childMarkdownRemark.frontmatter

  const heroImage = hero ? getImage(hero.img) : getImage(hero_free_resource.image)
  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  return (
    <LayoutMain>
      {hero_free_resource ? (
        <HeroTextImage
          padding="lg"
          title={hero_free_resource.title}
          text={hero_free_resource.description}
          image={heroImage && <GatsbyImage image={heroImage} alt={hero_free_resource.title} />}
          cta={
            <>
              <Button
                variant="primary"
                as="button"
                to={hero_free_resource.cta_url}
                onClick={handleShowPopup}
                label={hero_free_resource.cta_text}
              />
            </>
          }
        />
      ) : (
        <HeroTextImage
          padding="lg"
          title={hero.title}
          text={hero.description}
          image={heroImage && <GatsbyImage image={heroImage} alt={hero.title} />}
          ctaAsButton
          ctaText="Try it now"
          ctaUrl="https://b12.io/signup"
        />
      )}

      {showPopup && hero_free_resource && (
        <PopupWrapper setIsVisible={setShowPopup} formId={hero_free_resource.form_embed_code} />
      )}

      {about && (
        <SectionNext container={{ split: 'half' }}>
          <SectionNextHeader>
            <Title as="h2">{about.title}</Title>
            {about.subtitle && <Subtitle>{about.subtitle}</Subtitle>}
          </SectionNextHeader>
          {about.description && (
            <div dangerouslySetInnerHTML={{ __html: about.description.html }} />
          )}
        </SectionNext>
      )}

      {process && (
        <SectionNext borderTop>
          {process.title && (
            <Title align="center" as="h2">
              {process.title}
            </Title>
          )}
          <List>
            {process.steps &&
              process.steps.map((step, idx: number) => {
                const stepImage = getImage(step.image)
                return (
                  <TextImage
                    key={`step-item-${idx}`}
                    title={step.title}
                    reversed={idx % 2 === 0}
                    text={
                      <ProcessText dangerouslySetInnerHTML={{ __html: step.description.html }} />
                    }
                    image={stepImage && <GatsbyImage image={stepImage} alt={step.title} />}
                  />
                )
              })}
          </List>
        </SectionNext>
      )}

      {how_it_works && (
        <SectionNext bg={theme.colors.brand.accentLightest}>
          <SectionNextHeader align="center">
            <Title align="center" as="h2">
              {how_it_works.title}
            </Title>
          </SectionNextHeader>
          <Grid>
            {how_it_works.items.map((item, idx: number) => (
              <FeatureItem key={`feature-item-${idx}`}>
                <FeatureNumber>{item.order}</FeatureNumber>
                <Title as="h3" textStyle="h4">
                  {item.title}
                </Title>
                <Text>{item.description}</Text>
              </FeatureItem>
            ))}
          </Grid>
        </SectionNext>
      )}

      {pricing_cards && (
        <SectionNext>
          <SectionNextHeader>
            <Title align="center" as="h2">
              {pricing_cards.title}
            </Title>
            <Text>{pricing_cards.description}</Text>
          </SectionNextHeader>
          <Grid>
            {pricing_cards.list.map((item, idx: number) => (
              <PricingCard key={`item-item-${idx}`}>
                <Title as="h4">{item.title}</Title>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </PricingCard>
            ))}
          </Grid>
        </SectionNext>
      )}

      {benefits && (
        <SectionNext bg={theme.colors.brand.accentLightest}>
          <SectionNextHeader>
            <Title as="h2">{benefits.title}</Title>
            <Text>{benefits.description}</Text>
          </SectionNextHeader>
          <Grid>
            {benefits.features.map((feature, idx: number) => {
              const featureImage = getImage(feature.icon)

              return (
                <TextIcon
                  key={`feature-item-${idx}`}
                  title={feature.title}
                  text={feature.description}
                  icon={featureImage && <GatsbyImage image={featureImage} alt={feature.title} />}
                  iconSize={feature.iconSize ? feature.iconSize : 'xl'}
                  vertical
                  iconLight
                />
              )
            })}
          </Grid>
        </SectionNext>
      )}
      {faq && (
        <SectionNext
          container={{
            maxWidth: '800px',
          }}
        >
          <SectionNextHeader align="center">
            <Title align="center" as="h3">
              {faq.title}
            </Title>
          </SectionNextHeader>
          {}
          <Accordion items={faq.items} />
        </SectionNext>
      )}

      <SuccessStoriesSlider />

      {contact_cta ? (
        <CtaSectionBanner bg="dark">
          <Title light align="center" as="h3">
            {contact_cta.title}
          </Title>
          <Button
            as="anchor"
            variant="primary"
            to={contact_cta.cta_url}
            label={contact_cta.cta_text}
            onClick={handleShowPopup}
          />
        </CtaSectionBanner>
      ) : (
        <SectionCta
          title="The best way to grow your business online"
          text="Schedule a personalized demo today to let a B12 Consultant show you the difference we can make for your firm."
          ctaText="Try it now"
        />
      )}
    </LayoutMain>
  )
}

export const query = graphql`
  query ($id: String!) {
    file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          hero {
            title
            description
            img {
              childImageSharp {
                gatsbyImageData(width: 500, placeholder: BLURRED)
              }
            }
          }
          hero_free_resource {
            title
            description
            form_embed_code
            image {
              childImageSharp {
                gatsbyImageData(width: 500, placeholder: BLURRED)
              }
            }
            cta_text
            cta_url
          }
          about {
            title
            subtitle
            description {
              html
            }
          }
          faq {
            title
            items {
              question
              answer
            }
          }
          benefits {
            title
            description
            features {
              icon {
                childImageSharp {
                  gatsbyImageData(width: 65, placeholder: BLURRED)
                }
              }
              title
              description
              iconSize
            }
          }
          process {
            title
            steps {
              title
              description {
                html
              }
              image {
                childImageSharp {
                  gatsbyImageData(width: 650, placeholder: BLURRED)
                }
              }
            }
          }
          how_it_works {
            title
            items {
              order
              title
              description
              order
            }
          }
          pricing_cards {
            title
            description
            list {
              title
              description
            }
          }
          contact_cta {
            title
            cta_text
            cta_url
          }
        }
      }
    }
  }
`

export default LandingPage

export const Head = ({ data }) => {
  const { title, description } = data.file.childMarkdownRemark.frontmatter

  return <SEO pageTitle={title} pageDescription={description} />
}
