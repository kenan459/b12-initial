import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import { Section } from '@components/section'
import HeroTextImage from '@components/hero/HeroTextImage'
import { Button } from '@components/button/Button'
import TextIcon from '@components/text-icon/TextIcon'
import Grid from '@components/grid/Grid'

// Images
import BusinessInfo from '@images/icons/business_info.inline.svg'
import Quote from '@images/icons/quote.inline.svg'
import Bell from '@images/icons/bell.inline.svg'
import IconHeart from '@images/icons/heart.inline.svg'
import Loudspeaker from '@images/icons/loudspeaker.inline.svg'
import IconParagraphStart from '@images/icons/copywriting.inline.svg'
import Email from '@images/icons/email.inline.svg'

const tools = [
  {
    icon: <Quote />,
    title: 'Slogan generator',
    subtitle: 'Find catchy slogan ideas that set your business apart.',
    link: 'https://www.b12.io/tools/slogan-generator',
    btnTitle: 'Generate slogans',
  },
  {
    icon: <IconParagraphStart />,
    title: 'Blog outline generator',
    subtitle: 'Bring your blog ideas to life in no time with a professional article outline.',
    link: 'https://www.b12.io/tools/blog-post-outline-generator',
    btnTitle: 'Create my outline',
  },
  {
    icon: <BusinessInfo />,
    title: 'Brand name generator',
    subtitle: 'Discover creative business names that fit your vision and entice potential clients.',
    link: 'https://www.b12.io/tools/brand-name-generator',
    btnTitle: 'Brainstorm business names',
  },
  {
    icon: <Email />,
    title: 'Email template generator',
    subtitle: "Create engaging emails that stand out in a contact's inbox.",
    link: 'https://www.b12.io/tools/email-template-generator',
    btnTitle: 'Draft my email',
  },
  {
    icon: <Bell />,
    title: 'Service and product description generator',
    subtitle: 'Create persuasive service and product descriptions for your website.',
    link: 'https://www.b12.io/tools/product-service-description-generator',
    btnTitle: 'Write my description',
  },
  {
    icon: <IconHeart />,
    title: 'Social media posts and captions generator',
    subtitle: 'Get creative ideas for Facebook, LinkedIn, and Instagram posts and captions.',
    link: 'https://www.b12.io/tools/social-media-post-caption-generator',
    btnTitle: 'Create my caption',
  },
  {
    icon: <Loudspeaker />,
    title: 'Call to action generator',
    subtitle: 'Generate compelling calls to action that boost your target audience’s engagement.',
    link: 'https://www.b12.io/tools/call-to-action-generator',
    btnTitle: 'Generate calls to action',
  },
]

const Tools = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="sm"
        image={
          <StaticImage
            src="../images/strengthen-relationships.jpg"
            alt="Free business tools"
            placeholder="blurred"
            width={420}
            quality={80}
            style={{ borderRadius: '16px' }}
          />
        }
        title="Free business tools"
        text="Take your business to the next level and succeed online with these powerful free tools."
        cta={
          <Button
            as="anchor"
            label="Explore tools"
            to="#tools-list"
            variant="primary"
            size="small"
          />
        }
      />
      <Section id="tools-list" padding="md" borderBottom>
        <Grid>
          {tools.map((item, idx) => (
            <TextIcon
              vertical
              title={item.title}
              icon={item.icon}
              text={item.subtitle}
              key={`list-item-${idx}`}
              url={item.link}
              ctaText={item.btnTitle}
            />
          ))}
        </Grid>
      </Section>
      <HeroTextImage
        padding="sm"
        image={
          <StaticImage
            src="../images/skip-diy.jpg"
            alt="See a draft of your new website for free"
            placeholder="blurred"
            width={420}
            quality={80}
            style={{ borderRadius: '16px' }}
          />
        }
        title="See a draft of your new website for free"
        text="Join the tens of thousands of professionals who’ve found success with a B12 website, client engagement, blogging, and more!"
        cta={
          <Button
            as="anchor"
            label="Try it now"
            to="https://b12.io/signup"
            variant="primary"
            size="small"
          />
        }
      />
    </LayoutMain>
  )
}

export default Tools

export const Head = () => (
  <SEO
    pageTitle="Free tools to transform your business to succeed online"
    pageDescription="Everything you need to take your business to the next level"
    prefixTitle
  />
)
