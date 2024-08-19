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
import emptySectionBg from '../../images/industry-hubs/mortgage-broker/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-mortgage-brokers.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryMortgageBrokersParent = () => {
  return (
    <IndustryHubsParentLayout
      childHubs={null}
      hero={{
        title: 'Web design for mortgage brokers',
        subtitle: 'Look professional and generate more leads with a custom mortgage broker website',
        text: (
          <>
            <Text small>
              Alongside the explosive growth of the housing market these last few years, there has
              been a significant increase in online searches for mortgage brokers. As buyers and
              sellers look for an expert to work with, how effectively does your website sell your
              expertise, stack up to competitors, and make it easy to work with you?
            </Text>
            <Text small>
              With more borrowers than ever researching mortgage solutions and firms online, your
              website needs to make a lasting first impression, engage them toward conversion, and
              make their experience seamless. Your online presence should also help you save time
              and scale more efficiently. Modern web design, SEO best practices, and powerful online
              tools and integrations help you stand out and succeed in a highly competitive
              industry.
            </Text>
          </>
        ),
        ctaText: 'View our mortgage broker websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#mortgage-brokers',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/mortgage-broker/1_hero.png"
              alt="Website design for mortgage brokers"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/mortgage-broker/1_hero.png"
              alt="Website design for mortgage brokers"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'The pillars of effective web design for mortgage brokers',
        list: [
          {
            icon: <IconStreamline />,
            title: 'Streamlines business operations',
            subtitle: (
              <p>
                As a mortgage broker, you're always on call, navigating clients' expectations,
                emotions, and finances. You’re expected to respond fast without sacrificing quality.
                So, a website shouldn't add to your workload — it should alleviate it. The best
                mortgage brokerage websites facilitate client communications and digitize
                scheduling, document signing, and invoicing tasks.
              </p>
            ),
          },
          {
            icon: <IconCredible />,
            title: 'Establishes trust and credibility',
            subtitle: (
              <p>
                Before choosing a mortgage broker, borrowers look for evidence of trustworthiness.
                It starts with a reliable modern website that translates the complexities of
                mortgages into an easy-to-understand copy that puts the reader at ease. It also
                builds credibility through social proof, including client testimonials and five-star
                reviews.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Simplifies client engagement ',
            subtitle: (
              <p>
                A recent{' '}
                <a
                  href="https://www.mckinsey.com/industries/financial-services/our-insights/banking-matters/competing-on-customer-experience-in-us-mortgage"
                  target="_blank"
                >
                  survey
                </a>{' '}
                found that exceptional customer experience was almost as important to borrowers as
                getting the best interest rate. Your website needs to streamline the client
                experience so every client recommends you to their friends and family, and even
                leaves an online review. Improve their experience and stay in communication with a
                built-in contact manager, automated follow-ups, and simplified scheduling process.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Drives traffic and attracts new clients',
            subtitle: (
              <p>
                <a
                  href="https://www.cmhc-schl.gc.ca/en/professionals/housing-markets-data-and-research/housing-research/surveys/mortgage-consumer-surveys/survey-results-2021"
                  target="_blank"
                >
                  {' '}
                  Forty-three percent
                </a>{' '}
                of clients research mortgage information online before they choose a broker. So
                above all else, your website must be built on SEO best practices to capture this
                traffic. It also has to include enticing conversion tools, like pop-ups,
                calls-to-action, and compelling content that capitalizes on this search traffic,
                converting more visitors to new clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: "Websites that simplify your mortgage firm's client-facing work",
        subtitle: 'A proven strategy to scale your mortgage business',
        text: (
          <>
            <Text small>
              Build your custom online presence and drive more conversions with B12's unique
              combination of AI technology and experts in SEO, copywriting, and web design.
            </Text>
          </>
        ),
        items: [
          {
            title: 'AI-generated first draft',
            text: "AI is changing the world, starting with the first draft of your website. B12's advanced AI technology builds an industry-specific first draft of your website in 60 seconds or less that reflects your firm’s values. Built using the best practices for the mortgage broker sector, our AI-driven design is a fast, efficient way to draft the foundation of your new website.",
          },
          {
            title: 'B12 experts add personalization and value',
            text: "You translate the complexities of the mortgage process for your clients, and we translate the complexities of web design. B12's design, copy, SEO, and launch experts help customize your website to showcase your brand and services to your target audience. We are here every step of the way and always available for updates after launch day. ",
          },
          {
            title: 'Add powerful automations and online tools',
            text: 'Bogged down by paperwork and admin work? B12 has a growing list of client management tools designed to reduce menial, time-consuming tasks related to scheduling and invoicing. We help you incorporate tools into your website to facilitate mortgage negotiations, including online scheduling, client intake, live chat, eSignatures, automated reminders, and online payments.',
          },
          {
            title: 'Time to launch your new website!',
            text: "Our AI-powered, human-centered approach to mortgage broker web design ensures we get you to the closing date, AKA launch time, in 30 days or less. After your site goes live, it's easy to make updates through the convenient B12 Editor or with help from our on-platform experts.  ",
          },
        ],
      }}
      designBasics={{
        title: 'What design principles should mortgage broker websites follow?',
        text: 'The best brokerage websites drive new leads by including the following elements in their design:',
        items: [
          'Sleek, modern design',
          'Mobile-responsive pages',
          'Lightning-fast page speed',
          'Straightforward navigation',
          'On-page and off-page SEO best practices',
          'Actionable CTA buttons',
          'Visually striking images and banners',
          'Well-timed pop-ups and other conversion tools',
          'Reviews and testimonials from clients',
          'Compelling website copy and informative blog posts',
        ],
      }}
      ctaMini={{
        title: 'Scale your mortgage brokerage with an online presence that works as hard as you do',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title:
          "What's the difference between a basic mortgage broker website and one that elevates your business?",
        image: (
          <StaticImage
            src="../../images/industry-hubs/mortgage-broker/4_longformcontent.png"
            alt="What's the difference between a basic mortgage broker website and one that elevates your business?"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              The best mortgage broker websites drive traffic, make a positive first impression, and
              improve the client experience with powerful online tools.
            </Text>

            <Text small>
              A basic website provides contact information and a list of professional services. It's
              a dull, stagnant menu that doesn't encourage visitors to interact, explore resources,
              or schedule a free consultation. Without strategic CTAs, interactive features, or
              client intake forms, there are significant roadblocks to conversion.
            </Text>

            <Text small>
              Mortgage broker websites that turn visitors into clients follow proven SEO principles
              to improve rankings and generate organic traffic. But it doesn't stop with keywords
              and backlinks — an effective website uses smart integrations and automations to serve
              your exact audience and keep them coming back.
            </Text>
            <Text small>
              <a
                href="https://www2.deloitte.com/content/dam/Deloitte/au/Documents/financial-services/deloitte-au-fs-home-loan-preferences-041116.pdf"
                target="_blank"
              >
                Surveys
              </a>{' '}
              repeatedly tell us that borrowers value customer service, not just price, when working
              with mortgage brokers. A great website improves their experience, harnessing the power
              of technology to provide prompt and clear communication, a more cohesive experience,
              and scheduling, payment processing, and eSignatures, all done in seconds.
            </Text>
            <Text small>
              Want to check out professional websites that have transformed how other mortgage
              brokers work? Check out our gallery of B12's best mortgage broker websites.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#mortgage-brokers',
        ctaText: 'Browse mortgage broker websites',
      }}
      splitImageLeft={{
        title: 'B12 helps mortgage firms provide the best online experience for clients',
        image: (
          <StaticImage
            src="../../images/industry-hubs/mortgage-broker/5_endorsementcontent.png"
            alt="B12 helps mortgage firms provide the best online experience for clients"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              B12 specializes in building custom professional websites for service providers like
              mortgage brokers that help them stand out online and meet clients’ expectations. Our
              design team leads your new website’s design and launch process, so you can focus on
              helping your clients find or sell their home. Leave feedback on your web presence any
              time or log in to B12 to make changes on your own.
            </Text>
            <Text small>
              The B12 platform was created specifically for professional service firms to sell
              services online, and our web designers, copywriters, and SEO specialists have built
              hundreds of mortgage lender websites that emphasize unique value propositions and
              streamline the client journey.
            </Text>
            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from mortgage brokers',
        items: faq,
      }}
      sliderTitle="What do other mortgage brokers think of B12 websites?"
      sliderItems={['mortgages-by-jill', 'bell-group', 'bailey-reyes', 'maxwell-tillman']}
    />
  )
}

export default IndustryMortgageBrokersParent

export const Head = () => (
  <SEO
    pageTitle="Website design for mortgage brokers"
    pageDescription="Leverage professional web design for your mortgage firm that drives leads, builds interest, establishes trust, and serves clients."
  />
)
