import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import HeroTextImage from '@components/hero/HeroTextImage'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import { Button } from '@components/button/Button'
import TextIcon from '@components/text-icon/TextIcon'
import TextImage from '@components/text-image/TextImage'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'
import createMotionIcon from '@components/icon-motion/IconMotion'
import Timeline from '@components/timeline/Timeline'
import BubbleImage from '@components/bubble-image/BubbleImage'
import Grid from '@components/grid/Grid'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'

// Images
import IconPeopleRound from '@images/icons/people-round.inline.svg'
import IconAiRound from '@images/icons/ai-round.inline.svg'
import IconAI from '@images/icons/ai.inline.svg'
import IconCopywriting from '@images/icons/copywriting.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'
import IconPeople from '@images/icons/people.inline.svg'
import IconRocket from '@images/icons/rocket.inline.svg'
import IconWrench from '@images/icons/wrench.inline.svg'
import IconSend from '@images/icons/icon-send.inline.svg'
import IconEsignature from '@images/icons/esignature-icon.inline.svg'
import IconInvoice from '@images/icons/icon-invoice.inline.svg'

const StyledText = styled(Text)`
  margin: 0;

  ${mq['md']} {
    font-size: 16px;
    line-height: 25px;

    a {
      font-size: inherit;
      line-height: inherit;
    }
  }
`

const IconAiStyles = `
  top: 10px;
  right: 3%;

  ${mq['md']} {
    top: 35px;
    right: 23%;
  }

  svg {
    width: 50px;
    height: 50px;

    ${mq['md']} {
      width: 99px;
      height: 99px;
    }
  }
`

const IconPeopleStyles = `
  top: -20px;
  right: 15%;

  ${mq['md']} {
    right: 35%;
    top: -30px;
  }

  svg {
    width: 40px;
    height: 40px;

    ${mq['md']} {
      width: 80px;
      height: 80px;
    }
  }
`

// Data
const b12Freatures = [
  {
    icon: <IconAI />,
    title: 'AI built-in everywhere',
    subtitle:
      'Artificial intelligence is part of every piece of your B12 website, from page copy to invoice creation and marketing emails, allowing you to get things done so much quicker.',
  },
  {
    icon: <IconRocket />,
    title: 'Less effort, faster launch',
    subtitle:
      'We build your site for you so you can focus on running your business. AI means you spend less time and energy on website creation, and it’s launch-ready in under an hour.',
  },
  {
    icon: <IconCopywriting />,
    title: 'Compelling copy',
    subtitle: (
      <StyledText>
        Use the <a href="https://www.b12.io/ai-assist/">AI Assist tool</a> or B12 copywriters to
        fill your website with content that shows off your expertise, fulfills what visitors are
        looking for, and helps you climb up the search rankings.
      </StyledText>
    ),
  },
  {
    icon: <IconWrench />,
    title: 'Client engagement tools',
    subtitle:
      'Powerful B12 tools, like contact management, scheduling, and payments, all live on your website to offer a cohesive client experience and centralize important business data.',
  },
  {
    icon: <IconPeople />,
    title: 'Expert team on hand',
    subtitle:
      'Your team of experts is available from day one to customize your site, optimize it, and add integrations. Even after launch, have them handle any updates and enhancements you need.',
  },
  {
    icon: <IconDesign />,

    title: 'Intuitive editing',
    subtitle:
      'The B12 Editor makes it simple to quickly update your online presence, including your website pages, invoices, payments, appointments, and more — even on mobile.',
  },
]

const websiteTimeline = {
  items: [
    {
      title: 'AI draft',
      text: 'AI drafts a website for you in 60 seconds with scheduling, intake, and payments automatically enabled. It looks beautiful enough to publish immediately, but you’ll want to personalize it.',
    },
    {
      title: 'Review and refine',
      text: 'Easily tweak your draft with AI help, trying different themes, color palettes, and fonts to fit your vision. You can also give feedback to a B12 designer, who will use your notes to finalize the site.',
    },
    {
      title: 'Go live',
      text: (
        <p>
          Launch your website to start connecting with your audience and selling online! Use the B12
          Editor to make changes any time or if you’re too busy, have our{' '}
          <a href="https://www.b12.io/creative-services/">designers and copywriters</a> do it for
          you.
        </p>
      ),
    },
  ],
}

import {
  IconEsignatureStyles,
  IconSendStyles,
  IconInvoiceStyles,
} from '@partials/tools-section/ToolsSection'

const HowItWorks = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Powerful AI supported by an expert team"
        text="Draft your website in seconds. Publish it yourself or get help from our experienced team. Bring your business online today, launching a professional AI website in under an hour with payments, scheduling, email marketing, and all the tools you need to serve clients online."
        ctaAsButton
        imageBorderRadius
        ctaText="Start for free"
        ctaUrl="https://b12.io/signup"
        image={
          <>
            <StaticImage
              src="../images/powerful-ai.jpeg"
              className="hero-image-desktop"
              alt="The easiest way to edit your website"
              width={720}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              className="hero-image-mobile"
              src="../images/powerful-ai.jpeg"
              alt="The easiest way to edit your website"
              width={420}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            {createMotionIcon({
              customStyles: IconPeopleStyles,
              icon: <IconPeopleRound />,
              transition: { delay: 0.8 },
            })}
            {createMotionIcon({
              customStyles: IconAiStyles,
              icon: <IconAiRound />,
              transition: { delay: 1.2 },
            })}
          </>
        }
        secondaryImage={
          <>
            <StaticImage
              src="../images/website-editor-secondary.png"
              className="hero-image-desktop-secondary"
              alt="The easiest way to edit your website"
              width={385}
              loading="eager"
              placeholder="none"
              quality={100}
            />
            <StaticImage
              src="../images/website-editor-secondary.png"
              className="hero-image-tablet-secondary"
              alt="The easiest way to edit your website"
              width={240}
              loading="eager"
              placeholder="none"
              quality={100}
            />
            <StaticImage
              src="../images/website-editor-secondary.png"
              className="hero-image-mobile-secondary"
              alt="The easiest way to edit your website"
              width={120}
              loading="eager"
              placeholder="none"
              quality={100}
            />
          </>
        }
      />

      <SectionNext container={{ split: '1/3' }} bg={theme.colors.surface.default}>
        <SectionNextHeader>
          <Title as="h2">AI builds a website for you fast</Title>
          <Text>
            From first draft to launch, it only takes an hour using our AI website builder. Or,
            spend a little more time getting help from on-platform experts.
          </Text>
        </SectionNextHeader>
        <Timeline
          parentBackground={theme.colors.surface.default}
          numberBg={theme.colors.brand.accentLightest}
          items={websiteTimeline.items}
        />
      </SectionNext>

      <SectionNext>
        <TextImage
          title="Everything your business needs to succeed"
          reversed
          text={
            <>
              <Text>
                You need a professional website that appeals to prospects and helps make money for
                your business. B12’s AI-powered products, like online scheduling, contact
                management, customizable forms, and email marketing, let you work more efficiently,
                interact with visitors, and enable seamless client communication.
              </Text>
              <Text>
                From instantly drafting your site to working with you to personalize it, generate
                leads, and convert new clients, B12 is there at every step to help your business
                thrive.
              </Text>
            </>
          }
          linkUrl="https://b12.io/signup"
          linkText="Start for free"
          image={
            <BubbleImage
              type={3}
              align="right"
              children={
                <>
                  {createMotionIcon({
                    customStyles: IconSendStyles,
                    icon: <IconSend />,
                    transition: { delay: 0.8 },
                  })}
                  {createMotionIcon({
                    customStyles: IconInvoiceStyles,
                    icon: <IconInvoice />,
                    transition: { delay: 1.2 },
                  })}
                  {createMotionIcon({
                    customStyles: IconEsignatureStyles,
                    icon: <IconEsignature />,
                    transition: { delay: 1.6 },
                  })}
                </>
              }
              image={
                <>
                  <StaticImage
                    className="bubble-image-desktop"
                    src="../images/run-your-business.jpeg"
                    alt="Client engagement tools"
                    placeholder="blurred"
                    width={420}
                    quality={100}
                  />
                  <StaticImage
                    src="../images/run-your-business.jpeg"
                    className="bubble-image-mobile"
                    alt="Client engagement tools"
                    placeholder="blurred"
                    width={420}
                    quality={100}
                  />
                </>
              }
            />
          }
        />
      </SectionNext>

      <CtaSectionBanner>
        <Title as="h3" align="center" light>
          Join thousands of businesses that use B12 to power their online presence.
        </Title>
        <Text light>
          Transform your business with an AI website. See what we’ve built for customers like you.
        </Text>
        <Button
          as="anchor"
          variant="primary"
          to="https://www.b12.io/gallery"
          label="See our website gallery"
        />
      </CtaSectionBanner>

      <SplitTextLarge
        title="A beautiful website without starting from scratch"
        headerBottomMargin="sm"
        bgShape
        bgShapeColor={theme.colors.brand.accentLightest}
        imageNoMargin
        image={
          <StaticImage
            src="../images/beautiful-website.png"
            alt="A beautiful website without starting from scratch"
            placeholder="blurred"
            quality={100}
          />
        }
      >
        <Text>
          With B12, your online presence looks incredible from the first minute. Generate an entire
          website in one shot, and let AI draft what you need when it’s time to add a new web page,
          section, blog post, or email.
        </Text>
        <Text>
          Answer a few questions about your business to receive a custom AI website draft in 60
          seconds. Then, use the intuitive <Link to="/website-editor">B12 Editor</Link> to tweak
          your site and launch it yourself. You can always request that B12’s team of designers,
          copywriters, and SEO specialists bring your ideas to life and help you publish.
        </Text>
        <Text>
          Let B12 do the heavy lifting to bring your business online fast while you focus on your
          day-to-day. Your mobile-friendly, search-optimized website includes the tools you need to
          sell your services online and can be updated anytime.
        </Text>
        <Button as="anchor" variant="primary" to="https://b12.io/signup" label="Start for free" />
      </SplitTextLarge>

      <SectionNext>
        <SectionNextHeader align="center">
          <Title as="h2">What makes B12 different</Title>
        </SectionNextHeader>
        <Grid>
          {b12Freatures.map((item, idx) => (
            <TextIcon
              vertical
              title={item.title}
              icon={item.icon}
              text={item.subtitle}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
      </SectionNext>

      <SectionCta
        title="Transform your business with an AI website"
        text="Let AI instantly draft your new website full of the tools your business needs to scale."
        ctaUrl="https://b12.io/signup"
        ctaText="Get started"
      />
    </LayoutMain>
  )
}

export default HowItWorks

export const Head = () => (
  <SEO pageTitle="How it works" pageDescription="Powerful AI supported by an expert team" />
)
