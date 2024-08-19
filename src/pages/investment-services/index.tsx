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
import emptySectionBg from '../../images/industry-hubs/financial-advisors/2_devicemockups.png'

// Data
import faq from '../../data/industry-hubs/faq-investment-firms.yaml'

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const IndustryInvestmentFirmsParent = () => {
  return (
    <IndustryHubsParentLayout
      childHubs={null}
      hero={{
        title: 'Website design for investment firms',
        subtitle: 'Invest in professional web design for your company',
        text: (
          <>
            <Text small>
              When it comes to website design for your investment firm, it’s best to think
              long-term. Choosing a web development company that can scale with you, has a built-in
              support team, and helps you attract more clients is key. A functional online presence
              that allows you to stand out from the competition will set you apart from similar
              firms in your industry.
            </Text>
            <Text small>
              With the B12 website builder, you can capture more leads, attract new clients,
              schedule consultations, get paid on time, and still have time to manage your
              relationships and business growth. Building and maintaining a site should be the last
              of your problems. With B12, you can outsource much of the web design building and
              maintenance processes while retaining control when you want it. You’re left to focus
              on delivering the best investment results for your clients.
            </Text>
          </>
        ),
        ctaText: 'View our portfolio of the best investment firm websites',
        ctaUrl: 'https://www.b12.io/gallery-industry#financial-services',
        image: (
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../../images/industry-hubs/financial-advisors/1_hero.png"
              alt="Website design for investment firms"
              width={960}
              {...imgProps}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/industry-hubs/financial-advisors/1_hero.png"
              alt="Website design for investment firms"
              width={420}
              {...imgProps}
            />
          </>
        ),
      }}
      ingredients={{
        title: 'How to design a scalable investment firm website',
        list: [
          {
            icon: <IconMagnet />,
            title: 'Attract new clients',
            subtitle: (
              <p>
                Your investment firm website can attract new clients 24/7 with ready-to-go intake
                forms that help you quickly capture and qualify new leads. B12’s team of SEO
                specialists help you optimize your online presence from day one, so you can appear
                in relevant Google search results sooner. We’ll also create compelling and relevant
                call-to-actions to enable you to bring the right clients into your funnel.
              </p>
            ),
          },
          {
            icon: <IconCredible />,
            title: 'Highlight your reputation',
            subtitle: (
              <p>
                You know that your firm is unlike others in the market. Together, we’ll work with
                you to ensure that your potential clients know what makes your experience unique and
                valuable. Maybe you specialize in helping people protect their personal assets,
                pursue business financing, invest their portfolio, or mitigate business risks.
                Whatever it is that makes you the top choice for your clients will be highlighted on
                your investment firm website to build trust.
              </p>
            ),
          },
          {
            icon: <IconStreamline />,
            title: 'Connect with aspiring investors',
            subtitle: (
              <p>
                Investment firms are all about building relationships. After all, people trust you
                with their life savings and future. Strengthening relationships with clients through
                your website is crucial to your long-term success. You can add online scheduling so
                clients book meetings with you directly from your website. Building an email list
                and nurturing those leads can also be an effective way to connect, while filling out
                intake forms allow you to better support clients on their financial journey.
              </p>
            ),
          },
          {
            icon: <IconSimple />,
            title: 'Centralize your website operations',
            subtitle: (
              <p>
                You help people earn a return on their investments so they can retire, save for a
                rainy day, or grow their assets. At B12, we specialize in building and managing
                websites for investment firms and other professional services. We help you look
                credible online, reach your clientele, and set up a seamless client journey for
                improved retention. That way, you can focus on having a big impact on your clients
                instead of worrying about getting your new site off the ground and keeping it up to
                date.
              </p>
            ),
          },
        ],
      }}
      emptySectionBg={emptySectionBg}
      winningApproach={{
        title: 'A proven approach to building investment firm websites',
        subtitle:
          'You get great returns for your clients, we give you great results on your website.',
        text: (
          <>
            <Text small>
              B12’s team and AI technology work hand-in-hand to bring your investment firm online
              and set you up for better performance. We help you launch a beautiful website in 30
              days or less, with all of the administrative and client-facing features you need to
              grow your audience, brand identity, and search engine profile.
            </Text>

            <Text small>
              The team that builds your investment firm website includes copywriters, SEO
              specialists, and website designers. Our experts work together to deliver a
              fresh-looking website that uses the latest tactics in SEO, conversion, and user
              experience to help ensure that you attract, retain, and serve as many clients as
              possible.
            </Text>
          </>
        ),
        items: [
          {
            title: 'Receive an AI draft',
            text: 'Building a professional website can be a tedious and slow process, depending on your provider. With B12’s AI technology, you see the first draft of your website design in 60 seconds. All you need to do is answer a few simple questions and our AI will quickly draft a website design that you can provide feedback on. From there, our designers, copywriters, and SEO professionals implement your feedback and personalize your web presence.',
          },
          {
            title: 'Refine it with help from professional web designers',
            text: "Our team is stacked with professionals who understand your industry and your clients' expectations. Using your feedback, our experts transform your website to suit your branding and overall vision, and equip it with the tools you need to grow your business. In under 30 days, you get a website that builds trust, generates leads, and efficiently serves clients. Request updates any time from our team or make your own DIY edits with the intuitive B12 Editor.",
          },
          {
            title: ' Supercharge your business with automation, conversion tools, and payments',
            text: 'Add email pop-ups, site banners, and enticing call-to-actions to your investment firm’s website to help boost clicks and engagement. With B12, you can also schedule appointments with clients and manage payments and invoices online. Sending automated reminder emails about pending payments allows you to close more deals without adding manual effort for you. ',
          },
          {
            title: 'Launch your new investment firm website',
            text: 'Within 30 days of signing up, you’ll have a brand-new investment firm website, fully loaded with a beautiful design, captivating copy, and conversion features, so you are ready to interact with clients online immediately. Once your site is live, start scheduling consultations, finalizing contracts digitally, sending email marketing campaigns, and accepting online payments. Iterate on your site as your firm evolves, including introducing new services or adding team members.',
          },
        ],
      }}
      designBasics={{
        title: 'How to make your investment firm website stand out',
        items: [
          'Fast-loading speed and reliable uptime',
          'Mobile optimization',
          'Enticing homepage design',
          'Regularly published blog content',
          'Testimonials and social proof from satisfied clients',
          'Captivating images and videos',
          'Effective call-to-actions and forms',
          'Search engine optimization',
          'Informative pages about the services you offer',
          'Streamlined site navigation',
        ],
      }}
      ctaMini={{
        title: 'Create a stunning investment firm website in 30 days or less with B12',
        text: 'Set your site up for free today',
      }}
      splitImageRight={{
        title: 'What do the top investment firm websites have in common?',
        subtitle:
          'The most effective investment firm websites make a positive first impression on visitors',
        image: (
          <StaticImage
            src="../../images/industry-hubs/financial-advisors/4_longformcontent.png"
            alt="What do the top investment firm websites have in common?"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              About 94% of{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.prnewswire.com/news-releases/first-impressions-are-94-design-related--infinityhr-upgrades-their-user-interface-to-match-todays-technological-beauty-standards-300617678.html"
              >
                first impressions
              </a>{' '}
              on an investment firm website are design-related. B12’s professional designers know
              how to make an excellent first impression that helps build authority and trust for
              your firm. Your website will include beautiful imagery, interesting design elements,
              and a user-friendly layout to ensure people easily navigate your site, find what
              they’re looking for, and can easily take the next step to schedule their first meeting
              or submit an introductory form.
            </Text>

            <Text small>
              Having a blog on your site where you educate visitors about investing will also help
              you make your investment website a go-to resource for your clients. Websites that
              create regular blog content{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.nectafy.com/blog/copywriting-statistics"
              >
                generate 97% more backlinks
              </a>{' '}
              than those that don’t. You’ll improve your ranking for valuable keywords, and increase
              the number of visitors your website generates, which can also help you bring in more
              clients. Plus, by educating your audience, you display your expertise and start
              establishing trust before your first call with a new client.
            </Text>

            <Text small>
              Having a custom-built website in as little as 30 days allows you to make an impression
              on your desired audience sooner. By maintaining your website with help from B12, you
              ensure your online presence is always up to date with what you offer. Check out B12’s
              portfolio of investment firm websites to inspire new ideas on how you can stand out
              from a crowded investment market.
            </Text>
          </>
        ),
        ctaLink: 'https://www.b12.io/gallery-industry#financial-services',
        ctaText: 'Browse investment firm websites',
      }}
      splitImageLeft={{
        title: 'B12 builds and maintains custom websites for investment firms',
        subtitle:
          'Since 2016, B12 has designed professional websites for thousands of investment firms and helped them successfully scale.  ',
        image: (
          <StaticImage
            src="../../images/industry-hubs/financial-advisors/5_endorsementcontent.png"
            alt="B12 builds and maintains custom websites for investment firms"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Our talented professional designers, copywriters, and SEO professionals work hard to
              ensure you have a credible and engaging investment firm website. Unlike other website
              builders, we’re available to guide you through website launch and maintenance,
              offering advice on everything from Google Analytics to email marketing. With B12 as
              your partner, you’ll spend less time navigating the backend of your website and more
              time working with clients.
            </Text>

            <Text small>
              <b>B12 is proud to receive 4+ stars on the top review sites, including:</b>
            </Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from investment firms',
        items: faq,
      }}
      sliderTitle="What do other service businesses think of B12’s website design?"
      sliderItems={['maxwell-tillman', 'action-logistix', 'taxstudio']}
    />
  )
}

export default IndustryInvestmentFirmsParent

export const Head = () => (
  <SEO
    pageTitle="Website design for investment firms"
    pageDescription="Learn the website design must-haves for investment firms, including why B12 is the best website builder for your company."
  />
)
