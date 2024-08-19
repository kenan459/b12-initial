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
import faq from '../../data/industry-hubs/faq-health-insurance-brokers.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Website design for health insurance brokers',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your insurance agency today',
      }}
      businessCard={{
        title: 'A website can fuel growth for your health insurance agency',
        subtitle: 'Everyone shopping for health insurance has questions.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/health-insurance/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Deductibles, co-pays, and premiums are all terms that overwhelm consumers, who are
              looking for an expert to help guide them through confusing concepts and insurance
              jargon. As an experienced insurance agent, you have answers, but is your health
              insurance agency website effective in conveying the breadth of your expertise?
            </Text>

            <Text small>
              As people search online for the best health insurance coverage options, ensure your
              site communicates your value, allows you to easily connect with leads, and
              effortlessly fosters your client relationships. Positioning your health insurance
              brokerage as trustworthy and knowledgeable, and making it easy to work with you will
              increase your chances of successfully scaling.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Reach health insurance shoppers online and sell more policies',
        subtitle: 'Health insurance is sometimes seen as an investment, but usually as a burden.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/health-insurance/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              Make the health insurance shopping experience more pleasant for prospects by
              addressing health insurance FAQs succinctly in your website content, making it easy to
              book a consultation with you, and reducing the steps to pay their bill online.
            </Text>
            <Text small>
              Embracing automation in more of your website workflows, like reminding clients about
              an upcoming appointment or unpaid invoice, leaves you more time to offer personalized
              service and maintain client relationships, showcasing the human side of your business.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'Fundamentals of great health insurance web design',
        image: (
          <StaticImage
            src="../../images/industry-hubs/insurance/health-insurance/3_desktop.png"
            alt="What every tax lawyer website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Design your site strategically',
            subtitle:
              'When designing a new website for your health insurance agency, plot out how you want to present your services and choose a layout, images, and content that supports your business goals. Design elements like color scheme, navigation, call to action buttons subtly persuade visitors to stay on your site and learn more about your expertise. ',
          },
          {
            icon: <IconRocket />,
            title: 'Establish your firm as an authority',
            subtitle:
              'One way to establish authority as a quality health insurance provider is to create helpful, relevant content that interests your target audience. This helps you build credibility with potential customers and increases your visibility online by improving your search ranking when you include competitive yet winnable SEO keywords in your website content.',
          },
          {
            icon: <IconWrench />,
            title: 'Convert traffic into leads',
            subtitle:
              'Removing friction and hesitance from your website experience makes visitors more likely to become leads, and ultimately clients. Some website elements that can increase conversion include adding positive client reviews, short lead forms, live chat, and strong CTAs (calls to action).',
          },
          {
            icon: <IconPeople />,
            title: 'Make it easy to work with you',
            subtitle:
              'If it’s not easy to contact you or buy health insurance products on your website, visitors will write you off in seconds and go to one of your competitors. A user-friendly website that lets people schedule consultations, pay online, and submit important documents increases your chances of converting and retaining clients.',
          },
        ],
      }}
      ctaMini={{
        title: 'Professional insurance website design can grow your business',
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
        title: 'Helping health insurance providers across America look professional online',
        textLeft: (
          <>
            <Text small>
              B12 has built thousands of websites for professional service firms, including many for
              health insurance providers. We know how to produce a beautiful, on-brand website that
              communicates your expertise, generates leads, and simplifies the process of working
              with clients online.
            </Text>
            <Text small>
              The B12 platform is great for small and growing insurance agencies, because our team
              of designers, copywriters, and SEO specialists manage your website project and help
              you launch within 30 days, so you’re able to focus on providing your audience with the
              best health insurance policies and processes. Take control of your online presence
              whenever you’d like, using our user-friendly DIY website editor.
            </Text>
            <Text small>
              The B12 platform was built to grow service businesses, not just launch a stagnant
              website. Your site includes every tool you need to develop your brand and sell
              services online, including online scheduling, payments and invoicing, contracts and
              eSignatures, and client intake forms.
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
        title: 'Frequently asked questions from<br/> health insurance firms',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Health Insurance Brokers"
    pageDescription="Launch a professional website by B12 that helps your agency simplify the client journey and sell health insurance online more efficiently."
  />
)
