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
import faq from '../../data/industry-hubs/faq-bankruptcy-lawyers.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Website design for bankruptcy lawyers',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your bankruptcy practice today',
      }}
      businessCard={{
        title: 'Your bankruptcy law firm’s website must impress prospective clients',
        subtitle: 'A bare-bones landing page isn’t enough for your law practice anymore.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/bankruptcy-lawyers/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              The bankruptcy process is overwhelming. People facing an uncertain financial future
              are looking for a professional with the expertise to guide them toward the best
              outcome. To put prospective clients at ease, your firm's website must convey
              credibility on every page, from its font choice to its navigation structure and client
              tools.
            </Text>

            <Text small>
              Beyond looking professional online, your website can drive long-term growth for your
              firm and support your marketing goals. Optimizing the site for search engines allows
              you to consistently reach new clients, while conversion optimization helps you win new
              business.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Give clients one place to submit forms, sign contracts, and pay for services',
        subtitle:
          'Bankruptcy often results from unexpected stress caused by job loss or overwhelming medical bills. In these situations, the last thing a website visitor needs is any complication or delay in trying to contact you and use your services.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/bankruptcy-lawyers/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              A high-quality bankruptcy lawyer website simplifies the visitor journey so that every
              page’s copy, design, and calls to action allow them to find what they’re looking for
              in seconds. Contact forms are intuitively located, the intake process is streamlined,
              and visitors can schedule a consultation in only a couple of clicks.
            </Text>
            <Text small>
              An effective website platform will provide every tool you need to show up in potential
              clients' search results, make a positive first impression when they reach your site,
              and guide them toward conversion.
            </Text>
            <Text small>
              Once someone hires you, your site has all of the functionality needed for contracts
              and eSignatures, online scheduling, invoicing and payments, and more.
            </Text>
            <Text small>
              During slower periods, it should do more of the work for you to gain clients and
              simplify the intake process. The right website platform will ensure you have every
              tool you need to show up in potential clients' search results, make a great first
              impression when they reach your site, and carefully nurture them toward conversion.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'What every bankruptcy lawyer website needs',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/bankruptcy-lawyers/3_desktop.png"
            alt="What every tax lawyer website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Attractive website design',
            subtitle:
              'A modern-looking website includes high-quality imagery and design elements. Cohesive branding and an intuitive layout can immediately build trust and guide website visitors to work with your firm.',
          },
          {
            icon: <IconRocket />,
            title: 'Professionalism and authority',
            subtitle:
              'Your website needs to immediately convey your expertise and high ethical standards. The structure and design of your site should emphasize clear calls to action, important accreditations, and testimonials from satisfied clients. ',
          },
          {
            icon: <IconWrench />,
            title: 'Lead generation tools',
            subtitle:
              'Equipping your website with proven lead generation tactics, including forms, banners, and pop-ups, allows you to capture more leads with less effort and drive expansion for your firm.',
          },
          {
            icon: <IconPeople />,
            title: 'Built-in client engagement',
            subtitle:
              'The best website solutions offer client engagement directly on the platform. Tools like eSignatures, email marketing, and online scheduling allow you to easily reach, retain, and get paid by your bankruptcy law clients.',
          },
        ],
      }}
      ctaMini={{
        title: 'Good website design can help you grow your bankruptcy law practice fast ',
        text: 'Set your site up for free today',
      }}
      testimonials={{
        title: 'What do other attorneys think about B12’s website design for law firms?',
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
                src="../../data/testimonials/images/julliana-reyes.jpg"
                alt="Julliana Reyes"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            reversed: true,
            name: 'Julliana Reyes',
            position: 'Founder of Bailey Reyes Law Firm',
            quote:
              'We get a lot of compliments on our website. Many potential clients are very impressed by our site, and often say it looks expensive.',
            // link: '#somewhere',
            // linkText: 'Read Julliana Reyes’ story',
            customerSince: 'B12 customer Since 2018',
          },
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/jia_junaid.jpg"
                alt="Jia Junaid"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            name: 'Jia Junaid',
            position: 'Founder of Atlas Law',
            quote:
              'I love that B12 prompts me to update certain [website] features and add integrations like online scheduling to increase efficiency in my law firm. These recommendations are often things that I would have never considered but have proved to be incredibly useful.',
            link: '/case_studies/atlas-law',
            linkText: 'Read Jia Junaid’s story',
            customerSince: 'B12 customer Since 2018',
          },
        ],
      }}
      help={{
        title: 'Helping bankruptcy attorneys across America build professional websites',
        textLeft: (
          <>
            <Text small>
              B12 builds custom websites for bankruptcy law firms that meet industry best practices
              and impress website visitors. Our team manages your website project from end to end,
              working based on your preferences, feedback, and what you like about other bankruptcy
              law websites. Our intuitive website editor lets you log in and make quick changes in
              seconds, so you have as much control as you want.
            </Text>
            <Text small>
              The B12 platform was built specifically for service businesses, and our experts have
              built hundreds of law firm websites that showcase a company's unique value and infuse
              it with all of the tools needed to convert website visitors to repeat clients.
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
        title: 'Frequently asked questions from<br/> bankruptcy attorneys',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Bankruptcy Lawyers"
    pageDescription="A B12 bankruptcy law firm website designed by professionals allows you to reach new clients and more easily sell legal services."
  />
)
