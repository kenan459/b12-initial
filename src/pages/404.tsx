import React from 'react'

// Components
import LayoutMain from '@components/layouts/Main'
import SEO from '@components/SEO'
import HeroTextImage from '../components/hero/HeroTextImage'

const NotFoundPage: React.FC = () => (
  <LayoutMain>
    <HeroTextImage
      padding="lg"
      title="404: Page not found"
      subtitle="Looks like this page doesn't exist. You can start browsing our website from the home page."
      ctaText="Head back home"
      ctaUrl="https://www.b12.io/"
      image={<></>}
    />
  </LayoutMain>
)

export default NotFoundPage

export const Head = () => <SEO pageTitle="404. Looks like this page doesn't exist" />
