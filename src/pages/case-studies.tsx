/**
 * LEGACY
 * This page uses old styles but is built using new infrastructure (Gatsby)
 */
import styled from '@emotion/styled'
import { mq, theme } from '../assets/theme'
import { useCaseStudiesQuery } from '../hooks/useCaseStudiesQuery'

// Components
import SEO from '../components/SEO'
import LayoutMain from '../components/layouts/Main'
import Title from '../components/title/Title'
import { SectionEyebrow } from '../components/section'
import { Button } from '../components/button/Button'
import { GatsbyImage } from 'gatsby-plugin-image'
import Text from '../components/text/Text'
import SectionNext from '../components/section-next/SectionNext'
import SectionNextHeader from '../components/section-next/SectionNextHeader'
import { SectionTitle } from '../components/section'
import SectionCta from '../partials/section-cta/SectionCta'

import IconQuote from '../images/icon-quote.inline.svg'

// Types
type TCaseItem = {
  width?: string
}

// Styles
const SectionNextHeaderStyled = styled(SectionNextHeader)`
  margin-bottom: 0;

  ${mq['md']} {
    margin-bottom: 0;
  }
`

const CasesWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CaseStudyItem = styled.div<TCaseItem>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${theme.colors.surface.background};
  padding: 50px 20px;
  margin-top: 20px;
  flex: 100%;

  ${mq['md']} {
    margin-top: 50px;

    ${(props) =>
      props.width !== 'default' ? 'flex: 0 0 calc(50% - 20px); padding: 50px' : 'padding: 60px'};
  }

  ${mq['lg']} {
    ${(props) => (props.width === 'one-third' ? 'flex: 0 0 38%;' : '')};
    ${(props) => (props.width === 'two-third' ? 'flex: 0 0 calc(62% - 40px);' : '')};
    ${(props) =>
      props.width === 'default'
        ? 'padding: 80px 60px 80px 100px; flex-direction: row; justify-content: space-between;'
        : ''};
  }
`

const CaseStudyContent = styled.div<TCaseItem>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mq['lg']} {
    ${(props) => (props.width === 'default' ? 'flex: 0 0 40%; order: -1' : '')};
  }
`

const CaseStudyImageWrapper = styled.div<TCaseItem>`
  margin-bottom: 30px;
  ${(props) => (props.width === 'one-third' ? 'margin-right: -270px;' : '')};
`

const CaseStudyItemTitle = styled(Title)`
  font-weight: 600;
  margin: 10px 0;
`

const CaseStudyText = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: ${theme.colors.text.light};
  margin-bottom: 30px;
`

const FeaturedQuote = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  margin: 0 0 7px;
  color: ${theme.colors.text.dark};
  position: relative;

  svg {
    position: absolute;
    width: 38px;
    left: -40px;
    top: 0;
  }
`

const CaseStudyFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const CaseStudyName = styled.p`
  font-size: 14px;

  color: ${theme.colors.text.light};
  margin-left: 10px;
`

const CaseStudyAvatar = styled.div`
  .case-study-avatar {
    border-radius: 50%;
  }
`

const CaseStudies = () => {
  const { stories } = useCaseStudiesQuery()

  return (
    <LayoutMain>
      <SectionNext>
        <SectionNextHeaderStyled align="center">
          <SectionTitle align="center" as="h1" textStyle="h2">
            Websites built by B12
          </SectionTitle>
          <Text>
            Our designers handle website creation and maintenance, so business owners can focus on
            their clients.
          </Text>
        </SectionNextHeaderStyled>
        <CasesWrapper>
          {stories.map((story, idx) => {
            const itemWidth = idx % 3 === 0 ? 'default' : idx % 3 === 1 ? 'one-third' : 'two-third'

            return (
              <CaseStudyItem width={itemWidth} key={`case-study-story-${idx}`}>
                {story.image && (
                  <CaseStudyImageWrapper width={itemWidth}>
                    <GatsbyImage alt={story.title} image={story.image} />
                  </CaseStudyImageWrapper>
                )}
                <CaseStudyContent width={itemWidth}>
                  <SectionEyebrow align="left">{story.industry}</SectionEyebrow>
                  <CaseStudyItemTitle as="h3">{story.title}</CaseStudyItemTitle>
                  <CaseStudyText>{story.text}</CaseStudyText>
                  <FeaturedQuote>
                    <IconQuote />
                    {story.quote}
                  </FeaturedQuote>
                  <CaseStudyFooter>
                    {story.avatar && (
                      <CaseStudyAvatar>
                        <GatsbyImage
                          className="case-study-avatar"
                          alt={story.name}
                          image={story.avatar}
                        />
                      </CaseStudyAvatar>
                    )}
                    <CaseStudyName>{story.name}</CaseStudyName>
                  </CaseStudyFooter>
                  <Button
                    as="link"
                    size="small"
                    key={story.permalink}
                    to={story.permalink}
                    label="View case study"
                    variant="primary"
                  />
                </CaseStudyContent>
              </CaseStudyItem>
            )
          })}
        </CasesWrapper>
      </SectionNext>

      <SectionCta />
    </LayoutMain>
  )
}

export default CaseStudies

export const Head = () => (
  <SEO
    pageTitle="Case studies"
    pageDescription="B12.io reviews: See real results from professional services businesses using our AI website builder, online scheduling, payments, SEO, and more."
  />
)
