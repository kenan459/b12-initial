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
import faq from '../../data/industry-hubs/faq-education-consultants.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Web design for education consultants',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your consulting business today',
      }}
      businessCard={{
        title: 'Attract more students and institutions through your education consultancy website',
        subtitle:
          'As an education consultant, you’re a trusted advisor to students, families, schools, and educational organizations.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/education-consultants/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              For each client, you tailor your message and services to best meet their needs. Does
              your website do the same for every visitor?
            </Text>

            <Text small>
              To make the right first impression and win new clients, your site should reflect the
              qualities that make you a great education consultant: excellent communication,
              well-organized, and constantly working to optimize processes. It should make it easy
              for your audience to learn more about your solutions and find resources to increase
              their chances of success.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title: 'Give clients easy access to contact, book appointments, and pay you online',
        subtitle:
          'The most successful consultants are flexible and disciplined, with great attention to detail.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/education-consultants/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              Your website should reflect these qualities by positioning you as the educational
              expert to hire and setting up a seamless client journey.
            </Text>
            <Text small>
              Keep website visitors coming back for more and increase online engagement by filling
              your site with powerful tools like intake forms, online scheduling, payments, and
              digital contracts. Whatever someone is trying to accomplish on your website, remove
              the friction and make it as convenient as possible. Your website may be about you —
              your talent, interests, and insights — but its purpose is to help your prospects and
              clients overcome challenges.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'Education consultant website best practices',
        image: (
          <StaticImage
            src="../../images/industry-hubs/consultants/education-consultants/3_desktop.png"
            alt="Education consultant website best practices"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Appealing design',
            subtitle:
              'Your website’s design is often your consulting firm’s first client touchpoint and how people perceive your brand. Impress visitors with an aesthetically pleasing, custom design. The visuals, content, and user experience should support converting your traffic to paying clients. ',
          },
          {
            icon: <IconRocket />,
            title: 'Valuable content',
            subtitle:
              'Place the most important information about your education consulting services above the fold on each web page. Throughout your site, link to high-value offerings like social proof, case studies, and webinars. Whether you’re trying to attract parents of young children, higher education administrators, or college students, tailor your website copy to their concerns and challenges.',
          },
          {
            icon: <IconWrench />,
            title: 'Lead generation tactics',
            subtitle:
              'Your website is where you present your vision and strategies to visitors, but just as importantly, it’s a lead generator to grow your business. Interactive conversion elements like website forms, content downloads, calls to action, and website pop-ups collect visitor information, keep them engaged, and push them down the sales funnel. Offer something of value, like a discount on their first tutoring session, in exchange for their email address.',
          },
          {
            icon: <IconPeople />,
            title: 'Client-focused workflows',
            subtitle:
              'Make every step of the client journey efficient and convenient by bringing more parts of your business online. Automating lower-value tasks like writing confirmation emails and duplicating invoices saves time and lets you focus on providing educational services. Make it simple for clients to sign documents, view and pay invoices, and schedule meetings with you in only a couple of steps, without leaving your site. ',
          },
        ],
      }}
      ctaMini={{
        title: 'Demonstrate your deep expertise with a custom website',
        text: 'Set your site up for free today',
      }}
      testimonials={{
        title: 'What do other business owners think about their B12 websites?',
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
        title: 'Enabling educational consultants to provide guidance and achieve growth online',
        textLeft: (
          <>
            <Text small>
              The education consulting market is expected to increase by $579.19 million between
              2020-2025, driven primarily by rising demand for customized learning. It’s exciting
              that there’s such a need for education consultants, but the increased competition puts
              pressure on you to make your consulting business stand out.
            </Text>
            <Text small>
              The best way to differentiate your brand and gain visibility with likely clients is to
              make your website as professional and powerful as possible. Place your mission
              statement front and center, and include specific wins you've helped educators,
              schools, students, and communities achieve.
            </Text>
            <Text small>
              It’s not easy to launch a credible, optimized website. Doing it on your own is
              time-consuming, expensive, and frustrating. Save yourself the trouble and remain
              focused on your clients by letting the professional web designers at B12 create one
              for you. Backed by AI, B12 experts ensure your website looks the way you want it to,
              makes a great first impression on visitors, and engages your clients for repeat
              business.
            </Text>
          </>
        ),
        textRight: (
          <>
            <Text>
              We’ve helped thousands of service professionals and consultants launch their dream
              websites and grow their businesses. Start the process for free today and publish your
              new site in 30 days or less, with all of the functionality you need to attract, win,
              and retain education consulting clients.
            </Text>
            <Text>Want to learn more about B12? Check out our reviews on</Text>
          </>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from<br/> education consultants',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Education Consultants"
    pageDescription="Make your consultancy stand out in the growing education consulting market with a professionally designed website and powerful online business tools from B12."
  />
)
