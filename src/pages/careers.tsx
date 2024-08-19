/**
 * LEGACY
 * This page uses old styles but is built using new infrastructure (Gatsby)
 */
import { StaticImage } from 'gatsby-plugin-image'
import { theme, mq } from '@styles/theme'
import styled from '@emotion/styled'

// Components
import SEO from '@components/SEO'
import LayoutMain from '@components/layouts/Main'
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Container from '@components/container/Container'
import ContainerShaped from '@components/container/ContainerShaped'
import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'
import Text from '@components/text/Text'
import TextIcon from '@components/text-icon/TextIcon'
import { SectionEyebrow } from '@components/section'
import Grid from '@components/grid/Grid'
import CtaSectionBanner from '@components/cta-sections/CtaSectionBanner'
import { Button } from '@components/button/Button'

// Partials
import { TeamPhotos } from '@partials/about-page/styles'

// Images
import IconGlobe from '@images/icons/globe.inline.svg'
import IconRocket from '@images/icons/rocket.inline.svg'
import IconPeople from '@images/icons/people.inline.svg'

// Styles
import { StyledVectorOutline, StyledVectorFilled } from '@partials/pricing-hero/PricingHero.styles'

const StyledContainerShaped = styled(ContainerShaped)`
  margin-top: 10px;

  ${mq['md']} {
    margin-top: 50px;
  }
`

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  background: ${theme.colors.brand.accentLightest};
  padding: 56px 0;

  ${mq['md']} {
    padding: 96px 0;
  }
`

const CareersPage = () => {
  return (
    <LayoutMain>
      <Wrapper>
        <Container>
          <SectionNextHeader align="center">
            <Title as="h1">B12 careers</Title>
            <br />
            <Button
              as="anchor"
              to="https://boards.greenhouse.io/b12#.WTmRoRPytTb"
              target="_blank"
              label="View open positions"
              variant="primary"
            />
          </SectionNextHeader>
        </Container>
        <StyledContainerShaped split="half" bg={theme.colors.surface.default}>
          <SectionNextHeader>
            <Title textStyle="h3">Our mission is to help people do meaningful work</Title>
            <Subtitle>Our people and products help businesses succeed online.</Subtitle>
          </SectionNextHeader>
          <div>
            <Text>
              The rise of automation in the workforce is one of the largest challenges society will
              face in the coming decades. We look to use technology and automation as a force for
              good to build a brighter future of work. As a team, we strive to create a transparent
              and collaborative work environment that enables us to build the best possible products
              for our customers.
            </Text>
            <Text>
              We started in New York, but are now a fully distributed company with B12ers in Canada,
              Kyrgyzstan, Turkey, many US states, and beyond.
            </Text>
            <Text>
              <b>We hope you will join us!</b>
            </Text>
          </div>
        </StyledContainerShaped>

        <StyledVectorOutline />
        <StyledVectorFilled />
      </Wrapper>

      <SectionNext>
        <Grid>
          <TextIcon
            vertical
            align="center"
            icon={<IconGlobe />}
            title={
              <Title align="center" textStyle="h2">
                150k+
              </Title>
            }
            text={
              <SectionEyebrow align="center" width={100}>
                WEBSITES CREATED
              </SectionEyebrow>
            }
          />
          <TextIcon
            vertical
            align="center"
            icon={<IconRocket />}
            title={
              <Title align="center" textStyle="h2">
                2016
              </Title>
            }
            text={
              <SectionEyebrow align="center" width={100}>
                B12 LAUNCHED
              </SectionEyebrow>
            }
          />
          <TextIcon
            vertical
            align="center"
            icon={<IconPeople />}
            title={
              <Title align="center" textStyle="h2">
                60+
              </Title>
            }
            text={<SectionEyebrow width={100}>TEAM MEMBERS</SectionEyebrow>}
          />
        </Grid>
        <TeamPhotos>
          <StaticImage
            src="../images/team-1.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={650}
            quality={80}
          />
          <StaticImage
            src="../images/team-7.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={300}
            height={300}
            quality={80}
          />
          <StaticImage
            src="../images/team-10.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={300}
            height={300}
            quality={80}
          />
          <StaticImage
            src="../images/team-6.jpg"
            alt="B12 Team"
            placeholder="blurred"
            width={650}
            quality={80}
          />
        </TeamPhotos>
      </SectionNext>

      <CtaSectionBanner>
        <Title as="h3" light align="center">
          Open positions
        </Title>
        <Text light align="center">
          B12 is a safe place for human beings. We particularly encourage you to apply if you
          identify as a woman, are a person of color or other underrepresented minority, or are a
          member of the LGBTQIA+ community. Some candidates may also see a job requirements list and
          feel discouraged because they don’t match all the items. Please apply anyway: there’s a
          good chance you’re more wonderful than you think you are.
        </Text>
        <Button
          as="anchor"
          variant="primary"
          to="https://boards.greenhouse.io/b12#.WTmRoRPytTb"
          label="View open positions"
        />
      </CtaSectionBanner>
    </LayoutMain>
  )
}

export default CareersPage

export const Head = () => (
  <SEO
    pageTitle="Careers"
    pageDescription="We help businesses thrive online. AI web design + experts launch professional websites with powerful client engagement and revenue tools."
  />
)
