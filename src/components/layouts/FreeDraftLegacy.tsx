import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'

// Componenets
import LayoutClean from './LayoutClean'
import SEO from '@components/SEO'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Container from '@components/container/Container'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import { HubspotForm } from '@components/hubspot-form/HubspotForm'
import Icon from '@components/icon/Icon'
import Grid from '@components/grid/Grid'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Partials
import FeaturedIn from '@partials/featured-in/FeaturedIn'

// Images
import HeroBgImage from '../../../assets/uploads/free-draft-pattern.png'
import IconClock from '@images/icons/clock.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'
import IconAI from '@images/icons/aidraft.inline.svg'
import IconRecommendations from '@images/icons/streamline.inline.svg'

// Hardcoded icons since we use same icons in all Free Draft pages, and we can't pass them via md files.
const iconsList = [<IconAI />, <IconDesign />, <IconRecommendations />]

// Types
type TFeatures = {
  title: string
  description: string
  note?: string
  icon: IGatsbyImageData
}

// Styles
export const FreeDraftHero = styled.section`
  display: flex;
  align-items: center;
  padding: 40px 0;
  background: linear-gradient(rgba(67, 31, 221, 0.7), rgba(15, 91, 216, 0.6)), url('${HeroBgImage}');
  justify-content: center;

  ${mq['lg']} {
    padding: 160px 0;
    height: 95vh;
    border-bottom-left-radius: 95% 27%;
    border-bottom-right-radius: 95% 27%;
  }

  + & {
    padding-top: 80px;
  }

  ${mq['md']} {
    padding: 80px 0;

    + & {
      padding-top: 120px;
    }
  }

  ${mq['lg']} {
    padding: 80px 0;

    + & {
      padding-top: 80px;
    }
  }
`

export const HeroTitle = styled.h1`
  color: white;
  font-weight: 500;
  text-align: center;
  margin: 20px 0 0 0;

  ${mq['md']} {
    font-size: 64px;
    line-height: 72px;
  }
`

export const StyledSectionNext = styled(SectionNext)`
  border-top-left-radius: 98% 13%;
  border-top-right-radius: 98% 13%;
`

export const StyledContainer = styled(Container)`
  justify-items: center;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;

  ${mq['md']} {
    max-width: 680px;
  }
`

export const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(17, 15, 51, 0.15);
  position: relative;

  ${mq['md']} {
    padding: 30px;
    padding-bottom: 60px;
  }
`

export const CardItemNote = styled.div`
  color: ${theme.colors.text.light};
  background: ${theme.colors.surface.background};
  width: 100%;
  font-size: 12px;
  line-height: 11px;
  padding: 18px 0 18px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

const FormWrapper = styled.div`
  width: 100%;

  .hs-form-field {
    margin-top: 20px;
  }

  fieldset {
    margin: 0 auto !important;
    max-width: 100% !important;
  }
`

const FreeDraftLegacy = ({ data }) => {
  const { hero, hero_with_hubspot_form, how_it_works, contact_cta } =
    data.file.childMarkdownRemark.frontmatter

  const logoImage = hero_with_hubspot_form
    ? getImage(hero_with_hubspot_form.logo)
    : getImage(hero.logo)

  return (
    <LayoutClean>
      {/* Hero */}

      {hero && (
        <FreeDraftHero>
          <StyledContainer>
            <HeroContent>
              {logoImage && <GatsbyImage image={logoImage} alt={hero.logo_alt_text} />}
              <HeroTitle>{hero.title}</HeroTitle>
              <Subtitle light>{hero.subtitle}</Subtitle>
              {hero.description && (
                <Text light align="center">
                  {hero.description}
                </Text>
              )}
              <Button to={hero.cta_link} variant="primary" label={hero.cta} as="anchor" />
              <Text light small>
                No credit card required
              </Text>
            </HeroContent>
          </StyledContainer>
        </FreeDraftHero>
      )}

      {hero_with_hubspot_form && (
        <FreeDraftHero>
          <StyledContainer>
            <HeroContent>
              {logoImage && (
                <GatsbyImage image={logoImage} alt={hero_with_hubspot_form.logo_alt_text} />
              )}
              <HeroTitle>{hero_with_hubspot_form.title}</HeroTitle>
              <Subtitle light>{hero_with_hubspot_form.subtitle}</Subtitle>
              {hero_with_hubspot_form.description && (
                <Text light align="center">
                  {hero_with_hubspot_form.description}
                </Text>
              )}
              <FormWrapper>
                <HubspotForm
                  formId="1035604b-b750-493a-9a1d-32bc70a5f72d"
                  formElementId="1035604b-b750-493a-9a1d-32bc70a5f72d"
                />
              </FormWrapper>
            </HeroContent>
          </StyledContainer>
        </FreeDraftHero>
      )}

      {/* Image Strip */}
      <FeaturedIn />

      {/* Features */}
      <StyledSectionNext container={{ maxWidth: '1160px' }} bg={theme.colors.surface.background}>
        <SectionNextHeader align="center">
          <Title>How it works</Title>
          <Subtitle>Smart websites design and build themselves – so you don’t have to</Subtitle>
        </SectionNextHeader>
        <Grid>
          {how_it_works.how_it_works_list &&
            how_it_works.how_it_works_list.map((item: TFeatures, idx: number) => (
              <CardItemWrapper key={`card-item-${idx}`}>
                <Icon size="lg">{iconsList[idx]}</Icon>
                <Title as="h3" textStyle="h4" align="center">
                  {item.title}
                </Title>
                <Text align="center">{item.description}</Text>

                <CardItemNote>
                  <IconClock />
                  {item.note}
                </CardItemNote>
              </CardItemWrapper>
            ))}
        </Grid>
      </StyledSectionNext>
      <CtaSectionBanner>
        <Title as="h3" light align="center">
          {contact_cta.title}
        </Title>
        <Text light align="center">
          {contact_cta.description}
        </Text>
        <Button as="anchor" variant="primary" to={contact_cta.cta_url} label={contact_cta.cta} />
      </CtaSectionBanner>
    </LayoutClean>
  )
}

export const query = graphql`
  query ($id: String) {
    file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          hero {
            logo {
              childImageSharp {
                gatsbyImageData(height: 30, placeholder: BLURRED, quality: 100)
              }
            }
            logo_alt_text
            title
            description
            subtitle
            cta_link
            cta
          }
          hero_with_hubspot_form {
            logo {
              childImageSharp {
                gatsbyImageData(height: 30, placeholder: BLURRED, quality: 100)
              }
            }
            logo_alt_text
            title
            description
            subtitle
          }
          how_it_works {
            how_it_works_list {
              title
              description
              note
            }
          }
          contact_cta {
            title
            description
            cta
            cta_url
          }
        }
      }
    }
  }
`

export default FreeDraftLegacy

export const Head = ({ data }) => {
  const { title, description } = data.file.childMarkdownRemark.frontmatter

  return <SEO pageTitle={title} pageDescription={description} />
}
