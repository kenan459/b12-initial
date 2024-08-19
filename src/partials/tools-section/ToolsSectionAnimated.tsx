import React from 'react'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

// Components
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import TextImage from '@components/text-image/TextImage'
import BubbleImageAnimated from '@components/bubble-image/BubbleImageAnimated'
import createMotionIcon from '@components/icon-motion/IconMotion'
import SectionNext from '@components/section-next/SectionNext'
import TextGenetationForm from './TextGenetationForm'
import AnimatedCounters from './AnimatedCounters'
import PaymenDetails from './PaymentDetails'

// Images
import IconAiAnimated from '@partials/home-animated-benefits/IconAIAnimated'

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
const StyledTitle = styled(Title)`
  ${mq['lg']} {
    width: 70%;
  }
`

const StyledSubtitle = styled(Subtitle)`
  margin-top: 16px;

  ${mq['sm']} {
    width: 80%;
    margin-top: 24px;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 48px;

  &:last-child h3 {
    // a hacky way to avoid a title overlap by a tall secondary image
    margin-top: 60px;

    ${mq['md']} {
      margin-top: 0;
    }
  }

  ${mq['md']} {
    margin-top: 128px;
    gap: 64px;
  }
`

const IconAIWrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid ${theme.colors.surface.borderLight};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 35px !important;
    height: 35px !important;
  }
`

const IconAiStyles = `
  top: 70px;
  right: -10px;

  ${mq['xs']} {
    right: 10%;
  }

  ${mq['sm']} {
    top: 60px;
    right: 27%;
  }

  ${mq['md']} {
    top: 60px;
    right: 10px;
  }

  svg {
    width: 35px;
    height: 35px;
  }
`

const data: ListItemProps[] = [
  {
    title: 'Save time with AI and experts',
    text: 'Generate your personalized site in one click. Unlike other website builders, B12 gives you the flexibility to instantly regenerate entire sections yourself or get help from our design and copywriting experts. Spend less time building your site and more time running your business.',
    linkText: 'Learn more about AI web design',
    linkUrl: '/ai-website-builder',
    image: (
      <BubbleImageAnimated
        children={createMotionIcon({
          customStyles: IconAiStyles,
          icon: (
            <IconAIWrapper>
              <IconAiAnimated />
            </IconAIWrapper>
          ),
          transition: { delay: 0.8 },
        })}
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/easiest-way-to-edit.png"
              alt="Skip the DIY Site Builders"
              placeholder="blurred"
              width={420}
              quality={80}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/easiest-way-to-edit.png"
              alt="Skip the DIY Site Builders"
              placeholder="blurred"
              width={300}
              quality={80}
            />
          </>
        }
        imageSecondary={<TextGenetationForm />}
      />
    ),
  },
  {
    reversed: true,
    title: 'Easily connect with leads and clients',
    text: 'AI instantly sets you up with the tools you need — eSignatures, contact forms, online appointment scheduling, invoicing, and email marketing. These touchpoints allow website visitors to connect with you and work with your business in seconds.',
    linkText: 'Learn more about built-in tools',
    linkUrl: '/product-overview',
    image: (
      <BubbleImageAnimated
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
              width={300}
              quality={80}
            />
          </>
        }
        imageSecondary={<AnimatedCounters />}
      />
    ),
  },
  {
    title: 'Get paid sooner',
    text: 'Invoice clients directly from B12 and let them pay on your website. No more chasing down checks or manual deposits. Make transactions more convenient for you and your clients, even automating the payment process with recurring invoices.',
    linkText: 'Learn more about invoicing and payments',
    linkUrl: '/payments-invoicing-software',
    image: (
      <BubbleImageAnimated
        type={4}
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
              width={300}
              quality={80}
              style={{ marginBottom: '80px' }}
            />
          </>
        }
        imageSecondary={<PaymenDetails />}
      />
    ),
  },
]

const ToolsSectionAnimated = () => {
  const { t } = useTranslation()

  return (
    <SectionNext>
      <StyledTitle>{t('Elevate your online presence with AI')}</StyledTitle>
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
    </SectionNext>
  )
}

export default ToolsSectionAnimated
