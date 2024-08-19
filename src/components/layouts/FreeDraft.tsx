import React from 'react'
import { graphql } from 'gatsby'
import { theme } from '@styles/theme'

// Componenets
import SEO from '@components/SEO'
import LayoutClean from './LayoutClean'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import Grid from '@components/grid/Grid'
import TextIcon from '@components/text-icon/TextIcon'
import FreeDraftHero from '@components/hero/FreeDraftHero'
import Accordion from '@components/accordion/Accordion'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Partials
import FeaturedIn from '@partials/featured-in/FeaturedIn'
import SuccessStoriesSliderCentered from '@partials/success-stories-slider/SuccessStoriesSliderCentered'

// Types
type TFeatures = {
  title: string
  description: string
  icon: string
}

const FreeDraft = ({ data }) => {
  const { hero, list, testimonials_slider, faqs, cta_banner } =
    data.file.childMarkdownRemark.frontmatter
  const wrapIconInSpan = (svgCode: string) => <span dangerouslySetInnerHTML={{ __html: svgCode }} />

  return (
    <LayoutClean gdprHidden>
      {/* Hero */}
      <FreeDraftHero {...hero} />

      {/* Image Strip */}
      <FeaturedIn />

      {/* Features */}
      <SectionNext container={{ maxWidth: '1160px' }} paddingTop="48px">
        <SectionNextHeader align="center">
          <Title>{list.title}</Title>
        </SectionNextHeader>
        <Grid>
          {list.list_items &&
            list.list_items.map((item: TFeatures, idx: number) => (
              <TextIcon
                iconSize="md"
                vertical
                key={idx}
                title={item.title}
                text={item.description}
                icon={wrapIconInSpan(item.icon)}
              />
            ))}
        </Grid>
      </SectionNext>

      {/* Testimonials */}
      {testimonials_slider && testimonials_slider.items && (
        <SuccessStoriesSliderCentered
          aiQuote
          filter={testimonials_slider.items}
          background={theme.colors.brand.accentLightest}
          title={testimonials_slider.title}
        />
      )}

      {/* FAQs */}
      {faqs && faqs.items && (
        <SectionNext
          container={{
            maxWidth: '800px',
          }}
        >
          <SectionNextHeader align="center" bottomMargin="md">
            <Title textStyle="h3">{faqs.title}</Title>
            {faqs.subtitle && <Subtitle>{faqs.subtitle}</Subtitle>}
          </SectionNextHeader>
          <Accordion items={faqs.items} />
        </SectionNext>
      )}

      {/* CTA */}
      {cta_banner && (
        <CtaSectionBanner>
          <Title as="h3" light align="center">
            {cta_banner.title}
          </Title>
          {cta_banner.description && (
            <Text light align="center">
              {cta_banner.description}
            </Text>
          )}
          <Button
            as="anchor"
            variant="primary"
            to={cta_banner.cta_url}
            label={cta_banner.cta_text}
          />
        </CtaSectionBanner>
      )}
    </LayoutClean>
  )
}

export const query = graphql`
  query ($id: String) {
    file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          hero {
            title
            subtitle
            description
            cta_text
            cta_url
            note
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          list {
            title
            list_items {
              icon
              title
              description
            }
          }
          testimonials_slider {
            title
            items
          }
          faqs {
            title
            subtitle
            items {
              question
              answer
            }
          }
          cta_banner {
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

export default FreeDraft

export const Head = ({ data }) => {
  const { title, description } = data.file.childMarkdownRemark.frontmatter

  return <SEO pageTitle={title} pageDescription={description} />
}
