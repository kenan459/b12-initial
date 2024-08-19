import React from 'react'
import { PageProps, HeadProps, HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'

import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import { Section, SectionHeader, SectionTitle, SectionContent } from '@components/section'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import { SectionEyebrow } from '@components/section'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import { Cards, PersonCard, PersonTitle, PersonInfo } from '@partials/about-page/styles'

// Images

import HeroBgImage from '@images/purple-section-bg.png'
import B12LogoWhite from '@images/logo-b12-white.inline.svg'
import IconCalendar from '@images/icons/calendar.inline.svg'

// Styles

const Hero = styled(SectionNext)`
  background-image: url('${HeroBgImage}');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 120px;

  ${mq['md']} {
    padding-bottom: 200px;
  }
`

export const HeroText = styled(SectionNextHeader)`
  text-align: center;
  align-items: center;

  > * {
    text-align: center;
  }

  ${Title} {
    text-align: center;

    ${mq['md']} {
      text-align: left;
    }
  }

  ${mq['md']} {
    text-align: left;
    align-items: flex-start;

    > * {
      text-align: left;
    }
  }
`

const HeroContent = styled.div`
  display: grid;
  gap: 40px;

  .gatsby-image-wrapper {
    order: 2;
    margin-bottom: -120px;
  }

  ${mq['md']} {
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .gatsby-image-wrapper {
      order: -1;
      margin-bottom: 0;
    }
  }
`

const Content = styled.div`
  display: grid;
  gap: 40px;

  ${mq['md']} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

const ContentItem = styled.div``

const EventContent = styled.div`
  display: grid;
  gap: 20px;
  justify-items: start;

  ${Title} {
    font-weight: 500;
  }

  > * {
    margin: 0;
  }

  p,
  li {
    ${mq['md']} {
      font-size: 16px;
      line-height: 25px;
      color: ${theme.colors.text.gray};
    }
  }
`

const EventContentCentered = styled(EventContent)`
  justify-items: center;
  max-width: 800px;
  width: 100%;
  margin-inline: auto;
  margin-bottom: 120px;

  ${Title} {
    text-align: center;
  }

  p,
  li {
    text-align: left;
  }
`

const EventName = styled.div`
  color: ${theme.colors.brand.accent};
  font-weight: bold;
  display: flex;
  gap: 10px;
  align-items: center;
`

const EventSpeakerCard = styled(PersonCard)`
  max-width: 70%;
  margin-inline: auto;
`

// Page

const NsbwOnlineEvents2022: React.FC<PageProps> = () => (
  <LayoutMain>
    <Hero>
      <HeroContent>
        <StaticImage
          src="../../assets/img/how-it-works-hero.png"
          alt="How it works"
          placeholder="blurred"
          loading="eager"
          objectFit="contain"
          width={500}
          quality={100}
        />
        <HeroText bottomMargin="none">
          <B12LogoWhite />
          <SectionEyebrow color={theme.colors.text.white} align="left">
            NATIONAL SMALL BUSINESS WEEK 2022
          </SectionEyebrow>
          <Title as="h1" light>
            Supporting and Inspiring Small Business Success
          </Title>
          <Text light>
            Being a small business owner often feels like being on an island. But it shouldn’t.
          </Text>

          <Text light>
            This National Small Business Week, join B12 as we showcase ways for professional service
            providers to redefine and better harness the power of their team in order to scale.
          </Text>

          <Button label="Learn more" variant="primary-inverted" as="anchor" to="#somewhere" />
        </HeroText>
      </HeroContent>
    </Hero>

    <Section gradientSvg="bottom-left">
      <Content>
        <ContentItem>
          <EventContent>
            <SectionEyebrow align="left">Fireside chat</SectionEyebrow>
            <Title textStyle="h3">
              How Do You Know?: When is the right time to bring on staff and upgrade your tech
              stack?
            </Title>
            <EventName>
              <IconCalendar /> Tuesday May 3rd 2022, 1 pm EDT
            </EventName>
            <Text>
              They say timing is everything, but it’s hard to know the optimal timing when it comes
              to making changes to your small business. Make updates too quickly and you’re
              stretched too thin. Wait too long, and lose out on opportunities and efficiencies.
            </Text>
            <Text>
              Join B12 CEO Nitesh Banta as he sits down with Waseem Daher, who has spent decades
              guiding small businesses to growth.
            </Text>
            <Text>From this conversation you’ll learn:</Text>
            <ul>
              <li>The signs for when it might be time to add staff</li>
              <li>When to evaluate your technology systems, and what to invest in upgrading</li>
              <li>How to plan changes to avoid disruption and distraction</li>
            </ul>
            <Button
              label="Save my seat"
              variant="primary"
              as="anchor"
              to="https://my.demio.com/ref/zkCvc8K4VC1isxUI"
            />
          </EventContent>
        </ContentItem>
        <ContentItem>
          <EventSpeakerCard as="a" href="https://www.baileyreyes.com/">
            <StaticImage
              className="person-card-image"
              src="../../assets/uploads/waseem_daher_img.jpeg"
              alt="Waseem Daher"
            />
            <StaticImage width={75} src="../../assets/uploads/pilot-logo.png" alt="Waseem Daher" />
            <PersonTitle>Waseem Daher</PersonTitle>
            <PersonInfo>Pilot CEO and Co-Founder</PersonInfo>
          </EventSpeakerCard>
        </ContentItem>
      </Content>
    </Section>

    <Section>
      <EventContentCentered>
        <SectionEyebrow align="center">ROUNDTABLE WEBINAR</SectionEyebrow>
        <Title textStyle="h3">
          From Basecamp to Summit: Success secrets from small businesses that have scaled.
        </Title>
        <EventName>
          <IconCalendar /> Thursday, May 5th 2022, 11 am EDT
        </EventName>
        <Text>
          In this webinar, our panelists will discuss how they were able to grow as professional
          service providers and share real-world advice for other small businesses looking to scale.
        </Text>
        <Text>In this session you’ll learn:</Text>
        <ul>
          <li>Systems and strategies to make attracting new business more efficient</li>
          <li>How to optimize, manage, and motivate your team.</li>
          <li>
            Ways to better automate tasks to get more time back in your day so you can focus on
            growing your business.
          </li>
        </ul>
        <Button
          label="Save my seat"
          variant="primary"
          as="anchor"
          to="https://my.demio.com/ref/BmugnKrfaWVKTx7H"
        />
      </EventContentCentered>
      <SectionHeader>
        <SectionTitle align="center" textStyle="h2">
          Your Panelists
        </SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Cards>
          <PersonCard as="a" href="https://www.baileyreyes.com/">
            <StaticImage
              className="person-card-image"
              src="../../assets/uploads/julliana-reyes.jpg"
              alt="Julliana Reyes"
            />
            <PersonTitle>Julliana Reyes</PersonTitle>
            <PersonInfo>
              Founder and Attorney
              <br />
              Bailey Reyes Law Firm
            </PersonInfo>
          </PersonCard>
          <PersonCard as="a" href="https://www.roctel.net/">
            <StaticImage
              className="person-card-image"
              src="../../assets/uploads/cormac-reid.jpeg"
              alt="Cormac Reid"
            />
            <PersonTitle>Cormac Reid</PersonTitle>
            <PersonInfo>
              Founder and CEO
              <br />
              ROCTEL Telecommunications
            </PersonInfo>
          </PersonCard>
          <PersonCard as="a" href="https://www.shakemktg.com/">
            <StaticImage
              className="person-card-image"
              src="../../assets/uploads/stacey-danheiser.jpg"
              alt="Stacey Danheiser"
            />
            <PersonTitle>Stacey Danheiser</PersonTitle>
            <PersonInfo>
              Founder and CMO
              <br />
              SHAKE Marketing Group
            </PersonInfo>
          </PersonCard>
        </Cards>
      </SectionContent>
    </Section>

    <SectionNext bg={theme.colors.brand.accentDarker}>
      <SectionNextHeader bottomMargin="none">
        <Title light>About B12</Title>
        <Text light>
          B12 is the complete commerce platform for professional service providers. Built to support
          the end-to-end process of selling services and engaging clients online, B12 helps business
          owners establish a professional web-presence and create smooth client interactions.
        </Text>
        <Text light>
          The basis for the platform is a custom built, search engine optimized website that
          includes powerful features to support online conversion, client intake, appointment
          scheduling, email communication, invoicing, online payments and more. With an in-house
          team of design, copywriting, SEO, and launch experts B12 can get sites set up and launched
          in under 30 days, helping business owners spend less time trying to get their business
          established online, and more time doing what they love.
        </Text>
        <Text light>
          This year, B12 is proud to support National Small Business Week with resources and
          engaging content to celebrate and inspire entrepreneurs across the country.
        </Text>
        <Button
          label="Get started today"
          variant="primary-inverted"
          as="anchor"
          to="https://b12.io/signup/"
        />
      </SectionNextHeader>
    </SectionNext>
  </LayoutMain>
)

export default NsbwOnlineEvents2022

export const Head: HeadFC<HeadProps> = () => (
  <SEO
    pageTitle="B12: Free Webinars in Support of National Small Business Week"
    pageDescription="Hear from fellow small business owners and industry experts their  tips for
  leveraging team members and technology to better attract, win, and serve
  clients."
  />
)
