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
import faq from '../../data/industry-hubs/faq-immigration-lawyers.yaml'

const TaxLawyersChild = () => {
  return (
    <IndustryHubsChildLayout
      hero={{
        title: 'Website design for immigration lawyers',
        ctaLink: 'https://b12.io/signup',
        ctaText: 'Start a free website for your law firm today',
      }}
      businessCard={{
        title: 'Reach immigration law clients from all over the world',
        subtitle:
          'As an immigration attorney, every corner of your website must convey professionalism.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/immigration-lawyers/1_websites.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="constrained"
          />
        ),
        text: (
          <>
            <Text small>
              Families and individuals navigating the complex immigration system are looking for an
              expert to put them at ease and lead them through the next steps of their immigration
              case. Investing in the quality of your site establishes credibility with potential
              clients from all over the world and increases conversions for your firm.
            </Text>

            <Text small>
              A basic website isn’t going to set you apart against the competitive landscape of
              immigration attorneys. You need top-notch web design, content, and features that
              combine to offer your prospects and clients a seamless online experience that
              communicates your value, offers education on the immigration process, and compels them
              to work with you.
            </Text>
          </>
        ),
      }}
      driveLeads={{
        title:
          'Establish credibility with potential clients who need citizenship and immigration services',
        subtitle:
          'Your website is how most prospective clients find you and contact you. For people facing immigration issues, there’s no time to waste, and communication is crucial.',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/immigration-lawyers/2_image.png"
            alt="Reliable, secure, and fully supported"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        text: (
          <>
            <Text small>
              Your site must simplify every step and leave no room for ambiguity. Attention to
              detail is key in immigration applications and USCIS forms, which is why it’s so
              important that your website demonstrates your rigor. Every page, form, and scheduling
              link must work perfectly.
            </Text>
            <Text small>
              The right website platform will give you everything you need to maintain a
              high-quality site, reach more clients, engage them toward conversion, and nurture
              those relationships over time over time.
            </Text>
            <Text small>
              Once someone hires you, ensure your site has all of the functionality that makes it
              quick and easy to get in touch, submit important documents, schedule their next
              appointment, and submit payment for your services — all from your website.
            </Text>
          </>
        ),
      }}
      websiteNeeds={{
        title: 'What every immigration lawyer website needs',
        image: (
          <StaticImage
            src="../../images/industry-hubs/lawyers/immigration-lawyers/3_desktop.png"
            alt="What every immigration lawyer website needs"
            placeholder="blurred"
            layout="fullWidth"
          />
        ),
        list: [
          {
            icon: <IconDesign />,
            title: 'Intuitive web design',
            subtitle:
              'Choose a balanced web design layout that visitors can easily navigate to find what they’re looking for. People seeking immigration legal help are stressed, and the last thing they need is another complication. Make your site as user-friendly as possible. ',
          },
          {
            icon: <IconRocket />,
            title: 'Compelling content',
            subtitle:
              'Communicate clearly and succinctly the services and benefits that your firm offers. One of the most effective ways to do this is by highlighting positive experiences that previous or existing clients have had, usually in the form of testimonials.',
          },
          {
            icon: <IconWrench />,
            title: 'Conversion-oriented tools',
            subtitle:
              'Features and functionality like contact forms, announcement banners, and pop-ups help you convince visitors to learn more about your services and engage with your practice, moving them closer to becoming a client.',
          },
          {
            icon: <IconPeople />,
            title: 'A client-centric experience',
            subtitle:
              'Concentrate on making your website well-organized and enjoyable for clients to use repeatedly. Every step of working with your immigration law firm should be simple, from signing a digital contract to booking a follow-up appointment and submitting online payments.',
          },
        ],
      }}
      ctaMini={{
        title: 'Good website design can help you grow your immigration law practice fast',
        text: 'Set your site up for free today',
      }}
      testimonials={{
        title: 'What do other lawyers think about B12’s website design for law firms?',
        list: [
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
            reversed: true,
            name: 'Ron Matten',
            position: 'Founder of Matten Law',
            quote:
              'We have added a partner and doubled the size of our team. More recently, [B12] redesigned our website to incorporate video into the homepage and was extremely helpful when we decided to refresh our brand. They made the process very easy to make updates while staying consistent with our prior branding. The site [now] helps better manage client leads by funneling to a single point of contact.',
            link: '/case_studies/matten-law',
            linkText: 'Read Ron Matten’s story',
            customerSince: 'B12 customer Since 2018',
          },
        ],
      }}
      help={{
        title: 'Helping immigration attorneys exude quality and professionalism online',
        textLeft: (
          <>
            <Text small>
              B12 builds best-in-class websites for immigration law firms that meet client
              expectations and fulfill industry best practices. Our team of designers, copywriters,
              and SEO specialists take the lead on your website project while giving you the
              flexibility and option to leave feedback at any time. Make edits to your site whenever
              you’d like with B12’s intuitive website editor.
            </Text>
            <Text small>
              Our platform is the best option for service businesses working to scale because it
              frees up the time you’d otherwise spend designing a website to instead focus on
              helping your clients. B12 experts have created hundreds of law firm websites that
              highlight what makes each practice unique and valuable to clients.
            </Text>
          </>
        ),
        textRight: (
          <Text>
            Enabling our customers to grow their businesses online has earned us hundreds of stellar
            reviews on top review websites, including
          </Text>
        ),
      }}
      faq={{
        title: 'Frequently asked questions from<br/> immigration attorneys',
        items: faq,
      }}
    />
  )
}

export default TaxLawyersChild

export const Head = () => (
  <SEO
    pageTitle="Web Design and Websites For Immigration Lawyers"
    pageDescription="A professionally designed and optimized immigration law firm website by B12 helps you reach new clients and grow your firm."
  />
)
