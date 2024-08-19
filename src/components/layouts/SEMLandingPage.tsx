import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import LayoutMain from './Main'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import TextIcon from '@components/text-icon/TextIcon'
import Grid from '@components/grid/Grid'
import { iconMotion } from '../../pages/_firm-of-the-future'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'
import FeaturedIn from '@partials/featured-in/FeaturedIn'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import FeaturesSlider from '@partials/features-slider/FeaturesSlider'

// Images
import IconRocket from '@images/icons/rocket.inline.svg'
import IconGlobe from '@images/icons/globe.inline.svg'
import IconChart from '@images/icons/chart.inline.svg'

const features = [
  {
    title: 'AI-generated website draft',
    text: 'No more time wasted building site content from scratch. Just answer a few simple questions about your business and B12 will auto-generate a draft complete with industry specific images, copy, and layouts.',
    link: 'https://www.b12.io/websites/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-1.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Creative services',
    text: "Don't have time to customize your draft? No problem. With B12 you have access to copywriting, design, and launch experts who will help you publish a site that reflects your business identity.",
    link: 'https://www.b12.io/creative-services/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-2.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Website themes and template library',
    text: 'Like your website draft, but want to make some changes? The B12 website editor comes complete with a library of themes, layouts, fonts, and colors so you can easily customize your online presence in just a few clicks.',
    link: 'https://www.b12.io/websites/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-3.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Client intake forms',
    text: 'With fully integrated client intake forms you can collect information about your website visitors to better qualify leads and streamline onboarding processes. That means a more tailored lead and client experience, with less effort.',
    link: 'https://www.b12.io/client-intake-forms/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-4.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Built-in appointment scheduling',
    text: "Don't get bogged down trying to coordinate appointment times. With B12 you can define your availability and sync your calendar to make scheduling time with you frictionless.",
    link: 'https://www.b12.io/bookings-scheduling-software/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-5.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Online invoicing and payments',
    text: 'Stop chasing down checks and get paid faster. With B12 you can electronically invoice your clients and accept online credit card payments.',
    link: 'https://www.b12.io/payments-invoicing-software/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-6.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Email marketing',
    text: 'Integrated email marketing lets you engage with prospects and clients beyond just your website and deliver value to their inbox so you stay top of mind.',
    link: 'https://www.b12.io/email-marketing/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-7.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
  {
    title: 'Contact management',
    text: "Keep client details organized in a single spot. With B12 you get fully integrated contact manager so you can track interactions and more easily support a contact's journey from lead to client.",
    link: 'https://www.b12.io/contact-manager/',
    image: (
      <StaticImage
        src="../../images/sem-features-image-8.png"
        alt="AI-generated website draft"
        loading="eager"
        quality={100}
        placeholder="none"
      />
    ),
  },
]

const SEMLandingPageLayout = ({ children }) => (
  <LayoutMain ctaOnlyNav>
    {children}

    <FeaturedIn />

    <SectionNext containerType="shaped">
      <SectionNextHeader>
        <Title>Deliver an integrated online experience</Title>
      </SectionNextHeader>
      <Grid>
        <TextIcon
          iconLight
          icon={<IconGlobe />}
          title="Deliver an integrated online experience"
          text="With B12, all the tools you need to attract, win, and serve clients are already built-in to your website. You deliver a high quality, seamless online experience to visitors, leads, and clients, all from a single platform."
          iconMotion={iconMotion}
          vertical
        />
        <TextIcon
          iconLight
          icon={<IconRocket />}
          title="Launch your website quickly"
          text="B12's AI-powered website builder creates an industry-specific site in seconds. Then, our team of experts step in to help refine your site's copy and design. You spend less time building your website, and more time building your business."
          iconMotion={iconMotion}
          vertical
        />
        <TextIcon
          iconLight
          icon={<IconChart />}
          title="More easily grow your service-based business"
          text="Supercharge your site to help your business scale. With B12 you get a turnkey service catalogue, pages optimized for conversion, intake forms, online appointment scheduling and more to make selling your services online a snap."
          iconMotion={iconMotion}
          vertical
        />
      </Grid>
    </SectionNext>

    <FeaturesSlider features={features} />
    <SuccessStoriesSlider />

    <SectionCta
      title="Make your website your number one sales tool. Start building your site for free today with B12"
      ctaText="Sign up for free"
      text=""
    />
  </LayoutMain>
)

export default SEMLandingPageLayout
