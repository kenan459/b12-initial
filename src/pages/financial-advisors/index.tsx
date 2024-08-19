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
import emptySectionBg from '../../images/industry-hubs/financial-advisors/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-financial-advisors.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryConsultantsParent = () => {
  return (
    <IndustryHubsParentLayout
      childHubs={null}
      hero={{
        title: 'Web design for financial advisors',
        subtitle: 'Scale your financial planning business with a harder working website',
        text: (
          <>
            <Text small>
              Most people feel some level of financial stress. From concerns about a recession,
              inflation, rising cost of living, and volatile stock market, more and more people are
              looking for financial guidance to ground them.
            </Text>
            <Text small>
              As a financial advisor, your website has to underscore your value and expertise to
              prospective clients, while making your services accessible. Fast and secure are the
              minimum requirements. Truly effective web design grabs and holds visitors’ attention,
              then results in conversion and retention.
            </Text>
            <Text small>
              Stand out in a crowded financial services market and make every impression count with
              a seamless online experience that highlights your credibility and improves lead
              generation. Save time, stay organized, and simplify client tasks with contracts,
              intake, and payments built into your site.
            </Text>
            <Text small>
              Whether you specialize in retirement planning, wealth management, or debt
              consolidation, today's financial landscape demands that your financial advisor website
              does more than simply showcase your services. It has to pay dividends by keeping your
              business growing.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of financial advisor websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#financial-services',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/financial-advisors/1_hero.png"
              alt="Web design for financial advisors"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/financial-advisors/1_hero.png"
              alt="Web design for financial advisors"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'Key elements of the best financial advisor websites',
        list: [
          {
            icon: <IconCredible />,
            title: 'Proves your credibility',
            subtitle: (
              <p>
                Seventy-five percent of people admit that they judge a business's credibility based
                on web design. Financial planning naturally requires a high degree of trust between
                advisor and client, so your web design has to underscore this essential trait. Your
                site needs to help clients quickly answer questions, contact you for more details,
                and make an informed decision on choosing a financial advisor.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Turns visitors into leads',
            subtitle: (
              <p>
                Did you know that mobile searches for financial planning and management have
                increased by{' '}
                <a
                  href="https://www.thinkwithgoogle.com/marketing-strategies/search/digital-banking-financial-investment-products-advisor/"
                  target="_blank"
                >
                  70%
                </a>{' '}
                in just two years? People actively seek financial advice online, and your website
                should capitalize on this search traffic with a strong SEO strategy. Build a smooth
                user experience — for both desktop and mobile — to reduce bounce rate. Add
                conversion tools like banners, pop-ups, and calls to action to increase lead
                generation.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Streamlines client communications',
            subtitle: (
              <p>
                Today's customers demand a comprehensive online experience, including online
                payments, streamlined scheduling, electronic signatures, and easy communication.
                Ensure your financial advisor website exceeds these expectations with a suite of
                client management tools and convenient automations, like automatic payment reminders
                and appointment confirmations.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Simplifies business operations',
            subtitle: (
              <p>
                A website should improve, not impede, your business, and that includes
                administrative tasks like sending invoices and follow-up emails. Instead of managing
                a series of disparate systems, your financial planner website should function as a
                centralized dashboard that manages your client database, communications,
                appointments, and payments. Spend less time tracking down scattered information and
                more time growing your financial advisory firm.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'B12 offers a proven web design strategy for financial advisors',
        subtitle:
          'B12 helps financial advisors launch professional websites in 30 days with AI-powered technology paired with human expertise. Our websites for financial planners come packed with dynamic tools which streamline business operations, increase organic traffic, and better serve financial planning clients online.',
        text: (
          <>
            <Text small>
              Our innovative platform centralizes and automates many of the most time-consuming
              aspects of your business, ensuring that you have more time to focus on providing
              excellent financial services. B12 helps you establish a strong online presence that
              converts new clients thanks to professional web design specific to the financial
              planning sector.
            </Text>
          </>
        ),
        items: [
          {
            title: 'AI creates the first draft',
            text: 'Working with a local design agency, custom website design for financial advisors can take months of meetings to develop the initial draft. But it doesn’t have to! Instead, B12 uses powerful AI to draft an initial design specific to your firm and the financial services industry. With only a few questions, our platform builds an attractive foundation for your website in less than 60 seconds.',
          },
          {
            title: 'Experts help you fine-tune the design',
            text: 'Using the initial draft as our solid foundation, we then deploy our team of SEO, copy, and design experts to help you craft the best financial advisor website that communicates your unique value. In 30 days, you have a mobile-friendly, search-optimized, and fully branded website ready to launch. Our DIY editor also makes it easy for you to update your website anytime',
          },
          {
            title: 'Easily add automation, online payments, and conversion tools',
            text: 'Your website should not be a bare-bones, static list of the services you offer. It should help you efficiently engage and serve clients using built-in automation and tools like payments, scheduling, email marketing, and contracts. B12 has all of this and more, plus we make it easy to add pop-ups, eye-catching banners, and calls to action to convert organic visitors into clients.',
          },
          {
            title: 'Launch your new site in 30 days or less',
            text: "Once you've given the final web design the green light, it's time to launch. A B12 design is created with SEO in mind to ensure your financial planning firm organically attracts new customers. By leveraging new client intake forms, email marketing tools, appointment scheduling, and other options, B12 makes it easy to grow your business.",
          },
        ],
      }}
      designBasics={{
        title: 'The fundamental principles of a professional financial advisor website',
        text: 'These are the essential elements of a financial advisor website that effectively attracts, wins, and serves more clients seeking financial advice.',
        items: [
          'Modern, eye-catching design',
          'Functions perfectly on every device',
          'Easy for visitors to navigate',
          'Optimized for search engines',
          'Strategic call-to-action buttons',
          'Client intake forms and seamless onboarding experience',
          'Banners that offer value to visitors',
          'Convincing reviews, testimonials, and social proof',
          'Informative blog content unique to your audience',
          'Fast loading speed',
        ],
      }}
      ctaMini={{
        title: 'A strong online presence can help grow your financial planning firm',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What takes a financial advisor’s website to the next level?',
        subtitle:
          'Your financial planning website should drive more business for your firm and keep clients coming back.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/financial-advisors/4_longformcontent.png"
            alt="What takes a financial advisor’s website to the next level?"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              A great financial services website helps funnel prospective clients from the top of
              the sales funnel through to conversion. It loads quickly, is mobile-friendly, easy to
              use, and has SEO built n. Paired with a credible blog and optimized web copy, it
              brings new clients onto your website and convinces them to return and recommend you to
              others.
            </Text>

            <Text small>
              Still, your financial planning website should do more. As visitors move down the sales
              funnel, it will encourage them to convert with striking visuals, banners, CTAs, free
              resources, social proof, and well-timed pop-ups. If they have questions, communication
              is easy thanks to short intake forms and intuitive online booking.
            </Text>

            <Text small>
              As you help clients cover their expenses, save for a major purchase, and plan for
              retirement, your website should facilitate client engagement with automated online
              tools for appointment scheduling, payments, and document signing. Most importantly, it
              should harness the power of automation to simplify mundane, time-consuming processes
              and reduce your administrative workload.
            </Text>
            <Text small>
              Find out more about what a better financial planning website can do for your firm. For
              web design inspiration, find inspiration and examples from other financial service
              professionals in the B12 web design gallery.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#financial-services',
        ctaText: 'Browse financial advisors websites',
      }}
      splitImageLeft={{
        title: 'B12 helps financial advisors provide the best online experience for clients',
        subtitle:
          'B12 specializes in building custom professional websites for service providers like financial advisors that help them stand out online and meet clients’ expectations. Our design team leads in designing and launching your website project, so you focus on offering top-notch services to your audience. Leave feedback on your new web presence any time or log in to B12 to make changes on your own.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/financial-advisors/5_endorsementcontent.png"
            alt=" B12 helps financial advisors provide the best online experience for clients"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              B12 specializes in building custom professional websites for service providers like
              financial advisors that help them stand out online and meet clients’ expectations. Our
              expert team takes the lead in designing and launching your website, so you focus on
              offering the best service quality to your audience. Leave feedback on your new web
              presence at any time or log in to B12 to make direct changes.
            </Text>
            <Text small>
              The B12 platform was created specifically for professional service firms to sell
              services online, and our web designers, copywriters, and SEO specialists have built
              hundreds of financial services sites that emphasize unique value propositions and
              streamline the client journey.
            </Text>
            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from financial advisors',
        items: faq,
      }}
      sliderTitle="What do other service providers think of B12 websites?"
      sliderItems={['matten-law', 'maxwell-tillman', 'bailey-reyes', 'atlas-law']}
    />
  )
}

export default IndustryConsultantsParent

export const Head = () => (
  <SEO
    pageTitle="Website design for financial advisors"
    pageDescription="A successful financial advisor website should look great, engage visitors, and not cost thousands of dollars. Plus, you should be able to maintain it yourself without neglecting your clients."
  />
)
