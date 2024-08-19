import { graphql } from 'gatsby'
import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useCaseStudiesQuery } from '../../../hooks/useCaseStudiesQuery'

import SEO from '../../SEO'
import LayoutMain from '../Main'

import { SectionTitle } from '../../section'
import Text from '../../text/Text'
import Title from '../../title/Title'
import { ReadMoreSection } from '../resource-center/Post.styles'
import PostPreview from '../../post-preview/PostPreview'
import ThreeColCards from '../../../partials/3-col-cards/ThreeColCards'
import SocialShareIcons from '../../social-share-icons/SocialShareIcons'
import SignUpForm from '../../sign-up-form/SignupForm'

// Images
import IconCheck from '../../../images/icons/icon-check-green-round.inline.svg'
import IconCross from '../../../images/icons/icon-cross-red-round.inline.svg'
import {
  IconWebsite,
  IconSEO,
  IconScheduling,
  IconEmailMarketing,
  IconContactManager,
} from './CaseStudyProductIcons'

// Styles
import {
  SectionEyebrowStyled,
  CaseStudyHeader,
  CaseStudyHeaderContent,
  CaseStudyHeaderContentText,
  CaseStudyHeaderImage,
  CaseStudyHeaderCustomerImage,
  CaseStudyHero,
  SectionNextStyled,
  CaseStudy,
  CaseStudyContent,
  SocialShareDesktopWrapper,
  SocialShareMobileWrapper,
  AboutSection,
  TextSection,
  AboutSectionSidebar,
  AboutSectionContent,
  SidebarContentItemTitle,
  SidebarContentItemText,
  SidebarContentItemProduct,
  SidebarContentItem,
  SidebarContentProducts,
  CtaInline,
  ResultsIntro,
  Results,
  ResultsTitle,
  ResultsStats,
  ResultsStat,
} from './CaseStudy.styles'

const CaseStudyPage = ({ data }) => {
  const { title, hero, about, challenge, solution, results, b12_info, cta_inline } =
    data.file.childMarkdownRemark.frontmatter
  const { readNextStories } = useCaseStudiesQuery(data.file.childMarkdownRemark.frontmatter)

  const heroImage = getImage(hero.website_img)
  const heroCustomerImage = getImage(hero.customer_img)
  const solutionImage = getImage(solution.img)

  return (
    <LayoutMain>
      {/* Hero */}
      <CaseStudyHero
        directChildren={
          heroImage && <CaseStudyHeaderImage noBlur={hero.no_blur} image={heroImage} alt={title} />
        }
      >
        <CaseStudyHeader>
          <CaseStudyHeaderContent>
            <SectionEyebrowStyled>Case study</SectionEyebrowStyled>
            <SectionTitle as="h1" textStyle="h2">
              {hero.title}
            </SectionTitle>
            <CaseStudyHeaderContentText>{hero.description}</CaseStudyHeaderContentText>
          </CaseStudyHeaderContent>
          <CaseStudyHeaderCustomerImage>
            {heroCustomerImage && <GatsbyImage image={heroCustomerImage} alt={title} />}
            {!heroCustomerImage && heroImage && (
              <GatsbyImage className="hero-img-as-customer" image={heroImage} alt={title} />
            )}
          </CaseStudyHeaderCustomerImage>
        </CaseStudyHeader>
      </CaseStudyHero>

      {/* Content */}
      <SectionNextStyled>
        <CaseStudy>
          <SocialShareDesktopWrapper>
            <SocialShareIcons vertical />
          </SocialShareDesktopWrapper>
          <CaseStudyContent>
            <AboutSection>
              <AboutSectionSidebar>
                <SidebarContentItem>
                  <SidebarContentItemTitle>Customer:</SidebarContentItemTitle>
                  <SidebarContentItemText>
                    <a href={about.customer_link}>{title}</a>
                  </SidebarContentItemText>
                </SidebarContentItem>

                <SidebarContentItem>
                  <SidebarContentItemTitle>Industry:</SidebarContentItemTitle>
                  <SidebarContentItemText>{about.industry}</SidebarContentItemText>
                </SidebarContentItem>
                <SidebarContentItem>
                  <SidebarContentItemTitle>Company size:</SidebarContentItemTitle>
                  <SidebarContentItemText>{about.company_size}</SidebarContentItemText>
                </SidebarContentItem>
                <SidebarContentItem vertical>
                  <SidebarContentItemTitle>
                    <IconCross />
                    Problem:
                  </SidebarContentItemTitle>
                  <SidebarContentItemText>{about.problem}</SidebarContentItemText>
                </SidebarContentItem>
                <SidebarContentItem vertical>
                  <SidebarContentItemTitle>
                    <IconCheck /> Solution:
                  </SidebarContentItemTitle>
                  <SidebarContentItemText>{about.solution}</SidebarContentItemText>
                </SidebarContentItem>

                <SidebarContentProducts>
                  <SidebarContentItem vertical>
                    <SidebarContentItemTitle>Products used:</SidebarContentItemTitle>
                    {about.products_used.map((product, index: number) => {
                      if (product === 'website') {
                        return (
                          <SidebarContentItemProduct key={index}>
                            <IconWebsite />
                            <span>Website</span>
                          </SidebarContentItemProduct>
                        )
                      }
                      if (product === 'seo') {
                        return (
                          <SidebarContentItemProduct key={index}>
                            <IconSEO />
                            <span>SEO</span>
                          </SidebarContentItemProduct>
                        )
                      }
                      if (product === 'scheduling') {
                        return (
                          <SidebarContentItemProduct key={index}>
                            <IconScheduling />
                            <span>Scheduling</span>
                          </SidebarContentItemProduct>
                        )
                      }
                      if (product === 'email-marketing') {
                        return (
                          <SidebarContentItemProduct key={index}>
                            <IconEmailMarketing />
                            <span>Email marketing</span>
                          </SidebarContentItemProduct>
                        )
                      }
                      if (product === 'contact-manager') {
                        return (
                          <SidebarContentItemProduct key={index}>
                            <IconContactManager />
                            <span>Contact manager</span>
                          </SidebarContentItemProduct>
                        )
                      }

                      return null
                    })}
                  </SidebarContentItem>
                </SidebarContentProducts>
              </AboutSectionSidebar>
              <AboutSectionContent>
                <Title as="h3" textStyle="h3">
                  {about.title}
                </Title>
                <div dangerouslySetInnerHTML={{ __html: about.description.html }} />
              </AboutSectionContent>
            </AboutSection>

            <TextSection>
              <AboutSectionContent>
                <Title as="h3" textStyle="h3">
                  {challenge.title}
                </Title>
                <div dangerouslySetInnerHTML={{ __html: challenge.description.html }} />
              </AboutSectionContent>
            </TextSection>

            <TextSection>
              <AboutSectionContent>
                <Title as="h3" textStyle="h3">
                  {solution.title}
                </Title>
                {solutionImage && (
                  <GatsbyImage
                    style={{ float: 'right' }}
                    image={solutionImage}
                    alt={solution.solution_img_alt_text}
                  />
                )}
                <div dangerouslySetInnerHTML={{ __html: solution.description.html }} />
              </AboutSectionContent>
            </TextSection>

            {cta_inline.show_section && (
              <CtaInline>
                <Title as="h3" textStyle="h3" align="center">
                  {cta_inline.title}
                </Title>
                <Text align="center">{cta_inline.description}</Text>
                <SignUpForm ctaText="Sign up" />
              </CtaInline>
            )}

            <TextSection>
              <AboutSectionContent>
                <Title as="h3" textStyle="h3">
                  {results.title}
                </Title>
                <ResultsIntro>
                  <div dangerouslySetInnerHTML={{ __html: results.intro.html }} />

                  {results.stat_items && (
                    <Results>
                      <ResultsTitle>{results.stats_title}</ResultsTitle>
                      <ResultsStats>
                        {results.stat_items.map(({ description }, index) => (
                          <ResultsStat key={index}>
                            <IconCheck />
                            {description}
                          </ResultsStat>
                        ))}
                      </ResultsStats>
                    </Results>
                  )}
                </ResultsIntro>
                <div dangerouslySetInnerHTML={{ __html: results.body.html }} />
              </AboutSectionContent>
            </TextSection>

            <TextSection>
              <AboutSectionContent>
                <Title as="h3" textStyle="h3">
                  {b12_info.title}
                </Title>

                <div dangerouslySetInnerHTML={{ __html: b12_info.description.html }} />
              </AboutSectionContent>
            </TextSection>
          </CaseStudyContent>

          <SocialShareMobileWrapper>
            <SocialShareIcons />
          </SocialShareMobileWrapper>
        </CaseStudy>
      </SectionNextStyled>

      <ReadMoreSection>
        <ThreeColCards light title="Read more customer stories">
          {readNextStories.map((story, idx) => (
            <PostPreview
              showLink={false}
              light
              key={`read-next-story-${idx}`}
              title={story.name || ''}
              description={story.text || ''}
              image={story.avatar}
              permalink={story.permalink || ''}
            />
          ))}
        </ThreeColCards>
      </ReadMoreSection>
    </LayoutMain>
  )
}

export const query = graphql`
  query ($id: String) {
    file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          hero {
            no_blur
            title
            description
            website_img {
              childImageSharp {
                gatsbyImageData(width: 1100, placeholder: BLURRED)
              }
            }
            customer_img {
              childImageSharp {
                gatsbyImageData(width: 300, placeholder: BLURRED)
              }
            }
          }
          about {
            title
            description {
              html
            }
            industry
            customer
            customer_logo {
              childImageSharp {
                gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, quality: 100)
              }
            }
            customer_link
            company_size
            problem
            solution
            products_used
          }
          challenge {
            title
            description {
              html
            }
          }
          solution {
            title
            description {
              html
            }
            solution_img_alt_text
            img {
              childImageSharp {
                gatsbyImageData(width: 490, placeholder: BLURRED)
              }
            }
          }
          results {
            title
            intro {
              html
            }
            body {
              html
            }
            stats_title
            stat_items {
              description
            }
          }
          b12_info {
            title
            description {
              html
            }
          }
          cta_inline {
            show_section
            title
            description
          }
        }
      }
    }
  }
`

export default CaseStudyPage

export const Head = ({ data }) => {
  const { title, description } = data.file.childMarkdownRemark.frontmatter

  return <SEO pageTitle={title} pageDescription={description} />
}
