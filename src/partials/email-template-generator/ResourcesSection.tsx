import styled from '@emotion/styled'
import { theme } from '../../assets/theme'
import Title from '../../components/title/Title'
import ItemsWrapper from '../../components/items-wrapper/ItemsWrapper'
import { StaticImage } from 'gatsby-plugin-image'
import BackgroundHills from '../../components/background-vectors/BackgroundHills'
import SectionNext from '../../components/section-next/SectionNext'
import Resource from '../text-generators-partials/Resource'

const StyledTitle = styled(Title)`
  margin: 0 0 40px;
`

const ResourcesSection = () => {
  return (
    <SectionNext bg={theme.colors.brand.accentDarkest} directChildren={<BackgroundHills />}>
      <StyledTitle light>Resources to help inspire your emails</StyledTitle>
      <ItemsWrapper gap="40px" itemsNum={3}>
        <Resource
          title="16 engagement-optimizing newsletter ideas for your customers"
          link="https://www.b12.io/resource-center/content-creation/business/client-engagement-tools/email-newsletters/16-engagement-optimizing-newsletter-ideas-for-your-customers"
          image={
            <StaticImage
              src="../slogan-generator/images/typingHands.png"
              alt="16 engagement-optimizing newsletter ideas for your customers"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="Your guide to writing perfect confirmation emails"
          link="https://www.b12.io/resource-center/content-creation/writing-the-perfect-confirmation-email-in-2020.html"
          image={
            <StaticImage
              src="../slogan-generator/images/gesticulatingHands.png"
              alt="Your guide to writing perfect confirmation emails"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="What to say instead of “I haven't heard from you” in a prospecting email"
          link="https://www.b12.io/resource-center/email-automation/why-you-should-not-say-i-havent-heard-from-you-in-an-email"
          image={
            <StaticImage
              src="../slogan-generator/images/writingDownHands.png"
              alt="What to say instead of “I haven't heard from you” in a prospecting email"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
      </ItemsWrapper>
    </SectionNext>
  )
}

export default ResourcesSection
