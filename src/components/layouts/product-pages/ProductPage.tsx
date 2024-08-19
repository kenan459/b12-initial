import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { getImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import HeroTextImage from '@components/hero/HeroTextImage'
import Title from '@components/title/Title'
import TextIcon from '@components/text-icon/TextIcon'
import BubbleImage from '@components/bubble-image/BubbleImage'
import Accordion from '@components/accordion/Accordion'
import TextImage from '@components/text-image/TextImage'
import Card from '@components/card/Card'
import { Button } from '@components/button/Button'
import Grid from '@components/grid/Grid'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import ProductOverview from '@partials/product-overview/ProductOverview'

// Images
import CheckmarkIcon from '@images/icons/checkmark-round-icon.png'

// Styles
const StyledSectionNext = styled(SectionNext)`
  padding-top: 0px !important;
`

const StyledListContent = styled.div`
  .--check-icon-list {
    list-style-type: none;
    padding-left: 0px;

    li {
      padding-left: 30px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 5px;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('${CheckmarkIcon}') no-repeat center center;
        background-size: 20px 20px;
      }
    }
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${mq['md']} {
    gap: 64px;
  }
`

const ButtonWrapper = styled.div`
  margin-top: ${theme.spacing.xlarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

const ProductPage = ({ data }) => {
  const { hero, features_list, cards_list, benefits, faq, show_product_overview, contact_cta } =
    data.file.childMarkdownRemark.frontmatter

  const heroImage = getImage(hero.img)
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title={hero.title}
        text={hero.description}
        image={heroImage && <GatsbyImage image={heroImage} alt={hero.title} />}
        ctaAsButton
        ctaText={hero.cta_text}
        ctaUrl={hero.cta_url}
      ></HeroTextImage>

      {features_list && (
        <SectionNext>
          <List>
            {features_list.map((feature, idx: number) => {
              const featureImage = getImage(feature.image)
              const secondaryImage = getImage(feature.secondary_image)
              return (
                <TextImage
                  key={`feature-item-${idx}`}
                  title={feature.title}
                  reversed={idx % 2 === 1}
                  text={
                    <StyledListContent
                      dangerouslySetInnerHTML={{ __html: feature.description.html }}
                    />
                  }
                  linkText={feature.cta_text}
                  linkUrl={feature.cta_url}
                  image={
                    featureImage && (
                      <BubbleImage
                        align={idx % 2 === 1 ? 'right' : 'left'}
                        type={(idx + 1) as 1 | 2 | 3 | 4 | 5}
                        image={
                          <GatsbyImage
                            image={featureImage}
                            alt={feature.title}
                            style={
                              feature.image_shadow
                                ? { boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)' }
                                : {}
                            }
                          />
                        }
                        {...(secondaryImage && {
                          imageSecondary: (
                            <GatsbyImage image={secondaryImage} alt={feature.title} />
                          ),
                        })}
                      />
                    )
                  }
                />
              )
            })}
          </List>
        </SectionNext>
      )}

      {cards_list && (
        <StyledSectionNext>
          <Grid gapLg={theme.spacing.large} gapXl={theme.spacing.large}>
            {cards_list.map((item, idx: number) => {
              const itemIcon = getImage(item.icon)
              return (
                <Card key={`item-item-${idx}`}>
                  <TextIcon
                    iconSize="sm"
                    vertical
                    title={item.title}
                    text={item.description}
                    icon={itemIcon && <GatsbyImage image={itemIcon} alt={item.title} />}
                  />
                  {item.cta_url && item.cta_text && (
                    <Button
                      as="anchor"
                      size="small"
                      variant="default"
                      to={item.cta_url}
                      label={item.cta_text}
                    />
                  )}
                </Card>
              )
            })}
          </Grid>
        </StyledSectionNext>
      )}

      {benefits && (
        <SectionNext borderTop>
          <SectionNextHeader>
            <Title align="center" as="h3">
              {benefits.title}
            </Title>
          </SectionNextHeader>
          <Grid colsLg={2} colsMd={2} colsXl={2}>
            {benefits.collection_items &&
              benefits.collection_items.map((benefit, idx: number) => {
                const benefitImage = getImage(benefit.icon)
                return (
                  <TextIcon
                    key={`benefit-item-${idx}`}
                    iconSize="sm"
                    vertical
                    title={benefit.title}
                    text={benefit.description}
                    icon={benefitImage && <GatsbyImage image={benefitImage} alt={benefit.title} />}
                  />
                )
              })}
          </Grid>
          <ButtonWrapper>
            <Button as="anchor" label={benefits.cta_text} variant="primary" to={benefits.cta_url} />
            <div dangerouslySetInnerHTML={{ __html: benefits.cta_note.html }} />
          </ButtonWrapper>
        </SectionNext>
      )}

      <SuccessStoriesSlider />

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
          <Accordion items={faq.qa_list} />
        </SectionNext>
      )}

      {show_product_overview && <ProductOverview />}

      {contact_cta && (
        <SectionCta
          title={contact_cta.title}
          text={contact_cta.description}
          ctaText={contact_cta.cta_text}
          ctaUrl={contact_cta.cta_url}
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
          hero {
            title
            description
            cta_text
            cta_url
            img {
              childImageSharp {
                gatsbyImageData(width: 650, quality: 100, placeholder: BLURRED)
              }
            }
          }
          features_list {
            title
            description {
              html
            }
            image {
              childImageSharp {
                gatsbyImageData(width: 410, placeholder: BLURRED)
              }
            }
            image_shadow
            cta_text
            cta_url
            secondary_image {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED)
              }
            }
          }
          cards_list {
            title
            description
            icon {
              childImageSharp {
                gatsbyImageData(width: 75, placeholder: BLURRED)
              }
            }
            cta_url
            cta_text
          }
          benefits {
            title
            collection_items {
              title
              description
              icon {
                childImageSharp {
                  gatsbyImageData(width: 75, placeholder: BLURRED)
                }
              }
            }
            cta_text
            cta_url
            cta_note {
              html
            }
          }
          faq {
            title
            qa_list {
              answer
              question
            }
          }
          show_product_overview
          contact_cta {
            title
            description
            cta_text
            cta_url
          }
        }
      }
    }
  }
`

export default ProductPage

export const Head = ({ data }) => {
  const { title, description } = data.file.childMarkdownRemark.frontmatter

  return <SEO pageTitle={title} pageDescription={description} />
}
