import React from 'react'
import { PageProps, HeadProps, HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { mq } from '@styles/theme'
import styled from '@emotion/styled'

// Components

import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextSimple from '@components/hero/HeroTextSimple'
import SectionNext from '@components/section-next/SectionNext'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SectionCta from '@partials/section-cta/SectionCta'
import {
  Card,
  CardImageLink,
  CardTitle,
  CardTitleLink,
  CardDescription,
  CardLink,
} from '@components/post-preview/PostPreview'

// Styles

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  row-gap: 60px;

  ${mq['md']} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FreeResourcesPage: React.FC<PageProps> = () => {
  return (
    <LayoutMain>
      <HeroTextSimple
        title="B12 Free Business Resources"
        subtitle="Ebooks, guides, templates, and more to help you grow."
      />

      <SectionNext>
        <Content>
          <Card>
            <CardImageLink
              to="https://www.b12.io/email-templates-for-businesses"
              aria-label="12 email templates every business needs"
            >
              <StaticImage
                src="../images/email-template-social_1.png"
                width={380}
                height={380}
                alt="12 email templates every business needs"
              />
            </CardImageLink>
            <CardTitle>
              <CardTitleLink to="https://www.b12.io/email-templates-for-businesses">
                12 email templates every business needs
              </CardTitleLink>
            </CardTitle>
            <CardDescription>
              These templates will help business owners craft more professional and friendly emails
              in their campaigns.
            </CardDescription>
            <CardLink to="https://www.b12.io/email-templates-for-businesses">Read more</CardLink>
          </Card>
          <Card>
            <CardImageLink
              to="https://www.b12.io/law-firm-marketing-guide"
              aria-label="The 16 best low-cost ways to promote your website and gain clients"
            >
              <StaticImage
                src="../images/lawfirm_ebookpreview.png"
                width={380}
                height={380}
                alt="The 16 best low-cost ways to promote your website and gain clients"
              />
            </CardImageLink>
            <CardTitle>
              <CardTitleLink to="https://www.b12.io/law-firm-marketing-guide">
                The 16 best low-cost ways to promote your website and gain clients
              </CardTitleLink>
            </CardTitle>
            <CardDescription>
              To help you maximize the number of people visiting your site each day, we’ve curated
              several ways to generate viable leads.
            </CardDescription>
            <CardLink
              to="https://www.b12.io/law-firm-marketing-guide"
              aria-label="The 16 best low-cost ways to promote your website and gain clients"
            >
              Read more
            </CardLink>
          </Card>
          <Card>
            <CardImageLink
              to="https://www.b12.io/instagram-guide-2021"
              aria-label="The business owner's guide to better Instagram engagement in 2021"
            >
              <StaticImage
                src="../images/the-ultimate-guide-on-succeeding-on-instagram-in-2021-social.png"
                width={380}
                height={380}
                alt="The business owner's guide to better Instagram engagement in 2021"
              />
            </CardImageLink>
            <CardTitle>
              <CardTitleLink
                to="https://www.b12.io/instagram-guide-2021"
                aria-label="The business owner's guide to better Instagram engagement in 2021"
              >
                The business owner's guide to better Instagram engagement in 2021
              </CardTitleLink>
            </CardTitle>
            <CardDescription>
              If you’re using Instagram for your professional venture and want to know how to get
              more likes and followers, this guide helps you to do just that.
            </CardDescription>
            <CardLink
              to="https://www.b12.io/instagram-guide-2021"
              aria-label="The business owner's guide to better Instagram engagement in 2021"
            >
              Read more
            </CardLink>
          </Card>

          <Card>
            <CardImageLink
              to="https://www.b12.io/ultimate-seo-guide"
              aria-label="The ultimate SEO guide for your website"
            >
              <StaticImage
                src="../images/seo_ebook_preview.png"
                width={380}
                height={380}
                alt="The ultimate SEO guide for your website"
              />
            </CardImageLink>
            <CardTitle>
              <CardTitleLink
                to="https://www.b12.io/ultimate-seo-guide"
                aria-label="The ultimate SEO guide for your website"
              >
                The ultimate SEO guide for your website
              </CardTitleLink>
            </CardTitle>
            <CardDescription>
              The essentials for optimizing your website to rank in search engine results.
            </CardDescription>
            <CardLink
              to="https://www.b12.io/ultimate-seo-guide"
              aria-label="The ultimate SEO guide for your website"
            >
              Read more
            </CardLink>
          </Card>

          <Card>
            <CardImageLink
              to="https://www.b12.io/web-design-playbook-for-small-businesses"
              aria-label="The complete 2022 guide to small business website design (beginner-friendly)"
            >
              <StaticImage
                src="../images/the-ultimate-web-design-playbook-for-small-businesses.jpg"
                width={380}
                height={380}
                alt="The complete 2022 guide to small business website design (beginner-friendly)"
              />
            </CardImageLink>
            <CardTitle>
              <CardTitleLink
                to="https://www.b12.io/web-design-playbook-for-small-businesses"
                aria-label="The complete 2022 guide to small business website design (beginner-friendly)"
              >
                The complete 2022 guide to small business website design (beginner-friendly)
              </CardTitleLink>
            </CardTitle>
            <CardDescription>
              This guide will help small business owners develop a website that successfully
              converts visitors to customers.
            </CardDescription>
            <CardLink
              to="https://www.b12.io/web-design-playbook-for-small-businesses"
              aria-label="The complete 2022 guide to small business website design (beginner-friendly)"
            >
              Read more
            </CardLink>
          </Card>
        </Content>
      </SectionNext>

      <SuccessStoriesSlider />

      <SectionCta
        title="Everything your business needs to thrive"
        text="Let's build your new website and access the tools you need to serve clients."
        ctaUrl="https://b12.io/signup"
        ctaText="Get started"
      />
    </LayoutMain>
  )
}

export default FreeResourcesPage

export const Head: HeadFC<HeadProps> = () => (
  <SEO
    pageTitle="B12 Free Business Resources"
    pageDescription="Ebooks, guides, templates, and more to help you grow."
  />
)
