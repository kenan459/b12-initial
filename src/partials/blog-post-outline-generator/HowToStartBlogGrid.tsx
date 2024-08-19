import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

// Components
import TextIcon from '../../components/text-icon/TextIcon'
import iconMotionEffectPopUp from '../../components/text-icon/iconMotionEffectPopUp'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import Title from '../../components/title/Title'

// Images
import IconRocket from '../../images/icons/rocket.inline.svg'
import Subtitle from '../../components/subtitle/Subtitle'
import SectionNext from '../../components/section-next/SectionNext'

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${mq['sm']} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq['lg']} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const HowToStartBlogGrid = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">How to start a small business blog</Title>
        <Subtitle>
          First time setting up a blog? Follow our step-by-step guide to get it off the ground and
          attract potential clients.
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Identify your niche"
          text="With more than 600 million blogs online, picking a niche can make you stand out and build an audience. To find your niche, brainstorm several topics based on your passions, expertise, and what your audience finds compelling. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Choose a design template"
          text="Your blog's layout, color scheme, and font styles can all impact a visitor's impression of your company and if they stay on your site. Your website builder should offer a range of templates to choose from — look for one that’s easy to read and navigate, mobile-friendly, loads fast, and isn't cluttered."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Pick your blogging platform"
          text="Your new blog needs a platform to power it. Look for one that’s simple to set up, offers customization, and doesn’t require any coding. We recommend using a tool like B12 to centralize your website, blog, contact manager, and more. You can even have professional copywriters create SEO blog content for you each month. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Select a domain and host"
          text="Most companies integrate their blog with their website, which usually eliminates the need for a separate custom domain and blog hosting site. Keeping your blog on your business website offers visitors a consistent experience and helps boost your site's SEO authority."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Develop your content strategy"
          text="A successful content marketing strategy starts with having a plan. Blogging 1-2 times each week can make a difference in your ability to generate brand awareness and target winnable SEO keywords."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
      </Items>
    </SectionNext>
  )
}

export default HowToStartBlogGrid
