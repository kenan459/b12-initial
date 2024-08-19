/**
 * LEGACY
 * This page uses old styles but is built using new infrastructure (Gatsby)
 */
import React, { useEffect, useState } from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '../components/SEO'
import LayoutMain from '../components/layouts/Main'
import {
  Section,
  SectionTitle,
  SectionHeader,
  SectionContent,
  SectionActions,
  SectionSubtitle,
  SectionEyebrow,
} from '../components/section'
import SectionCta from '../partials/section-cta/SectionCta'
import { Button } from '../components/button/Button'

import { usePeopleQuery, TPerson } from '../hooks/usePeopleQuery'

// Types
type DataProps = {
  title: string
  url: string
  authors: string
}

// Styles
import {
  Hero,
  Content,
  ContentItem,
  ContentItemTitle,
  ContentItemTextSubdued,
  ContentItemTitleTertiary,
  LinkUnderlined,
  TwoColGrid,
  PersonCard,
  PersonTitle,
  PersonInfo,
  Cards,
  InvestorsWithImagesCards,
  SectionCounters,
  AboutText,
  Counters,
  Counter,
  TeamPhotos,
} from '../partials/about-page/styles'

// Data
import data from '../data/pages/about.yaml'

const AboutPage = () => {
  const { team, advisors, investors } = usePeopleQuery()
  const [shuffledTeam, setShuffledTeam] = useState<TPerson[]>([])

  useEffect(() => {
    // Shuffle team so that when you visit the page, the order is different every time
    const shuffle = team
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    setShuffledTeam(shuffle)
  }, [])

  return (
    <LayoutMain>
      <Hero scrollToNextSection>
        <SectionHeader align="center">
          <SectionEyebrow align="center">About B12</SectionEyebrow>
          <SectionTitle as="h1" align="center">
            Our mission is to help people do meaningful work
          </SectionTitle>
          <SectionSubtitle>
            <p>Our people and products help businesses succeed online.</p>
          </SectionSubtitle>
        </SectionHeader>
      </Hero>

      <Section>
        <Content>
          <ContentItem>
            <SectionTitle textStyle="h2">A brighter future of work</SectionTitle>
            <SectionSubtitle align="left" width={77}>
              <ContentItemTitleTertiary>
                We love humans. We love technology. We believe that by pairing the two together, we
                can achieve our mission to help people do meaningful work.
              </ContentItemTitleTertiary>
            </SectionSubtitle>
          </ContentItem>
          <ContentItem>
            <AboutText align="left" width={100}>
              <p>
                We built B12 to help small businesses. B12’s copywriters, designers, and SEO
                specialists have superpowers through{' '}
                <a href="https://orchestra.b12.io/">Orchestra</a>, our human-assisted AI platform
                that orchestrates people and technology. Our all-in-one platform{' '}
                <a href="https://www.b12.io/how-it-works">instantly drafts a website</a>, and our
                team brings businesses online in 30 days. We deliver a search-optimized website with
                the integrated <a href="https://www.b12.io/product-overview">tools</a> our customers
                need to serve and charge their clients.
              </p>
              <p>
                At B12, we believe everyone should do what they love in the manner that suits them
                best. That's why we build web presences for our customers, leaving them to focus on
                growing their business. It's also why we're reshaping work for our team of experts.
                Orchestra automates the tedious tasks associated with bringing businesses online,
                enabling our designers, copywriters, and SEO specialists to tackle the parts of
                projects that excite them.
              </p>
              <p>
                We hope to create a better future through thoughtful technology and a genuine
                consideration of our greater social context and impact. We’ve aligned with people
                and organizations that share our enthusiasm for what’s possible and believe that
                what we do and how we do it matters.
              </p>
            </AboutText>
          </ContentItem>
        </Content>
      </Section>

      <SectionCounters gradientSvg="top-left" scrollToNextSection>
        <Counters>
          <Counter>
            <SectionTitle as="h3" textStyle="h2" align="center">
              150k+
            </SectionTitle>
            <SectionEyebrow align="center" width={100}>
              WEBSITES CREATED
            </SectionEyebrow>
          </Counter>
          <Counter>
            <SectionTitle as="h3" textStyle="h2" align="center">
              2016
            </SectionTitle>
            <SectionEyebrow align="center" width={100}>
              B12 LAUNCHED
            </SectionEyebrow>
          </Counter>
          <Counter>
            <SectionTitle as="h3" textStyle="h2" align="center">
              60+
            </SectionTitle>
            <SectionEyebrow align="center" width={100}>
              TEAM MEMBERS
            </SectionEyebrow>
          </Counter>
        </Counters>

        <TeamPhotos>
          <StaticImage
            src="../images/team-1.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={650}
            quality={80}
          />
          <StaticImage
            src="../images/team-7.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={300}
            height={300}
            quality={80}
          />
          <StaticImage
            src="../images/team-10.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={300}
            height={300}
            quality={80}
          />
          <StaticImage
            src="../images/team-6.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={650}
            quality={80}
          />
        </TeamPhotos>
      </SectionCounters>

      <Section gradientSvg="top-right">
        <SectionHeader>
          <SectionTitle align="center" textStyle="h2">
            Meet our team
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <Cards>
            {shuffledTeam.map((item, idx) => (
              <PersonCard
                key={`investor-person-${idx}`}
                as={item.website ? 'a' : 'div'}
                href={item.website}
              >
                {item.image && (
                  <GatsbyImage image={item.image} alt={item.title} className="person-card-image" />
                )}
                <PersonTitle>{item.title}</PersonTitle>
                <PersonInfo>
                  {item.position && (
                    <>
                      {item.position.split('|').map((position, idx) => (
                        <span key={`person-position-${idx}`}>{position}</span>
                      ))}
                    </>
                  )}
                </PersonInfo>
              </PersonCard>
            ))}
          </Cards>
        </SectionContent>
        <SectionActions align="center" marginTop="lg">
          <Button
            as="anchor"
            label="Join the team"
            variant="primary"
            to="https://boards.greenhouse.io/b12#.V1g1Y5MrKRt"
          />
        </SectionActions>
      </Section>

      <Section gradientSvg="top-left">
        <SectionHeader>
          <SectionTitle align="center" textStyle="h2">
            Our advisors
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <Cards>
            {advisors.map((item, idx) => (
              <PersonCard key={`advisor-person-${idx}`} as="a" href={item.website}>
                {item.image && (
                  <GatsbyImage image={item.image} alt={item.title} className="person-card-image" />
                )}
                <PersonTitle>{item.title}</PersonTitle>
                <PersonInfo>
                  {item.position && (
                    <>
                      {item.position.split('|').map((position, idx) => (
                        <span key={`person-position-${idx}`}>{position}</span>
                      ))}
                    </>
                  )}
                </PersonInfo>
              </PersonCard>
            ))}
          </Cards>
        </SectionContent>
      </Section>

      <Section borderBottom gradientSvg="top-right">
        <SectionHeader>
          <SectionTitle align="center" textStyle="h2">
            Investors
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <InvestorsWithImagesCards>
            {investors
              .filter((item) => item.image)
              .map((item, idx) => (
                <React.Fragment key={`investor-with-image-person-${idx}`}>
                  {item.image && (
                    <PersonCard as="a" href={item.website}>
                      <GatsbyImage image={item.image} alt={item.title} className="investor-logo" />
                    </PersonCard>
                  )}
                </React.Fragment>
              ))}
          </InvestorsWithImagesCards>
          <Cards>
            {investors
              .filter((item) => !item.image)
              .map((item, idx) => (
                <PersonCard key={`investor-person-${idx}`}>
                  <PersonTitle>{item.title}</PersonTitle>
                  <PersonInfo>
                    {item.position && (
                      <>
                        {item.position.split('|').map((position, idx) => (
                          <span key={`person-position-${idx}`}>{position}</span>
                        ))}
                      </>
                    )}
                  </PersonInfo>
                </PersonCard>
              ))}
          </Cards>
        </SectionContent>
      </Section>
      <Section id="press">
        <Content>
          <ContentItem>
            <ContentItemTitle>Press materials</ContentItemTitle>
            <ContentItemTextSubdued>
              Thanks for sharing B12 with your audience. You may use any of the content here and on
              the rest of the B12 website as you see fit.
            </ContentItemTextSubdued>
            <TwoColGrid>
              <div>
                <ContentItemTitleTertiary>For media inquiries</ContentItemTitleTertiary>
                <LinkUnderlined href="mailto:media@b12.io">media@b12.io</LinkUnderlined>
              </div>
              <div>
                <ContentItemTitleTertiary>For product inquiries</ContentItemTitleTertiary>
                <LinkUnderlined href="mailto:hello@b12.io">hello@b12.io</LinkUnderlined>
              </div>
            </TwoColGrid>
          </ContentItem>
          <ContentItem>
            <ContentItemTitle>Research from B12 team members</ContentItemTitle>
            {data.research.map((item: DataProps, idx: number) => (
              <ContentItemTextSubdued key={`research-item-${idx}`}>
                <LinkUnderlined dark href={item.url}>
                  {item.title}
                </LinkUnderlined>
                <br />
                &mdash; {item.authors}
              </ContentItemTextSubdued>
            ))}
            <ContentItemTitle>In the news</ContentItemTitle>
            {data.news.map((item: DataProps, idx: number) => (
              <ContentItemTextSubdued key={`research-item-${idx}`}>
                <LinkUnderlined dark href={item.url}>
                  {item.title}
                </LinkUnderlined>
                <br />
                &mdash; {item.authors}
              </ContentItemTextSubdued>
            ))}
          </ContentItem>
        </Content>
      </Section>
      <SectionCta />
    </LayoutMain>
  )
}

export default AboutPage

export const Head = () => (
  <SEO
    pageTitle="About us"
    pageDescription="We help businesses thrive online. AI web design + experts launch professional websites with powerful client engagement and revenue tools."
  />
)
