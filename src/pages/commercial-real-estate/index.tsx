import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Types
import { HeroImageProps } from '../../partials/home-hero/HomeHero'

// Components
import SEO from '@components/SEO'
import IndustryHubsParentLayout from '../../components/layouts/IndustryHubsParent'
import Text from '../../components/text/Text'

// Images
import IconCredible from '../../images/icons/credible.inline.svg'
import IconStreamline from '../../images/icons/streamline.inline.svg'
import IconMagnet from '../../images/icons/magnet.inline.svg'
import IconSimple from '../../images/icons/simple.inline.svg'
import emptySectionBg from '../../images/industry-hubs/real-estate/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-commercial-real-estate.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryRealEstateParent = () => {
  return (
    <IndustryHubsParentLayout
      childHubs={null}
      hero={{
        title: 'Website design for commercial real estate firms',
        subtitle: 'Why great web design gives your CRE firm an edge',
        text: (
          <>
            <Text small>
              To effectively compete in the highly competitive commercial real estate market, your
              firm must differentiate itself and attract new business with ease. A secure, polished
              website can be your most powerful tool to demonstrate your expertise in the industry
              and convince potential clients that you are the right choice for their office, retail,
              industrial, or hospitality property needs.
            </Text>
            <Text small>
              With so many choices of CRE realtors out there, make it clear to potential clients why
              you’re the best fit. A strong online presence, which is both visually appealing and
              easy to find, can significantly impact your revenue and growth potential. Launching a
              website designed to convert visitors into clients can help you showcase your unique
              value and stand out in a highly competitive market. For CRE firms, B12 is the
              all-in-one platform that enables you to look professional and efficiently serve
              clients online.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best commercial real estate websites ',
        ctaUrl: 'https://www.b12.io/gallery-industry#architecture-and-real-estate',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/real-estate/1_hero.png"
              alt="Website design for commercial real estate firms"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/financial-advisors/1_hero.png"
              alt="Website design for commercial real estate firms"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'Essential ingredients of a successful CRE website',
        list: [
          {
            icon: <IconCredible />,
            title: 'Conveys expertise',
            subtitle: (
              <p>
                You play a critical role in helping clients navigate the complex world of commercial
                real estate for their business. Your firm acts as trusted advisors, assisting
                clients with finding properties that meet their specific needs, whether they are
                looking to buy, lease, or sell. Your website, like your firm, should help visitors
                find answers to their most pressing questions, view potential properties, and
                communicate with you effectively.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Streamlines client interactions',
            subtitle: (
              <p>
                Effortlessly maintain relationships with all of your firm’s contacts and simplify
                their experience on your website. From quick-loading web pages to the option to
                schedule site viewings online, every element of your site should help clients
                conveniently accomplish what they want and motivate them to refer you.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: ' Attracts new clients',
            subtitle: (
              <p>
                Unlike residential real estate, commercial real estate deals with long closing
                cycles. To ensure there are always potential clients learning about your firm, your
                website and digital marketing tactics need to be working hard for you. This is a
                major reason to ensure your website is optimized for organic search and to work with
                a B12 SEO specialist, so it ranks well on search engines and gets discovered by
                prospective clients.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: "Simplifies your firm's operations",
            subtitle: (
              <p>
                Your firm’s website has the potential to centralize all areas of your business and
                manage them online, including your client list, asset management, appointment
                history, and lease administration. Streamlining your client journey and cutting out
                the need for third-party tools helps you spend less time on administrative tasks and
                more time serving clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A strategic approach to commercial real estate websites',
        subtitle:
          'Your business started from a love of real estate, not website design. Leave that to us.',
        text: (
          <>
            <Text small>
              B12’s team and AI-powered technology do the heavy lifting to bring you online and
              attract more clients with less effort. We help you publish your professional site in
              30 days or less, complete with tools that add efficiency to your business, so your
              time and energy go toward solving problems for clients.
            </Text>

            <Text small>
              B12 enables commercial real estate firms to launch modern websites with tools to help
              attract, win, and serve clients online. We set up your firm with everything you need
              to deliver excellent services that make your clients’ lives easier and heighten your
              presence in the CRE industry.
            </Text>
          </>
        ),
        items: [
          {
            title: 'Receive an AI draft',
            text: 'Creating a website can be a time-consuming distraction from supporting your clients. With B12, the process is streamlined and accelerated through the use of AI technology. Simply answer a few questions about your business, and our platform will generate a personalized website in under 60 seconds. This quick and easy solution allows you to focus on your clients while ensuring a strong online presence for your business.',
          },
          {
            title: 'Work with experts in real estate web design',
            text: 'With a quality starting point for design and web copy, B12 experts then work with you to customize and launch your mobile-friendly, fully branded website. It looks credible, is search-optimized, and is built for smooth client interactions. B12’s knowledgeable designers, copywriters, and SEO specialists are on hand to update your site any time — or you can do it yourself with our easy website editor.',
          },
          {
            title: 'Boost conversion through online appointments',
            text: 'Website pop-ups, banners, and strategic calls to action boost your conversion rate, while online site portfolios and site viewing schedules let visitors get to work with you quickly from your site. Automated reminders help you eliminate appointment no-shows and make the most of your team’s time.',
          },
          {
            title: 'Launch your CRE firm’s new website',
            text: 'The sooner your new site launches, the sooner you’re discoverable to potential businesses looking for the exact properties in your portfolio. Once your site is published, leverage powerful tools like appointment scheduling, email marketing, and client intake forms to provide clients with the experience they expect.',
          },
        ],
      }}
      designBasics={{
        title:
          'What are the best practices for building high-performance commercial real estate websites?',
        text: 'These crucial features enable you to build a modern, user-friendly commercial real estate website.',
        items: [
          'Rapid page load time',
          'Mobile-friendly design',
          'Blog posts that speak directly to your ideal audience',
          'Testimonials from delighted clients',
          'An attention-grabbing front page that captures user interest',
          'Forms to collect more leads',
          'A page, section, or detailed description of each of your services',
          'On-page and off-page SEO',
          'CTA buttons on high-traffic pages',
          'Conversion-oriented design elements and tools',
          'Intuitive navigation and user experience',
        ],
      }}
      ctaMini={{
        title: 'Quality website design can help you grow your commercial real estate business fast',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What separates a remarkable commercial real estate website from the rest?',
        subtitle:
          'The most effective CRE websites are equally user-friendly for visitors and powerful in driving growth for your firm.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/real-estate/4_longformcontent.png"
            alt="What do the top investment firm websites have in common?"
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
              When looking for possible locations for their business, businesses start by searching
              online, so your firm can be more competitive by making that process straightforward
              and quick. An easy way to set your firm apart from others and improve client
              relationships is to remove any friction from contacting you, submitting documents, and
              paying you directly through your website.
            </Text>

            <Text small>
              For more inspiration and examples of great commercial real estate web design, look
              through B12's best CRE firm websites.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#architecture-and-real-estate',
        ctaText: 'Browse commercial real estate websites',
      }}
      splitImageLeft={{
        title: 'Building websites for independent CRE brokers and small firms since 2016',
        subtitle:
          'B12 specializes in building custom websites for CRE firms that meet industry best practices and make a great first impression on every potential client.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/real-estate/5_endorsementcontent.png"
            alt="B12 builds and maintains custom websites for investment firms"
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
              and our experts have built hundreds of real estate websites that emphasize each
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
        title: 'Frequently asked questions from commercial real estate firms',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio']}
    />
  )
}

export default IndustryRealEstateParent

export const Head = () => (
  <SEO
    pageTitle="Website design for commercial real estate firms"
    pageDescription="Discover how to design a commercial real estate web presence that attracts clients, streamlines your operations, and helps your CRE firm scale."
  />
)
