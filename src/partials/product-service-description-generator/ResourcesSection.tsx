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
      <StyledTitle light>Resources to help sell your products and services online</StyledTitle>
      <ItemsWrapper gap="40px" itemsNum={3}>
        <Resource
          title="Guide to writing compelling product and service descriptions"
          link="https://www.b12.io/resource-center/content-creation/a-guide-to-writing-compelling-product-and-service-descriptions.html"
          image={
            <StaticImage
              src="../slogan-generator/images/typingHands.png"
              alt="Guide to writing compelling product and service descriptions"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        ></Resource>
        <Resource
          title="How to sell services online as a professional service provider"
          link="https://www.b12.io/resource-center/website-conversion/how-to-sell-services-online.html"
          image={
            <StaticImage
              src="../slogan-generator/images/gesticulatingHands.png"
              alt="How to sell services online as a professional service provider"
              placeholder="blurred"
              layout="fullWidth"
            />
          }
        />
        <Resource
          title="10 ways to promote your new product or service"
          link="https://www.b12.io/resource-center/traffic-generation/10-ways-to-promote-a-new-product-or-service.html"
          image={
            <StaticImage
              src="../slogan-generator/images/writingDownHands.png"
              alt="10 ways to promote your new product or service"
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
