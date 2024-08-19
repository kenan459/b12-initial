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
      <StyledTitle light>Resources to generate blog ideas</StyledTitle>
      <ItemsWrapper gap="40px" itemsNum={3}>
        <Resource
          title="Here’s all you need to know about starting a blog in 2022"
          link="https://www.b12.io/resource-center/content-creation/here-s-all-you-need-to-know-about-starting-a-blog-in-2021.html"
          image={
            <StaticImage
              src="../slogan-generator/images/typingHands.png"
              alt="Here’s all you need to know about starting a blog in 2022"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="How to launch and promote a professional blog"
          link="https://www.b12.io/resource-center/content-creation/how-to-promote-your-blog.html"
          image={
            <StaticImage
              src="../slogan-generator/images/gesticulatingHands.png"
              alt="How to launch and promote a professional blog"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="Why service businesses should invest in content marketing"
          link="https://www.b12.io/resource-center/content-creation/content-marketing-for-professional-services.html"
          image={
            <StaticImage
              src="../slogan-generator/images/writingDownHands.png"
              alt="Why service businesses should invest in content marketing"
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
