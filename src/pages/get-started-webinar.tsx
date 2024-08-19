import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'
import { useSitewideSettings } from '@hooks/useSitewideSettings'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import { SectionEyebrow } from '@components/section'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import { HeroText } from './nsbw-online-events-2022'
import { Button } from '@components/button/Button'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import { HubspotForm } from '@components/hubspot-form/HubspotForm'

// Images
import B12LogoWhite from '@images/logo-b12-white.inline.svg'
import { StyledShapeFilled } from '@components/hero/HeroTextImage.styles'
import { StyledShapeOutline } from '@components/hero/HeroTextImage.styles'
import IconCalendar from '@images/icons/calendar.inline.svg'

const HeroContent = styled.div`
  display: grid;
  gap: 40px;

  .gatsby-image-wrapper {
    order: 2;
  }

  ${mq['md']} {
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .gatsby-image-wrapper {
      order: -1;
    }
  }
`

const StyledSectionNext = styled(SectionNext)`
  .shape-image {
    opacity: 0.3;
    z-index: 0;
  }

  ${HeroContent} {
    z-index: 1;
  }
`

const WebinarDate = styled(Text)`
  display: flex;
  align-items: center;
  gap: 5px;
`

const GetStartedWebinar = () => {
  const { webinarDate } = useSitewideSettings()
  const registrationSectionId = 'webinar-registration-form'

  return (
    <LayoutMain>
      <StyledSectionNext bg={theme.colors.brand.accentDarkest}>
        <HeroContent>
          <StaticImage
            src="../images/webinar-hero.png"
            className="hero-image-desktop"
            alt="Getting started webinar"
            width={960}
            loading="eager"
            quality={100}
            placeholder="none"
          />
          <HeroText>
            <B12LogoWhite />
            <SectionEyebrow align="left" color={theme.colors.text.white}>
              Webinar
            </SectionEyebrow>
            <Title light>Getting started webinar</Title>
            {webinarDate.trim() !== '' && (
              <WebinarDate light>
                <IconCalendar width="18" height="18" /> {webinarDate}
              </WebinarDate>
            )}
            <Text light>
              Join a free webinar to learn the basics of editing your B12 AI-powered site, setting
              up business tools, and taking your website live. This webinar runs under an hour and
              will help you get ready to set up your site and become comfortable with the B12
              platform. New and existing customers are welcome—no pre-existing account required. The
              B12 Customer Success team will be excited to answer your questions via chat.
            </Text>
            <Button
              label="Register"
              variant="primary-inverted"
              as="anchor"
              to={`#${registrationSectionId}`}
            />
          </HeroText>
        </HeroContent>
        <StyledShapeOutline className="shape-image" />
        <StyledShapeFilled className="shape-image" />
      </StyledSectionNext>

      <SplitTextLarge
        title="What we’ll cover"
        subtitle="This webinar is perfect for anyone interested in using B12, or existing customers who want
        to learn how they can make changes to their site and ensure they’re getting full value out
        of their B12 account."
        headerBottomMargin="sm"
        bgShape
        imageFullWidth
        bgShapeColor={theme.colors.brand.accentLightest}
        imageNoMargin
        image={
          <StaticImage
            src="../images/built-in-tools.jpg"
            className="hero-image-desktop"
            alt="Helping Firms Secure A Successful Future"
            loading="eager"
            quality={100}
            placeholder="none"
          />
        }
      >
        <Text>
          We’ll walk step-by-step through editing your homepage, styling your website, configuring
          tools like invoicing and scheduling, and taking your site live!
        </Text>
        <br />
        <Button
          as="anchor"
          to={`#${registrationSectionId}`}
          label="Register"
          variant="primary-inverted"
        />
      </SplitTextLarge>

      <SplitTextLarge
        title="About B12"
        subtitle="B12 is the complete commerce platform for professional service providers."
        bg={theme.colors.brand.accentLightest}
        headerBottomMargin="sm"
        bgShapeColor={theme.colors.brand.accentLightMedium}
        reversed
        imageFullWidth
        bgShapeFromTop
        bgShape
        image={
          <StaticImage
            src="../images/fully-optimized.jpg"
            className="hero-image-desktop"
            alt="Helping Firms Secure A Successful Future"
            loading="eager"
            quality={100}
            placeholder="none"
          />
        }
      >
        <div>
          <Text>
            Built to support the end-to-end process of selling services and engaging clients online,
            B12 helps business owners establish a professional web-presence and create smooth client
            interactions.
          </Text>
          <Text>
            The basis for the platform is a custom built, search engine optimized website that
            includes powerful features to support online conversion, client intake, appointment
            scheduling, email communication, invoicing, online payments and more. B12 helps business
            owners spend less time trying to get their business established online, and more time
            doing what they love.
          </Text>
          <br />
          <Button
            as="anchor"
            to={`#${registrationSectionId}`}
            label="Register"
            variant="primary-inverted"
          />
        </div>
      </SplitTextLarge>

      <SectionNext
        container={{
          maxWidth: '500px',
        }}
        borderBottom
        id={registrationSectionId}
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">Save your seat</Title>
          {webinarDate.trim() !== '' && (
            <WebinarDate>
              <IconCalendar width="18" height="18" /> {webinarDate}
            </WebinarDate>
          )}
        </SectionNextHeader>
        <HubspotForm
          formElementId="c9feeb4e-7cf9-4c16-b3dd-120ca7cc6d3e"
          formId="c9feeb4e-7cf9-4c16-b3dd-120ca7cc6d3e"
        />
      </SectionNext>
    </LayoutMain>
  )
}

export default GetStartedWebinar

export const Head = () => <SEO pageTitle="Getting started with B12" pageDescription="" />
