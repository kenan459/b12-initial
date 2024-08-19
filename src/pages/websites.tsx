import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { theme } from '@styles/theme'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextImage from '@components/hero/HeroTextImage'
import Text from '@components/text/Text'
import TextIcon from '@components/text-icon/TextIcon'
import Card from '@components/card/Card'
import { Button } from '@components/button/Button'
import SectionNext from '@components/section-next/SectionNext'
import Grid from '@components/grid/Grid'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'

// Images
import IconWrench from '@images/icons/wrench.inline.svg'
import IconPeople from '@images/icons/people.inline.svg'
import IconFirstDraft from '@images/icons/firstdraft.inline.svg'
import IconSecure from '@images/icons/secure.inline.svg'
import IconChart from '@images/icons/chart.inline.svg'
import IconShare from '@images/icons/share.inline.svg'
import IconLayout from '@images/icons/layout.inline.svg'
import IconIntegrations from '@images/icons/integrations.inline.svg'
import IconEditor from '@images/icons/editor.inline.svg'
import IconNoCode from '@images/icons/no-code.inline.svg'

const features = [
  {
    title: 'Instant website draft',
    description:
      'Hiring an agency or freelancer can mean weeks before you see a draft. With AI, you get a much easier and faster website creation process, with the first version ready in 60 seconds.',
    icon: <IconFirstDraft />,
    cta_url: '/ai-website-builder',
  },
  {
    title: 'B12 Editor',
    description:
      'Update your website anytime, even if you’re a beginner. Our user-friendly editor makes it incredibly simple for you to add a page, update the copy, or swap an image.',
    icon: <IconEditor />,
    cta_url: '/website-editor',
  },
  {
    title: 'Do it yourself or get help',
    description:
      'Too busy to tinker with your site? B12 enables anyone to launch their own website for free in under an hour, but you also have the option to let our expert team manage your launch for you.',
    icon: <IconPeople />,
    cta_url: '/creative-services',
  },
  {
    title: 'AI content creation',
    description:
      'Our AI Assist tool is like your copilot. It’s available everywhere in B12 to create a first draft of new SEO-friendly content based on what you need, including web pages, services, and blogs.',
    icon: <IconLayout />,
    cta_url: '/ai-assist',
  },
  {
    title: 'No-code web design',
    description:
      'Our algorithms generate relevant, customizable designs and images based on your business, industry, and preferences, so your site looks credible even in its first draft. No coding required.',
    icon: <IconNoCode />,
    cta_url: '/ai-website-builder',
  },
  {
    title: 'Secure web hosting',
    description:
      'Keep your business and clients safe with top security protocols and certifications, including HTTPS, TLS certificates, data privacy, and encryption.',
    icon: <IconSecure />,
    cta_url: '/product-overview#b12-products',
  },
  {
    title: 'All-in-one platform',
    description:
      'You get more than a website. Sophisticated tools for scheduling, client intake, and payments all live on a single platform.',
    icon: <IconLayout />,
    cta_url: '/product-overview',
  },
  {
    title: 'Third-party integrations',
    description:
      'Expand your website capabilities with third-party integrations for chat, tracking codes, scheduling, forms, podcasts, and more.',
    icon: <IconIntegrations />,
    cta_url: '/integrations',
  },
  {
    title: 'Conversion tools',
    description:
      'Announcement banners and pop-ups highlight information that encourages visitors to stay on your site and take the next step toward conversion.',
    icon: <IconWrench />,
    cta_url: '/product-overview#engagement-tools',
  },
  {
    title: 'Analytics & reporting',
    description:
      'B12 collects and displays data your business can actually use. Website and email performance metrics show where you’re succeeding and identify areas for improvement.',
    icon: <IconChart />,
    cta_url: '/seo',
  },
  {
    title: 'Custom domains',
    description:
      'A custom domain with matching business email addresses makes you easier to find, brands you as professional, and offers your contacts a consistent experience.',
    icon: <IconShare />,
    cta_url: '/product-overview#b12-products',
  },
]

const WebsitesPage = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Create the website you want with AI"
        text="Answer a few questions to get an AI-generated website in 60 seconds. Your B12 site includes AI-powered content creation, analytics, and powerful tools like scheduling and payments."
        image={
          <StaticImage
            src="../images/create-the-website-you-want.png"
            alt="Create the website you want with AI"
            width={680}
            quality={80}
          />
        }
        ctaAsButton
        ctaText="Start for free"
        ctaUrl="https://b12.io/signup/"
      ></HeroTextImage>

      <SplitTextLarge
        title="The AI website platform that works for you"
        headerBottomMargin="sm"
        imageFullWidth
        bgShape
        reversed
        image={
          <StaticImage
            src="../images/automated-secure.jpeg"
            alt="The AI website platform that works for you"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
        imageNoMargin
      >
        <Text>
          You need a website that gets visitors excited about working with your business. B12 uses
          generative AI to draft a site that’s specific to you, mobile-friendly, and
          search-optimized, so you always look professional. Use the B12 Editor to experiment with
          different themes, color palettes, and fonts, and then launch in under an hour.
        </Text>
        <Text>
          Want extra help customizing your website? Work with{' '}
          <Link to="/creative-services">B12’s team of experts</Link> in design, copywriting, and SEO
          to ensure your online presence pops.
        </Text>
      </SplitTextLarge>

      <SectionNext paddingTop="0px">
        <Grid gapLg={theme.spacing.large} gapXl={theme.spacing.large}>
          {features.map((item, idx: number) => {
            return (
              <Card key={`item-item-${idx}`}>
                <TextIcon
                  iconSize="sm"
                  vertical
                  title={item.title}
                  text={item.description}
                  icon={item.icon}
                />
                {item.cta_url && (
                  <Button
                    as="anchor"
                    size="xsmall"
                    variant="default"
                    to={item.cta_url}
                    label="Learn more"
                  />
                )}
              </Card>
            )
          })}
        </Grid>
      </SectionNext>

      <SuccessStoriesSlider
        aiQuote
        filter={[
          'mortgages-by-jill',
          'bell-group',
          'the-sandusky-group',
          'envision-hr',
          'the-rainbow-disruption',
          'find-yourself-in-fashion',
        ]}
      />

      <SectionCta
        title="Build the website you’ve always wanted"
        text="AI makes building a professional website easy and fast. B12’s all-in-one solution centralizes more parts of your business, including invoicing, payments, and marketing emails."
        ctaText="Start for free"
      />
    </LayoutMain>
  )
}

export default WebsitesPage

export const Head = () => {
  return (
    <SEO
      pageTitle="Create the website you want with AI"
      pageDescription="Answer a few questions to get an AI-generated website in 60 seconds. Your B12 site includes AI-powered content creation, analytics, and powerful tools like scheduling and payments."
    />
  )
}
