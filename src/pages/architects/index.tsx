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
import emptySectionBg from '../../images/industry-hubs/architecture-firms/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-architecture-firms.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryArchitectsParent = () => {
  return (
    <IndustryHubsParentLayout
      childHubs={null}
      hero={{
        title: 'Website design for architecture firms',
        subtitle: 'Why great web design gives your architecture firm an edge',
        text: (
          <>
            <Text small>
              A secure and polished website can be an architect firm's most powerful tool to
              differentiate itself and attract new business in the highly competitive construction
              and creative services market. It can demonstrate the firm's expertise, ability to
              design clients’ dream spaces, and track record for managing projects end-to-end.
            </Text>
            <Text small>
              In a crowded market of architecture firms, a strong online presence is crucial to
              showcase your unique value and stand out to potential clients. Launching a visually
              appealing and easy-to-find website designed to convert visitors into clients can
              significantly impact your revenue and growth potential.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best architecture business websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#architecture-and-real-estate',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/architecture-firms/1_hero.png"
              alt="Website design for architecture firms"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/architecture-firms/1_hero.png"
              alt="Website design for architecture firms"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'Key features of a high-performing architecture firm website',
        list: [
          {
            icon: <IconCredible />,
            title: 'Establishes credibility',
            subtitle: (
              <p>
                You play a critical role in helping clients navigate the multi-layered process of a
                remodel, from helping them see how their space could work better for their
                lifestyle, designing ideal floor plans, creating 3D models, and advising on the best
                materials. Your website, like your firm, should help visitors find answers to their
                most pressing questions, view past projects, and communicate with you effectively.
              </p>
            ),
          },
          {
            icon: <IconMagnet />,
            title: 'Attracts new clients',
            subtitle: (
              <p>
                Your website and digital marketing tactics must work tirelessly to attract potential
                clients to your firm. One critical step towards this is optimizing your site for
                organic search and partnering with an SEO specialist. This can boost your website's
                search engine ranking, making it easier for prospective clients to find and discover
                your services.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Streamlines client interactions',
            subtitle: (
              <p>
                Make it easy for your clients to interact with your architecture firm by
                streamlining their experience on your website. Ensure your web pages load quickly
                and offer features such as appointment scheduling to maintain relationships with all
                of your firm's contacts. Every aspect of your site should be designed to help
                clients achieve their goals conveniently, which in turn can motivate them to refer
                your firm to others.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Simplifies your firm’s operations',
            subtitle: (
              <p>
                Your website has the potential to streamline your business by centralizing various
                aspects of your operations online. From managing your client list to project
                management, appointment history, and more, your website can serve as a one-stop shop
                for all your business needs. By eliminating the need for third-party tools, your
                website can help streamline your client journey and free up time that you would
                otherwise spend on administrative tasks, allowing you to focus more on serving your
                clients.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A structured approach to architect websites',
        subtitle: 'Your business started from a love of design, not websites. Leave that to us.',
        text: (
          <>
            <Text small>
              B12's team, together with AI-powered technology, takes on the heavy lifting to help
              you establish an online presence and attract clients effortlessly. In just 30 days or
              less, we assist you in publishing a professional website that includes various tools
              to streamline your business processes, freeing up your time and energy to focus on
              solving your clients' problems.
            </Text>

            <Text small>
              At B12, we empower architecture firms to launch cutting-edge websites equipped with
              tools that facilitate client acquisition, engagement, and service delivery. We provide
              your firm with all the necessary resources to deliver exceptional services that
              simplify your clients' lives and enhance your industry standing.
            </Text>
          </>
        ),
        items: [
          {
            title: 'Receive an AI draft',
            text: 'Creating a website can be a time-consuming distraction from supporting your clients. With B12, the process is streamlined and accelerated through the use of AI technology. Simply answer a few questions about your business, and our platform will generate a personalized website in under 60 seconds. This quick and easy solution allows you to focus on your clients while ensuring a strong online presence for your business.',
          },
          {
            title: 'Work with experts in architecture firm web design',
            text: 'With a quality starting point for design and web copy, B12 experts then work with you to customize and launch your mobile-friendly, fully branded website. It looks credible, is search-optimized, and is built for smooth client interactions. B12’s knowledgeable designers, copywriters, and SEO specialists are on hand to update your site any time — or you can do it yourself with our easy website editor.',
          },
          {
            title: 'Boost revenue through online bookings',
            text: 'Website pop-ups, banners, and strategic calls to action boost your conversion rate, while online site portfolios and site viewing schedules let visitors get to work with you quickly from your site. Automated reminders help you eliminate appointment no-shows and make the most of your team’s time.',
          },
          {
            title: "Launch your architect firm's new website",
            text: 'The sooner your new site launches, the sooner you’re discoverable to potential businesses looking for the exact properties in your portfolio. Once your site is published, leverage powerful tools like appointment scheduling, email marketing, and client intake forms to provide clients with the experience they expect.',
          },
        ],
      }}
      designBasics={{
        title: 'What are the key elements of building high-performance architect websites?',
        subtitle:
          'These crucial features enable you to build a modern, user-friendly architecture firm website.',
        items: [
          'Rapid page load time',
          'Mobile-friendly design',
          'Blog posts geared toward your ideal audience',
          'Testimonials from delighted clients',
          'An attention-grabbing homepage that drives engagement',
          'Forms to capture more leads',
          'A page, section, or detailed description of each service offerings',
          'On-page and off-page SEO',
          'CTA buttons on high-traffic pages',
          'Conversion-oriented design elements and tools',
          'Intuitive navigation and user experience',
        ],
      }}
      ctaMini={{
        title: 'Quality website design can help you grow your architecture business fast',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What separates a remarkable architecture firm website from the rest?',
        subtitle:
          'The most effective architecture firm websites are equally user-friendly for visitors and powerful in driving growth for your firm.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/architecture-firms/4_longformcontent.png"
            alt="What separates a remarkable architecture firm website from the rest?"
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
              When looking for architecture firms to bring their dream to life, people start their
              search online, so your firm can be more competitive by making that process
              straightforward and quick. An easy way to set your firm apart from others and improve
              client relationships is to remove any friction from contacting you, submitting
              documents, and paying you directly through your website.
            </Text>

            <Text small>
              For more inspiration and to see examples of great architecture firm web design, take a
              look through B12's best CRE firm websites.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#architecture-and-real-estate',
        ctaText: 'Browse architecture firm websites',
      }}
      splitImageLeft={{
        title: 'Building websites for independent architects and small firms since 2016',
        subtitle:
          'B12 specializes in building custom websites for architecture firms that meet industry best practices and make a great first impression on every potential client.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/architecture-firms/5_endorsementcontent.png"
            alt="B12 specializes in building custom websites for architecture firms that meet industry best practices and make a great first impression on every potential client."
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
              and our experts have built hundreds of architect websites that emphasize each
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
        title: 'Frequently asked questions from architecture firms',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio']}
    />
  )
}

export default IndustryArchitectsParent

export const Head = () => (
  <SEO
    pageTitle="Website design for architecture firms"
    pageDescription="Discover best practices for designing a professional architecture firm website, including creating content, attracting leads, and converting new clients."
  />
)
