import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { mq } from '@styles/theme'
import { useTranslation } from 'react-i18next'

import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import { Section } from '@components/section'
import TextImage from '@components/text-image/TextImage'
import BubbleImage from '@components/bubble-image/BubbleImage'
import createMotionIcon from '@components/icon-motion/IconMotion'

// Images
import IconAi from '@images/icons/ai-round.inline.svg'
import IconSend from '@images/icons/icon-send.inline.svg'
import IconEsignature from '@images/icons/esignature-icon.inline.svg'
import IconInvoice from '@images/icons/icon-invoice.inline.svg'

// Types
type ListItemProps = {
  image?: React.ReactNode
  title: string
  text: string
  linkText: string
  linkUrl: string
  reversed?: boolean
}

// Styles
export const StyledSection = styled(Section)`
  padding: 0 0 48px;

  ${mq['sm']} {
    padding: 0 0 80px;
  }

  ${mq['lg']} {
    padding: 0 0 80px;
  }
`

export const StyledTitle = styled(Title)`
  ${mq['lg']} {
    width: 50%;
  }
`

export const StyledSubtitle = styled(Subtitle)`
  margin-top: 16px;

  ${mq['sm']} {
    width: 80%;
    margin-top: 24px;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 48px;

  ${mq['md']} {
    margin-top: 128px;
    gap: 64px;
  }
`

const IconAiStyles = `
  top: -10px;
  right: -10px;

  ${mq['md']} {
    top: 30px;
    right: 20px;
  }

  svg {
    width: 70px;
    height: 70px;
  }
`

export const IconEsignatureStyles = `
  left: -10px;
  bottom: 10px;

  ${mq['md']} {
    left: 0;
    bottom: 60px;
  }

  svg {
    width: 70px;
    width: 70px;

    ${mq['md']} {
      width: 90px;
      height: 90px;
    }
  }
`

export const IconSendStyles = `
  top: 35px;
  right: 85px;

  ${mq['md']} {
    top: 80px;
    right: 90px;
  }

  ${mq['lg']} {
    top: 80px;
    right: 160px;
  }

  svg {
    width: 40px;
    height: 40px;

    ${mq['md']} {
      width: 65px;
      height: 65px;
    }
  }
`

export const IconInvoiceStyles = `
  top: 70px;
  right: 50px;

  ${mq['md']} {
    top: 130px;
    right: 30px;

    svg {
      width: 80px;
      height: 80px;
    }
  }

  ${mq['lg']} {
    top: 130px;
    right: 100px;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`

const data: ListItemProps[] = [
  {
    title: 'Save time with help from AI and experts',
    text: 'B12’s AI-powered platform drafts your industry-specific site in seconds. Unlike other website builders, you have the flexibility to refine it yourself or get help from our design and copywriting experts. Spend less time building your site and more time running your business.',
    linkText: 'Learn more about B12 websites',
    linkUrl: '/websites',
    image: (
      <BubbleImage
        children={createMotionIcon({
          customStyles: IconAiStyles,
          icon: <IconAi />,
          transition: { delay: 0.8 },
        })}
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/save-time-with-ai.jpeg"
              alt="Skip the DIY Site Builders"
              placeholder="blurred"
              width={420}
              quality={80}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/save-time-with-ai.jpeg"
              alt="Skip the DIY Site Builders"
              placeholder="blurred"
              width={250}
              quality={80}
            />
          </>
        }
        imageSecondary={
          <StaticImage
            src="../../images/ai-assist.png"
            alt="Skip the DIY Site Builders"
            placeholder="blurred"
            width={230}
            quality={80}
          />
        }
      />
    ),
  },
  {
    reversed: true,
    title: 'Elevate your online presence',
    text: 'You only get one first impression. Make the most of it with stunning web design, effective content, cohesive branding, and industry-relevant imagery. Need an update? The B12 website builder makes maintenance simple, with AI that drafts new content in seconds.',
    linkText: 'Learn more about the B12 AI website builder',
    linkUrl: '/ai-website-builder/',
    image: (
      <BubbleImage
        type={2}
        align="right"
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/elevate-your-presence.jpeg"
              alt="A fully optimized online experience"
              placeholder="blurred"
              width={420}
              quality={80}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/elevate-your-presence.jpeg"
              alt="A fully optimized online experience"
              placeholder="blurred"
              width={250}
              quality={80}
            />
          </>
        }
        imageSecondary={
          <>
            <StaticImage
              src="../../images/built-in-tools-1.png"
              alt="Built in tools to grow your business"
              placeholder="blurred"
              width={190}
            />
            <StaticImage
              src="../../images/built-in-tools-2.png"
              alt="Built in tools to grow your business"
              placeholder="blurred"
              width={190}
            />
          </>
        }
      />
    ),
  },
  {
    title: 'Easily connect with leads and clients',
    text: 'B12’s AI website builder comes with sleek contact forms, online appointment scheduling, invoicing, and email marketing tools. Offer clear touchpoints for website visitors to connect with you and work with your business in just a few clicks.',
    linkText: 'Learn more about client engagement tools',
    linkUrl: '/client-engagement',
    image: (
      <BubbleImage
        type={3}
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/easily-connect.jpeg"
              alt="Built in tools to grow your business"
              placeholder="blurred"
              width={420}
              quality={80}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/easily-connect.jpeg"
              alt="Built in tools to grow your business"
              placeholder="blurred"
              width={250}
              quality={80}
            />
          </>
        }
        imageSecondary={
          <>
            <StaticImage
              src="../../images/client-engagement-screenshot.png"
              alt="Built in tools to grow your business"
              placeholder="blurred"
              width={230}
            />
          </>
        }
      />
    ),
  },
  {
    reversed: true,
    title: 'Run your business seamlessly',
    text: 'AI instantly sets up your business with integrated contact management, email marketing, and contracts with eSignatures. B12 lets you generate marketing email drafts in seconds, respond to leads within the platform, and organize all contact data from a single dashboard.',
    linkText: 'Learn more about online business tools',
    linkUrl: '/product-overview',
    image: (
      <BubbleImage
        type={4}
        children={
          <>
            {createMotionIcon({
              customStyles: IconSendStyles,
              icon: <IconSend />,
              transition: { delay: 0.8 },
            })}
            {createMotionIcon({
              customStyles: IconInvoiceStyles,
              icon: <IconInvoice />,
              transition: { delay: 1.2 },
            })}
            {createMotionIcon({
              customStyles: IconEsignatureStyles,
              icon: <IconEsignature />,
              transition: { delay: 1.6 },
            })}
          </>
        }
        align="right"
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/run-your-business.jpeg"
              alt="Strengthen relationships with every interaction"
              placeholder="blurred"
              width={420}
              quality={80}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/run-your-business.jpeg"
              alt="Strengthen relationships with every interaction"
              placeholder="blurred"
              width={250}
              quality={80}
            />
          </>
        }
      />
    ),
  },
  {
    title: 'Get paid sooner',
    text: 'Invoice clients directly from B12 and let them pay on your website. No more chasing down checks or manual deposits. Make transactions more convenient for you and your clients, even automating the payment process with recurring invoices.',
    linkText: 'Learn more about invoicing and online payments',
    linkUrl: '/payments-invoicing-software',
    image: (
      <BubbleImage
        type={5}
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/get-paid.jpeg"
              alt="Payment for your services in just a few clicks"
              placeholder="blurred"
              width={420}
              quality={80}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/get-paid.jpeg"
              alt="Payment for your services in just a few clicks"
              placeholder="blurred"
              width={250}
              quality={80}
            />
          </>
        }
        imageSecondary={
          <StaticImage
            src="../../images/payments-1.png"
            alt="Payment for your services in just a few clicks"
            placeholder="blurred"
            width={230}
          />
        }
      />
    ),
  },
]

const ToolsSection = () => {
  const { t } = useTranslation()

  return (
    <StyledSection>
      <StyledTitle>{t('Transform your business with AI')}</StyledTitle>
      <StyledSubtitle>
        {t(
          'From AI-generated content to automatically setting you up with the right tools, B12 efficiently delivers a world-class website for your business needs.'
        )}
      </StyledSubtitle>
      <List>
        {data.map((item, idx) => (
          <TextImage
            key={`list-item-${idx}`}
            image={item.image}
            title={t(item.title)}
            text={t(item.text)}
            linkUrl={item.linkUrl}
            linkText={t(item.linkText)}
            reversed={item.reversed}
          />
        ))}
      </List>
    </StyledSection>
  )
}

export default ToolsSection
