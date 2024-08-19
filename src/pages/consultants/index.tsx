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
import emptySectionBg from '../../images/industry-hubs/consultants/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-consulting.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryConsultantsParent = () => {
  return (
    <IndustryHubsParentLayout
      hero={{
        title: 'Web design for consultants',
        subtitle: 'Make your consulting business more competitive with a custom website',
        text: (
          <>
            <Text small>
              Digital-first consulting has become the norm for professional consultants, making it
              more important than ever to build a high-functioning website. If your site doesn’t
              have the capabilities to deliver virtual consulting services by replacing physical
              meetings with online appointments and signing contracts using eSignatures instead of
              doing it in person, you’ll lose out to competitors and face challenges trying to grow.
            </Text>
            <Text small>
              So what makes for a great consulting website? It must emphasize your unique skills,
              experience, knowledge, and innovations. A strong online presence will establish your
              authority in a personable way, exhibit social proof from previous clients, persuade
              leads to work with you, and nurture relationships with existing clients.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best consultants’ websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#business-services-and-consulting',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/consultants/1_hero.png"
              alt="Website design for consultants"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/consultants/1_hero.png"
              alt="Website design for consultants"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'How to ensure your consultant website is credible and effective',
        list: [
          {
            icon: <IconCredible />,
            title: 'Aligns with your brand',
            subtitle: (
              <p>
                Your consulting firm offers a unique and valuable perspective, and you need your
                website to reflect that. Be detailed about the customized solutions you offer, who
                they’re suitable for, and the benefits clients experience. Every detail, including
                your color palette, images, copy, and website navigation, works together to tell
                your story and convey professionalism.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Turns visitors into leads',
            subtitle: (
              <p>
                Look at your site from a visitor’s perspective. They want to learn more about you
                and engage with your firm, but does your site make their journey easy? Reduce the
                number of steps it takes to find essential information, whether a contact form or
                case study. For each web page, ask yourself: Does it have a compelling offering?
                Does it spur someone to take action? Simplifying your conversion process and
                providing a consistent value proposition will help you generate more leads.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Makes client interactions simple',
            subtitle: (
              <p>
                A great consulting website lowers the barrier for client engagement. Smart tooling
                like online scheduling, email marketing, intake forms, and digital payments make it
                easy for them to get your help, book their next appointment, or pay their balance.
                If clients enjoy their interactions with your business, they’re more likely to trust
                and recommend you, leading to repeat business and referrals.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Adds efficiency to business operations',
            subtitle: (
              <p>
                Back-office, low-value tasks like sending confirmation emails and creating invoices
                from scratch steal your time and distract you from more important work. Adopt an
                online solution that centralizes more parts of your consulting agency and automates
                workflows. Consolidate your tech stack by using one solution for your website, email
                marketing, payments and invoicing, appointment scheduling, and more, so you spend
                less time wrangling tools and more time serving clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'An innovative approach to building consultant websites',
        subtitle:
          'You’re a professional in your consulting field, not web design. And as important as your website is to you, your time is better spent building connections with clients, not worrying about whitespace, video embeds, and alt text for images. Leave that to the web designers at B12.',
        text: (
          <>
            <Text small>
              B12 is an all-in-one solution popular with consultants and other service providers
              because we enable you to launch a professional website fast and sell more services
              with less effort. Start by answering a few questions about your consulting business,
              then see your AI draft in 60 seconds.
            </Text>

            <Text small>
              Professional designers, copywriters, and SEO specialists then refine your draft, so
              it's a personalized site that matches your brand and supports your business goals.
              Your new consulting business website is ready to launch in 30 days or less, allowing
              you to attract new business, serve clients more efficiently, and keep every aspect of
              your firm organized and streamlined.
            </Text>
            <Text small>
              With B12, get a website you absolutely love that’s built for optimal performance.
              Instead of doing it yourself, you're left to focus on improving your clients' lives.
            </Text>
          </>
        ),
        items: [
          {
            title: 'See your AI-designed website draft',
            text: 'Cut down on the time it takes to build and launch a custom consulting website with a helpful start from B12’s artificial intelligence. Answer a few questions about your consulting business, then see your personalized AI draft. With the initial site built in only 60 seconds, the process of leaving feedback and working with a professional designer starts without any delay. ',
          },
          {
            title: 'Work with designers who know your industry',
            text: 'Once you share your feedback on the draft, B12’s experienced web designers, copywriters, and SEO specialists work to customize it to fit your vision and consulting industry best practices. In less than a month, you’ll have a site that looks credible, resonates with visitors, and is optimized for search engines.  Request updates any time or make edits yourself using the beginner-friendly B12 Website Editor.',
          },
          {
            title: 'Drive on-site revenue with automation, conversion tools, and payments',
            text: 'Navigation, calls to action, and powerful tools work together to keep visitors moving through the flow of your site to take the next step. Website pop-ups, banners, an intuitive sitemap, and targeted calls to action boost your conversion rate, while online scheduling and payments let visitors book an appointment and pay for your services without leaving your site. Automated reminders help you prevent no-shows and late payments.',
          },
          {
            title: 'Launch your professional new consulting site',
            text: 'The sooner your new website is published, the sooner your consulting business gains visibility online and reaches prospects looking for your expertise. In addition to a beautiful new website, you gain business tools like online payments, appointment booking, email marketing, and client intake forms to provide clients with the experience they expect. ',
          },
        ],
      }}
      childHubs={{
        title: 'Custom website design for every consulting niche',
        links: [
          {
            text: 'Sales consultants',
            url: '/consultants/sales-consultants',
          },
          {
            text: 'Education consultants',
            url: '/consultants/education-consultants',
          },
        ],
      }}
      designBasics={{
        title: 'How can I make a positive first impression on website visitors?',
        text: '75% of consumers make judgments of a company’s credibility based on website design. Be sure they see your consulting business in a positive light from the first second they’re on your site by adhering to these crucial principles and best practices:',
        items: [
          'Fast page speed',
          'Mobile responsiveness',
          'Attention-grabbing homepage',
          'Easy-to-find contact information',
          'High-quality images',
          'Copy that addresses pain points',
          'Clean design and color scheme',
          'Blog posts that build credibility',
          'User-friendly navigation',
          'Social proof, like reviews, testimonials, and case studies',
          'Conversion tactics that generate leads',
        ],
      }}
      ctaMini={{
        title: 'Great website design can help scale your consulting business',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What is the difference-maker for the best consulting websites?',
        subtitle:
          'The best consulting websites are equally adept at serving clients seamlessly and enabling your business to scale.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/3_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              So, your business needs to be able to attract new clients and showcase your knowledge
              while also adding automation and efficiency to your behind-the-scenes processes.
            </Text>

            <Text small>
              Your website is the online hub for your business, so it needs to make you look good
              and convince visitors you’re the expert they should hire. At the same time, it should
              make your life easier by automatically reflecting your appointment availability and
              sending automated confirmation emails, so you don’t have to take the time out of your
              day.
            </Text>

            <Text small>
              Launching a custom-designed site in 30 days or less that's produced to support your
              specific business goals gives your consulting firm a better chance to grow and
              succeed. To find design inspiration for your new consulting website, find inspiration
              and examples from real customers in the{' '}
              <a href="https://www.b12.io/gallery-industry">B12 web design gallery</a>.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#business-services-and-consulting',
        ctaText: 'Browse consultant firm websites',
      }}
      splitImageLeft={{
        title: 'B12 helps consultants enhance their online client experience',
        subtitle:
          'B12 specializes in building custom professional websites for service providers like consultants that help them stand out in crowded markets and meet clients’ expectations.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/4_websites.png"
            alt="Building websites for solo attorneys and small law firms since 2016"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Our web design team takes the lead in designing and launching your website project, so
              there’s no lapse in your service delivery. You’re welcome to leave feedback any time
              or log in to the B12 editor to make changes on your own.
            </Text>

            <Text small>
              The B12 platform was created specifically for professional service firms to sell
              services online, and our web designers, copywriters, and SEO specialists have built
              hundreds of consulting sites that emphasize unique value propositions and streamline
              the client journey.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from consulting businesses',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio']}
    />
  )
}

export default IndustryConsultantsParent

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Professional Consultants"
    pageDescription="The B12 website builder and business platform brings consulting firms online in 30 days or less and gives them access to tools that help them reach and engage clients fast. "
  />
)
