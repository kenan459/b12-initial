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
import faq from '../../data/industry-hubs/faq-tax-lawyers.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Website design for tax lawyers',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your law firm today',
      }}
      businessCard={{
        title: 'Your tax law firm’s website is more than just a digital business card ',
        subtitle: 'A bare-bones landing page isn’t enough for your law practice anymore.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/tax-lawyers/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              With the right design, content, and features, a website has the power to be your law
              firm’s #1 sales tool that generates leads, converts clients, and keeps them coming
              back for your legal services. Above all else, your website must appear credible. With
              tax law, people’s livelihoods are at stake, which is why it’s vital that you build
              trust with prospects and clients from the second they land on your site.
            </Text>

            <Text small>
              Your tax law firm’s website should look professional, showcase the value of your
              practice area, and have robust functionality that allows clients to work with you in
              the way that’s convenient for them.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Drive leads and engage clients before tax season starts',
        subtitle:
          "Even though a tax attorney's busy season is generally from February to April, in reality, your website needs to be updated, optimized, and ready to support clients year-round. ",
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/tax-lawyers/2_image.png"
            alt="Drive leads and engage clients before tax season starts"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              During slower periods, it should do more of the work for you to gain clients and
              simplify the intake process. The right website platform will ensure you have every
              tool you need to show up in potential clients' search results, make a great first
              impression when they reach your site, and carefully nurture them toward conversion.
            </Text>
            <Text small>
              Once someone hires you, your site should include functionality that makes it simple to
              contact you, submit important tax documents, schedule their next appointment, and
              submit payments — all without leaving your website.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'What every tax lawyer website needs',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/tax-lawyers/3_desktop.png"
            alt="What every tax lawyer website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Professional images and modern design',
            subtitle:
              'A modern-looking website includes high-quality imagery and design elements. Cohesive branding and an intuitive layout can immediately build trust and guide website visitors to take the next step with your firm.',
          },
          {
            icon: <IconRocket />,
            title: 'Unique branding and value proposition',
            subtitle:
              'Every website needs a clear value proposition that accurately represents your unique tax law expertise and services. Your brand identity should immediately impact visitors through design, content, and images that tell your specific story.',
          },
          {
            icon: <IconWrench />,
            title: 'Tools for lead generation',
            subtitle:
              'Infusing your website with highly effective lead generation tools, including forms, banners, and pop-ups, allows you to capture more leads with less effort and fuel ongoing growth for your firm.',
          },
          {
            icon: <IconPeople />,
            title: 'Ability to easily engage clients',
            subtitle:
              'The right website platform will double as a ​client engagement platform that helps you easily reach, retain, and get paid by your tax law clients. Tools like eSignatures, email automation, and online scheduling streamline the steps it takes to service your clientele.',
          },
        ],
      }}
      ctaMini={{
        title: 'Good law firm website design can help you grow your business fast',
        text: 'Set your site up for free today',
      }}
      testimonials={{
        title: 'What do other lawyers think about B12’s website design for law firms?',
        list: [
          {
            image: (
              <StaticImage
                src="../../data/testimonials/images/ron-matten.png"
                alt="Ron Matten"
                placeholder="blurred"
                width={420}
                height={420}
                quality={80}
                style={{ borderRadius: '16px' }}
              />
            ),
            name: 'Ron Matten',
            position: 'Founder of Matten Law',
            quote:
              'We have added a partner and doubled the size of our team. More recently, [B12] redesigned our website to incorporate video into the homepage and was extremely helpful when we decided to refresh our brand. They made the process very easy to make updates while staying consistent with our prior branding. The site [now] helps better manage client leads by funneling to a single point of contact.',
            link: '/case_studies/matten-law',
            linkText: 'Read Ron Matten’s story',
            customerSince: 'B12 customer Since 2018',
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
        title: 'Helping tax attorneys across America build professional websites',
        textLeft: (
          <>
            <Text small>
              B12 specializes in building custom websites for tax law firms that meet industry best
              practices and make the best first impression on every potential client. Our team
              manages your website project entirely, but is directed by your preferences, feedback,
              and what you like about other tax law websites. Thanks to the ability to make quick
              updates using our intuitive website editor, you can have as much control as you want.
            </Text>
            <Text small>
              The B12 platform was built specifically for service-based businesses, and our experts
              have built hundreds of law firm websites that showcase a company's unique value
              proposition and equip it with all of the tools needed to encourage website visitors to
              become clients.
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
        title: 'Frequently asked questions from attorneys',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Tax Lawyers"
    pageDescription="Building a professional-quality tax law firm website allows you to find new clients and encourage them to hire you. Work with B12 to launch yours in 30 days."
  />
)
