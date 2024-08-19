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
          title="100+ effective company slogans for inspiration in 2023"
          link="https://www.b12.io/resource-center/content-creation/100-effective-company-slogans-for-inspiration-in-2020.html"
          image={
            <StaticImage
              src="../slogan-generator/images/typingHands.png"
              alt="100+ effective company slogans for inspiration in 2023"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="Our best tips for coming up with domain name ideas"
          link="https://www.b12.io/resource-center/website-basics/our-best-tips-for-coming-up-with-domain-name-ideas.html"
          image={
            <StaticImage
              src="../slogan-generator/images/gesticulatingHands.png"
              alt="Our best tips for coming up with domain name ideas"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="Logo design principles that seamlessly match your brand"
          link="https://www.b12.io/resource-center/website-design/logo-design-principles-that-appeal-to-customers-seamlessly-match-your-website-s-branding.html"
          image={
            <StaticImage
              src="../slogan-generator/images/writingDownHands.png"
              alt="Logo design principles that seamlessly match your brand"
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
