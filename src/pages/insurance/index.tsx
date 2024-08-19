import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Types
import { HeroImageProps } from '../../partials/home-hero/HomeHero'

// Components
import SEO from '../../components/SEO'
import IndustryHubsParentLayout from '../../components/layouts/IndustryHubsParent'
import Text from '../../components/text/Text'

// Images
import IconCredible from '../../images/icons/credible.inline.svg'
import IconStreamline from '../../images/icons/streamline.inline.svg'
import IconMagnet from '../../images/icons/magnet.inline.svg'
import IconSimple from '../../images/icons/simple.inline.svg'
import emptySectionBg from '../../images/industry-hubs/insurance/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-insurance-brokers.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryInsuranceParent = () => {
  return (
    <IndustryHubsParentLayout
      hero={{
        title: 'Website design for insurance brokers',
        subtitle: 'Great web design gives your insurance agency an edge',
        text: (
          <>
            <Text small>
              The insurance market is crowded, so your agency needs a way to stand above the
              competition and win new business more easily. A polished, secure website can be your
              most effective tool to show prospects that you’re the licensed expert they should work
              with on all things insurance, including auto, home, renter’s, life, and health
              insurance.
            </Text>
            <Text small>
              With so many choices of insurance agents out there, make it clear to visitors why
              you’re the best fit. Launching an online presence that’s attractive, discoverable, and
              built to convert can have a considerable impact on your revenue and growth.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best insurance broker websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#insurance',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/insurance/1_hero.png"
              alt="Website design for insurance brokers"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/insurance/1_hero.png"
              alt="Website design for insurance brokers"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'Essential ingredients of an insurance broker website',
        list: [
          {
            icon: <IconCredible />,
            title: 'Establishes credibility',
            subtitle: (
              <p>
                Clients come to you to be sure they have adequate insurance coverage at the most
                affordable rate. You’re a trusted advisor who listens to their needs and finds the
                right policy for their property, family, and business. Your website, like your firm,
                should help visitors find answers, solve problems, purchase insurance products, and
                communicate with you.{' '}
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Generates insurance leads',
            subtitle: (
              <p>
                Insurance clients have high lifetime values, which makes paid search competition
                fierce and expensive. Insurance keywords are among the most expensive to advertise
                for, with the cost per click as high as $50! This is a major reason to ensure your
                site is optimized for organic search and to work with an SEO specialist, so it ranks
                better on search engines and gets discovered by prospective clients.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Streamlines client interactions',
            subtitle: (
              <p>
                Effortlessly maintain relationships with all of your insurance agency’s contacts and
                simplify their experience on your website. From quick-loading web pages to the
                option to pay for your services online, every element of your site should help
                clients conveniently accomplish what they want and motivate them to refer you.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Simplifies your insurance agency’s operations',
            subtitle: (
              <p>
                Your insurance website has the potential to centralize all areas of your business
                and manage them online, including your client list, marketing emails, appointment
                history, and payments for your services. Streamlining your client journey and
                cutting out the need for third-party tools helps you spend less time on
                administrative tasks and more time serving clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A proven approach to insurance websites',
        subtitle: 'You started your insurance firm to improve clients’ lives, not design websites.',
        text: (
          <>
            <Text small>
              B12’s team and AI-powered technology do the heavy lifting to bring you online and sell
              more insurance products with less effort. We help you publish your professional site
              in 30 days or less, complete with tools that add efficiency to your business, so your
              time and energy go toward solving problems for clients.
            </Text>

            <Text small>
              B12 enables insurance brokers to launch modern websites with tools to help attract,
              win, and serve clients online. We set up your firm with everything you need to deliver
              excellent services that make your clients’ lives easier and encourage repeat business.
            </Text>
          </>
        ),
        items: [
          {
            title: 'Receive an AI draft',
            text: 'Building a website for your insurance business doesn’t have to take months and distract you from offering great service. B12 speeds up and simplifies the process by using AI to draft your initial site. Answer a few questions about your insurance firm, and we’ll produce a website specific to your business in less than 60 seconds. ',
          },
          {
            title: 'Work with experts in insurance firm web design',
            text: 'With a quality starting point for design and web copy, B12 experts then work with you to customize and launch your mobile-friendly, fully branded website. It looks credible, is search-optimized, and is built for smooth client interactions.  B12’s knowledgeable designers, copywriters, and SEO specialists are on hand to update your site any time — or you can do it yourself with our easy website editor.',
          },
          {
            title: 'Boost revenue through online payments, automation, and conversion tools',
            text: 'Website pop-ups, banners, and strategic calls to action boost your conversion rate, while online scheduling and digital payments let visitors purchase your services and schedule time to work together, directly on your site. Automated reminders help you eliminate appointment no-shows and consistently get paid on time.',
          },
          {
            title: 'Launch your insurance brokerage’s new website',
            text: 'The sooner your new site launches, the sooner you’re discoverable to potential customers shopping for insurance policies. Once your site is published, leverage powerful tools like online payments, appointment scheduling, email marketing, and client intake forms to provide clients with the experience they expect.',
          },
        ],
      }}
      childHubs={{
        title: 'Insurance broker website design for every agency type',
        links: [
          {
            text: 'Life insurance',
            url: '/insurance/life-insurance',
          },
          {
            text: 'Health insurance',
            url: '/insurance/health-insurance',
          },
        ],
      }}
      designBasics={{
        title:
          'What are the best practices for building high-performance insurance agency websites?',
        text: 'These crucial features enable you to build a modern, user-friendly insurance firm website.',
        items: [
          'Fast page speed',
          'Responsive on mobile devices',
          'Blog content for your target audience ',
          'Testimonials from satisfied clients',
          'An enticing front page that captures a user’s attention',
          'Forms to collect more leads',
          'A page, section, or detailed description of each specific service and insurance type',
          'On-page and off-page SEO',
          'CTA buttons on high-traffic pages',
          'Conversion-oriented design elements and tools',
          'Intuitive navigation and user experience',
        ],
      }}
      ctaMini={{
        title: 'Quality website design can help you grow your insurance business fast',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What separates a good insurance agency website from a great one?',
        subtitle:
          'The most effective insurance broker websites are equally user-friendly for visitors and powerful in driving growth for your firm.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/3_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Your firm’s website should effortlessly collect information from leads via forms and
              signups, centralize everything in a contact manager, automatically send follow-ups
              (e.g., welcome emails and appointment reminders), and include tools to more easily
              convert them to new clients.
            </Text>

            <Text small>
              With 41% of consumers preferring to buy insurance policies online, your firm can be
              more competitive by making that process straightforward and quick. An easy way to set
              your insurance agency apart from others and improve the broker-client relationship is
              to remove any friction from contacting you, submitting and signing documents, and
              paying for your services directly on your website.
            </Text>

            <Text small>
              For more inspiration and to see examples of great insurance web design, take a look
              through B12's best insurance agents and brokers websites.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#insurance',
        ctaText: 'Browse insurance firm websites',
      }}
      splitImageLeft={{
        title: 'Building websites for independent insurance brokers and small firms since 2016',
        subtitle:
          'B12 specializes in building custom websites for insurance firms that meet industry best practices and make a great first impression on every potential client.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/4_websites.png"
            alt="Building websites for solo attorneys and small law firms since 2016"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Our team handles your entire project from end to end, while still giving you control
              over design preferences and the ability to make quick web page updates using our
              intuitive editor. The B12 platform was created specifically for service businesses,
              and our experts have built hundreds of insurance agent websites that emphasize each
              company's unique expertise and services, with design, marketing, and conversion
              features that prompt website visitors to take the next step.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from insurance brokers',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio']}
    />
  )
}

export default IndustryInsuranceParent

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Insurance Brokers"
    pageDescription="Web design and websites made to help insurance brokers generate leads, win business, and engage clients."
  />
)
