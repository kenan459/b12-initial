import React from 'react'
import { theme } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { mq } from '@styles/theme'
import { useTranslation, Trans } from 'react-i18next'
import { getActiveLocales } from '@config/i18n'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextImage from '@components/hero/HeroTextImage'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import TextImage from '@components/text-image/TextImage'
import Title from '@components/title/Title'
import List from '@components/list/List'
import Accordion from '@components/accordion/Accordion'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import { Button } from '@components/button/Button'
import Grid from '@components/grid/Grid'
import TextIcon from '@components/text-icon/TextIcon'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'
import createMotionIcon from '@components/icon-motion/IconMotion'

// Images
import BubbleImage from '@components/bubble-image/BubbleImage'
import IconDesign from '@images/icons/design.inline.svg'
import IconPeople from '@images/icons/people.inline.svg'
import IconMobile from '@images/icons/mobile.inline.svg'
import IconAvatar from '@images/icons/avatar.inline.svg'
import IconAi from '@images/icons/ai-round.inline.svg'
import IconWrench from '@images/icons/wrench-round.inline.svg'
import IconThemes from '@images/icons/themes-round.inline.svg'

// Partials
import SectionCta from '@partials/section-cta/SectionCta'

// Data
const websiteEditorFAQ = [
  {
    question: 'How fast can I create a website with B12?',
    answer: (
      <>
        <p>
          Powered by AI, B12 can create your free website in seconds. Answer a few questions about
          your business and a draft site will be created with copy and imagery fit for your industry
          and the details you share.
        </p>
        <p>
          Using your website draft as a starting point, you can then use the B12 Editor to customize
          your site and launch it within an hour. The changes you make in the left panel appear in
          real time on the right within the section or page you're updating.
        </p>
      </>
    ),
  },
  {
    question: 'Does B12 offer web hosting, and can I get a custom domain?',
    answer: (
      <p>
        Yes! B12 can help you secure a custom domain and includes web hosting. If you don't need a
        custom domain, the free version of the B12 website builder provides you with a B12-branded
        subdomain. But if you want a more professional business website, we suggest a custom domain,
        which the team at B12 can help you secure.
      </p>
    ),
  },
  {
    question: 'Are B12 sites secure?',
    answer: (
      <p>
        Yes! B12 websites follow the latest security practices. We go beyond providing a SSL (secure
        sockets layer) certificate to ensure all sites have a TLS (transport layer security)
        certificate. The successor protocol to SSL, TLS is an improved version of SSL and is known
        to be more secure.
      </p>
    ),
  },
  {
    question: 'Does B12 support third-party integrations?',
    answer: (
      <p>
        Yes! B12 integrates with third-party applications, software, and business solutions. Here is
        a <a href="https://www.b12.io/integrations">list</a> of some of our most popular
        integrations. If you want to use an integration that isn’t listed, feel free to contact us
        at <a href="mailto:hello@b12.io">hello@b12.io</a> and we’ll let you know if integration is
        possible.
      </p>
    ),
  },
  {
    question: 'Can I invite someone else to edit my site?',
    answer: (
      <p>
        You can invite your team members from directly within B12. They’ll get an email invite to
        their inbox, with steps to set up their account. You can customize what each team member can
        access and make adjustments later on in just a few clicks. Beyond making website updates,
        you can also give collaborators access to manage their client forms, communication history,
        documents, scheduling, and payments.
      </p>
    ),
  },
  {
    question: 'Does B12 offer tools to help me engage website visitors?',
    answer: (
      <>
        <p>
          Absolutely, B12 is an all-in-one platform to help you attract, win, and serve your clients
          online. The <a href="https://www.b12.io/ai-website-builder/">AI website builder</a> lets
          you create a website with all the ingredients and client-facing functionality to make the
          experience with your site more professional and engaging. B12 also includes powerful tools
          like contact forms, appointment scheduling, email marketing, and on-page conversion tools
          like banners and pop-ups. Many of these tools are automatically part of your website
          draft, and others can be added in one click.
        </p>
        <p>
          With design and tools that help your business organize and promote your services, visitors
          will understand at a glance what you offer and be able to learn more or purchase, without
          unnecessary back and forth. You'll connect with more leads, secure new clients faster, and
          get more time back in your day to do the work you love.
        </p>
      </>
    ),
  },
]

// Styles
const IconAiStyles = `
  top: -35px;
  right: 20%;


  ${mq['md']} {
    right: 20%;
  }

  svg {
    width: 50px;
    height: 50px;

    ${mq['md']} {
      width: 74px;
      height: 74px;
    }
  }
`

const IconThemesStyles = `
  bottom: 40%;
  right: 25px;

  ${mq['md']} {
    bottom: 35%;
    right: 65px;
  }

  svg  {
    width: 35px;
    height: 35px;

    ${mq['lg']} {
      width: 55px;
      height: 55px;
    }
  }
`

const IconAiStylesSmall = `
  right: -10px;
  bottom: 18%;


  ${mq['md']} {
    right: 20px;
    bottom: 80px
  }

  svg {
    width: 50px;
    height: 50px;

    ${mq['lg']} {
      width: 74px;
      height: 74px;
    }
  }
`

const IconWrenchStyles = `
  top: 20px;
  right: 5%;


  ${mq['md']} {
    right: 10%;
  }

  svg {
    width: 70px;
    height: 70px;

    ${mq['md']} {
      width: 107px;
      height: 107px;
    }
  }
`

export const WebsiteEditorPageLayout = ({ lang }) => {
  const { t } = useTranslation(['website-editor'], { lng: lang })

  const benefits = [
    {
      title: t('Tweak the design any time'),
      description: t(
        'Choose from a library of themes, color palettes, and fonts to create a beautiful site that conveys credibility and impresses visitors. Add additional customization yourself or with our help. With B12, updates that used to take days are done in seconds.'
      ),
      icon: <IconDesign />,
    },
    {
      title: t('Manage all aspects of your online presence'),
      description: t(
        'Have control over more than your website. Our editor centralizes your contacts, appointments, documents, forms, invoices, and payments. Your website draft automatically includes key tools, and you can always add more in one click.'
      ),
      icon: <IconAvatar />,
    },
    {
      title: t('Make changes from anywhere'),
      description: t(
        'You should have the ability to update your website any place, any time. Log in to B12 from your desktop or mobile device to manage site changes, appointments, payments, documents, and more.'
      ),
      icon: <IconMobile />,
    },
    {
      title: t('Get help from experts'),
      description: t(
        'Don’t want to make edits yourself or need a little more guidance? B12’s team of experts are readily available to help improve your website copy, design, and SEO.'
      ),
      icon: <IconPeople />,
    },
  ]

  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title={t('The easiest way to edit your website')}
        text={t(
          'The AI-powered B12 Editor is intuitive enough for anyone to update their online presence without any coding or design skills. Customize it yourself or have B12 experts do it for you.'
        )}
        ctaAsButton
        imageBorderRadius
        ctaText={t('Start for free', { ns: 'common' })}
        ctaUrl="https://b12.io/signup/"
        image={
          <>
            <StaticImage
              src="../../images/easiest-way-to-edit.png"
              className="hero-image-desktop"
              alt="The easiest way to edit your website"
              width={750}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              className="hero-image-mobile"
              src="../../images/easiest-way-to-edit.png"
              alt="The easiest way to edit your website"
              width={420}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            {createMotionIcon({
              customStyles: IconAiStyles,
              icon: <IconAi />,
              transition: { delay: 0.8 },
            })}
            {createMotionIcon({
              customStyles: IconWrenchStyles,
              icon: <IconWrench />,
              transition: { delay: 1.2 },
            })}
          </>
        }
        secondaryImage={
          <>
            <StaticImage
              src="../../images/editor-secondary-image.png"
              className="hero-image-desktop-secondary"
              alt="The easiest way to edit your website"
              width={385}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              src="../../images/editor-secondary-image.png"
              className="hero-image-tablet-secondary"
              alt="The easiest way to edit your website"
              width={240}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              src="../../images/editor-secondary-image.png"
              className="hero-image-mobile-secondary"
              alt="The easiest way to edit your website"
              width={120}
              loading="eager"
              quality={100}
              placeholder="none"
            />
          </>
        }
      />
      <SectionNext>
        <List>
          <TextImage
            title={t('Update in just a few clicks')}
            text={t(
              'Answer a few questions to see your website draft in seconds, complete with customizable industry-specific images and copy. Use the editor to quickly refine your layout, images, fonts, and content. Click on the element you want to change and preview updates in real time.'
            )}
            linkUrl="https://b12.io/signup/"
            linkText={t('Start for free', { ns: 'common' })}
            image={
              <BubbleImage
                type={3}
                align="right"
                image={
                  <>
                    <StaticImage
                      className="bubble-image-desktop"
                      src="../../images/update-in-few-clicks.jpeg"
                      alt="Update in just a few clicks"
                      placeholder="blurred"
                      width={400}
                    />
                    <StaticImage
                      className="bubble-image-mobile"
                      src="../../images/update-in-few-clicks.jpeg"
                      alt="Update in just a few clicks"
                      placeholder="blurred"
                      width={320}
                      quality={80}
                    />
                  </>
                }
                imageSecondary={
                  <StaticImage
                    src="../../images/style-pane.png"
                    alt="Strengthen relationships with every interaction"
                    placeholder="blurred"
                    width={212}
                    quality={60}
                  />
                }
              />
            }
            reversed
          />
          <TextImage
            title={t('Instantly add new pages')}
            text={
              <Trans t={t}>
                <p>
                  Generate full-length drafts of web pages, blog posts, and services in under a
                  minute using our <Link to="/ai-assist">AI Assist tool</Link>. Search engine
                  optimization and text snippets are created for you. All you have to do is review
                  and edit before publishing.
                </p>
              </Trans>
            }
            linkUrl="https://b12.io/signup/"
            linkText={t('Start for free', { ns: 'common' })}
            image={
              <BubbleImage
                type={1}
                align="left"
                children={
                  <>
                    {createMotionIcon({
                      customStyles: IconThemesStyles,
                      icon: <IconThemes />,
                      transition: { delay: 0.8 },
                    })}
                    {createMotionIcon({
                      customStyles: IconAiStylesSmall,
                      icon: <IconAi />,
                      transition: { delay: 1.2 },
                    })}
                  </>
                }
                image={
                  <>
                    <StaticImage
                      className="bubble-image-desktop"
                      src="../../images/instantly-add-pages.jpeg"
                      alt="Instantly add new pages"
                      placeholder="blurred"
                      width={420}
                      quality={80}
                    />
                    <StaticImage
                      className="bubble-image-mobile"
                      src="../../images/instantly-add-pages.jpeg"
                      alt="Instantly add new pages"
                      placeholder="blurred"
                      width={320}
                      quality={80}
                    />
                  </>
                }
                imageSecondary={
                  <>
                    <StaticImage
                      src="../../images/ai-assist.png"
                      alt="Instantly add new pages"
                      placeholder="blurred"
                      width={212}
                    />
                  </>
                }
              />
            }
          />
        </List>
      </SectionNext>

      <CtaSectionBanner>
        <Title as="h3" light align="center">
          {t('Ready to see what a B12 website can do for your business?')}
        </Title>
        <Button
          as="anchor"
          variant="primary"
          to="https://b12.io/signup"
          label={t('Start for free', { ns: 'common' })}
        />
      </CtaSectionBanner>

      <SectionNext>
        <Grid colsLg={2} colsMd={2} colsXl={2}>
          {benefits.map((item, idx) => (
            <TextIcon
              title={item.title}
              vertical
              icon={item.icon}
              text={item.description}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
      </SectionNext>

      <SuccessStoriesSlider
        filter={[
          'action-logistix',
          'envision-hr',
          'bell-group',
          'the-sandusky-group',
          'find-yourself-in-fashion',
        ]}
      />

      <CtaSectionBanner>
        <Title as="h3" light align="center">
          {t('See your new website in under a minute')}
        </Title>
        <Button
          as="anchor"
          variant="primary"
          to="https://b12.io/signup"
          label={t('Start for free', { ns: 'common' })}
        />
      </CtaSectionBanner>

      <SectionNext
        bg={theme.colors.brand.accentLightest}
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">{t('Frequently asked questions about the B12 Editor')}</Title>
        </SectionNextHeader>
        <Accordion items={websiteEditorFAQ} itemAsComponent />
      </SectionNext>
      <SectionCta
        title={t('The best AI website solution for busy business owners')}
        text={t(
          'Take the stress out of website building. In a few clicks, AI generates a site with all the features you need to attract, win, and serve your clients online.'
        )}
        ctaText={t('Start for free', { ns: 'common' })}
      />
    </LayoutMain>
  )
}

export const WebsiteEditorPageHead = ({ lang }) => {
  const { t } = useTranslation(['website-editor'], { lng: lang })

  return (
    <SEO
      pageTitle={t('Free website builder and editor')}
      pageDescription={t(
        'Easily create and edit a modern, user-friendly website with B12’s website builder for professional service providers.'
      )}
      lang={lang}
      hrefLang={getActiveLocales()}
      pagePath="/website-editor"
    />
  )
}
