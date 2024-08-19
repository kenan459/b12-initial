import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, theme } from '@styles/theme'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import List from '@components/list/List'
import Accordion from '@components/accordion/Accordion'
import TextIcon from '@components/text-icon/TextIcon'
import HeroTextImage from '@components/hero/HeroTextImage'
import LinkWithIcon from '@components/link-with-icon/LinkWithIcon'
import Grid from '@components/grid/Grid'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'

// Partials
import SplitTextLarge from '@partials/split-text-large/SplitTextLarge'

// Images
import IconRocket from '@images/icons/rocket.inline.svg'
import IconComment from '@images/icons/comment.inline.svg'
import IconCheck from '@images/icons/icon-checkmark.inline.svg'
import BubbleShape2 from '@images/bubble-shape-2.inline.svg'
import BubbleShape3 from '@images/bubble-shape-3.inline.svg'
import BubbleShape4 from '@images/bubble-shape-4.inline.svg'
import B12Logo from '@images/logo-b12.inline.svg'
import ClioLogo from '@images/logos/clio-logo.inline.svg'
import PollenLogo from '@images/logos/pollen-logo.inline.svg'
import IconArrowRight from '@images/icon-arrow-right-short.inline.svg'

// Data
import awardFAQ from '@data/award-faq.yaml'

// Styles
export const IngredientsSection = styled(SectionNext)`
  padding: ${theme.spacing.section.xsmall} 0;

  ${mq['md']} {
    padding: ${theme.spacing.section.small} 0 0;
  }
`

export const ListFourCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  ${mq['md']} {
    gap: 32px;
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TwoColText = styled.div`
  display: grid;
  margin-top: ${theme.spacing.section.xsmall};

  ${mq['md']} {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 40px;
    margin-top: ${theme.spacing.section.xlarge};
  }
`

export const Cta = styled(SectionNext)`
  background: ${theme.colors.brand.accentDarkest};
  padding: ${theme.spacing.section.smallest} 0;

  ${mq['md']} {
    padding: ${theme.spacing.section.xsmall} 0;
  }
`

const TypeformButton = styled.button`
  display: inline-flex;
  gap: 10px;
  place-content: center;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  font-weight: bold;
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.medium};
  transition: ${theme.transition[1]};
  border-radius: 3px;
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border: 1px solid ${theme.palette.primary.default};
  background: ${theme.palette.primary.default};
  color: ${theme.palette.common.white};

  &:hover {
    background: ${theme.palette.primary.darker};
    border-color: ${theme.palette.primary.darker};
  }

  &:active {
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 30%);
  }

  ${mq['md']} {
    font-size: ${theme.fontSizes.medium};
    padding: ${theme.spacing.medium} ${theme.spacing.large};
  }
`

const JudgesList = styled(Grid)`
  gap: 60px;
  margin-top: 40px;

  ${mq['md']} {
    gap: 40px;
    margin-top: 0;
  }
`

const JudgeCard = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 0;
  }

  > a {
    svg {
      height: 30px;
    }
  }
`

const JudgeCardImage = styled.div`
  position: relative;
  margin-bottom: 60px;

  svg {
    width: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${mq['md']} {
      width: 100%;
    }
  }

  .gatsby-image-wrapper {
    z-index: 20;
    border-radius: 16px;
    width: 65%;
    margin: 0 auto -40px;

    ${mq['md']} {
      width: 70%;
    }
  }
`

const CaseStudiesSection = styled(SectionNext)`
  padding-top: 56px;

  ${mq['md']} {
    padding-top: 0;
  }
`

const CaseStudyCard = styled.div`
  text-align: center;
  justify-items: center;
  display: grid;
  gap: 0;

  ${mq['md']} {
    gap: 10px;
  }

  .gatsby-image-wrapper {
    /* max-height: 60px;
    width: 100%; */
  }
`

export const iconMotion = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  transition: { delay: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
}

const FirmOfTheFuturePage = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        title="Helping Firms Secure A Successful Future"
        subtitle="Introducing the B12 Firm of the Future Award, created to recognize and support the innovative work that professional service providers are doing for their communities."
        cta={
          <>
            <TypeformButton
              data-tf-popup="UeAw5QHT"
              data-tf-iframe-props="title=Firm of the Future Entry Form"
              data-tf-medium="snippet"
            >
              Enter today <IconArrowRight />
            </TypeformButton>
            <script src="https://embed.typeform.com/next/embed.js"></script>
          </>
        }
        imageDefaultSize
        imageBorderRadius
        image={
          <>
            <StaticImage
              className="hero-image-desktop"
              src="../images/firm-of-the-future/1_Hero.jpg"
              alt="Helping Firms Secure A Successful Future"
              width={960}
              loading="eager"
              quality={100}
              placeholder="none"
            />
            <StaticImage
              className="hero-image-mobile"
              src="../images/firm-of-the-future/1_Hero.jpg"
              alt="Helping Firms Secure A Successful Future"
              width={420}
              loading="eager"
              quality={100}
              placeholder="none"
            />
          </>
        }
      />

      <IngredientsSection>
        <Grid>
          <TextIcon
            icon={<IconRocket />}
            title="Support to scale your business"
            text="Each quarter, a professional service provider will be recognized with funds and resources to help their business scale."
            iconMotion={iconMotion}
            vertical
          />
          <TextIcon
            icon={<IconComment />}
            title="Easy application process"
            text="To enter, simply tell us how you’re future-proofing your professional service business to better support your community."
            iconMotion={iconMotion}
            vertical
          />
          <TextIcon
            icon={<IconCheck />}
            title="Now accepting entries"
            text="Entries can be submitted online until 11:59 pm ET November 4, 2022. Submissions will be reviewed by a panel of judges."
            iconMotion={iconMotion}
            vertical
          />
        </Grid>

        <TwoColText>
          <SectionNextHeader bottomMargin="sm">
            <Title textStyle="h2">Helping firms secure their future success</Title>
            <Subtitle>
              Since 2015, B12 has helped thousands of professional service providers bring their
              business online – enabling their growth.
            </Subtitle>
          </SectionNextHeader>
          <div>
            <Text>
              Over the years, we’ve witnessed incredible tenacity and creativity from our customers
              to continue operating through a pandemic and economic uncertainty. We see all the work
              they put in to ensure their clients succeed, but who’s helping these service
              businesses secure their future?
            </Text>
            <Text>
              The B12 Firm of the Future Award is our way of celebrating innovative professional
              service firms and supplying them with the resources to build their road forward,
              including a cash grant, free website and online tools, and expert guidance to drive
              business growth.
            </Text>
            <Text>
              The future of professional services looks bright. We can’t wait to see how recipients
              use their award to scale their firm and thrive.
            </Text>
          </div>
        </TwoColText>
      </IngredientsSection>

      <SplitTextLarge
        title={<Title>Winners will receive…</Title>}
        imageFullWidth
        reversed
        bgShape
        image={
          <StaticImage
            src="../images/firm-of-the-future/2_Winners.jpg"
            alt="Winners"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <List>
          <TextIcon
            icon="1"
            title="A $5,000  grant"
            text="Each recipient will receive $5,000 to use toward efforts that help them grow their business, whether that’s marketing dollars, office supplies, new technology, or hiring."
          />
          <TextIcon
            icon="2"
            title="Free resources and consulting services"
            text="Educational materials and guidance to help you grow your business from small business marketing experts. You’ll build your skills and knowledge to help your business succeed."
          />
          <TextIcon
            icon="3"
            title="Subscription to B12’s Advanced Plan"
            text="You can’t future-proof your firm without a modern online presence. Each recipient will receive a free B12 subscription that includes all the tools and support to build a modern website, engage clients, and streamline business operations (an annual value of $6,700)"
          />
        </List>
      </SplitTextLarge>

      <CtaSectionBanner>
        <Title light as="h3">
          B12 Firm of the Future Award 2022
        </Title>
        <Text light>
          The B12 Firm of the Future Award offers $5,000 grants to innovative professional service
          businesses.
        </Text>
        <TypeformButton
          data-tf-popup="UeAw5QHT"
          data-tf-iframe-props="title=Firm of the Future Entry Form"
          data-tf-medium="snippet"
        >
          Enter today <IconArrowRight />
        </TypeformButton>
      </CtaSectionBanner>

      {/* Judges section */}
      <SectionNext bg={theme.colors.brand.accentLightest}>
        <SectionNextHeader align="center">
          <Title textStyle="h1">Meet the judges</Title>
        </SectionNextHeader>
        <JudgesList>
          <JudgeCard>
            <JudgeCardImage>
              <StaticImage
                className="bubble-image-desktop"
                src="../images/people/NiteshBanta.jpg"
                alt="Nitesh Banta"
                placeholder="blurred"
                width={300}
                quality={80}
              />
              <BubbleShape2 />
            </JudgeCardImage>
            <a href="https://www.b12.io/" target="_blank" rel="noopener noreferrer">
              <B12Logo />
            </a>
            <h3>Nitesh Banta</h3>
            <Text align="center" small>
              CEO &amp; Co-Founder
            </Text>
          </JudgeCard>
          <JudgeCard>
            <JudgeCardImage>
              <StaticImage
                className="bubble-image-desktop"
                src="../images/people/ShubhamDatta.jpg"
                alt="Shubham Datta"
                placeholder="blurred"
                width={300}
                quality={80}
              />
              <BubbleShape3 />
            </JudgeCardImage>
            <a href="https://www.clio.com/" target="_blank" rel="noopener noreferrer">
              <ClioLogo />
            </a>
            <h3>Shubham Datta</h3>
            <Text align="center" small>
              Vice President of Corporate Development
            </Text>
          </JudgeCard>
          <JudgeCard>
            <JudgeCardImage>
              <StaticImage
                className="bubble-image-desktop"
                src="../images/people/HillaryBush.jpg"
                alt="Hillary Bush"
                placeholder="blurred"
                width={300}
                quality={80}
              />
              <BubbleShape4 />
            </JudgeCardImage>
            <a href="https://www.runpollen.com/" target="_blank" rel="noopener noreferrer">
              <PollenLogo />
            </a>
            <h3>Hillary Bush</h3>
            <Text align="center" small>
              CEO &amp; Founder
            </Text>
          </JudgeCard>
        </JudgesList>
      </SectionNext>

      <SplitTextLarge
        title={<Title>Entry criteria</Title>}
        imageFullWidth
        bgShape
        headerBottomMargin="sm"
        image={
          <StaticImage
            src="../images/firm-of-the-future/3_EntryCriteria.jpg"
            alt="Entry criteria"
            placeholder="blurred"
            layout="fullWidth"
          />
        }
      >
        <Text>
          Entrants must meet the following criteria for their submission to be eligible for review.
          See{' '}
          <a
            href="/static-assets/docs/Firm-of-the-Future-Terms-and-Conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            official rules
          </a>{' '}
          for more details.
        </Text>
        <br />

        <List>
          <TextIcon
            title="Business based in the U.S."
            text={<Text>Your business must be based in, and operate, in the U.S. to qualify.</Text>}
          />
          <TextIcon
            title="In a professional services industry"
            text={
              <Text>
                To qualify, businesses must primarily sell their services and expertise in one of
                the following categories: Consulting, Accounting, Legal, Insurance, Real Estate,
                Business Coaching. If you’re unsure if your business falls under professional
                services, don’t hesitate to{' '}
                <a href="mailto:hello@b12.io" target="_blank" rel="noopener noreferrer">
                  contact us
                </a>{' '}
                to clarify.
              </Text>
            }
          />
          <TextIcon
            title="Established, with at least one client"
            text={
              <Text>
                You should have more than just a business idea and be actually operating in your
                field in some capacity.
              </Text>
            }
          />
          <TextIcon
            title="A paid or free account with B12"
            text={
              <Text>
                To apply, you must currently have a free or paid account with B12. Don’t yet have
                one?{' '}
                <a href="https://b12.io/signup/" target="_blank" rel="noopener noreferrer">
                  Sign up
                </a>{' '}
                for a free account to become eligible for the B12 Firm of the Future Award and get a
                modern, AI-generated website draft to better sell your services online.
              </Text>
            }
          />
        </List>
        <br />
        <TypeformButton
          data-tf-popup="UeAw5QHT"
          data-tf-iframe-props="title=Firm of the Future Entry Form"
          data-tf-medium="snippet"
        >
          Enter today <IconArrowRight />
        </TypeformButton>
      </SplitTextLarge>

      <CaseStudiesSection
        containerType="shaped"
        container={{
          bg: theme.colors.brand.accentLightest,
        }}
      >
        <SectionNextHeader align="center">
          <Title as="h3">How B12 is preparing other firms for future success</Title>
        </SectionNextHeader>
        <Grid>
          <CaseStudyCard>
            <StaticImage
              src="../images/logos/taxstudio.png"
              alt="TaxStudio"
              placeholder="blurred"
              layout="fixed"
              height={80}
            />
            <p>
              TaxStudio reaches more clients all over the world without increasing marketing costs
            </p>
            <LinkWithIcon label="Learn more" href="/case_studies/taxstudio" />
          </CaseStudyCard>
          <CaseStudyCard>
            <StaticImage
              src="../images/logos/infocus-logo.png"
              alt="InFocus Payroll"
              placeholder="blurred"
              layout="fixed"
              height={80}
            />
            <p>
              InFocus Payroll embraces technology for a more seamless, client-centric experience
            </p>
            <LinkWithIcon label="Learn more" href="/case_studies/infocus-payroll" />
          </CaseStudyCard>
          <CaseStudyCard>
            <StaticImage
              src="../images/logos/mattenlaw.png"
              alt="Matten Law"
              placeholder="blurred"
              layout="fixed"
              height={80}
            />
            <p>
              Matten Law scales up to double its team, add clients, and streamline the process of
              winning business
            </p>
            <LinkWithIcon label="Learn more" href="/case_studies/matten-law" />
          </CaseStudyCard>
        </Grid>
      </CaseStudiesSection>

      <SectionNext
        bg={theme.colors.brand.accentLightest}
        container={{
          maxWidth: '800px',
        }}
      >
        <SectionNextHeader align="center">
          <Title textStyle="h3">Firm of the Future Award FAQs</Title>
        </SectionNextHeader>
        <Accordion items={awardFAQ} />
      </SectionNext>

      <CtaSectionBanner>
        <Title light as="h3">
          B12 Firm of the Future Award 2022
        </Title>
        <Text light>
          The B12 Firm of the Future Award offers $5,000 grants to innovative professional service
          businesses.
        </Text>
        <TypeformButton
          data-tf-popup="UeAw5QHT"
          data-tf-iframe-props="title=Firm of the Future Entry Form"
          data-tf-medium="snippet"
        >
          Enter today <IconArrowRight />
        </TypeformButton>
      </CtaSectionBanner>
    </LayoutMain>
  )
}

export default FirmOfTheFuturePage

export const Head = () => (
  <SEO
    pageTitle="B12 Firm of the Future Award 2022"
    pageDescription="The B12 Firm of the Future Award offers $5,000 grants to innovative professional service businesses."
  />
)
