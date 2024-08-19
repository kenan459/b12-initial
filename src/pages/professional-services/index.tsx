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
import emptySectionBg from '../../images/industry-hubs/consultants/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-professional-services.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryProfessionalServicesParent = () => {
  return (
    <IndustryHubsParentLayout
      childHubs={null}
      hero={{
        title: 'Website design for professional service firms',
        subtitle:
          'Build a beautiful website to attract more clients for your professional service firm',
        text: (
          <>
            <Text small>
              The professional services industry is competitive. You need to find ways to stand out
              among your competitors to truly differentiate yourself from other consultants, firms,
              and companies. A simple way to do this is to build a stunning website with compelling
              copy that attracts more clients to choose you as their go-to professional services
              firm.
            </Text>
            <Text small>
              With so many professional service firms out there, we’ll help differentiate you from
              the sea of sameness to help you land more clients than ever before. Building a
              professional services website helps you create an online presence that new clients can
              easily discover and connect with you on.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best professional service firms',
        ctaUrl: 'https://www.b12.io/gallery-industry',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/consultants/1_hero.png"
              alt="Website design for insurance brokers"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/consultants/1_hero.png"
              alt="Website design for insurance brokers"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'Key components of a professional service firm website',
        list: [
          {
            icon: <IconCredible />,
            title: 'Build your authority',
            subtitle: (
              <p>
                Standing out amongst the competition is no easy task. When building your
                professional service firm website, it’s crucial to determine your unique value
                proposition to ensure you separate yourself from your competitors. You’ll want to
                highlight your expertise, differentiate yourself, and provide as much value as you
                can so people know you’re the real deal. A website is a great place to share your
                expertise, especially on a blog. When people keep coming back to learn from you,
                they eventually either buy from you or hire you.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Generate more clients',
            subtitle: (
              <p>
                Having a strong online presence can help you generate more clients. A website adds a
                level of credibility to your business that’ll make it easier to attract more
                clients. You can add intake forms to your site, email opt-in forms, and create
                landing pages and blog posts to attract new clients to your business organically.
                You can also work with our SEO professionals to help you build your domain
                authority, so your business ranks higher in search engines.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Improve client communication',
            subtitle: (
              <p>
                Professional service firms often have relationships at the core of the business.
                Building and nurturing a relationship with a potential client is made easy with B12.
                You can add an online scheduling tool for clients to book meetings with you to
                discuss their needs. You can also add intake forms and email opt-in forms to
                maintain your relationship with clients and strengthen your relationship. Plus, you
                can send over contracts to new clients so you both set the right expectations for
                your new collaboration.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Simplify your business operations',
            subtitle: (
              <p>
                With B12, easily centralize all aspects of running your business. From attracting
                clients to maintaining relationships, you can manage intake, payments, and more on
                the same platform. Plus, running a business and managing a website can be
                time-consuming. Fortunately, B12 handles more aspects of your site so you focus on
                client relationships. Need a higher search ranking? Our SEO specialists ensure you
                follow best practices. Need more clients? Our team of copywriters can produce more
                content to help you attract the right visitors organically and guide them toward
                conversion.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A proven method for building professional services websites',
        subtitle: 'You’re there for your clients, we’re here to support you',
        text: (
          <>
            <Text small>
              Building and maintaining a website can require a lot of work. When you’re on the go,
              helping clients all day, it can be hard to find time to invest in building a
              professional service firm website. Fortunately, B12, with the help of its AI
              technology, builds you a complete, fully-stacked website in 30 days or less without
              taking up much of your time.
            </Text>

            <Text small>
              Our team is complete with professional designers, copywriters, and SEO experts who can
              manage all aspects of building your website in your image and tone of voice to help
              you build customer trust and attract a bigger client base. That way, you can put all
              your energy in providing excellent service to your clients instead of spreading
              yourself thin.
            </Text>
          </>
        ),
        items: [
          {
            title: 'Generate an initial AI draft',
            text: 'Getting a quick concept of what your new professional service firm website will look like doesn’t take much time. It only takes about 60 seconds! Our AI helps generate a quick initial draft of what your website could look like. From there, you can provide feedback on what and we’ll send those details over to our team to get started on personalizing your new website. ',
          },
          {
            title: 'Get design support from our team',
            text: 'From a beautiful website design to captivating copy, B12’s team works cohesively to create the professional website you’ve envisioned in your head. We’ll build you a professional services firm website that’s mobile responsive, easy to navigate, and optimized for conversions in under 30 days.',
          },
          {
            title: 'Grow revenue with online payments, automation, and conversion tools',
            text: 'Website pop-ups, easy-to-read banners, and clear call-to-actions can help you see a rise in conversions on your website. You’ll also be able to book meetings with potential clients with an online scheduling tool, ensure they sign contracts, invoice them, and manage your business’ payments. All aspects of running a conversion-focused business can easily be included in your new professional services website with the help of B12.',
          },
          {
            title: 'Launch your professional services website',
            text: 'In 30 days or less, you’ll have a ready-to-go website complete with a stunning design, compelling copy, and built to rank over the long haul. Your site will have all the key web pages you need to help educate new customers about who you are and why they should choose you. You’ll be ready to start promoting your new website to start attracting new clients and growing your base.',
          },
        ],
      }}
      designBasics={{
        title: 'How to separate your professional service firm website from the competition',
        items: [
          'Fast page speed with reliable uptimes',
          'Mobile responsiveness',
          'New weekly blog content to educate website visitors',
          'Positive testimonials from current clients',
          'A beautiful homepage design',
          'Opt-in forms to attract new potential customers',
          'Web pages to educate visitors about who you are and your services',
          'SEO: on-page and off-page',
          'Call-to-actions on landing pages',
          'Good user experience design for easy navigation',
          'Conversion-focused website design',
        ],
      }}
      ctaMini={{
        title: 'Start building a professional service firm website today',
        text: 'Set up your site for free',
      }}
      splitImageRight={{
        title: 'What makes a professional services website exceptional',
        subtitle:
          'The most effective professional services websites focus on attracting and retaining new clients',
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
              A business instantly dies without sales. Your new website is all about building an
              online presence that helps ensure that never happens. An amazing website design will
              help build customer trust and allow you to make a positive first impression.
            </Text>

            <Text small>
              B12 builds websites that look beautiful to attract new clients, creates content that
              educates to retain clients, and builds domain authority so your business can thrive
              for years to come.
            </Text>

            <Text small>
              From social proof to user-generated content, we’ll ensure your website is updated with
              the latest conversion optimization techniques. B12 can build all of the website pages
              you need to help ensure your business offers visitors the information they’re looking
              for, and to help you rank highly on search engines like Google.
            </Text>
            <Text small>
              To get ideas and inspiration for your new site, check out our collection of beautiful
              websites built by B12 experts.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry',
        ctaText: 'Browse professional services firm websites',
      }}
      splitImageLeft={{
        title: 'Since 2016, we’ve built custom websites for professional service firm websites',
        subtitle:
          'B12 specializes in building and maintaining websites for professional service companies looking to boost their client base',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/4_websites.png"
            alt="Since 2016, we’ve built custom websites for professional service firm websites"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Our team handles all aspects of web design from beginning to end. However, unlike
              traditional web designers, we’re also able to help you maintain your website and keep
              it active with new blog content, optimized for the latest SEO practices with algorithm
              updates, and new landing pages as your service offering expands. We specialize in
              helping professional service firms design and manage their websites as needed.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from professional service firms',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio', 'envision-hr']}
    />
  )
}

export default IndustryProfessionalServicesParent

export const Head = () => (
  <SEO
    pageTitle="Website design for professional service firms"
    pageDescription="Learn the qualities that make your professional services website more appealing and attention-grabbing to potential clients. Find the best web builder to create your firm's site."
  />
)
