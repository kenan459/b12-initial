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
import faq from '../../data/industry-hubs/faq-sales-consultants.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Web design for sales consultants',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your consulting business today',
      }}
      businessCard={{
        title: 'Market your sales consulting services with a great website',
        subtitle:
          'The U.S. is the largest consulting services market in the world, and whether you’re an independent sales consultant or you manage a larger firm, competition is stiff and clients are discerning.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/sales-consultants/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              One way to gain an advantage is to create a website that showcases your knowledge,
              provides real value to visitors, and makes it easy to work with you.
            </Text>

            <Text small>
              Show prospects and clients that you're skilled at crafting compelling sales pitches,
              building new relationships on their behalf, maintaining sales, and researching their
              competition. A website that’s visible to your target audience and effectively packages
              and sells your services gives you a greater chance of building a profitable sales
              consulting business.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Make it easy for consulting clients to find, work with, and pay you ',
        subtitle: 'Great sales consultants are people-focused.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/sales-consultants/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              They enjoy talking to new people, making cold calls, and converting those clients.
              Shouldn’t your sales consulting website do the same? It may be your first chance to
              instill confidence in new prospects and clients.
            </Text>
            <Text small>
              A valuable sales consulting website will help you build brand awareness, find new
              opportunities, and provide better service to clients. Optimize your website for search
              terms related to your services and location, then provide visitors with a smooth
              experience, so they move efficiently toward conversion. From submitting the contact
              form on your site to scheduling and paying for their first consultation, your website
              should be convenient and client-centric.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'Website essentials to grow your sales<br/> consulting firm',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/sales-consultants/3_desktop.png"
            alt="Website essentials to grow your sales consulting firm"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Clean design',
            subtitle:
              '38% of people will leave a website if the layout is unattractive. Your sales consultant website needs to look modern, load instantly, and enhance the user experience. Keep the design elements simple and sleek — don’t use too many bold colors, large images, or heavy text blocks. A design that is easy on the eyes will keep visitors on it longer.',
          },
          {
            icon: <IconRocket />,
            title: 'Simplified navigation',
            subtitle:
              'The most important information about your consulting firm should be prominently visible, and getting from page to page should be fast.  Poor navigation can impede your website’s client journey, and most visitors won’t take the time to explore every page of your site. 76% of people say the most vital factor in web design is being able to easily find what they want. Focus on making your navigation smooth and organized, and reduce extra clicks or unnecessary steps.',
          },
          {
            icon: <IconWrench />,
            title: 'Lead generation efforts',
            subtitle:
              'Yes, your website should look and read great, but it’s not just a digital brochure, it’s capable of more. Adding interactive lead generation tactics like website forms, strong, visible calls to action, and exit pop-ups to join your email list or download an ebook can help your sell more consulting services without any extra effort.',
          },
          {
            icon: <IconPeople />,
            title: 'Enhance the client experience',
            subtitle:
              'Elevating your website with powerful functionality like the ability to schedule appointments, sign contracts, and submit payments online sets your sales consulting firm apart from other businesses stuck using more traditional methods. Putting more of your client experience online offers your audience flexibility, keeps you organized, and adds efficiency to your workflows. ',
          },
        ],
      }}
      ctaMini={{
        title: 'Drive tangible results for your sales consultancy with a custom website',
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
        title: 'Helping sales consultants package and sell their expertise',
        textLeft: (
          <>
            <Text small>
              All day you help entrepreneurs and companies improve their selling strategies, but
              what about you? How can you do a better job of selling yourself as a sales consultant
              online?
            </Text>
            <Text small>
              Focus on building a website that proves to prospective clients that you have the
              industry knowledge, relevant experience, and valuable contacts to help them increase
              their revenue and streamline their sales funnel.
            </Text>
            <Text small>
              To help you sell more with less effort, B12 is the most effective website builder for
              service providers, including sales consultants. Efficient AI design, supported by
              experienced web designers, copywriters, and SEO specialists ensures your site makes a
              great first impression and simplifies the conversion process.
            </Text>
            <Text small>
              After building thousands of websites, we're experts at helping consultants communicate
              their value proposition, link their services to prospective clients' pain points, and
              gain a competitive advantage over other firms. Start the website launch process with
              B12 today and go live in 30 days or less, with all of the tools you need to reach,
              convert, and retain clients.
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
        title: 'Frequently asked questions from<br/> sales consultants',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Sales Consultants"
    pageDescription="A professionally designed sales consulting website can convince prospective clients that you’re the expert who can help them improve their sales funnel and increase revenue."
  />
)
