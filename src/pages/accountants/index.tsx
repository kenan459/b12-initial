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
import emptySectionBg from '../../images/industry-hubs/accountants/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-accountants.yaml'

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
        title: 'Professional websites for accountants',
        subtitle: 'Web design that showcases your accounting expertise for real ROI',
        text: (
          <>
            <Text small>
              There are now more than{' '}
              <a href="https://balancingeverything.com/accounting-statistics/" target="_blank">
                1.27 million
              </a>{' '}
              accountants in the United States alone. So while many businesses and individuals need
              a CPA, they have plenty of options to choose from. Standing out in this highly
              competitive field starts with a mobile-friendly, optimized website that clearly
              communicates your value. That’s just the beginning, though.
            </Text>
            <Text small>
              Your website has to do more than list your basic services. It must differentiate you
              from competitors and allow clients to work with you conveniently, remotely, and
              efficiently. This calls for powerful functionality built into your site, like client
              intake, contracts & eSignatures, online scheduling, payment processing, and more.
            </Text>

            <Text small>
              Whether you specialize in tax preparation, payroll, bookkeeping, or business
              valuation, it's time to launch a well-designed, user-friendly website that
              demonstrates your credibility, streamlines client engagement, and increases lead
              generation.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of accountant websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#accountants-and-tax-services',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/accountants/1_hero.png"
              alt="Website design for accountants"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/accountants/1_hero.png"
              alt="Website design for accountants"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'What makes a professional accounting website?',
        list: [
          {
            icon: <IconCredible />,
            title: 'Highlights trustworthiness and value',
            subtitle: (
              <p>
                <a
                  href="https://www.business.com/articles/7-website-design-mistakes-that-can-hurt-conversion/"
                  target="_blank"
                >
                  Seventy-five percent
                </a>{' '}
                of people judge a company's credibility on its website, especially for clients
                seeking accounting services. They can’t afford to work with a company that lacks
                precision and attention to detail. Stellar design, clear and concise copy, and ease
                of navigation all play into the client journey. Incorporate smart design principles
                into your accounting website to demonstrate integrity.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Converts visitors into clients',
            subtitle: (
              <p>
                The ultimate goal of every website is to convert visitors into new clients.
                Successful website design applies conversion tools like banners, pop-ups, and live
                chats to encourage more conversions. A strong SEO strategy will funnel traffic to
                your website, but you'll need to integrate additional design elements like forms,
                calls to action, testimonials, and urgency to transform traffic into clients.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Strengthens communication',
            subtitle: (
              <p>
                Did you know that{' '}
                <a
                  href="https://moneyzine.com/personal-finance-resources/accounting-industry-trends/"
                  target="_blank"
                >
                  43%
                </a>{' '}
                of firms are increasing the amount of virtual work they do? Part of that shift from
                paper to digital is through the online client experience. Websites for accounts need
                to do more these days than provide basic contact information. Today, you need
                technology and automation that facilitates online communications, reminders,
                signatures, and more.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Reduces administrative liabilities',
            subtitle: (
              <p>
                As an accounting professional, you want to allocate your time to helping clients
                make critical financial decisions, not chasing down overdue invoices or following up
                on leads. Make your website work for you and reduce business administrative tasks
                with automation and integrations. Eliminate redundancies by funneling more of your
                marketing, contact management, and invoicing through a centralized dashboard.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'Web design strategy for accountants that works',
        subtitle:
          'You’re an accountant, not a website designer. So why waste days, or even weeks, learning to build a website from the ground up? B12 helps accountants build beautiful, mobile-friendly websites in no time, thanks to AI-powered technology and on-platform expert support. ',
        text: (
          <>
            <Text small>
              The benefits of B12 don't end with compelling, modern web design. We empower
              accountants to better serve their clients with a suite of online tools and
              integrations, including scheduling, invoicing, email marketing, and digital contracts.
            </Text>

            <Text small>
              A B12 website helps you attract, win, and serve clients without diverting hours from
              client-facing accounting work. Add agility to your firm, reduce administrative
              workload, and expand your reach to prospective clients.
            </Text>
          </>
        ),
        items: [
          {
            title: 'AI-developed draft',
            text: 'Custom website design projects are costly, sometimes starting at $50,000 or more. Do-it-yourself options have a painful learning curve and eat up your valuable time. Enter B12 website builder: an all-in-one platform that saves you time, money, and frustration thanks to beginner-friendly AI-driven design. See your first draft in 60 seconds flat.',
          },
          {
            title: 'Design, copy, and SEO customized by experts',
            text: "AI builds a strong foundation, then we deploy copywriters, designers, and launch specialists to personalize your website draft and get you across the finish line: a published website. The B12 team ensures your site represents your firm's values, mission, target audience, and branding — and we do it within 30 days.",
          },
          {
            title: 'Online tools and integrations to better serve clients',
            text: 'Level up your website before launch so it’s ready to serve clients immediately. Leverage an expansive list of built-in online tools, from client intake forms and email automation to contracts and eSignatures. It’s all native to B12, so in minutes, you’re set up to make it easy for clients to do business with you.',
          },
          {
            title: 'Time to go live!',
            text: "With high-quality design, a cohesive experience, and automations set up, it's time to launch your new website. Search engine optimization and mobile-responsiveness ensure you’re findable online and your site looks great on every device. Evolve your online presence anytime using the DIY-friendly editor. Add new features and tools as needed to continually attract new clients and improve their experience.",
          },
        ],
      }}
      designBasics={{
        title: 'Web design best practices for accountants',
        text: 'The key elements of effective accounting firm websites revolve around positioning your firm as innovative, building organic traffic, converting leads, and saving time with more efficient workflows.',
        items: [
          'Mobile-friendly design',
          'Easy and intuitive navigation',
          'On and off-page SEO',
          'Tried-and-true CTA text and design',
          'Conversion tools like new client intake forms and pop-ups',
          'Eye-catching visual banners',
          'Featured client testimonials and case studies',
          'Relevant, informative blog content',
          'Fast page speed',
          'Reliable uptime',
        ],
      }}
      ctaMini={{
        title: 'Scale your accounting firm with an online presence that works as hard as you do',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What separates a basic accounting website from a great one?',
        subtitle: 'Accounting services are changing, and so should your website.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/accountants/4_longformcontent.png"
            alt="What separates a basic accounting website from a great one?"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              A basic accounting web page is just a landing page with text and basic functionality.
              It may offer a list of services and contact information but little else. But, these
              days, clients demand much more than a phone number and service menu. In fact, a recent{' '}
              <a href="https://balancingeverything.com/accounting-statistics/" target="_blank">
                survey
              </a>{' '}
              reported that 82% of accountants find their clientele expect more than ever.
            </Text>

            <Text small>
              A solid website is built on core qualities like mobile-friendly design, rapid and
              reliable page speed, and search engine optimization. Beyond these basic principles,
              CPAs should demonstrate professionalism with helpful blog posts, easy navigation,
              compelling calls to action, and tools that let clients work with them almost entirely
              online. All of these elements drive traffic and increase credibility.
            </Text>

            <Text small>
              This is just the start. Once potential clients are further along the buying journey, a
              great website encourages conversion with banners, CTAs, intake forms, live chat,
              promotions, and well-timed pop-ups.
            </Text>
            <Text small>
              And this is just the start. Once potential clients are further along the buying
              journey, a great website encourages conversions with banners, CTAs, intake forms, live
              chat, and well-timed pop-ups.
            </Text>
            <Text small>
              A truly exceptional accounting firm website is a powerful tool to streamline
              time-consuming administrative tasks with online scheduling, invoicing, document
              signing, and automation. By integrating everything into a single mobile-accessible
              platform, your website can actually free up time spent on onboarding, marketing,
              invoicing, and back-and-forth communications.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#accountants-and-tax-services',
        ctaText: 'Browse accountant firm websites',
      }}
      splitImageLeft={{
        title: 'B12 helps accounting firms provide the best online experience for clients',
        subtitle:
          'B12 specializes in building custom professional websites for service providers like CPAs that help them stand out online and meet clients’ expectations. Our design team leads in refining and launching your website project, so you focus on offering top-notch services to your audience. Leave feedback on your new web presence anytime or log in to B12 to make changes.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/accountants/5_endorsementcontent.png"
            alt="B12 helps accounting firms provide the best online experience for clients"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              The B12 platform was created specifically for professional service firms to sell
              services online, and our web designers, copywriters, and SEO specialists have built
              hundreds of accountant websites that emphasize unique value propositions and
              streamline the client journey.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from accountants',
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
    pageTitle="Professional websites for accountants"
    pageDescription="Establish your CPA firm online, attract clients, and retain them with a seamless digital experience. Use B12 to launch your professional site in 30 days, with scheduling and payments."
  />
)
