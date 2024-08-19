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
import emptySectionBg from '../../images/industry-hubs/coaches/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-professional-coaches.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryCoachesParent = () => {
  return (
    <IndustryHubsParentLayout
      hero={{
        title: 'Web design for professional coaches',
        subtitle: 'High-caliber web design creates an experience that coaching clients love',
        text: (
          <>
            <Text small>
              The coaching industry’s market value is expected to reach $20 billion this year,
              making it the second-fastest-growing sector in the world. As professional coaching
              booms, it also gets more competitive. Many coaches have expertise and experience, so
              you need to find a niche or differentiator that sets you apart as a specialist rather
              than a jack of all trades. To win business, you need an online presence that
              emphasizes your value.
            </Text>
            <Text small>
              If you’re a coach struggling to get clients, a new website may be the secret to
              unlocking success. The combination of high-caliber web design and content can help
              your coaching brand stand out, establish credibility, and attract ideal clients for
              your business. A smooth user experience and powerful tools keep them returning and
              referring your coaching services to others.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best coaches’ websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#coaching-and-personal-development',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/coaches/1_hero.png"
              alt="Website design for coaches"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/coaches/1_hero.png"
              alt="Website design for coaches"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'A custom website does the heavy lifting for you',
        list: [
          {
            icon: <IconCredible />,
            title: 'Reflects your value ',
            subtitle: (
              <p>
                Compared to other business websites, coaching sites need to be even more personal,
                striking the perfect balance of authority and compassion. Many people brand
                themselves as coaches but lack the experience and accreditations to deliver what
                they’re promising. A professional website is your first impression on prospects, and
                should immediately establish your credibility. Be clear and direct about why you’re
                the real deal and what your clients can expect.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Compels visitors to become leads',
            subtitle: (
              <p>
                Your website should be full of social proof and compelling calls to action that
                convert website visitors to leads and leads to clients based on your unique selling
                proposition. Consider adding a video to your site where you talk about the value you
                provide or one that showcases past clients saying positive things about your
                coaching services. Be as specific as you can — prospects want to hire someone who
                has experience helping people in their situation.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Simplifies client interactions',
            subtitle: (
              <p>
                Powerful, automated tools like a contact manager, online scheduling, and email
                marketing allow you to build and maintain your relationships without dedicating
                extra time to them. Set up workflows that re-engage your contacts and send them
                through a smooth journey on your website, from booking a coaching session to
                downloading a resource or submitting payment.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Streamlines your business operations',
            subtitle: (
              <p>
                Your coaching website has the potential to centralize all areas of your coaching
                business so you can fully manage and grow it online. This includes your full list of
                clients and contacts, email marketing, past coaching sessions, and client payment
                history. Streamlining your client journey and reducing your dependence on
                third-party tools enables you to spend less time editing your website and doing
                administrative tasks, and more time serving coaching clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A winning approach to coaching business websites',
        subtitle:
          'You started your coaching practice to make a marked improvement in the lives of your clients, whether it’s on their business, health, relationships, career, or day-to-day life.',
        text: (
          <>
            <Text small>
              You did not start your business to build a website. That’s where B12 comes in! Our
              professional designers, copywriters, and SEO specialists, supported by our innovative
              AI, do the heavy lifting to build your perfect online presence that appeals to
              prospective coaching clients. Bring your coaching business online in 30 days or less,
              with tools that make you more efficient and organized, with more time to focus on
              clients.
            </Text>

            <Text small>
              B12 enables professional coaches to launch modern websites with every feature to help
              attract, win, and serve their clientele online. We set up your firm with everything
              you need to deliver top-notch service that makes your clients’ lives easier and
              motivates them to recommend you.
            </Text>
          </>
        ),
        items: [
          {
            title: 'See your AI website draft',
            text: 'Building a custom coaching website doesn’t have to take months, thousands of dollars, or pull you away from providing a great client experience. B12 accelerates and simplifies the web design process by using AI to draft your initial site. Answer a few brief questions about your practice, and we’ll produce a website specific to your business in less than 60 seconds.',
          },
          {
            title: 'Work with experts in web design for coaches',
            text: 'A great AI starting point allows B12 design and copy experts to customize and refine your mobile-friendly, branded website in weeks, not months. It establishes your credibility, is search-optimized, and facilitates smooth client interactions.  B12’s knowledgeable designers, copywriters, and SEO specialists are on hand to update your site any time — or you can do it yourself with our easy website editor.',
          },
          {
            title: 'Boost revenue through payments, automation, and conversion tools',
            text: 'Website pop-ups, banners, and purposeful calls to action boost your on-page conversion rate, while appointment scheduling and online payments let visitors purchase your services and schedule time to work together without leaving your site. Automated reminders help you eliminate appointment no-shows and late payments.',
          },
          {
            title: 'Launch your new coaching website',
            text: 'The sooner your new website goes live, the sooner your coaching business becomes discoverable to potential clients interested in the services you offer. In addition to a professional, stunning website, leverage business tools like online payments, appointment booking, email marketing, and client intake forms to provide clients with the easy experience they expect.',
          },
        ],
      }}
      childHubs={{
        title: 'Professional coaching website design for every specialization',
        links: [
          {
            text: 'Life coaches',
            url: '/coaches/life-coaches',
          },
          {
            text: 'Business coaches',
            url: '/coaches/business-coaches',
          },
        ],
      }}
      designBasics={{
        title: 'What are the best practices for coaching websites?',
        text: 'Be sure you or your web designer prioritize these features, which create a better experience for potential customers and are effective in targeting business goals, such as generating leads.',
        items: [
          'Custom design',
          'Mobile responsiveness',
          'Knowledge and inspiration-rich content',
          'Client testimonials',
          'Contact forms on important website pages',
          'Detailed service descriptions',
          'Fast page speed',
          'Intuitive website navigation',
          'Conversion-oriented elements like pop-ups and calls to action',
          'High-quality images',
        ],
      }}
      ctaMini={{
        title: 'Stunning website design can help you grow your coaching business ',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What separates a good coaching website from a great one?',
        subtitle:
          'The secret to an effective coaching business website is to make it equally powerful for your audience and you as a business owner trying to grow your practice.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/3_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              With a website that more effortlessly collects information from leads and supports
              their journey to become a client — from submitting a contact form and receiving an
              automated confirmation email from you, to scheduling their first coaching session and
              submitting payment for it on your website.
            </Text>

            <Text small>
              There’s a lot that’s required of your website to make it a growth mechanism for your
              business. First, it should be a positive and accurate reflection of your brand and
              demonstrate the value of your services. Next, it should compel visitors to take action
              and move closer to working with you. Finally, it should support all of the work it
              takes to accomplish your business goals and grow your coaching practice.
            </Text>

            <Text small>
              On the client side, their experience on your site should be completely smooth and
              seamless. Contacting you, submitting and signing a contract, and paying for your
              services should all be accomplished in only a few steps without leaving your website.
              To see examples of amazing websites for coaches and consultants, find inspiration in{' '}
              <a href="https://www.b12.io/gallery-industry">
                B12’s gallery of the best website design
              </a>
              .
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#coaching-and-personal-development',
        ctaText: 'Browse coaching firm websites',
      }}
      splitImageLeft={{
        title: 'Creating highly targeted websites for coaches since 2016',
        subtitle:
          'B12 specializes in building carefully curated websites for professional coaches that strategically position them in a competitive market and make a positive first impression on every visitor.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/4_websites.png"
            alt="Building websites for solo attorneys and small law firms since 2016"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Our web design team handles your entire project, while still giving you control over
              how you want your website to look, read, and function. Log in to the B12 website
              editor any time to make quick changes to your site.
            </Text>

            <Text small>
              The B12 platform was created specifically for professional service firms, and our web
              designers, copywriters, and SEO specialists have built hundreds of coaching sites that
              effectively communicate value proposition and move website visitors through your
              client journey.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from coaches',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio']}
    />
  )
}

export default IndustryCoachesParent

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Professional Coaches"
    pageDescription="Elevate your coaching business with web design and a website that makes you look professional and automates your business operations."
  />
)
