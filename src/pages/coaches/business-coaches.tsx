import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '../../components/SEO'
import IndustryHubsChildLayout from '../../components/layouts/IndustryHubsChild'
import Text from '../../components/text/Text'

// Images
import IconDesign from '../../images/icons/design.inline.svg'
import IconRocket from '../../images/icons/rocket.inline.svg'
import IconWrench from '../../images/icons/wrench.inline.svg'
import IconPeople from '../../images/icons/people.inline.svg'

// Data
import faq from '../../data/industry-hubs/faq-business-coaches.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Web design for business coaches',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your coaching business today',
      }}
      businessCard={{
        title: 'Your business coaching website must show you’re a true strategic partner',
        subtitle: 'As a business coach, you’re your clients’ secret weapon.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/business-coaches/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Your personalized counseling can help them revive a stagnant business, refine their
              goals, manage their business more successfully, build a new business from scratch, and
              achieve a better work-life balance.
            </Text>

            <Text small>
              At the same time, you need a strategy to elevate and grow your own business coaching
              company. An effective way to do this is to build and optimize a robust website that
              keeps you organized, better serves clients, and makes the best first impression on
              visitors.
            </Text>
            <Text small>
              From the second a person reaches your website, they should feel inspired and intrigued
              to learn more about your services. Prominently showcase testimonials and service
              descriptions, and make it easy to submit a contact form or schedule a coaching
              session. Your site should answer their questions, engage them to take the next step
              toward working with you, and position you as a mentor in business growth.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Make it easy for coaching clients to hire you, book sessions, and pay online',
        subtitle: 'The benefits of hiring a business coach are proven:',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/business-coaches/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              80% of business coaching clients report an increase in self-confidence, and nearly
              half of companies receive at least a 10x ROI on their business coaching investment.
              These numbers should speak for themselves, but you still need your website to be your
              company’s number-one asset in convincing your audience to try your services.
            </Text>
            <Text small>
              A great business coaching website will help you grow your audience, acquire clients,
              and sell more consulting sessions. As a visitor tries to learn more about your
              business, make sure your website supports their journey by making it simple and
              removing unnecessary steps. From getting in touch with you to scheduling a coaching
              session or paying their first invoice, your online experience should be convenient and
              client-focused.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'Features every professional coaching website needs',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/business-coaches/3_desktop.png"
            alt="What every coaching website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Sleek website design',
            subtitle:
              'A modern website makes it easier to gain visibility and connect with people looking to scale their business to new heights and receive professional development advice. A professional web designer knows how to harness a clean layout, intuitive navigation, and cohesive branding to ensure your site comes off as professional and efficiently sells your services. ',
          },
          {
            icon: <IconRocket />,
            title: 'Passion and purpose',
            subtitle:
              'Your website should be an authentic expression of your passion for business coaching and the results you’ve helped clients achieve. Share client testimonials, case studies, and growth metrics that demonstrate the profound impact you’ve had on entrepreneurs and businesses.',
          },
          {
            icon: <IconWrench />,
            title: 'Online lead generation',
            subtitle:
              'Build your website to accelerate lead generation by simplifying the client journey and adding elements like live chat, email signup pop-ups, discount banners, and blog posts. These features and tools let you collect more contacts with less effort and time on your part. Instead, you can stay focused on providing service to existing coaching clients.',
          },
          {
            icon: <IconPeople />,
            title: 'Efficient client experience',
            subtitle:
              'The process of receiving business coaching should be enjoyable, engaging, and convenient for clients at every step of their journey. Always give them to option to interact with your business online, whether they’re submitting a document, signing a contract, scheduling their next coaching session, or paying their balance. Putting more of your client experience online offers your audience flexibility, keeps you organized, and adds efficiency to your processes. ',
          },
        ],
      }}
      ctaMini={{
        title: 'Stunning website design can lead to your own growth and success',
        text: 'Set your site up for free today',
      }}
      testimonials={{
        title: 'What do other service providers think of B12’s approach to web design?',
        list: [
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/photo_leroymaxwell.png"
                alt="Leroy Maxwell Jr."
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            name: 'Leroy Maxwell Jr.',
            position: 'Founder of Maxwell Tillman',
            quote:
              'I would recommend B12 to any company that wants a team to manage and grow their website while they focus on growing the business. With B12, founders can be rest assured that their website is in good hands and, more importantly, prove its value and ROI.',
            link: '/case_studies/maxwell-tillman',
            linkText: 'Read Leroy Maxwell Jr.’s story',
            customerSince: 'B12 customer Since 2020',
          },
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/taxstudio-headshot.png"
                alt="Brett Packard"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px', boxShadow: '0 0 15px rgba(0,0,0,.15)' }}
              />
            ),
            reversed: true,
            name: 'Brett Packard',
            position: 'Head of Operations at TaxStudio',
            quote:
              'What B12 offers in terms of support service and design knowledge is what we were looking for. We finally have a website we’re proud of.',
            link: '/case_studies/taxstudio',
            linkText: 'Read Brett Packard’s story',
            customerSince: 'B12 customer Since 2021',
          },
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/action-logistix-headshot.jpeg"
                alt="Barbara Bartelsmeyer"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            name: 'Barbara Bartelsmeyer',
            position: 'Partner & COO of Action Logistix',
            quote:
              'We save a lot in monthly costs by switching to B12. We aren’t charged extra for optimization tools anymore. We aren’t overcharged for redesigning, because with B12, making changes are part of your normal day.',
            link: '/case_studies/action-logistix',
            linkText: 'Read Barbara Bartelsmeyer’s story',
            customerSince: 'B12 customer Since 2020',
          },
        ],
      }}
      help={{
        title: 'Helping US-based business coaches make their best first impression online',
        textLeft: (
          <>
            <Text small>
              Coaching is a $2.85 billion global industry, and business coaching specifically is
              gaining popularity as more people look to build passive income streams, fight
              inflation, start a side hustle, or sustain their existing business. As competition in
              the business coaching industry increases, focus on how to stand out. A beautiful,
              client-centric website is one of the most effective ways to grow your coaching
              business and improve your service delivery.
            </Text>
            <Text small>
              B12 builds powerful custom websites for coaches and consultants that look modern, meet
              clients where they are, engage visitors, and simplify the process of selling online.
              Work with professional web designers, copywriters, and SEO specialists to optimize
              your site, while always having the option to make editors yourself in the B12 Website
              Editor.
            </Text>
            <Text small>
              The B12 platform was designed specifically for service businesses, and our team has
              built hundreds of coaching websites that showcase each company's unique expertise.
              Every tool you need to convert, serve, and retain clients is included in your site, so
              it’s easier for you to scale.
            </Text>
          </>
        ),
        textRight: (
          <Text>
            B12’s commitment to helping our customers thrive online has earned us hundreds of
            positive reviews and 4+ stars on all of the top review websites, including
          </Text>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from<br/> business coaches',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Business Coaches"
    pageDescription="A professionally designed business coach website can convince prospective clients that you’re the expert they should work with to set and accomplish their professional goals."
  />
)
