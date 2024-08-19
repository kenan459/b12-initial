import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '../../components/SEO'
import IndustryHubsChildLayout from '../../components/layouts/IndustryHubsChild'
import Text from '../../components/text/Text'

// Images
import IconDesign from '../../images/icons/design.inline.svg'
import IconRocket from '../../images/icons/rocket.inline.svg'
import IconWrench from '../../images/icons/wrench.inline.svg'
import IconPeople from '../../images/icons/people.inline.svg'

// Data
import faq from '../../data/industry-hubs/faq-life-insurance-brokers.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Website design for life insurance brokers',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your insurance agency today',
      }}
      businessCard={{
        title: 'Grow your agency with an effective life insurance website',
        subtitle:
          'Life insurance, while unpleasant for some to think about, is a necessary part of life that provides protection against uncertainty.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/life-insurance/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              The process of choosing a life insurance provider can be daunting and confusing, which
              is why it’s so crucial that life insurance agents have a credible site that puts
              visitors at ease and carefully guides them through a sensitive process.
            </Text>

            <Text small>
              As a life insurance agent, your site should make it easy for visitors to understand
              your specific services, credentials, and the steps they’ll take to find the right life
              insurance policy for them. A professional, efficient website will provide a smooth
              client experience while also helping you generate more leads and sell more insurance
              policies with less effort.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Expand the reach of your life insurance services',
        subtitle: 'Term life insurance, whole life insurance, universal life insurance.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/life-insurance/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              Whatever your insurance agency specializes in, make sure it’s easy for website
              visitors to learn more about getting the policy they need. One of the best ways to
              accomplish this is by having individual web pages for each insurance category, policy,
              and service you sell, with a CTA button or next steps to get additional information.
            </Text>
            <Text small>
              Optimizing your life insurance site for both search engines and potential customers
              allows you to expand your reach and generate more traffic based on what your target
              audience needs. Adding conversion best practices like exit intent pop-ups and opt-in
              forms increases your chances of gaining clients and generating revenue.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'Ingredients of great life insurance web design',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/life-insurance/3_desktop.png"
            alt="What every tax lawyer website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Cohesive design and branding',
            subtitle:
              'Every page should flow and feel on-brand, as not to disrupt the visitor experience and distract from your insurance expertise. Be intentional about the images, layout, and design elements you use — all it works together to create a positive first impression and keep visitors on your site.',
          },
          {
            icon: <IconRocket />,
            title: 'SEO and organic growth tactics',
            subtitle:
              'Optimizing your website for search engines and listings on relevant online insurance directories can help you drive more traffic, specifically qualified traffic that’s more likely to become clients. Investing a bit more in keyword research and content marketing can be a huge sales booster for your insurance firm.',
          },
          {
            icon: <IconWrench />,
            title: 'Tools that convert visitors',
            subtitle:
              'With 16% of consumers admitting that they don’t have a life insurance policy but need one, website visitors are ripe for conversion — they just need a little push. Educational website content about the importance of life insurance, backed by conversion tactics like live chat, discount pop-ups, lead forms, banner ads, and dedicated landing pages for each of your insurance products can help you more easily win new business.',
          },
          {
            icon: <IconPeople />,
            title: 'Convenient client features',
            subtitle:
              'A user-friendly online experience that allows prospects and clients to schedule appointments, pay you, and submit important documents helps you engage your contacts and increase revenue for your firm without wasting time on administrative tasks.',
          },
        ],
      }}
      ctaMini={{
        title: 'A custom website can attract new life insurance customers',
        text: 'Set your site up for free today',
      }}
      testimonials={{
        title: 'What do other service providers think of B12’s approach to website design?',
        list: [
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/photo_leroymaxwell.png"
                alt="Leroy Maxwell Jr."
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            name: 'Leroy Maxwell Jr.',
            position: 'Founder of Maxwell Tillman',
            quote:
              'I would recommend B12 to any company that wants a team to manage and grow their website while they focus on growing the business. With B12, founders can be rest assured that their website is in good hands and, more importantly, prove its value and ROI.',
            link: '/case_studies/maxwell-tillman',
            linkText: 'Read Leroy Maxwell Jr.’s story',
            customerSince: 'B12 customer Since 2020',
          },
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/taxstudio-headshot.png"
                alt="Brett Packard"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px', boxShadow: '0 0 15px rgba(0,0,0,.15)' }}
              />
            ),
            reversed: true,
            name: 'Brett Packard',
            position: 'Head of Operations at TaxStudio',
            quote:
              'What B12 offers in terms of support service and design knowledge is what we were looking for. We finally have a website we’re proud of.',
            link: '/case_studies/taxstudio',
            linkText: 'Read Brett Packard’s story',
            customerSince: 'B12 customer Since 2021',
          },
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/action-logistix-headshot.jpeg"
                alt="Barbara Bartelsmeyer"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            name: 'Barbara Bartelsmeyer',
            position: 'Partner & COO of Action Logistix',
            quote:
              'We save a lot in monthly costs by switching to B12. We aren’t charged extra for optimization tools anymore. We aren’t overcharged for redesigning, because with B12, making changes are part of your normal day.',
            link: '/case_studies/action-logistix',
            linkText: 'Read Barbara Bartelsmeyer’s story',
            customerSince: 'B12 customer Since 2020',
          },
        ],
      }}
      help={{
        title: 'Helping life insurance providers across America build professional websites',
        textLeft: (
          <>
            <Text small>
              B12 has built thousands of customer websites for service businesses, with demonstrated
              experience in the life insurance market. We know how to create an online presence for
              small, busy firms that more efficiently engages clients and helps you boost retention.
              Our team of designers, copywriters, and SEO specialists take the lead on your new
              website while soliciting your feedback and ideas along the way. If you’d like to be
              more hands-on, our easy website editor allows you to manage your content, images,
              design, and business tools anytime.
            </Text>
            <Text small>
              The B12 platform was built specifically for professional service firms, and our
              experts have created hundreds of insurance agency websites that showcase a company's
              unique value proposition and equip it with all of the tools needed to encourage
              website leads to become clients.
            </Text>
          </>
        ),
        textRight: (
          <Text>
            B12’s commitment to helping our customers thrive online has earned us hundreds of
            positive reviews and 4+ stars on all of the top review websites, including
          </Text>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from<br/> life insurance firms',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Life Insurance Brokers"
    pageDescription="Custom website design by B12 can help your insurance agency stand out online to sell more life insurance policies and retain clients."
  />
)
