import React from 'react'
import { Link } from 'gatsby'

// Components
import SEO from '../components/SEO'
import LayoutMain from '../components/layouts/Main'
import SectionNext from '../components/section-next/SectionNext'
import SectionNextHeader from '../components/section-next/SectionNextHeader'
import Title from '../components/title/Title'
import Subtitle from '../components/subtitle/Subtitle'
import Accordion from '../components/accordion/Accordion'

// Partials
import PricingHero from '../partials/pricing-hero/PricingHero'
import SectionCta from '../partials/section-cta/SectionCta'

// Data
import pricingFAQ from '../data/pricing/faq.yaml'

const PricingPage = () => {
  return (
    <LayoutMain>
      <PricingHero />
      <SectionCta />
      <SectionNext
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader>
          <Title>Frequently Asked Questions</Title>
          <Subtitle small>
            Common questions about B12. Didn’t find the answer you needed?
            <br />
            Check our{' '}
            <a href="https://support.b12.io/en/" target="_blank" rel="noreferrer noopener">
              Help Center
            </a>{' '}
            or <Link to="/contact-us">get in touch</Link>.
          </Subtitle>
        </SectionNextHeader>
        <Accordion items={pricingFAQ} />
      </SectionNext>
    </LayoutMain>
  )
}

export default PricingPage

export const Head = () => (
  <SEO
    pageTitle="Packages &amp; Pricing"
    pageDescription="B12 packages and pricing to make it easier to attract, win, and serve your clients. Tailored for the needs of professional service providers looking to scale."
    prefixTitle
  />
)
