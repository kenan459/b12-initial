/**
 * LEGACY
 * This page uses old styles but is built using new infrastructure (Gatsby)
 */
import styled from '@emotion/styled'
import { mq, theme } from '../assets/theme'

// Components
import LayoutMain from '../components/layouts/Main'
import SEO from '../components/SEO'
import Container from '../components/container/Container'
import SectionCta from '../partials/section-cta/SectionCta'
import { Button } from '../components/button/Button'

// Images
import IconWrench from '../images/icons/wrench.inline.svg'
import IconComments from '../images/icons/comments.inline.svg'

// Styles
const Section = styled.section`
  position: relative;
  padding: 60px 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: auto;

  ${mq['lg']} {
    padding: 160px 0;
  }
`

const Title = styled.h1`
  font-size: 44px;
  line-height: 50px;
  font-weight: 500;
  margin: 0 auto;
  color: ${theme.colors.text.dark};
  text-align: center;

  ${mq['md']} {
    font-size: 56px;
    line-height: 70px;
  }

  ${mq['lg']} {
    font-size: 64px;
    line-height: 78px;
    width: 50%;
  }
`

const Subtitle = styled.p`
  margin: 15px auto 0;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  ${mq['md']} {
    font-size: 22px;
    line-height: 35px;
  }

  ${mq['lg']} {
    width: 66%;
  }
`

const Content = styled.div`
  display: grid;
  gap: 40px;
  margin-top: 50px;

  ${mq['md']} {
    gap: 120px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;

  > p {
    font-size: ${theme.fontSizes.large};
    font-weight: 400;
  }
`

const ContentItemTitle = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  margin: 0;

  ${mq['md']} {
    font-size: 32px;
    line-height: 40px;
  }
`

const Icon = styled.div`
  width: 67px;
  height: 67px;
  display: grid;
  place-content: center;
  border: 1px solid ${theme.colors.surface.border};
  background: ${theme.colors.brand.accentLightest};
  border-radius: 5px;
  margin-bottom: 15px;
`

const LinkUnderlined = styled.a`
  display: inline;
  text-decoration: none;
  color: ${theme.palette.gray.default};
  border-bottom: 1px solid rgba(115, 110, 132, 0.3);
  transition: all 0.15s ease-in-out;

  &:hover {
    text-decoration: none;
    color: ${theme.palette.secondary.default};
    border-color: ${theme.palette.secondary.default};
  }
`

const ContactUsPage = () => {
  return (
    <LayoutMain>
      <Section>
        <Container>
          <Title>Get in touch</Title>
          <Subtitle>
            Need some assistance or want to learn more about B12’s all-in-one solution? You’ve come
            to the right place! Here's how to reach us.
          </Subtitle>
          <Content>
            <ContentItem>
              <Icon>
                <IconComments />
              </Icon>
              <ContentItemTitle>Talk to Sales</ContentItemTitle>
              <p>
                Schedule a demo with a B12 Consultant to find out what we can do for your business.
              </p>
              <p>
                <LinkUnderlined href="mailto:hello@b12.io">Email sales</LinkUnderlined>
              </p>
              <Button
                as="anchor"
                label="Request a demo"
                to="mailto:hello@b12.io"
                variant="primary"
              />
            </ContentItem>
            <ContentItem>
              <Icon>
                <IconWrench />
              </Icon>
              <ContentItemTitle>Contact Customer Success</ContentItemTitle>
              <p>
                If you’re an existing customer, visit our{' '}
                <a href="https://support.b12.io/" target="_blank" rel="noreferrer">
                  Support Center
                </a>{' '}
                to find answers to your questions and step-by-step instructions.
              </p>

              <p>
                You can reach B12’s Customer Success team via chat, email, or scheduled call. We’re
                available Mon–Fri, 9 am–5 pm ET, and will do our best to get back to you within one
                business day.{' '}
              </p>

              <p>
                Email us at <LinkUnderlined href="mailto:hello@b12.io">hello@b12.io</LinkUnderlined>{' '}
                <br></br>
                <LinkUnderlined
                  href="https://calendly.com/csm-calendar"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a call
                </LinkUnderlined>
              </p>
              <Button as="anchor" label="Chat with us" to="mailto:hello@b12.io" variant="primary" />
            </ContentItem>
          </Content>
        </Container>
      </Section>

      <SectionCta />
    </LayoutMain>
  )
}

export default ContactUsPage

export const Head = () => (
  <SEO
    pageTitle="Contact us"
    pageDescription="Need some assistance or want to learn more about B12’s all-in-one solution? You’ve come to the right place! Here's how to reach us."
  />
)
