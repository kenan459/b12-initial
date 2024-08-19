import React from 'react'
import { PageProps, HeadProps, HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'

// Components

import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextImage from '@components/hero/HeroTextImage'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import TextIcon from '@components/text-icon/TextIcon'
import Grid from '@components/grid/Grid'
import SectionCta from '@partials/section-cta/SectionCta'
import Subtitle from '@components/subtitle/Subtitle'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import Icon from '@components/icon/Icon'

// Data

import { whatsIncluded, seoItems } from '@pages/_seo.data'

// Styles

const SectionWhatsIncluded = styled(SectionNext)`
  padding-block: ${theme.spacing.large} 0;

  ${mq['md']} {
    padding-block: 0;
  }
`

const StyledText = styled(Text)`
  margin-top: ${theme.spacing.large};

  ${mq['md']} {
    margin-top: ${theme.spacing.xlarge};
  }
`

const SeoPage: React.FC<PageProps> = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="B12 SEO"
        subtitle="Drive higher-quality traffic to your website through powerful search engine optimization (SEO)."
        ctaAsButton
        ctaText="Get started"
        ctaUrl="https://b12.io/signup"
        imageDefaultSize
        image={
          <StaticImage
            src="../../assets/img/seo-setup.png"
            alt="Everything you need to run your business, in one place"
            placeholder="blurred"
            loading="eager"
            width={550}
            quality={100}
          />
        }
      />

      <SplitTextLarge
        title={<Title textStyle="h2">Improve your search engine rankings</Title>}
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        reversed
        image={
          <StaticImage
            src="../../assets/img/search-engine-rankings.jpg"
            alt="Improve your search engine rankings"
            placeholder="blurred"
            quality={80}
          />
        }
      >
        <Text>
          Most visitors find you online via search engines like Google. SEO is the process of making
          changes to your online presence to help it rank higher in organic search results when
          someone searches for a keyword related to your firm. Better SEO means more visitors to
          your website and a greater chance of gaining new clients.
        </Text>
        <Text>
          SEO is critical to improve search ranking, draw prospective clients to your website, and
          build online awareness of your business. That’s why we built it into the process of
          digitally transforming your company. From day one, your online presence is optimized.
        </Text>
        <Text>
          B12's SEO offering is powered by machines and refined by SEO specialists, saving time
          without sacrificing precision. The speed at which our algorithm executes keyword research
          — leaving our experts to focus on content and design — allows us to affordably offer SEO
          and bring your firm online in just 30 days.
        </Text>
      </SplitTextLarge>

      <SectionWhatsIncluded>
        <SectionNextHeader>
          <Title>What’s included in B12 SEO?</Title>
          <Text>Our SEO specialists set you up with the following:</Text>
        </SectionNextHeader>
        <Grid colsLg={4} colsMd={2} colsXl={4}>
          {whatsIncluded.map((item, idx) => (
            <TextIcon
              vertical
              title={item.title}
              text={item.description}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
      </SectionWhatsIncluded>

      <SectionNext containerType="shaped">
        <SectionNextHeader>
          <Title textStyle="h3">Can I do SEO myself instead?</Title>
          <Subtitle as="h3">
            You mean, why should you pay us to do it for you?
            <br />
            The goal of SEO is simple, but carrying out a comprehensive SEO strategy is not.
          </Subtitle>
        </SectionNextHeader>
        <Grid colsMd={2}>
          {seoItems.map((item, idx) => (
            <TextIcon
              iconAsIs
              icon={<Icon light>{++idx}</Icon>}
              title={item.title}
              text={item.text}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
        <StyledText>
          B12’s SEO lists your site on the search engines and directories where prospective clients
          seek you out,
          <br /> ensuring that you can actually get found.
        </StyledText>
      </SectionNext>

      <SuccessStoriesSlider />

      <SectionCta
        title="Increase your firm’s online visibility"
        text="SEO connects you with more people in your area looking for your services. B12 combines SEO specialists with AI to offer affordable, custom optimization done for you fast."
        ctaUrl="https://b12.io/signup"
        ctaText="Get started"
      />
    </LayoutMain>
  )
}

export default SeoPage

export const Head: HeadFC<HeadProps> = () => (
  <SEO
    pageTitle="Seo"
    pageDescription="Beautiful custom websites built faster and cheaper by combining the efficiency of A.I. and the creativity of humans."
  />
)
