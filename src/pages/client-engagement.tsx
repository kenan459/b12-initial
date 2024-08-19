import React from 'react'
import { PageProps, HeadProps, HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { mq, theme } from '@styles/theme'
import styled from '@emotion/styled'
import { type TIndustriesIcons, type TIndustry } from '@pages/industries'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import HeroTextImage from '@components/hero/HeroTextImage'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import TextImage from '@components/text-image/TextImage'
import TextIcon from '@components/text-icon/TextIcon'
import Grid from '@components/grid/Grid'
import UnorderedList from '@components/list/UnorderedList'
import BubbleImage from '@components/bubble-image/BubbleImage'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'
import { Button } from '@components/button/Button'

// Partials
import SuccessStoriesSlider from '@partials/success-stories-slider/SuccessStoriesSlider'
import SectionCta from '@partials/section-cta/SectionCta'

// Icons
import IconAccountants from '@data/industry-hubs/icons/accountants.inline.svg'
import IconProfessionalServices from '@data/industry-hubs/icons/professional-services.inline.svg'
import IconArchitects from '@data/industry-hubs/icons/architects.inline.svg'
import IconCoaches from '@data/industry-hubs/icons/coaches.inline.svg'
import IconCommercialRealEstate from '@data/industry-hubs/icons/commercial-real-estate.inline.svg'
import IconConsultants from '@data/industry-hubs/icons/consultants.inline.svg'
import IconFinancialAdvisor from '@data/industry-hubs/icons/financial-advisor.inline.svg'
import IconInsuranceBroker from '@data/industry-hubs/icons/insurance-broker.inline.svg'
import IconInvestingService from '@data/industry-hubs/icons/investing-services.inline.svg'
import IconLawyers from '@data/industry-hubs/icons/lawyers.inline.svg'
import IconMortgageBroker from '@data/industry-hubs/icons/mortgage-broker.inline.svg'

// Data
import industriesData from '@data/industry-hubs/industries.yaml'
// Because Gatsby or any of it's plugins can't process SVGs from GraphQL queries, we have to add a high-end crutch like this.

const iconsData: TIndustriesIcons = {
  accountants: <IconAccountants width="60px" />,
  'professional-services': <IconProfessionalServices width="60px" />,
  architects: <IconArchitects width="60px" />,
  coaches: <IconCoaches width="60px" />,
  'commercial-real-estate': <IconCommercialRealEstate width="60px" />,
  consultants: <IconConsultants width="60px" />,
  'financial-advisor': <IconFinancialAdvisor width="60px" />,
  'insurance-broker': <IconInsuranceBroker width="60px" />,
  'investing-services': <IconInvestingService width="60px" />,
  lawyers: <IconLawyers width="60px" />,
  'mortgage-broker': <IconMortgageBroker width="60px" />,
}

// Styles
const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.large};

  ${mq['md']} {
    grid-template-columns: repeat(2, 1fr);
    gap: 120px;
  }
`

const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.large};
`

const CEContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xlarge};
`

const CESectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.large};

  ${mq['md']} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const CESectionContentTwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.large};
  margin-top: ${theme.spacing.large};

  ${mq['md']} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const CECard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.medium};
`

const CECardHorizontal = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.large};

  ${mq['md']} {
    grid-template-columns: 1fr 30%;
    align-items: center;
  }
`

const CECardDouble = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
`

const CECardDoubleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.medium};
  place-items: flex-start;

  .gatsby-image-wrapper {
    margin: -50px 20px 0;
  }

  ${mq['md']} {
    grid-template-columns: 25% 1fr;

    .gatsby-image-wrapper {
      max-width: 80%;
      margin: -60px auto 0;
    }
  }
`

const CECardImage = styled.div`
  // Static image
  > div {
    max-height: 260px;
  }
`

const ClientEngagementPage: React.FC<PageProps> = () => {
  return (
    <LayoutMain>
      <HeroTextImage
        padding="lg"
        title="Reach, acquire, and retain clients online"
        text="Powerful tools seamlessly integrated into your website work together to let clients easily contact you, schedule appointments, fill out intake forms, sign documents, and submit payments in one place.

        See a free draft of your new site and preview our product suite, no credit card required."
        ctaAsButton
        ctaText="Get started"
        ctaUrl="https://b12.io/signup"
        image={
          <StaticImage
            src="../../assets/img/ce-hero.png"
            alt="AI design"
            placeholder="blurred"
            loading="eager"
            width={500}
            quality={100}
          />
        }
      />

      <SectionNext>
        <TextImage
          reversed
          title="A single solution unlocks the best experience for you and your clients"
          text={
            <>
              <Text>
                Client Engagement offers you a centralized solution to build and foster client
                relationships online. No integration headaches and everything works together. One
                platform, one monthly payment.
              </Text>
              <Text>
                From intake forms to recurring payments, every step of your clients’ journey runs
                smoothly to help your business grow and improve online.
              </Text>
            </>
          }
          image={
            <BubbleImage
              type={4}
              align="right"
              noBorderRadius
              image={
                <>
                  <StaticImage
                    className="bubble-image-desktop"
                    src="../../assets/img//ce-about.png"
                    alt="Client engagement tools"
                    placeholder="blurred"
                    width={420}
                    quality={100}
                  />
                  <StaticImage
                    src="../../assets/img/ce-about.png"
                    className="bubble-image-mobile"
                    alt="Client engagement tools"
                    placeholder="blurred"
                    width={420}
                    quality={100}
                  />
                </>
              }
            />
          }
        />
      </SectionNext>

      <SectionNext
        containerType="shaped"
        tightPadding
        container={{
          bg: theme.colors.brand.accentLightest,
        }}
      >
        <BenefitsWrapper>
          <BenefitsColumn>
            <Title as="h3" textStyle="h4">
              Benefits to your business
            </Title>
            <UnorderedList
              columns={1}
              items={[
                'Communicate with clients and leads effortlessly in a centralized place',
                'Reduce back-and-forth emails about scheduling, intake forms, and contracts',
                'Keep your branding consistent across the client experience',
                'Save time by automating administrative tasks',
                'Focus on your business while B12 sets it all up for you',
                'Everything works together, no integration headaches',
                'Single payment for all of these services',
              ]}
            />
          </BenefitsColumn>
          <BenefitsColumn>
            <Title as="h3" textStyle="h4">
              Benefits to your clients
            </Title>
            <UnorderedList
              columns={1}
              items={[
                'Enjoy a streamlined experience with a company’s website, scheduling, forms, and payments in one place',
                'Quickly share information to determine if a company’s services meet your needs',
                'Schedule appointments in seconds without delay or back-and-forth over email',
                'Submit payments conveniently and securely',
                'Finalize contracts remotely using electronic signatures',
              ]}
            />
          </BenefitsColumn>
        </BenefitsWrapper>
      </SectionNext>

      <SectionNext>
        <SectionNextHeader>
          <Title>What’s included in Client Engagement?</Title>
          <Text>
            Each Client Engagement tool supports the smooth transition from website visitor to
            loyal, satisfied client, helping your business thrive without the usual growing pains.
          </Text>
        </SectionNextHeader>
        <CEContentWrapper>
          <CECardDouble>
            <StaticImage
              src="../../assets/img/client-intake-forms.png"
              alt="Client Intake Forms"
              width={1400}
              quality={90}
            />
            <CECardDoubleContent>
              <StaticImage
                src="../../assets/img/client-intake-forms-sm.png"
                alt="Client Intake Forms"
                width={400}
                quality={90}
                objectFit="contain"
              />
              <div>
                <Title as="h3" textStyle="h4">
                  Client Intake Forms
                </Title>
                <Text>
                  Intake forms help you qualify prospects and use that information to streamline
                  your client intake process. Whether you use one form for all prospects or
                  detailed, service-specific questionnaires, B12 can set it up for you.
                </Text>
              </div>
            </CECardDoubleContent>
          </CECardDouble>
          <CESectionContent>
            <CECard>
              <CECardImage>
                <StaticImage
                  src="../../assets/img/ce-email-marketing.png"
                  alt="Email marketing"
                  width={400}
                  quality={90}
                  objectFit="contain"
                />
              </CECardImage>
              <Title as="h3" textStyle="h4">
                Email Marketing
              </Title>
              <Text>
                Send professionally branded emails to your contacts in minutes to share news and
                announcements. Save time by starting with industry-specific email templates that
                always match your website.
              </Text>
            </CECard>
            <CECard>
              <CECardImage>
                <StaticImage
                  src="../../assets/img/ce-email-automation.png"
                  alt="Email Automation"
                  width={400}
                  quality={90}
                  objectFit="contain"
                />
              </CECardImage>
              <Title as="h3" textStyle="h4">
                Email Automation
              </Title>
              <Text>
                Too much time is wasted sending routine emails. B12 easily automates appointment
                notifications, payment reminders, form submission confirmations, and signed contract
                copies, reducing administrative daily tasks while keeping your prospects and clients
                informed.
              </Text>
            </CECard>
            <CECard>
              <CECardImage>
                <StaticImage
                  src="../../assets/img/ce-payments-invoicing.png"
                  alt="Online Payments and Invoicing"
                  width={400}
                  quality={90}
                  objectFit="contain"
                />
              </CECardImage>
              <Title as="h3" textStyle="h4">
                Online Payments and Invoicing
              </Title>
              <Text>
                Send professional, branded invoices and get paid faster. Automatic payment reminders
                are sent to clients, increasing your on-time payments. It’s convenient for them too
                — they can pay on your site via credit card, debit card, or ACH.
              </Text>
            </CECard>
          </CESectionContent>
          <CECardHorizontal>
            <StaticImage
              src="../../assets/img/ce-online-scheduling.png"
              alt="Online Scheduling"
              width={900}
              quality={90}
              objectFit="contain"
            />
            <div>
              <Title as="h3" textStyle="h4">
                Online Scheduling
              </Title>
              <Text>
                Let visitors schedule, reschedule, and cancel appointments directly on your website.
                Sync your business calendar, customize your availability, and create various
                appointment types with different durations.
              </Text>
            </div>
          </CECardHorizontal>
          <CESectionContentTwoCol>
            <CECard>
              <StaticImage
                src="../../assets/img/ce-contact-manager.png"
                alt="Contact Manager"
                width={550}
                quality={90}
                objectFit="contain"
              />
              <Title as="h3" textStyle="h4">
                Contact Manager
              </Title>
              <Text>
                Website visitor and intake form submissions are stored in your Contact Manager,
                making it a convenient way to organize your prospects and clients in a single place.
              </Text>
            </CECard>
            <CECard>
              <StaticImage
                src="../../assets/img/ce-esignature-contracts.png"
                alt="Contracts and eSignatures"
                width={550}
                quality={90}
                objectFit="contain"
              />
              <Title as="h3" textStyle="h4">
                Contracts and eSignatures
              </Title>
              <Text>
                Make signing contracts more efficient for you and clients by accepting electronic
                signatures. Upload a PDF, mark up the necessary fields, and send it to your client
                in only a few clicks. No more faxes, printers, or emails back and forth!
              </Text>
            </CECard>
          </CESectionContentTwoCol>
        </CEContentWrapper>
      </SectionNext>

      <CtaSectionBanner bg="light">
        <Title as="h3">
          Join thousands of growing businesses that trust B12 with their online presence
        </Title>
        <Text>
          Want to learn more about what B12 can do for your business? See what we’ve built for
          customers like you.
        </Text>
        <Button
          as="anchor"
          variant="primary"
          to="https://www.b12.io/gallery"
          label="See our website gallery"
        />
      </CtaSectionBanner>

      <SectionNext>
        <SectionNextHeader>
          <Title as="h2" textStyle="h2">
            Client-focused solutions tailored to your industry
          </Title>
          <Text>
            Our simple, powerful platform works especially well for businesses in these industries:
          </Text>
        </SectionNextHeader>
        <Grid>
          {industriesData.map((item: TIndustry, idx: number) => (
            <TextIcon
              vertical
              title={item.title}
              icon={iconsData[item.icon]}
              iconAsIs
              text={item.description}
              key={`list-item-${idx}`}
            />
          ))}
        </Grid>
      </SectionNext>

      <SuccessStoriesSlider />

      <SectionCta
        title="Streamline your business with one online solution"
        text="Your website, invoicing, contracts, payments, and more, all in one place. Try B12 today."
        ctaUrl="https://b12.io/signup"
        ctaText="Get started"
        buttonNoteVisible
      />
    </LayoutMain>
  )
}

export default ClientEngagementPage

export const Head: HeadFC<HeadProps> = () => (
  <SEO pageTitle="Client Engagement" pageDescription="Reach, acquire, and retain clients online" />
)
