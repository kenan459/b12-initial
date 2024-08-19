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
import emptySectionBg from '../../images/industry-hubs/lawyers/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-lawyers.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryLawyersParent = () => {
  return (
    <IndustryHubsParentLayout
      hero={{
        title: 'Website design for lawyers',
        subtitle: 'Why good website design for lawyers matters',
        text: (
          <>
            <Text small>
              For many lawyers, creating a website is an intimidating task that's outside of their
              expertise. But these days, it's a non-negotiable if you want to reach prospective
              clients and win new business.
            </Text>
            <Text small>
              More than a third of people start their search online when hiring a law firm. To make
              the best first impression, your firm needs a professional, modern website built to
              convert visitors to new clients and provide a seamless experience that keeps them
              coming back.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best law firm websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#legal-services',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/lawyers/1_hero.png"
              alt="Website design for lawyers"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/lawyers/1_hero.png"
              alt="Website design for lawyers"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'All the ingredients of a well-designed website for lawyers',
        list: [
          {
            icon: <IconCredible />,
            title: 'Makes you look credible',
            subtitle: (
              <p>
                When a prospective client lands on your website, they judge your credibility in a
                millisecond. A professionally crafted law firm website effectively addresses client
                concerns and presents your practice area expertise as the solution they’re searching
                for.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Streamlines client interactions',
            subtitle: (
              <p>
                Effortlessly maintain relationships with all of your firm’s contacts. A{' '}
                <a href="https://www.b12.io/contact-manager">contact manager</a> built into your
                website builder simplifies, automates, and adds consistency to your communications,
                including follow-up emails and billing reminders.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Helps attract new clients',
            subtitle: (
              <p>
                You don't have to spend more on marketing to gain clients. Following an SEO strategy
                gives your site a better chance at performing well with search engines, and listing
                your firm in legal directories helps people find you. To convert visitors to
                clients, infuse your site with conversion tools like pop-ups and banners.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Simplifies your law firm’s business operations',
            subtitle: (
              <p>
                A quality law firm website can centralize all parts of your business and let you
                manage them in the cloud. This includes your client list, email marketing efforts,{' '}
                <a href="https://www.b12.io/payments-invoicing-software">payments</a>,{' '}
                <a href="https://www.b12.io/bookings-scheduling-software">appointment booking</a>,
                and other interactions. Streamlining workflows by having them run through your
                website means you spend less time managing operations and more time helping clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A winning approach to law firm websites',
        subtitle: 'You started your firm to help clients, not design websites.',
        text: (
          <>
            <Text small>
              B12’s team and AI-powered technology do the heavy lifting to bring you online and sell
              more legal services with less effort. We help you launch your professional site in
              only 30 days, complete with powerful tools to streamline your business, so your time
              and energy is focused on client work.
            </Text>

            <Text small>
              B12 enables attorneys to launch modern websites with tools to help attract, win, and
              serve clients online. We set up your firm with everything you need to deliver
              incredible services that make your clients’ lives easier and encourage repeat
              business.
            </Text>
          </>
        ),
        items: [
          {
            title: 'Build your AI draft ',
            text: 'Building a website for your law firm doesn’t need to be a drawn-out process. B12 makes the process quick by using AI to create the first draft of your site. Answer a few questions about your firm, and B12 will show you a site specific to your legal practice in under 60 seconds. ',
          },
          {
            title: 'Engage with experts in law firm web design',
            text: 'With a solid starting point for design and copywriting, our experts then work with you to customize and launch your mobile-friendly, fully branded website. It looks credible, is search-optimized, and primed for smooth client interactions. B12’s experienced designers, copywriters, and SEO specialists are always available to update your site — or you can do it yourself with our easy website editing tool.',
          },
          {
            title: 'Drive revenue through automation, payments, and conversion tools',
            text: 'On-site pop-ups, banners, and calls to action boost your conversion rate, while appointment scheduling and online payments let visitors purchase your services and schedule time to work together, directly on your site. Automated reminders help you eliminate no-shows and consistently receive payments on time. ',
          },
          {
            title: 'Launch your law firm’s newly designed website',
            text: 'The sooner your new website launches, the sooner you’ll be found by potential clients. Once your site goes live, harness powerful online tools like payments, appointment scheduling, email marketing, and client intake to provide clients with a convenient experience that keeps them coming back.',
          },
        ],
      }}
      childHubs={{
        title: 'Law firm website design for every practice area',
        links: [
          {
            text: 'Tax lawyer web design',
            url: '/lawyers/tax-lawyers',
          },
          {
            text: 'Bankruptcy lawyer web design',
            url: '/lawyers/bankruptcy-lawyers',
          },
          {
            text: 'Immigration law firm website',
            url: '/lawyers/immigration-lawyers',
          },
        ],
      }}
      designBasics={{
        title:
          'What are the most important website development and design basics for law firm websites?',
        text: 'The best modern websites, specifically the best law firm websites, include these key features.',
        items: [
          'Fast page speed',
          'Mobile responsiveness',
          'Valuable information that’s easy to find, notably on the contact page',
          'Testimonials from happy clients',
          'A list of your firm’s practice areas and services',
          'An enticing front page that motivates website visitors to take the next step with your business',
          'Law firm SEO best practices',
          "Built-in features and tools that support your firm's marketing, lead generation, and conversion rate",
          "A professional photo of you and the firm's other attorneys",
          'Intuitive website navigation and user experience',
        ],
      }}
      ctaMini={{
        title: 'Good law firm website design can help you grow your business fast',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What separates a good law firm website from a great one?',
        subtitle:
          'The best law firm websites are both simple for visitors to use and powerful in helping your practice grow.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/3_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Your law firm website should effortlessly collect qualified leads via forms and
              signups, centralize their details, automate communications with them (e.g., email
              marketing and automated follow-up messages), and offer you tools to more easily
              convert them to clients.
            </Text>

            <Text small>
              A major differentiator for law firm websites is to harness technology that simplifies
              client communications. According to the American Bar Association,{' '}
              <a
                href="https://www.americanbar.org/groups/law_practice/publications/techreport/2021/webmarketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                more than 60% of law firms
              </a>{' '}
              do not offer online scheduling, digital document management, or online payments for
              clients.
            </Text>

            <Text small>
              An easy way to set your firm apart from other firms and improve the lawyer-client
              relationship is to make it easier for clients to contact you, submit contracts, and
              pay for your legal services directly on your firm’s website.
            </Text>

            <Text small>
              For more inspiration and to see examples of great law firm websites, browse the
              gallery of{' '}
              <a
                href="https://gallery.b12sites.com/website-gallery#law-practices"
                target="_blank"
                rel="noopener noreferrer"
              >
                B12's best law firm websites
              </a>
              .
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#legal-services',
        ctaText: 'Browse law firm websites',
      }}
      splitImageLeft={{
        title: 'Building better websites for solo attorneys and small law firms since 2016',
        subtitle:
          'B12 specializes in building custom websites for law firms that meet legal industry best practices and make a great first impression on every potential client.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/4_websites.png"
            alt="Building better websites for solo attorneys and small law firms since 2016"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Our team handles your entire project from end to end, while still giving you control
              over design preferences and the ability to make quick web page updates using our
              intuitive editor.
            </Text>

            <Text small>
              The B12 platform was created specifically for service businesses, and our experts have
              built hundreds of law firm websites that emphasize each company's unique expertise and
              services, with design, marketing, and conversion features that prompt website visitors
              to take the next step.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from attorneys',
        items: faq,
      }}
      sliderTitle="What do other law firms and attorneys think of B12’s website design?"
      sliderItems={['matten-law', 'maxwell-tillman', 'bailey-reyes']}
    />
  )
}

export default IndustryLawyersParent

export const Head = () => (
  <SEO
    pageTitle="Website design for lawyers"
    pageDescription="B12’s all-in-one online business platform helps you provide the best experience for clients and effectively manage your law firm."
  />
)
