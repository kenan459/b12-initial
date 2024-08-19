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
import faq from '../../data/industry-hubs/faq-life-coaches.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Web design for life coaches',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your coaching business today',
      }}
      businessCard={{
        title: 'Your life coaching website must inspire and engage visitors',
        subtitle: 'As a life coach, your services are invaluable.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/life-coaches/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              You work with clients to make their dreams come true and transform their lives for the
              better. But what about your own goals for your business? One of the best ways to make
              those a reality is to build a website that does more of the work for you and
              effortlessly supports your clientele.
            </Text>

            <Text small>
              From the second someone lands on your life coaching website, they should feel a sense
              of peace and empowerment. Make it easy for them to learn all about the value you
              offer, and the process of working with you, then take action to get started improving
              their life. A site that your audience loves can yield incredible results to grow your
              life coaching business and help you offer your services more efficiently.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Let coaching clients easily work with you, schedule sessions, and pay for services',
        subtitle:
          'When life coaching clients are ready to start the process of making tangible changes in their lives, you don’t want your online presence to slow them down.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/life-coaches/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              Every life coach website should make the client journey as simplified and streamlined
              as possible, from submitting their first contact form to scheduling an introductory
              session and re-engaging them via automated email to when it’s time for their second.
            </Text>
            <Text small>
              An effective website platform will provide every tool you need to show up where
              potential clients are, impress them with a stunning custom website, and engage them
              using conversion tools like intake forms, pop-ups, and banners. In only a couple of
              clicks, they should be able to get in touch with you or schedule an appointment
              directly on your site.
            </Text>
            <Text small>
              Once a website visitor becomes a client of your coaching business, ensure you have
              workflows that make it quick and easy for them to resign their contract each year
              using eSignatures, receive personalized invoices and submit payment, and receive
              frequent nurture emails from you.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'Must-haves for life coaching websites',
        image: (
          <StaticImage
            src="../../images/industry-hubs/coaches/life-coaches/3_desktop.png"
            alt="What every coaching website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Stunning website design',
            subtitle:
              'A modern website makes it easier to gain visibility and connect with people who need coaching. Working with a professional designer will help ensure your site more efficiently sells your services, and that all elements, including its layout, navigation, and branding, encourage visitors to contact you.',
          },
          {
            icon: <IconRocket />,
            title: 'Credibility and authority',
            subtitle:
              'Your website has only seconds to convey your knowledge, compassion, and creativity to visitors. Be sure to emphasize clear calls to action, social proof from happy clients, and any relevant awards or accreditations. With 73% of coaching clients reporting an improvement in their relationships and communication skills due to coaching, you should feel confident asking your clients for a testimonial.',
          },
          {
            icon: <IconWrench />,
            title: 'Tools for lead generation',
            subtitle:
              'Build your website to accelerate lead generation by simplifying your client journey and including elements like live chat, email newsletter signup, promotional banners, and blog posts. These features and tools allow you to collect more lead information with less effort and time on your part. Instead, you can stay focused on providing service to existing clients.',
          },
          {
            icon: <IconPeople />,
            title: 'Efficient client engagement ',
            subtitle:
              'Working with your life coaching business should delight, engage, and retain clients at every step of the journey. Consumers now expect to be able to do it all online and fast, including signing contracts, submitting documents, scheduling coaching sessions, and paying their balance. Create a personalized, convenient client experience that centralizes more parts of your business, so you save time and work more efficiently. ',
          },
        ],
      }}
      ctaMini={{
        title: 'Great life coach website design can help you grow your business fast',
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
        title:
          'Helping life coaches across the U.S. make a good impression with a stunning website',
        textLeft: (
          <>
            <Text small>
              Coaching is a $2.85 billion global industry, and life coaching, in particular, is
              increasing in popularity. As competition in your industry increases, you need a way to
              stand out and elevate your brand. Don’t underestimate the power of a beautiful,
              client-centric website to grow your coaching business and improve your services.
            </Text>
            <Text small>
              B12 builds powerful custom websites for coaches and consultants that fulfill industry
              best practices, emphasize your value proposition, and are easy to use. Let experts in
              web design, content, and SEO take the lead on your new site while weighing in with
              feedback any time or making edits yourself using our intuitive website editor tool.
            </Text>
            <Text small>
              The B12 platform was designed specifically for service businesses, and our team has
              built hundreds of coaching websites that showcase a company's unique expertise and
              include every tool you need to convert, serve, and retain coaching clients. B12’s
              commitment to helping our customers thrive online has earned us hundreds of positive
              reviews and 4+ stars on all of the top review websites, including
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
        title: 'Frequently asked questions from<br/> life coaches',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Life Coaches"
    pageDescription="An appealing life coach website built by B12 can legitimize your business and help you reach more prospective clients online without increasing your marketing budget."
  />
)
