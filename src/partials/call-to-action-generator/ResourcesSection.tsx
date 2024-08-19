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
      <StyledTitle light>Resources to help boost click-through rates and conversions</StyledTitle>
      <ItemsWrapper gap="40px" itemsNum={3}>
        <Resource
          title="Clever call-to-action examples that guarantee clicks in 2023"
          link="https://www.b12.io/resource-center/traffic-generation/clever-call-to-action-examples-that-guarantee-clicks-in-2020.html"
          image={
            <StaticImage
              src="../slogan-generator/images/typingHands.png"
              alt="Clever call-to-action examples that guarantee clicks in 2023"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="Everything you need to know about cost-per-action advertising"
          link="https://www.b12.io/resource-center/traffic-generation/cost-per-action-advertising-guide.html"
          image={
            <StaticImage
              src="../slogan-generator/images/gesticulatingHands.png"
              alt="Everything you need to know about cost-per-action advertising"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="How to create a landing page"
          link="https://www.b12.io/resource-center/website-basics/how-to-create-a-landing-page.html"
          image={
            <StaticImage
              src="../slogan-generator/images/writingDownHands.png"
              alt="How to create a landing page"
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
