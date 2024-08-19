import React from 'react'
import { mq, theme } from '@styles/theme'
import { HeadProps, HeadFC } from 'gatsby'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import SwiperSlider from '@components/swiper-slider/SwiperSlider'

// Components

import SEO from '@components/SEO'
import LayoutOrchestra from '@components/layouts/LayoutOrchestra'
import SectionNext from '@components/section-next/SectionNext'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import { List } from '@components/layouts/IndustryHubsParent'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import { Button } from '@components/button/Button'
import ExampleWorkflow from '@components/example-workflow/example-workflow'
import { baseCss, styleDefaultCss, stylePrimaryCss } from '@components/button/Button.styles'
import { LinkUnderlined } from '@partials/about-page/styles'

// Partials
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Icons
import IconGit from '@images/icons/github.inline.svg'
import IconComments from '@images/icons/streamline.inline.svg'

// Data
import { sliderImages, features, motivation } from '@components/orchestra/_orchestra.data'

// Styles
const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;

  ${mq['md']} {
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
  }
`

const StyledButton = styled.a`
  display: flex;
  width: 100%;
  gap: 8px;
  ${baseCss}
  padding: ${theme.spacing.small} ${theme.spacing.medium};

  ${mq['md']} {
    padding: ${theme.spacing.medium} ${theme.spacing.large};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &:first-of-type {
    ${stylePrimaryCss}

    > svg path {
      fill: ${theme.colors.text.white};
    }
  }

  &:last-of-type {
    ${styleDefaultCss}
  }
`

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${mq['md']} {
    align-items: flex-start;
  }
`

const FeatureContent = styled.div``

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyledSplitTextLarge = styled(SplitTextLarge)`
  .swiper-slide {
    display: flex;
    align-items: center;
  }

  .slider-image {
    max-width: 300px;
    margin: 0 auto !important;

    ${mq['md']} {
      max-width: 650px;
    }
  }
`

const OrchestraPage = () => {
  return (
    <LayoutOrchestra>
      <SectionNext id="intro">
        <SectionNextHeader maxWidth="60%" align="center">
          <Title as="h1">Orchestra</Title>
          <Subtitle>
            An open-source human-in-the-loop AI system to orchestrate teams of experts and machines
          </Subtitle>
          <br />
          <CTAWrapper>
            <StyledButton href="http://github.com/b12io/orchestra" target="_blank">
              <IconGit /> View on GitHub
            </StyledButton>
            <StyledButton href="https://github.com/b12io/orchestra/discussions" target="_blank">
              <IconComments />
              Discuss in the forum
            </StyledButton>
          </CTAWrapper>
        </SectionNextHeader>
      </SectionNext>

      <StyledSplitTextLarge
        title={<Title textStyle="h2">Humans where they're best, machines for the rest</Title>}
        subtitle="Orchestra automates repetitive, rules-based project tasks so team members can focus on
        creative and analytical work, learn new skills, and mentor others."
        bg={theme.colors.brand.accentLightest}
        bgShape
        bgShapeFromTop
        bgShapeColor={theme.colors.brand.accentLightMedium}
        image={<SwiperSlider images={sliderImages} />}
      >
        <Text>
          Using a human-in-the-loop AI system like Orchestra will improve your project management
          processes, resulting in increased accuracy and consistency, less time coordinating
          projects, and more expert time in the areas they are uniquely positioned to work on.
        </Text>
        <Text>
          With Orchestra workflows, you’ll better allocate your team’s expertise, improve
          communication across teams, and never miss another deadline.
        </Text>
      </StyledSplitTextLarge>

      <SectionNext
        id="examples"
        container={{
          split: 'half',
        }}
      >
        <ExampleWorkflow />

        <SectionNextHeader>
          <Title textStyle="h2">Example workflow</Title>
          <Text>
            Below we'll walk you through an example of how Orchestra could be used in a newsroom.
            Take a look at the example implementation in our{' '}
            <a
              href="http://orchestra.readthedocs.org/en/latest/"
              target="_blank"
              rel="noreferrer noopener"
            >
              documentation!
            </a>
          </Text>
          <ul>
            <li>
              An editor finds a good story and kicks off the reporting workflow, providing
              information to help a reporter get started.
            </li>
            <li>The reporter picks up the available story and writes up a draft article.</li>
            <li>A more experienced reporter then reviews the article and suggests improvements.</li>
            <li>
              In parallel with the reporting step, a photographer picks up the available story as
              well, capturing relevant photos.
            </li>
            <li>
              A senior photographer reviews the photos, making edits and selecting the best ones.
            </li>
            <li>
              The selected photos are resized and recolored for display across different media.
            </li>
            <li>Finally, a copy editor adds headlines and photo captions to complete the story.</li>
          </ul>
          <CTAWrapper>
            <Button
              as="anchor"
              to="http://orchestra.readthedocs.org/en/latest/"
              target="_blank"
              label="Read the docs"
              variant="primary"
            />
            <LinkUnderlined
              href="http://github.com/b12io/orchestra"
              target="_blank"
              rel="noreferrer noopener"
            >
              View repository
            </LinkUnderlined>
          </CTAWrapper>
        </SectionNextHeader>
      </SectionNext>

      <SectionNext bg={theme.colors.brand.accentLightest} id="concepts">
        <SectionNextHeader align="center">
          <Title>Features</Title>
          <Subtitle>Orchestra’s major features that organize teams of humans + machines</Subtitle>
        </SectionNextHeader>

        <List>
          {features.map((feature, idx: number) => {
            return (
              <FeatureItem key={`feature-item-${idx}`}>
                {feature.icon && feature.icon}
                <Title as="h3" textStyle="h4">
                  {feature.title}
                </Title>
                <FeatureContent>{feature.description}</FeatureContent>
              </FeatureItem>
            )
          })}
        </List>
      </SectionNext>

      <SectionNext>
        <SectionNextHeader align="center" maxWidth="70%">
          <Title>Life of a task</Title>
          <Text align="center">
            Below are two images of the Orchestra dashboard, the launching point for expert workers.
            Click to see how tasks move differently across the dashboard for core workers and
            reviewers.
          </Text>
        </SectionNextHeader>
        <List>
          <TaskWrapper>
            <Title as="h3" textStyle="h4">
              Core expert
            </Title>
            <Text>
              A core expert performs initial task work that will later be reviewed. The diagram
              below shows a task's movement through the core worker's dashboard. Click to enlarge.
            </Text>
            <StaticImage src="../../assets/uploads/coreexpert.jpg" width={600} alt="Core expert" />
          </TaskWrapper>
          <TaskWrapper>
            <Title as="h3" textStyle="h4">
              Reviewer
            </Title>
            <Text>
              A reviewer evaluates the core expert's work and provides feedback. The diagram below
              shows a task's movement through a reviewer's dashboard. Click to enlarge.
            </Text>
            <StaticImage src="../../assets/uploads/reviewer.jpg" width={600} alt="Core expert" />
          </TaskWrapper>
        </List>
      </SectionNext>
      <CtaSectionBanner bg="light" id="community">
        <Title as="h2">Community</Title>
        <Text align="center">
          Orchestra is a project built around people. We're developers and designers who love to
          think about how we can take small steps toward improving the world and we love meeting
          people who feel the same!
        </Text>
        <Text align="center">
          Reach out to us with requests for help, feature requests, suggestions, complaints, and
          compliments on our discussion forum!
        </Text>
        <Button
          as="anchor"
          variant="primary"
          to="https://github.com/b12io/orchestra/discussions"
          label="Chat with us on the forum"
        />
      </CtaSectionBanner>

      <SectionNext id="motivation">
        <SectionNextHeader align="center">
          <Title>Motivation</Title>
        </SectionNextHeader>

        <List>
          {motivation.map((feature, idx: number) => {
            return (
              <FeatureItem key={`feature-item-${idx}`}>
                {feature.icon}
                <Title as="h3" textStyle="h4">
                  {feature.title}
                </Title>
                <FeatureContent>{feature.description}</FeatureContent>
              </FeatureItem>
            )
          })}
        </List>
      </SectionNext>
    </LayoutOrchestra>
  )
}

export default OrchestraPage

export const Head: HeadFC<HeadProps> = () => (
  <SEO
    pageTitle="Orchestra"
    pageDescription="An open-source human-in-the-loop AI system to orchestrate teams of experts and machines on complex projects."
  />
)
