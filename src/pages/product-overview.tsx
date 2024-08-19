import React from 'react'
import { PageProps, HeadProps, HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import HeroTextImage from '@components/hero/HeroTextImage'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import TextIcon from '@components/text-icon/TextIcon'
import { Button } from '@components/button/Button'
import List from '@components/list/List'
import createMotionIcon from '@components/icon-motion/IconMotion'
import Grid from '@components/grid/Grid'

// Partials
import FeaturesSlider from '@partials/features-slider/FeaturesSlider'
import SectionCta from '@partials/section-cta/SectionCta'
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'

// Data
import { features, ceTools, creativeServices } from '@pages/_product-overview.data'

// Imаges
import IconSend from '@images/icons/icon-send.inline.svg'
import IconEsignature from '@images/icons/esignature-icon.inline.svg'
import IconInvoice from '@images/icons/icon-invoice.inline.svg'

// Types
type Props = {
  align?: 'left' | 'center' | 'right'
}

// Styles
import { ImageWrapper, ImageWrapperContainer } from '@components/layouts/IndustryHubsChild'

const StyledImageWrapperContainer = styled(ImageWrapperContainer)`
  ${mq['lg']} {
    width: 80%;
    margin: 0 auto;
  }
`

const IconEsignatureStyles = `
  left: 5px;
  bottom: 80px;

  svg {
    width: 45px;
    height: 45px;
  }

  ${mq['md']} {
    left: 5%;
    bottom: 120px;
  }

  ${mq['lg']} {
    bottom: 180px;

    svg {
      width: 90px;
      height: 90px;
    }
  }
`

const IconSendStyles = `
  left: -15px;
  bottom: 5%;

${mq['md']} {
  left: -30px;
  bottom: 60px;
}

${mq['lg']} {
  left: -30px;
  bottom: 60px;
}

svg {
  width: 65px;
  height: 65px;

  ${mq['lg']} {
    width: 125px;
    height: 125px;
  }
}
`

const IconInvoiceStyles = `
  top: -20px;
  right: 20px;

  svg {
    width: 55px;
    height: 55px;
  }

  ${mq['md']} {
    top: -40px;
    right: 30px;

    svg {
      width: 100px;
      height: 100px;
    }
  }

  ${mq['lg']} {
    right: 100px;
  }
`

const SectionProductsHeader = styled(SectionNextHeader)`
  margin-inline: auto;
`

const ButtonsWrapper = styled.div<{ align: 'left' | 'center' | 'right' }>`
  display: flex;
  ${(props) => props.align === 'left' && `justify-content: flex-start;`}
  ${(props) => props.align === 'center' && `justify-content: center;`}
  ${(props) => props.align === 'right' && `justify-content: flex-end;`}
  gap: ${theme.spacing.medium};
  flex-wrap: wrap;
  margin-top: ${theme.spacing.xlarge};
`

const ButtonsWrapperText = styled(Text)`
  width: 100%;
  opacity: 0.5;
`

const SectionProductsHeaderWrapper = ({ title, text }) => (
  <SectionProductsHeader maxWidth="65%" align="center">
    <Title as="h3" textStyle="h3" align="center">
      {title}
    </Title>
    <Text align="center">{text}</Text>
  </SectionProductsHeader>
)

const SectionActions = ({ align = 'left' }: Props) => (
  <ButtonsWrapper align={align}>
    <Button as="anchor" to="https://b12.io/signup" label="Start for free" variant="primary" />
    <Button as="link" to="/how-it-works" label="Learn more" variant="default" />
    <ButtonsWrapperText small align={align}>
      Instantly see a draft of your new website to get started.
    </ButtonsWrapperText>
  </ButtonsWrapper>
)

const ProductOverviewPage: React.FC<PageProps> = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Everything you need to scale your business"
        text="B12 offers more than an AI website builder. In seconds, see your professional online presence with tools to reach clients and get paid."
        ctaAsButton
        imageBorderRadius
        ctaText="Start for free"
        ctaUrl="https://b12.io/signup"
        image={
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../images/run-your-business.jpeg"
              alt="Everything you need to scale your business"
              placeholder="blurred"
              loading="eager"
              width={680}
              quality={100}
            />
            <StaticImage
              className="hero-image-mobile"
              src="../images/run-your-business.jpeg"
              alt="Everything you need to scale your business"
              placeholder="blurred"
              loading="eager"
              width={420}
              quality={100}
            />
            {createMotionIcon({
              customStyles: IconSendStyles,
              icon: <IconSend />,
              transition: { delay: 0.8 },
            })}
            {createMotionIcon({
              customStyles: IconEsignatureStyles,
              icon: <IconEsignature />,
              transition: { delay: 1.2 },
            })}
            {createMotionIcon({
              customStyles: IconInvoiceStyles,
              icon: <IconInvoice />,
              transition: { delay: 1.6 },
            })}
          </>
        }
      />

      <SectionNext id="b12-products">
        <SectionNextHeader align="center">
          <Title textStyle="h1">
            <span dangerouslySetInnerHTML={{ __html: features.title }} />
          </Title>
          <Text>{features.text}</Text>
          <ImageWrapper>
            <StyledImageWrapperContainer>{features.image}</StyledImageWrapperContainer>
          </ImageWrapper>
        </SectionNextHeader>
        <Grid>
          {features.list.map((item, idx) => (
            <TextIcon
              key={`list-item-${idx}`}
              icon={item.icon}
              iconInlineWithTitle
              title={item.title}
              text={item.subtitle}
              iconMotion={{
                initial: {
                  opacity: 0,
                  scale: 0,
                },
                transition: { delay: 0.5 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
              }}
              vertical
            />
          ))}
        </Grid>
        <SectionActions align="center" />
      </SectionNext>

      <FeaturesSlider
        title="Client management and engagement tools"
        subtitle="Nurture relationships with clients and prospects, while automating more of the time-consuming tasks you do manually."
        alignItemsToTop
        features={ceTools}
        children={<SectionActions />}
      />

      <SplitTextLarge
        bg={theme.colors.brand.accentLightest}
        title={<Title as="h2">Online payments and invoicing</Title>}
        bgShapeFromTop
        subtitle="Spend less time following up on invoices and get paid faster."
        imageFullWidth
        reversed
        bgShape
        bgShapeColor={theme.colors.brand.accentLightMedium}
        image={
          <StaticImage
            src="../images/online-payments-and-invoicing.jpeg"
            alt="Winners"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <List>
          <TextIcon
            title="Let clients pay online"
            text="Have clients pay by credit card or ACH in your secure checkout experience. Set up automated payment reminders to ensure you get paid on time and receive the funds in your bank account within days."
          />
          <TextIcon
            title="Send professional invoices"
            text="Generate, send, and track client invoices without leaving B12. Invoices automatically match your website to project credibility. Personalize your invoice to bill clients for a particular product or service."
          />
        </List>
        <SectionActions />
      </SplitTextLarge>

      <SectionNext>
        <SectionProductsHeaderWrapper
          title="Creative services"
          text="Let B12 take the lead on improving your website content and search engine optimization"
        />
        <Grid colsLg={2} colsMd={2} colsXl={2}>
          {creativeServices.map((item, idx) => (
            <TextIcon
              vertical
              title={item.title}
              icon={item.icon}
              text={item.description}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
        <SectionActions align="center" />
      </SectionNext>

      <SuccessStoriesSlider
        aiQuote
        filter={[
          'mortgages-by-jill',
          'bell-group',
          'the-sandusky-group',
          'envision-hr',
          'the-rainbow-disruption',
          'find-yourself-in-fashion',
        ]}
      />

      <SectionCta
        title="Launch a professional website with AI"
        text="Draft your new website in seconds and unlock the tools you need to serve clients."
        ctaUrl="https://b12.io/signup"
        ctaText="Start for free"
      />
    </LayoutMain>
  )
}

export default ProductOverviewPage

export const Head: HeadFC<HeadProps> = () => (
  <SEO
    pageTitle="Product overview"
    pageDescription="Professional websites with client engagement, payments, invoicing, SEO, and copywriting. AI website builder + experts modernize your business."
  />
)
