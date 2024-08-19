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
import IconComment from '../../images/icons/comment.inline.svg'
import IconIdeaBulb from '../../images/icons/simple.inline.svg'
import IconCredible from '../../images/icons/credible.inline.svg'
import IconHeart from '../../images/icons/heart.inline.svg'
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

const HowToGrid = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">How to write creative and engaging captions</Title>
        <Subtitle>
          The best social media copy inspires readers to engage further, driving them to read your
          Instagram bio, hit the follow button, or share the post with a friend. They may even visit
          your website, read your blog, or sign up for your email newsletter.
        </Subtitle>
        <Subtitle>
          Include the following caption elements to encourage engagement and maximize each social
          post’s performance.
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Keep brand voice consistent"
          text="Pick a tone of voice that accurately reflects your brand and maintain it across all social accounts and captions. Good captions display some personality, showing followers you aren’t identical to every other company in your industry.  "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconHeart />}
        />
        <TextIcon
          title="Offer value"
          text="Cut through the noise on Instagram, Facebook, and Twitter by offering your audience something of value, like a special offer, free resources, or information they'll find useful."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCredible />}
        />
        <TextIcon
          title="Start strong"
          text="Most people won’t read your entire caption, so start with the most compelling information. Since Instagram limits the characters displayed in the feed, your caption must command attention from the first word."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Craft a narrative"
          text="Bring your company, products, and services to life by sharing a story or deeper meaning. The perfect captions are sincere, relatable, and evoke emotion. Captivate your audience so they want to learn more."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconComment />}
        />
        <TextIcon
          title="Include a call to action"
          text="Always provide a next step for readers — whether it’s to comment below, sign up for your newsletter, or take advantage of a promotion. Give them a straightforward way to take action, and you're more likely to gain followers, shares, and even website visits."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconIdeaBulb />}
        />
      </Items>
    </SectionNext>
  )
}

export default HowToGrid
