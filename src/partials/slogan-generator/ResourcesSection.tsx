import styled from '@emotion/styled'
import { theme } from '../../assets/theme'
import Title from '../../components/title/Title'
import Resource from '../text-generators-partials/Resource'
import ItemsWrapper from '../../components/items-wrapper/ItemsWrapper'
import { StaticImage } from 'gatsby-plugin-image'
import BackgroundHills from '../../components/background-vectors/BackgroundHills'
import SectionNext from '../../components/section-next/SectionNext'

const StyledTitle = styled(Title)`
  margin: 0 0 40px;
`

const ResourcesSection = () => {
  return (
    <SectionNext bg={theme.colors.brand.accentDarkest} directChildren={<BackgroundHills />}>
      <StyledTitle light>Resources to help inspire new slogan ideas </StyledTitle>
      <ItemsWrapper gap="40px" itemsNum={3}>
        <Resource
          title="Support to scale your business"
          link="https://www.b12.io/resource-center/content-creation/100-effective-company-slogans-for-inspiration-in-2020.html"
          image={
            <StaticImage
              src="./images/typingHands.png"
              alt="Support to scale your business"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="Why an effective slogan is so important for your business"
          link="https://www.b12.io/l/14/why-an-effective-slogan-is-so-important-for-your-business"
          image={
            <StaticImage
              src="./images/gesticulatingHands.png"
              alt="Why an effective slogan is so important for your business"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="How to build a brand | B12"
          link="https://www.b12.io/resource-center/small-business-basics/how-to-build-a-brand.html"
          image={
            <StaticImage
              src="./images/writingDownHands.png"
              alt="How to build a brand | B12"
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
