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
      <StyledTitle light>Resources to improve your social media posts</StyledTitle>
      <ItemsWrapper gap="40px" itemsNum={3}>
        <Resource
          title="The ultimate guide to succeeding on Instagram"
          link="https://www.b12.io/resource-center/traffic-generation/the-ultimate-guide-to-succeeding-on-instagram"
          image={
            <StaticImage
              src="../slogan-generator/images/typingHands.png"
              alt="The ultimate guide to succeeding on Instagram"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="Understanding Instagram algorithms: Are Instagram Story views ranked based on your likes?"
          link="https://www.b12.io/resource-center/traffic-generation/understanding-instagram-algorithms-are-story-views-ranked-based-on-your-likes.html"
          image={
            <StaticImage
              src="../slogan-generator/images/gesticulatingHands.png"
              alt="Understanding Instagram algorithms: Are Instagram Story views ranked based on your likes?"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="A guide to LinkedIn advertising costs + beginner tips"
          link="https://www.b12.io/resource-center/traffic-generation/the-2021-guide-to-linkedin-advertising-costs-beginner-tips.html"
          image={
            <StaticImage
              src="../slogan-generator/images/writingDownHands.png"
              alt="A guide to LinkedIn advertising costs + beginner tips"
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
